export default function About() {
    return (
      <section style={{ padding: '4rem 1.5rem', backgroundColor: '#111827', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>About Me</h2>
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <div style={{ 
            width: '10rem', 
            height: '10rem', 
            margin: '0 auto 1.5rem', 
            borderRadius: '50%', 
            border: '4px solid white', 
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
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
          <div style={{ textAlign: 'center', lineHeight: '2' }}>
            <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
              Hi. I'm Hussein. Welcome to <strong>Kodak By Kite</strong>.
            </p>
            <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
              I travel the world with my disposable Kodak camera.
            </p>
            <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
              No preview, no delete, just pure moments.
            </p>
          </div>
        </div>
      </section>
    );
  }
  