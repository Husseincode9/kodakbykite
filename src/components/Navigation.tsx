"use client";

export default function Navigation() {
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
      `}</style>
      <nav style={{
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
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: '0 2rem'
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

        {/* Navigation Links */}
        <div style={{
          display: 'flex',
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
        <a href="/postcards" style={{
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
          POST CARDS
        </a>
        <a href="/merch" style={{
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
          MERCH
        </a>
        </div>
      </div>
    </nav>
    </>
  );
}
