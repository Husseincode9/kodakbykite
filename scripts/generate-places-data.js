const fs = require('fs');
const path = require('path');

// Generate places data at build time
function generatePlacesData() {
  const placesDir = path.join(process.cwd(), 'public', 'places');
  const allImages = [];
  
  try {
    const places = fs.readdirSync(placesDir, { withFileTypes: true });
    
    for (const place of places) {
      if (place.isDirectory()) {
        const slug = place.name;
        const placeDir = path.join(placesDir, slug);
        
        try {
          const files = fs.readdirSync(placeDir, { withFileTypes: true });
          const imageFiles = files
            .filter((d) => d.isFile())
            .map((d) => d.name)
            .filter((name) => /\.(jpe?g|png|webp|gif)$/i.test(name));

          // Get location name from slug
          const locationMap = {
            'interlaken': 'Switzerland',
            'montreux': 'Switzerland', 
            'geneva': 'Switzerland',
            'paris': 'France',
            'annecy': 'France',
            'marrakech': 'Morocco',
            'nairobi': 'Kenya',
            'rome': 'Italy',
            'genoa': 'Italy',
            'milan': 'Italy',
            'pisa': 'Italy',
            'cario': 'Egypt',
            'hurghada': 'Egypt'
          };

          // Title mapping for special cases
          const titleMap = {
            'cario': 'Cairo'
          };

          const location = locationMap[slug] || slug;
          const title = titleMap[slug] || slug.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());

          // Add each image file
          for (const file of imageFiles) {
            allImages.push({
              src: `/places/${slug}/${file}`,
              alt: `${title} - ${file}`,
              title: title,
              location: location,
              slug: slug
            });
          }
        } catch (error) {
          console.error(`Error reading directory ${placeDir}:`, error);
        }
      }
    }
  } catch (error) {
    console.error("Error reading places directory:", error);
  }

  // Write to static data file
  const outputPath = path.join(process.cwd(), 'src', 'data', 'places.json');
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify({ images: allImages }, null, 2));
  
  console.log(`Generated places data with ${allImages.length} images`);
}

generatePlacesData();
