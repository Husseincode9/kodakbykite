export default function About() {
    return (
      <section style={{ padding: '4rem 1.5rem', backgroundColor: '#000000', textAlign: 'center', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
        {/* Bold, solid Kodak-style blotches (non-blurry) */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
          {/* Large left sweep - adjusted for mobile */}
          <div style={{ 
            position: 'absolute', 
            left: 'max(-20%, -100px)', 
            top: '5%', 
            width: 'min(60%, 300px)', 
            height: 'min(60%, 300px)', 
            backgroundColor: '#FFD700', 
            borderRadius: '50% 48% 52% 50% / 62% 60% 42% 40%', 
            transform: 'rotate(-14deg)', 
            opacity: 0.7 
          }} />
          {/* Right bottom sweep - adjusted for mobile */}
          <div style={{ 
            position: 'absolute', 
            right: 'max(-15%, -80px)', 
            bottom: '5%', 
            width: 'min(44%, 250px)', 
            height: 'min(48%, 250px)', 
            backgroundColor: '#FFD700', 
            borderRadius: '55% 45% 50% 45% / 60% 55% 45% 40%', 
            transform: 'rotate(18deg)', 
            opacity: 0.6 
          }} />
          {/* Red accent block - adjusted for mobile */}
          <div style={{ 
            position: 'absolute', 
            right: 'max(10%, 20px)', 
            top: '20%', 
            width: 'min(22%, 120px)', 
            height: 'min(26%, 120px)', 
            backgroundColor: '#DC143C', 
            borderRadius: '52% 48% 50% 50% / 58% 58% 42% 42%', 
            transform: 'rotate(32deg)', 
            opacity: 0.7 
          }} />
        </div>

        <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1.5rem', letterSpacing: '0.02em', position: 'relative', zIndex: 10 }}>About Me</h2>
        <div style={{ maxWidth: '48rem', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <div style={{ 
            width: '10rem', 
            height: '10rem', 
            margin: '0 auto 1.5rem', 
            borderRadius: '50%', 
            border: '4px solid #FFD700', 
            overflow: 'hidden',
            boxShadow: '0 0 24px rgba(255, 215, 0, 0.35)',
            position: 'relative',
            zIndex: 10
          }}>
            <img 
              src="/profile.jpg" 
              alt="Hussein - Kodak By Kite" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%'
              }}
            />
          </div>
          <div style={{ textAlign: 'center', lineHeight: '2', fontSize: '1.125rem', position: 'relative', zIndex: 10 }}>
            <p style={{ marginBottom: '1rem' }}>
              Hi. I'm Hussein. Welcome to <strong>Kodak By Kite</strong>.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              I travel the world with my disposable Kodak camera.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              No preview, no delete, just pure moments.
            </p>
          </div>
        </div>
      </section>
    );
  }
  