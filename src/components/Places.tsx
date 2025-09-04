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
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        {countries[activeCountry as keyof typeof countries].images.map((image, idx) => (
          <a key={idx} href={`/places/${image.slug}`} style={{ textDecoration: 'none' }}>
            <div style={{ 
              backgroundColor: '#0a0a0a', 
              borderRadius: '1rem', 
              padding: '1rem', 
              border: '1px solid #1f1f1f',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.35)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 215, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.35)';
            }}
            >
              <img
                src={image.src}
                alt={image.alt}
                style={{ 
                  width: '100%', 
                  height: '200px', 
                  objectFit: 'cover',
                  borderRadius: '0.5rem',
                  marginBottom: '0.75rem',
                  border: '2px solid #111111'
                }}
              />
              <h3 style={{ 
                fontSize: '1.125rem', 
                fontWeight: 700, 
                textAlign: 'center',
                color: '#FFFFFF',
                letterSpacing: '0.01em',
                marginBottom: '0.5rem'
              }}>
                {image.title}
              </h3>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <span style={{
                  display: 'inline-block',
                  padding: '0.4rem 0.9rem',
                  borderRadius: '999px',
                  border: '2px solid #FFD700',
                  color: '#FFD700',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  letterSpacing: '0.02em'
                }}>View all</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
  