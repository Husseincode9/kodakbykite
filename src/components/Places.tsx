"use client";
import { useState } from "react";

export default function Places() {
  const [activeCountry, setActiveCountry] = useState("switzerland");

  const countries = {
    switzerland: {
      name: "Switzerland",
      flag: "🇨🇭",
      images: [
        { src: "/interlaken.jpg", alt: "Interlaken - Swiss Alps", title: "Interlaken", slug: "interlaken" },
        { src: "/montreux.jpg", alt: "Montreux - Lake Geneva", title: "Montreux", slug: "montreux" },
        { src: "/geneva.jpg", alt: "Geneva - International city", title: "Geneva", slug: "geneva" },
      ]
    },
    france: {
      name: "France",
      flag: "🇫🇷",
      images: [
        { src: "/paris.jpg", alt: "Paris - City of Light", title: "Paris", slug: "paris" },
        { src: "/annecy.jpg", alt: "Annecy - Alpine beauty", title: "Annecy", slug: "annecy" },
      ]
    },
    morocco: {
      name: "Morocco",
      flag: "🇲🇦",
      images: [
        { src: "/marrakech.jpg", alt: "Marrakech - Red City", title: "Marrakech", slug: "marrakech" },
      ]
    },
    kenya: {
      name: "Kenya",
      flag: "🇰🇪",
      images: [
        { src: "/nairobi.jpg", alt: "Nairobi - Green City", title: "Nairobi", slug: "nairobi" },
      ]
    }
  } as const;

  return (
    <section style={{ padding: '4rem 1.5rem', backgroundColor: '#000000', color: '#FFFFFF' }}>
      <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center', letterSpacing: '0.02em' }}>Places I've Been</h2>
      
      {/* Country Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        {Object.entries(countries).map(([key, country]) => (
          <button
            key={key}
            onClick={() => setActiveCountry(key)}
            style={{
              padding: '0.75rem 1.5rem',
              border: '2px solid ' + (activeCountry === key ? '#FFD700' : '#333333'),
              borderRadius: '2rem',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 600,
              transition: 'all 0.3s ease',
              backgroundColor: activeCountry === key ? '#111111' : '#0a0a0a',
              color: activeCountry === key ? '#FFD700' : '#FFFFFF',
              boxShadow: activeCountry === key ? '0 0 16px rgba(255, 215, 0, 0.2)' : 'none'
            }}
          >
            <span style={{ marginRight: '0.5rem' }}>{country.flag}</span>
            {country.name}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
        {countries[activeCountry as keyof typeof countries].images.map((image, idx) => (
          <a key={idx} href={`/places/${image.slug}`} style={{ textDecoration: 'none' }}>
            <div style={{ 
              backgroundColor: '#0a0a0a', 
              borderRadius: '1.25rem', 
              padding: '1.5rem', 
              border: '2px solid #1f1f1f',
              boxShadow: '0 6px 15px rgba(0, 0, 0, 0.4)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(255, 215, 0, 0.2)';
              e.currentTarget.style.borderColor = '#FFD700';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.4)';
              e.currentTarget.style.borderColor = '#1f1f1f';
            }}
            >
              <img
                src={image.src}
                alt={image.alt}
                style={{ 
                  width: '100%', 
                  height: '280px', 
                  objectFit: 'cover',
                  borderRadius: '0.75rem',
                  marginBottom: '1rem',
                  border: '3px solid #111111',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: 700, 
                textAlign: 'center',
                color: '#FFFFFF',
                letterSpacing: '0.02em',
                marginBottom: '0.75rem'
              }}>
                {image.title}
              </h3>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <span style={{
                  display: 'inline-block',
                  padding: '0.6rem 1.2rem',
                  borderRadius: '999px',
                  border: '2px solid #FFD700',
                  color: '#FFD700',
                  fontSize: '1rem',
                  fontWeight: 600,
                  letterSpacing: '0.03em',
                  transition: 'all 0.3s ease'
                }}>View Gallery</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
  