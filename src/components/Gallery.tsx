"use client";
import { useState } from "react";

export default function Gallery() {
  const [activeCountry, setActiveCountry] = useState("switzerland");

  const countries = {
    switzerland: {
      name: "Switzerland",
      flag: "🇨🇭",
      images: [
        { src: "/interlaken.jpg", alt: "Interlaken - Swiss Alps", title: "Interlaken", description: "Mountain paradise between two lakes" },
        { src: "/montreux.jpg", alt: "Montreux - Lake Geneva", title: "Montreux", description: "Charming town on Lake Geneva" },
        { src: "/geneva.jpg", alt: "Geneva - International city", title: "Geneva", description: "Cosmopolitan city by the lake" },
      ]
    },
    france: {
      name: "France",
      flag: "🇫🇷",
      images: [
        { src: "/paris.jpg", alt: "Paris - City of Light", title: "Paris", description: "Iconic landmarks and culture" },
        { src: "/annecy.jpg", alt: "Annecy - Alpine beauty", title: "Annecy", description: "Picturesque canals and mountains" },
      ]
    },
    morocco: {
      name: "Morocco",
      flag: "🇲🇦",
      images: [
        { src: "/marrakech.jpg", alt: "Marrakech - Red City", title: "Marrakech", description: "Vibrant medina and souks" },
      ]
    },
    kenya: {
      name: "Kenya",
      flag: "🇰🇪",
      images: [
        { src: "/nairobi.jpg", alt: "Nairobi - Green City", title: "Nairobi", description: "Urban energy and wildlife" },
      ]
    }
  };

  return (
    <section style={{ padding: '4rem 1.5rem' }}>
      <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}>Places I've Been</h2>
      
      {/* Country Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        {Object.entries(countries).map(([key, country]) => (
          <button
            key={key}
            onClick={() => setActiveCountry(key)}
            style={{
              padding: '0.75rem 1.5rem',
              border: 'none',
              borderRadius: '2rem',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              backgroundColor: activeCountry === key ? '#3b82f6' : '#f3f4f6',
              color: activeCountry === key ? 'white' : '#374151',
              boxShadow: activeCountry === key ? '0 4px 12px rgba(59, 130, 246, 0.3)' : 'none'
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
          <div key={idx} style={{ 
            backgroundColor: 'white', 
            borderRadius: '1rem', 
            padding: '1rem', 
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
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
                marginBottom: '0.75rem'
              }}
            />
            <h3 style={{ 
              fontSize: '1.125rem', 
              fontWeight: '600', 
              textAlign: 'center',
              color: '#1f2937'
            }}>
              {image.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
  