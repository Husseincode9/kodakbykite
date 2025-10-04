const fs = require('fs');
const path = require('path');

// Generate individual place files data at build time
function generatePlacesFiles() {
  const placesDir = path.join(process.cwd(), 'public', 'places');
  const placesData = {};
  
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

          placesData[slug] = imageFiles;
        } catch (error) {
          console.error(`Error reading directory ${placeDir}:`, error);
          placesData[slug] = [];
        }
      }
    }
  } catch (error) {
    console.error("Error reading places directory:", error);
  }

  // Write to static data file
  const outputPath = path.join(process.cwd(), 'src', 'data', 'places-files.json');
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(placesData, null, 2));
  
  console.log(`Generated places files data for ${Object.keys(placesData).length} places`);
}

generatePlacesFiles();
