"use client";

import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <style jsx>{`
        .logo-link:hover {
          transform: scale(1.05);
        }
        .nav-link:hover {
          color: #FFD700 !important;
          border-color: #FFD700 !important;
          background-color: rgba(255, 215, 0, 0.1) !important;
        }
        .desktop-links { display: flex; }
        .mobile-toggle { display: none; }
        .mobile-container { display: none; }
        @media (max-width: 768px) {
          nav.nav-root { padding: 0.75rem 1rem !important; }
          .inner { padding: 0 0.5rem !important; }
          .desktop-links { display: none !important; }
          .mobile-toggle { display: inline-flex !important; }
          .mobile-container { display: block !important; }
        }
      `}</style>
      <nav className="nav-root" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '2px solid #FFD700',
        padding: '1rem 2rem'
      }}>
        <div className="inner" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          padding: '0 2rem',
          position: 'relative'
        }}>
          {/* Logo */}
          <a href="/" style={{
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          className="logo-link">
            <div style={{
              fontSize: '2rem',
              fontWeight: '900',
              color: '#DC143C',
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              lineHeight: '0.9',
              WebkitTextStroke: '1px rgba(0,0,0,0.3)',
              filter: 'drop-shadow(0 0 10px rgba(220, 20, 60, 0.3))'
            }}>
              KODAK
            </div>
            <div style={{
              fontSize: '0.8rem',
              fontWeight: '600',
              color: '#FFFFFF',
              textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginTop: '-2px'
            }}>
              BY KITE
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="desktop-links" style={{
            alignItems: 'center',
            gap: '3rem'
          }}>
            <a href="/calendar" style={{
              color: '#FFFFFF',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              transition: 'all 0.3s ease',
              border: '2px solid transparent',
              cursor: 'pointer'
            }}
            className="nav-link">
              CALENDAR
            </a>
            <a 
              href="#" 
              onClick={(e) => e.preventDefault()}
              style={{
                color: '#666666',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '600',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                border: '2px solid #333333',
                cursor: 'not-allowed',
                position: 'relative'
              }}
              title="Under Maintenance - Coming Soon!"
            >
              POST CARDS
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                background: '#FFD700',
                color: '#000',
                fontSize: '0.7rem',
                fontWeight: '700',
                padding: '0.2rem 0.4rem',
                borderRadius: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                🔧
              </span>
            </a>
            <a 
              href="#" 
              onClick={(e) => e.preventDefault()}
              style={{
                color: '#666666',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '600',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                border: '2px solid #333333',
                cursor: 'not-allowed',
                position: 'relative'
              }}
              title="Under Maintenance - Coming Soon!"
            >
              MERCH
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                background: '#FFD700',
                color: '#000',
                fontSize: '0.7rem',
                fontWeight: '700',
                padding: '0.2rem 0.4rem',
                borderRadius: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                🔧
              </span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((v) => !v)}
            className="mobile-toggle"
            style={{
              background: 'transparent',
              color: '#FFFFFF',
              border: '2px solid #333333',
              padding: '0.35rem 0.6rem',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <span style={{ fontSize: '1.1rem', lineHeight: 1 }}>☰</span>
          </button>
        </div>

        {/* Mobile dropdown container (full-width under bar) */}
        {isMenuOpen && (
          <div className="mobile-container" style={{
            backgroundColor: 'rgba(0, 0, 0, 0.98)',
            borderTop: '1px solid #333333',
            borderBottom: '2px solid #FFD700',
            padding: '0.5rem 1rem'
          }}>
            <a
              href="/calendar"
              onClick={() => setIsMenuOpen(false)}
              style={{
                display: 'block',
                color: '#FFFFFF',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                padding: '0.75rem 0.5rem',
                borderRadius: '0.5rem',
                transition: 'all 0.2s ease',
                border: '2px solid transparent',
                marginBottom: '0.25rem'
              }}
              className="nav-link"
            >
              CALENDAR
            </a>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); }}
              style={{
                display: 'block',
                color: '#666666',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                padding: '0.75rem 0.5rem',
                borderRadius: '0.5rem',
                border: '2px solid #333333',
                cursor: 'not-allowed',
                position: 'relative',
                marginBottom: '0.25rem'
              }}
              title="Under Maintenance - Coming Soon!"
            >
              POST CARDS 🔧
            </a>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); }}
              style={{
                display: 'block',
                color: '#666666',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                padding: '0.75rem 0.5rem',
                borderRadius: '0.5rem',
                border: '2px solid #333333',
                cursor: 'not-allowed',
                position: 'relative'
              }}
              title="Under Maintenance - Coming Soon!"
            >
              MERCH 🔧
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
