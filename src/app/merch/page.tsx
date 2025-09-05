"use client";

export default function MerchPage() {

  return (
    <main style={{ padding: "2rem 1rem", backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
      <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
        <h1 style={{ 
          fontSize: "3rem", 
          fontWeight: 900, 
          margin: "1rem 0 2rem", 
          letterSpacing: "0.02em",
          color: "#DC143C",
          textAlign: "center",
          textShadow: "2px 2px 4px rgba(0,0,0,0.7)"
        }}>
          Merch Collection
        </h1>
        
        <p style={{ 
          fontSize: "1.2rem", 
          color: "#c7c7c7", 
          textAlign: "center", 
          marginBottom: "3rem",
          maxWidth: "600px",
          margin: "0 auto 3rem"
        }}>
          Coming Soon: Premium quality shirts featuring your favorite travel moments. 
          Each design is carefully crafted to capture the essence of adventure.
        </p>

        {/* Placeholder for shirt designs */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          {/* Placeholder shirt 1 */}
          <div style={{ 
            backgroundColor: '#0a0a0a', 
            borderRadius: '1.25rem', 
            padding: '2rem', 
            border: '2px solid #1f1f1f',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
            e.currentTarget.style.borderColor = '#FFD700';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 215, 0, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.borderColor = '#1f1f1f';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <div style={{
              width: '100%',
              height: '350px',
              backgroundColor: '#111111',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem',
              border: '2px dashed #333333'
            }}>
              <div style={{
                color: '#666666',
                fontSize: '1rem',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>👕</div>
                <div>Shirt Design Coming Soon</div>
              </div>
            </div>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: 700, 
              color: '#FFFFFF',
              marginBottom: '0.5rem',
              letterSpacing: '0.02em'
            }}>
              Alpine Adventure Tee
            </h3>
            <p style={{ 
              fontSize: '1rem', 
              color: '#c7c7c7',
              marginBottom: '1rem'
            }}>
              Swiss Alps Collection
            </p>
            <div style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#FFD700',
              textAlign: 'center'
            }}>
              Coming Soon
            </div>
          </div>

          {/* Placeholder shirt 2 */}
          <div style={{ 
            backgroundColor: '#0a0a0a', 
            borderRadius: '1.25rem', 
            padding: '2rem', 
            border: '2px solid #1f1f1f',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
            e.currentTarget.style.borderColor = '#FFD700';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 215, 0, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.borderColor = '#1f1f1f';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <div style={{
              width: '100%',
              height: '350px',
              backgroundColor: '#111111',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem',
              border: '2px dashed #333333'
            }}>
              <div style={{
                color: '#666666',
                fontSize: '1rem',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>👕</div>
                <div>Shirt Design Coming Soon</div>
              </div>
            </div>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: 700, 
              color: '#FFFFFF',
              marginBottom: '0.5rem',
              letterSpacing: '0.02em'
            }}>
              City Lights Hoodie
            </h3>
            <p style={{ 
              fontSize: '1rem', 
              color: '#c7c7c7',
              marginBottom: '1rem'
            }}>
              Urban Collection
            </p>
            <div style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#FFD700',
              textAlign: 'center'
            }}>
              Coming Soon
            </div>
          </div>

          {/* Placeholder shirt 3 */}
          <div style={{ 
            backgroundColor: '#0a0a0a', 
            borderRadius: '1.25rem', 
            padding: '2rem', 
            border: '2px solid #1f1f1f',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
            e.currentTarget.style.borderColor = '#FFD700';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 215, 0, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.borderColor = '#1f1f1f';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <div style={{
              width: '100%',
              height: '350px',
              backgroundColor: '#111111',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem',
              border: '2px dashed #333333'
            }}>
              <div style={{
                color: '#666666',
                fontSize: '1rem',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>👕</div>
                <div>Shirt Design Coming Soon</div>
              </div>
            </div>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: 700, 
              color: '#FFFFFF',
              marginBottom: '0.5rem',
              letterSpacing: '0.02em'
            }}>
              Desert Dreams Tank
            </h3>
            <p style={{ 
              fontSize: '1rem', 
              color: '#c7c7c7',
              marginBottom: '1rem'
            }}>
              Adventure Collection
            </p>
            <div style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#FFD700',
              textAlign: 'center'
            }}>
              Coming Soon
            </div>
          </div>

          {/* Placeholder shirt 4 */}
          <div style={{ 
            backgroundColor: '#0a0a0a', 
            borderRadius: '1.25rem', 
            padding: '2rem', 
            border: '2px solid #1f1f1f',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
            e.currentTarget.style.borderColor = '#FFD700';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 215, 0, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.borderColor = '#1f1f1f';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <div style={{
              width: '100%',
              height: '350px',
              backgroundColor: '#111111',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem',
              border: '2px dashed #333333'
            }}>
              <div style={{
                color: '#666666',
                fontSize: '1rem',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>👕</div>
                <div>Shirt Design Coming Soon</div>
              </div>
            </div>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: 700, 
              color: '#FFFFFF',
              marginBottom: '0.5rem',
              letterSpacing: '0.02em'
            }}>
              Safari Explorer Long Sleeve
            </h3>
            <p style={{ 
              fontSize: '1rem', 
              color: '#c7c7c7',
              marginBottom: '1rem'
            }}>
              Wildlife Collection
            </p>
            <div style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#FFD700',
              textAlign: 'center'
            }}>
              Coming Soon
            </div>
          </div>
        </div>

        {/* Instagram Promotion */}
        <div style={{
          padding: '2rem',
          background: 'linear-gradient(135deg, #111111, #0a0a0a)',
          borderRadius: '15px',
          border: '2px solid #FFD700',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#FFD700',
            marginBottom: '1rem'
          }}>
            Stay Updated
          </h3>
          <p style={{
            fontSize: '1rem',
            color: '#c7c7c7',
            marginBottom: '1.5rem'
          }}>
            Follow us on Instagram to be the first to know when our merch collection drops! Each design will feature your favorite travel moments.
          </p>
          
          <a 
            href="https://instagram.com/kodakbykite" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #E4405F, #C13584, #833AB4)',
              color: '#fff',
              border: 'none',
              borderRadius: '25px',
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              textDecoration: 'none',
              marginBottom: '1rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(228, 64, 95, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            📸 Follow @kodakbykite
          </a>
          
          <div style={{
            marginTop: '1rem',
            padding: '1rem',
            backgroundColor: 'rgba(255, 215, 0, 0.1)',
            borderRadius: '8px',
            border: '1px solid #FFD700'
          }}>
            <p style={{
              color: '#FFD700',
              fontSize: '0.9rem',
              margin: 0,
              fontWeight: '500'
            }}>
              💫 Get exclusive behind-the-scenes content, early access to new designs, and special discounts for followers!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
