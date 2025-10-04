"use client";
import { Suspense } from "react";
import Places from "./Places";

export default function PlacesWrapper() {
  return (
    <Suspense fallback={
      <section style={{ 
        padding: '4rem 0.5rem', 
        backgroundColor: '#000000', 
        color: '#FFFFFF',
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          width: "50px",
          height: "50px",
          border: "4px solid #333333",
          borderTop: "4px solid #FFD700",
          borderRadius: "50%",
          animation: "spin 1s linear infinite"
        }}></div>
        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </section>
    }>
      <Places />
    </Suspense>
  );
}
