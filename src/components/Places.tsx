"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { memo, useState, useEffect } from "react";

const Places = memo(function Places() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeCountry, setActiveCountry] = useState("switzerland");
  const [isHydrated, setIsHydrated] = useState(false);
  
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
    },
    italy: {
      name: "Italy",
      flag: "🇮🇹",
      images: [
        { src: "/rome.jpg", alt: "Rome - Eternal City", title: "Rome", slug: "rome" },
        { src: "/genoa.jpg", alt: "Genoa - Maritime Republic", title: "Genoa", slug: "genoa" },
        { src: "/milan.jpg", alt: "Milan - Fashion Capital", title: "Milan", slug: "milan" },
        { src: "/pisa.jpg", alt: "Pisa - Leaning Tower", title: "Pisa", slug: "pisa" },
      ]
    }
  } as const;

  // Handle hydration and URL params
  useEffect(() => {
    setIsHydrated(true);
    const countryFromUrl = searchParams.get('country');
    if (countryFromUrl && countries[countryFromUrl as keyof typeof countries]) {
      setActiveCountry(countryFromUrl);
    }
  }, [searchParams]);

  // Update URL when country changes
  const handleCountryChange = (country: string) => {
    setActiveCountry(country);
    const params = new URLSearchParams(searchParams.toString());
    params.set('country', country);
    router.replace(`/?${params.toString()}`, { scroll: false });
  };

  return (
    <section id="places" style={{ 
      padding: '4rem 0.5rem', 
      backgroundColor: '#000000', 
      color: '#FFFFFF',
      minHeight: '100vh',
      position: 'relative'
    }}>
      <style jsx>{`
        .gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
          max-width: 1600px;
          margin: 0 auto;
          width: 100%;
          opacity: 1;
          transition: opacity 0.1s ease-in-out;
          will-change: auto;
          contain: layout style;
        }
        @media (max-width: 480px) {
          .gallery {
            grid-template-columns: repeat(1, minmax(0, 1fr));
            gap: 1.25rem;
          }
        }
        * {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
      <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center', letterSpacing: '0.02em' }}>Places I've Been</h2>
      
      {/* Country Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        {Object.entries(countries).map(([key, country]) => (
          <button
            key={key}
            onClick={() => handleCountryChange(key)}
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
            onMouseEnter={(e) => {
              if (activeCountry !== key) {
                e.currentTarget.style.borderColor = '#FFD700';
                e.currentTarget.style.color = '#FFD700';
                e.currentTarget.style.backgroundColor = '#111111';
                e.currentTarget.style.boxShadow = '0 0 16px rgba(255, 215, 0, 0.2)';
              }
            }}
            onMouseLeave={(e) => {
              if (activeCountry !== key) {
                e.currentTarget.style.borderColor = '#333333';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.backgroundColor = '#0a0a0a';
                e.currentTarget.style.boxShadow = 'none';
              }
            }}
          >
            <span style={{ marginRight: '0.5rem' }}>{country.flag}</span>
            {country.name}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="gallery">
        {countries[activeCountry as keyof typeof countries].images.map((image, idx) => (
          <a key={idx} href={`/places/${image.slug}?from=${activeCountry}`} style={{ textDecoration: 'none' }}>
            <div style={{ 
              backgroundColor: '#0a0a0a', 
              borderRadius: '1.25rem', 
              padding: '1.5rem', 
              border: '2px solid #1f1f1f',
              boxShadow: '0 6px 15px rgba(0, 0, 0, 0.4)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              maxWidth: '500px',
              margin: '0 auto'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(255, 215, 0, 0.2)';
              // Only highlight the image border, not the container
              const img = e.currentTarget.querySelector('img');
              if (img) {
                img.style.borderColor = '#FFD700';
                img.style.boxShadow = '0 0 15px rgba(255, 215, 0, 0.3)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.4)';
              // Reset image border
              const img = e.currentTarget.querySelector('img');
              if (img) {
                img.style.borderColor = '#111111';
                img.style.boxShadow = 'none';
              }
            }}
            >
              <img
                src={image.src}
                alt={image.alt}
                style={{ 
                  width: '100%', 
                  height: '350px', 
                  objectFit: 'contain',
                  borderRadius: '0.75rem',
                  marginBottom: '1rem',
                  border: '3px solid #111111',
                  transition: 'transform 0.3s ease',
                  backgroundColor: '#0a0a0a'
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
});

export default Places;
  