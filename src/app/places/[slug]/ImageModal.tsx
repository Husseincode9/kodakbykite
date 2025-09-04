"use client";
import { useState, useEffect } from "react";

interface ImageModalProps {
  src: string;
  alt: string;
  title: string;
  allImages?: { src: string; alt: string; title: string }[];
  currentIndex?: number;
  onNavigate?: (direction: 'prev' | 'next') => void;
}

export default function ImageModal({ src, alt, title, allImages, currentIndex, onNavigate }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (event.key) {
        case 'Escape':
          setIsOpen(false);
          break;
        case 'ArrowLeft':
          if (onNavigate) onNavigate('prev');
          break;
        case 'ArrowRight':
          if (onNavigate) onNavigate('next');
          break;
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onNavigate]);

  return (
    <>
      <div 
        style={{ 
          background: "#0a0a0a", 
          border: "2px solid #1f1f1f", 
          borderRadius: "15px", 
          padding: "12px",
          cursor: "pointer",
          transition: "all 0.3s ease",
          overflow: "hidden"
        }}
        onClick={() => setIsOpen(true)}
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
          src={src}
          alt={alt}
          style={{ 
            width: "100%", 
            height: "300px", 
            objectFit: "cover", 
            borderRadius: "8px",
            transition: "transform 0.3s ease"
          }}
        />
      </div>

      {/* Full-size Image Modal */}
      {isOpen && (
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
          onClick={() => setIsOpen(false)}
        >
          <div style={{ position: "relative", maxWidth: "90vw", maxHeight: "90vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img
              src={src}
              alt="Full size"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                borderRadius: "10px",
                boxShadow: "0 0 50px rgba(255, 215, 0, 0.3)",
                display: "block"
              }}
            />
            
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
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
            {allImages && allImages.length > 1 && onNavigate && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigate('prev');
                  }}
                  style={{
                    position: "absolute",
                    left: "-60px",
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
                    onNavigate('next');
                  }}
                  style={{
                    position: "absolute",
                    right: "-60px",
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
            {allImages && allImages.length > 1 && currentIndex !== undefined && (
              <div style={{
                position: "absolute",
                bottom: "-40px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "rgba(0, 0, 0, 0.8)",
                color: "#FFD700",
                padding: "0.5rem 1rem",
                borderRadius: "20px",
                fontSize: "0.9rem",
                fontWeight: "600"
              }}>
                {currentIndex + 1} / {allImages.length}
              </div>
            )}

            {/* Instructions */}
            <div style={{
              position: "absolute",
              bottom: "-80px",
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
    </>
  );
}
