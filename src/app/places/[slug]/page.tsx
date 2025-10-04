"use client";
import { useState, useEffect, use } from "react";

export default function PlaceGallery({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [files, setFiles] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [fromCountry, setFromCountry] = useState<string | null>(null);

  // Get the 'from' parameter from URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const from = urlParams.get('from');
    setFromCountry(from);
  }, []);

  // Load files on client side
  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/places/${slug}`)
      .then(res => res.json())
      .then(data => {
        setFiles(data.files || []);
        setIsLoading(false);
      })
      .catch(() => {
        setFiles([]);
        setIsLoading(false);
      });
  }, [slug]);

  // Handle keyboard navigation and prevent body scroll
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isModalOpen) return;
      
      switch (event.key) {
        case 'Escape':
          setIsModalOpen(false);
          break;
        case 'ArrowLeft':
          // Left arrow: go to previous image, or stay on first image
          if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
          }
          break;
        case 'ArrowRight':
          // Right arrow: go to next image, or cycle back to first
          if (currentImageIndex < files.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
          } else {
            setCurrentImageIndex(0);
          }
          break;
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      // Restore body scroll when modal closes
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
    };
  }, [isModalOpen, currentImageIndex, files.length]);

  const title = slug.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const handleNavigate = (direction: 'prev' | 'next') => {
    if (files.length === 0) return;
    
    let newIndex;
    if (direction === 'prev') {
      // Left arrow: go to previous image, or stay on first image
      newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : 0;
    } else {
      // Right arrow: go to next image, or cycle back to first
      newIndex = currentImageIndex < files.length - 1 ? currentImageIndex + 1 : 0;
    }
    
    setCurrentImageIndex(newIndex);
  };

  const allImages = files.map(file => ({
    src: `/places/${slug}/${file}`,
    alt: `${title} - ${file}`,
    title: title
  }));

  return (
    <main style={{ 
      padding: "1rem 0.5rem", 
      backgroundColor: "#000", 
      color: "#fff", 
      minHeight: "100vh" 
    }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <h1 style={{ 
          fontSize: "clamp(2rem, 6vw, 3rem)", 
          fontWeight: 900, 
          margin: "1rem 0 1.5rem", 
          letterSpacing: "0.02em",
          color: "#DC143C",
          textAlign: "center",
          textShadow: "2px 2px 4px rgba(0,0,0,0.7)"
        }}>
          {title}
        </h1>
        
        {/* Back Button */}
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <a 
            href={fromCountry ? `/?country=${fromCountry}#places` : '/?country=switzerland#places'}
            style={{
              display: "inline-block",
              padding: "0.5rem 1rem",
              backgroundColor: "#FFD700",
              color: "#000",
              textDecoration: "none",
              borderRadius: "2rem",
              fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
              fontWeight: 600,
              border: "2px solid #FFD700",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(255, 215, 0, 0.3)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#000";
              e.currentTarget.style.color = "#FFD700";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(255, 215, 0, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#FFD700";
              e.currentTarget.style.color = "#000";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(255, 215, 0, 0.3)";
            }}
          >
            ← Back to {fromCountry ? fromCountry.charAt(0).toUpperCase() + fromCountry.slice(1) : 'Places'}
          </a>
        </div>
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
            <p style={{ color: "#c7c7c7", fontSize: "clamp(1rem, 3vw, 1.2rem)" }}>Loading images...</p>
            <style jsx>{`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        ) : files.length === 0 ? (
          <p style={{ 
            color: "#c7c7c7", 
            textAlign: "center", 
            fontSize: "clamp(1rem, 3vw, 1.2rem)",
            padding: "0 1rem"
          }}>
            No images found. Add photos to <code style={{ color: "#FFD700" }}>public/places/{slug}</code> (jpg, png, webp, gif) and refresh.
          </p>
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1rem",
          }}>
            {files.map((file, index) => (
              <div 
                key={file} 
                style={{ 
                  background: "#0a0a0a", 
                  border: "2px solid #1f1f1f", 
                  borderRadius: "15px", 
                  padding: "8px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  overflow: "hidden"
                }}
                onClick={() => handleImageClick(index)}
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
                  src={`/places/${slug}/${file}`}
                  alt={`${title} - ${file}`}
                  style={{ 
                    width: "100%", 
                    height: "clamp(200px, 40vw, 300px)", 
                    objectFit: "cover", 
                    borderRadius: "8px",
                    transition: "transform 0.3s ease"
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && files.length > 0 && (
        <div 
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            overflow: "auto",
            boxSizing: "border-box"
          }}
          onClick={() => setIsModalOpen(false)}
        >
          {/* Close button - top right */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(false);
            }}
            style={{
              position: "absolute",
              top: "2rem",
              right: "2rem",
              background: "#FFD700",
              color: "#000",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              cursor: "pointer",
              fontSize: "1.2rem",
              fontWeight: "bold"
            }}
          >
            ×
          </button>

          {/* Navigation arrows - outside image */}
          {files.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNavigate('prev');
                }}
                style={{
                  position: "absolute",
                  left: "2rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "#FFD700",
                  color: "#000",
                  border: "none",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  cursor: "pointer",
                  fontSize: "1.2rem",
                  fontWeight: "bold"
                }}
              >
                ←
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNavigate('next');
                }}
                style={{
                  position: "absolute",
                  right: "2rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "#FFD700",
                  color: "#000",
                  border: "none",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  cursor: "pointer",
                  fontSize: "1.2rem",
                  fontWeight: "bold"
                }}
              >
                →
              </button>
            </>
          )}

          {/* Image - centered */}
          <img
            src={`/places/${slug}/${files[currentImageIndex]}`}
            alt={`${title} - ${files[currentImageIndex]}`}
            style={{
              maxWidth: "70vw",
              maxHeight: "70vh",
              objectFit: "contain",
              borderRadius: "10px"
            }}
          />

          {/* Instructions - below image */}
          <div style={{
            marginTop: "2rem",
            color: "#FFFFFF",
            fontSize: "0.9rem",
            textAlign: "center",
            background: "rgba(0, 0, 0, 0.7)",
            padding: "0.5rem 1rem",
            borderRadius: "20px"
          }}>
            {files.length > 1 && (
              <div style={{ marginBottom: "0.5rem" }}>
                {currentImageIndex + 1} / {files.length}
              </div>
            )}
            Use ← → arrow keys to navigate • ESC to close
          </div>
        </div>
      )}
    </main>
  );
}
