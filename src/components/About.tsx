export default function About() {
    return (
      <section style={{ padding: '4rem 1.5rem', backgroundColor: '#000000', textAlign: 'center', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
        {/* Bold, solid Kodak-style blotches (non-blurry) */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          {/* Large left sweep */}
          <div style={{ position: 'absolute', left: '-15%', top: '10%', width: '60%', height: '60%', backgroundColor: '#FFD700', borderRadius: '50% 48% 52% 50% / 62% 60% 42% 40%', transform: 'rotate(-14deg)', opacity: 0.9 }} />
          {/* Right bottom sweep */}
          <div style={{ position: 'absolute', right: '-12%', bottom: '8%', width: '44%', height: '48%', backgroundColor: '#FFD700', borderRadius: '55% 45% 50% 45% / 60% 55% 45% 40%', transform: 'rotate(18deg)', opacity: 0.85 }} />
          {/* Red accent block */}
          <div style={{ position: 'absolute', right: '16%', top: '28%', width: '22%', height: '26%', backgroundColor: '#DC143C', borderRadius: '52% 48% 50% 50% / 58% 58% 42% 42%', transform: 'rotate(32deg)', opacity: 0.9 }} />
        </div>

        <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1.5rem', letterSpacing: '0.02em' }}>About Me</h2>
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <div style={{ 
            width: '10rem', 
            height: '10rem', 
            margin: '0 auto 1.5rem', 
            borderRadius: '50%', 
            border: '4px solid #FFD700', 
            overflow: 'hidden',
            boxShadow: '0 0 24px rgba(255, 215, 0, 0.35)'
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
          <div style={{ textAlign: 'center', lineHeight: '2', fontSize: '1.125rem' }}>
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
  