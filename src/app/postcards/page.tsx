"use client";
import { useState, useEffect } from "react";

export default function PostcardsPage() {
  const [allImages, setAllImages] = useState<Array<{
    src: string;
    alt: string;
    title: string;
    location: string;
    slug: string;
  }>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Fetch all images from all places
    setIsLoading(true);
    fetch('/api/postcards')
      .then(res => res.json())
      .then(data => {
        setAllImages(data.images || []);
        setIsLoading(false);
      })
      .catch(() => {
        setAllImages([]);
        setIsLoading(false);
      });
  }, []);

  const toggleSection = (location: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [location]: !prev[location]
    }));
  };

  // Group images by location
  const groupedImages = allImages.reduce((acc, image) => {
    if (!acc[image.location]) {
      acc[image.location] = [];
    }
    acc[image.location].push(image);
    return acc;
  }, {} as Record<string, typeof allImages>);

  const locationFlags: Record<string, string> = {
    'Switzerland': '🇨🇭',
    'France': '🇫🇷',
    'Morocco': '🇲🇦',
    'Kenya': '🇰🇪'
  };

  return (
    <main style={{ padding: "2rem 1rem", backgroundColor: "#000", color: "#fff", minHeight: "100vh", position: "relative" }}>
      {/* Maintenance Mode Overlay */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.95)",
        backdropFilter: "blur(10px)",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem"
      }}>
        <div style={{
          background: "linear-gradient(135deg, #111111, #0a0a0a)",
          borderRadius: "20px",
          border: "3px solid #FFD700",
          padding: "3rem",
          textAlign: "center",
          maxWidth: "600px",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.8)"
        }}>
          <div style={{
            fontSize: "4rem",
            marginBottom: "1rem",
            animation: "pulse 2s infinite"
          }}>
            🔧
          </div>
          <h1 style={{
            fontSize: "2.5rem",
            fontWeight: 900,
            color: "#FFD700",
            marginBottom: "1rem",
            textShadow: "2px 2px 4px rgba(0,0,0,0.8)"
          }}>
            Under Maintenance
          </h1>
          <p style={{
            fontSize: "1.2rem",
            color: "#c7c7c7",
            marginBottom: "2rem",
            lineHeight: "1.6"
          }}>
            We're currently working on improving the Postcards Collection. 
            This section will be back online soon with exciting new features!
          </p>
          <div style={{
            background: "rgba(255, 215, 0, 0.1)",
            border: "1px solid #FFD700",
            borderRadius: "10px",
            padding: "1rem",
            marginBottom: "2rem"
          }}>
            <p style={{
              color: "#FFD700",
              fontSize: "1rem",
              margin: 0,
              fontWeight: "600"
            }}>
              🚀 New features coming: Enhanced gallery, better filtering, and improved ordering system!
            </p>
          </div>
          <a 
            href="/"
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #FFD700, #FFA500)",
              color: "#000",
              border: "none",
              borderRadius: "25px",
              padding: "1rem 2rem",
              fontSize: "1.1rem",
              fontWeight: "700",
              cursor: "pointer",
              transition: "all 0.3s ease",
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              textDecoration: "none"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(255, 215, 0, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Back to Home
          </a>
        </div>
        <style jsx>{`
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
        `}</style>
      </div>

      <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
        <h1 style={{ 
          fontSize: "3rem", 
          fontWeight: 900, 
          margin: "1rem 0 2rem", 
          letterSpacing: "0.02em",
          color: "#DC143C",
          textAlign: "center",
          textShadow: "2px 2px 4px rgba(0,0,0,0.7)"
        }}>
          Postcards Collection
        </h1>
        
        <p style={{ 
          fontSize: "1.2rem", 
          color: "#c7c7c7", 
          textAlign: "center", 
          marginBottom: "3rem",
          maxWidth: "600px",
          margin: "0 auto 3rem"
        }}>
          Transform your favorite travel memories into beautiful postcards. 
          Each postcard is printed on premium quality paper and ready to send to your loved ones.
        </p>

        {isLoading ? (
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            height: "400px",
            flexDirection: "column"
          }}>
            <div style={{
              width: "50px",
              height: "50px",
              border: "4px solid #333333",
              borderTop: "4px solid #FFD700",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
              marginBottom: "1rem"
            }}></div>
            <p style={{ color: "#c7c7c7", fontSize: "1.2rem" }}>Loading postcards...</p>
            <style jsx>{`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {Object.entries(groupedImages).map(([location, images]) => (
              <div key={location} style={{
                background: "linear-gradient(135deg, #111111, #0a0a0a)",
                borderRadius: "15px",
                border: "2px solid #1f1f1f",
                overflow: "hidden"
              }}>
                {/* Location Header */}
                <div 
                  style={{
                    padding: "1.5rem",
                    background: "linear-gradient(135deg, #1a1a1a, #0f0f0f)",
                    borderBottom: "2px solid #FFD700",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                  onClick={() => toggleSection(location)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#2a2a2a";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "linear-gradient(135deg, #1a1a1a, #0f0f0f)";
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      <span style={{ fontSize: "2rem" }}>{locationFlags[location] || "🌍"}</span>
                      <h2 style={{
                        fontSize: "1.5rem",
                        fontWeight: "700",
                        color: "#FFD700",
                        margin: 0,
                        letterSpacing: "0.02em"
                      }}>
                        {location}
                      </h2>
                      <span style={{
                        background: "rgba(255, 215, 0, 0.2)",
                        color: "#FFD700",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "15px",
                        fontSize: "0.9rem",
                        fontWeight: "600"
                      }}>
                        {images.length} postcard{images.length !== 1 ? 's' : ''}
                      </span>
                    </div>
                    <div style={{
                      fontSize: "1.5rem",
                      color: "#FFD700",
                      transition: "transform 0.3s ease",
                      transform: expandedSections[location] ? "rotate(180deg)" : "rotate(0deg)"
                    }}>
                      ▼
                    </div>
                  </div>
                </div>

                {/* Images Grid */}
                {expandedSections[location] && (
                  <div style={{
                    padding: "2rem",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
                    gap: "2rem"
                  }}>
                    {images.map((image, index) => (
                      <div 
                        key={index}
                        style={{ 
                          background: "#0a0a0a", 
                          border: "2px solid #1f1f1f", 
                          borderRadius: "15px", 
                          padding: "1.5rem",
                          transition: "all 0.3s ease",
                          overflow: "hidden",
                          position: "relative"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
                          e.currentTarget.style.borderColor = "#FFD700";
                          e.currentTarget.style.boxShadow = "0 8px 25px rgba(255, 215, 0, 0.2)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0) scale(1)";
                          e.currentTarget.style.borderColor = "#1f1f1f";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          style={{ 
                            width: "100%", 
                            height: "300px", 
                            objectFit: "cover", 
                            borderRadius: "8px",
                            marginBottom: "1rem",
                            border: "2px solid #111111"
                          }}
                        />
                        
                        <div style={{ marginBottom: "1rem" }}>
                          <h3 style={{ 
                            fontSize: "1.25rem", 
                            fontWeight: 700, 
                            color: "#FFFFFF",
                            marginBottom: "0.5rem",
                            letterSpacing: "0.02em"
                          }}>
                            {image.title}
                          </h3>
                        </div>

                        <div style={{ 
                          display: "flex", 
                          justifyContent: "space-between", 
                          alignItems: "center",
                          marginTop: "auto"
                        }}>
                          <div style={{
                            fontSize: "1.5rem",
                            fontWeight: "700",
                            color: "#FFD700"
                          }}>
                            £5.99
                          </div>
                          
                          <button style={{
                            background: "linear-gradient(135deg, #FFD700, #FFA500)",
                            color: "#000",
                            border: "none",
                            borderRadius: "25px",
                            padding: "0.75rem 1.5rem",
                            fontSize: "1rem",
                            fontWeight: "600",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            textTransform: "uppercase",
                            letterSpacing: "0.02em"
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.05)";
                            e.currentTarget.style.boxShadow = "0 4px 15px rgba(255, 215, 0, 0.4)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                          >
                            Add to Cart
                          </button>
                        </div>

                        {/* Postcard badge */}
                        <div style={{
                          position: "absolute",
                          top: "1rem",
                          right: "1rem",
                          background: "rgba(220, 20, 60, 0.9)",
                          color: "#FFFFFF",
                          padding: "0.25rem 0.75rem",
                          borderRadius: "15px",
                          fontSize: "0.8rem",
                          fontWeight: "600",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em"
                        }}>
                          Postcard
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}
