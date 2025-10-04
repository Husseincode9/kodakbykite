"use client";

export default function MerchPage() {
  return (
    <main style={{ 
      padding: "2rem 1rem", 
      backgroundColor: "#000", 
      color: "#fff", 
      minHeight: "100vh", 
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
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
          👕
        </div>
        <h1 style={{
          fontSize: "clamp(2rem, 5vw, 2.5rem)",
          fontWeight: 900,
          color: "#FFD700",
          marginBottom: "1rem",
          textShadow: "2px 2px 4px rgba(0,0,0,0.8)"
        }}>
          Under Maintenance
        </h1>
        <p style={{
          fontSize: "clamp(1rem, 3vw, 1.2rem)",
          color: "#c7c7c7",
          marginBottom: "2rem",
          lineHeight: "1.6"
        }}>
          We're currently working on our Merch Collection. 
          New designs and products will be available soon!
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
            fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
            margin: 0,
            fontWeight: "600"
          }}>
            🎨 Coming soon: Premium quality shirts, hoodies, and accessories featuring your favorite travel moments!
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
            fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
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
        <style jsx>{`
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
        `}</style>
      </div>
    </main>
  );
}
