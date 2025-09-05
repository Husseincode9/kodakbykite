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

  return (
    <main style={{ padding: "2rem 1rem", backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
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
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "2rem",
          }}>
            {allImages.map((image, index) => (
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
                <p style={{ 
                  fontSize: "1rem", 
                  color: "#c7c7c7",
                  marginBottom: "0.5rem"
                }}>
                  {image.location}
                </p>
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
    </main>
  );
}
