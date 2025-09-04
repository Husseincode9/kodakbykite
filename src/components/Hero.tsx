"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Main black background */}
      <div style={{ position: 'absolute', inset: 0, backgroundColor: '#000000' }}></div>
      
      {/* Large curved yellow section (left side) */}
      <div style={{
        position: 'absolute',
        left: '-15%',
        top: '20%',
        width: '60%',
        height: '60%',
        backgroundColor: '#FFD700',
        borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
        transform: 'rotate(-15deg)',
        opacity: 0.9
      }}></div>
      
      {/* Medium curved yellow section (right side) */}
      <div style={{
        position: 'absolute',
        right: '-10%',
        bottom: '15%',
        width: '40%',
        height: '45%',
        backgroundColor: '#FFD700',
        borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
        transform: 'rotate(25deg)',
        opacity: 0.8
      }}></div>
      
      {/* Small red accent section */}
      <div style={{
        position: 'absolute',
        right: '20%',
        top: '30%',
        width: '20%',
        height: '25%',
        backgroundColor: '#DC143C',
        borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
        transform: 'rotate(45deg)',
        opacity: 0.9
      }}></div>
      
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <h1 style={{ 
          fontSize: '5rem', 
          fontWeight: '900', 
          color: '#DC143C', 
          textShadow: '3px 3px 6px rgba(0,0,0,0.8)',
          marginBottom: '1rem',
          fontFamily: '"Arial Black", "Helvetica Black", "Impact", sans-serif',
          letterSpacing: '0.02em',
          textTransform: 'uppercase',
          lineHeight: '0.9',
          WebkitTextStroke: '1px rgba(0,0,0,0.3)',
          filter: 'drop-shadow(0 0 10px rgba(220, 20, 60, 0.3))'
        }}>
          KODAK
        </h1>
        <h2 style={{ 
          fontSize: '2rem', 
          fontWeight: '600', 
          color: '#FFFFFF', 
          textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
          marginBottom: '1rem',
          fontFamily: '"Arial Black", "Helvetica Black", sans-serif',
          letterSpacing: '0.1em',
          textTransform: 'uppercase'
        }}>
          BY KITE
        </h2>
        <p style={{ 
          fontSize: '1.5rem', 
          color: '#FFFFFF',
          fontWeight: '500',
          textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
          fontFamily: '"Kodak", "Kodak Condensed", "Kodak Extended", "Arial Black", "Helvetica Black", sans-serif',
          letterSpacing: '0.02em'
        }}>
          No preview. No delete. Just in the moment.
        </p>
        
        {/* Camera lens effect */}
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          backgroundColor: '#000000',
          margin: '2rem auto 0',
          border: '4px solid #FFD700',
          boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)',
          position: 'relative'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: '#333333',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}></div>
        </div>
      </div>
    </section>
  );
}
