"use client";

export default function BackButton() {
  return (
    <a href="/" style={{ 
      color: "#FFD700", 
      textDecoration: "none",
      fontSize: "1.1rem",
      fontWeight: "600",
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5rem",
      marginBottom: "2rem",
      padding: "0.5rem 1rem",
      border: "2px solid #FFD700",
      borderRadius: "0.5rem",
      transition: "all 0.3s ease"
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = "rgba(255, 215, 0, 0.1)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = "transparent";
    }}>
      ← Back to Home
    </a>
  );
}
