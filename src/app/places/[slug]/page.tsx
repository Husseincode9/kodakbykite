"use client";
import { useState, useEffect, use } from "react";
import ImageModal from "./ImageModal";

export default function PlaceGallery({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [files, setFiles] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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

  // Handle keyboard navigation
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
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
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
    <main style={{ padding: "2rem 1rem", backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <h1 style={{ 
          fontSize: "3rem", 
          fontWeight: 900, 
          margin: "1rem 0 2rem", 
          letterSpacing: "0.02em",
          color: "#DC143C",
          textAlign: "center",
          textShadow: "2px 2px 4px rgba(0,0,0,0.7)"
        }}>
          {title}
        </h1>
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
            <p style={{ color: "#c7c7c7", fontSize: "1.2rem" }}>Loading images...</p>
            <style jsx>{`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        ) : files.length === 0 ? (
          <p style={{ color: "#c7c7c7", textAlign: "center", fontSize: "1.2rem" }}>
            No images found. Add photos to <code style={{ color: "#FFD700" }}>public/places/{slug}</code> (jpg, png, webp, gif) and refresh.
          </p>
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}>
            {files.map((file, index) => (
              <div 
                key={file} 
                style={{ 
                  background: "#0a0a0a", 
                  border: "2px solid #1f1f1f", 
                  borderRadius: "15px", 
                  padding: "12px",
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
                    height: "300px", 
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

      {/* Single Modal for all images */}
      {isModalOpen && files.length > 0 && (
        <div 
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.95)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "2rem"
          }}
          onClick={() => setIsModalOpen(false)}
        >
          <div style={{ 
            position: "relative", 
            width: "100vw", 
            height: "100vh", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            padding: "4rem 6rem 8rem 6rem"
          }}>
            <img
              src={`/places/${slug}/${files[currentImageIndex]}`}
              alt={`${title} - ${files[currentImageIndex]}`}
              style={{
                maxWidth: "calc(100vw - 12rem)",
                maxHeight: "calc(100vh - 12rem)",
                objectFit: "contain",
                borderRadius: "10px",
                boxShadow: "0 0 50px rgba(255, 215, 0, 0.3)",
                display: "block"
              }}
            />
            
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                position: "absolute",
                top: "-50px",
                right: "0",
                background: "rgba(0, 0, 0, 0.8)",
                color: "#FFD700",
                border: "2px solid #FFD700",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                fontSize: "1.5rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              ×
            </button>

            {/* Navigation arrows */}
            {files.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavigate('prev');
                  }}
                  style={{
                    position: "absolute",
                    left: "1rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "rgba(0, 0, 0, 0.8)",
                    color: "#FFD700",
                    border: "2px solid #FFD700",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    fontSize: "1.5rem",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
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
                    right: "1rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "rgba(0, 0, 0, 0.8)",
                    color: "#FFD700",
                    border: "2px solid #FFD700",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    fontSize: "1.5rem",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  →
                </button>
              </>
            )}

            {/* Image counter */}
            {files.length > 1 && (
              <div style={{
                position: "absolute",
                bottom: "1rem",
                left: "50%",
                transform: "translateX(-50%)",
                background: "rgba(0, 0, 0, 0.8)",
                color: "#FFD700",
                padding: "0.5rem 1rem",
                borderRadius: "20px",
                fontSize: "0.9rem",
                fontWeight: "600"
              }}>
                {currentImageIndex + 1} / {files.length}
              </div>
            )}

            {/* Instructions */}
            <div style={{
              position: "absolute",
              bottom: "3.5rem",
              left: "50%",
              transform: "translateX(-50%)",
              color: "#FFFFFF",
              fontSize: "0.8rem",
              textAlign: "center",
              opacity: 0.7
            }}>
              Use ← → arrow keys to navigate • ESC to close
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
