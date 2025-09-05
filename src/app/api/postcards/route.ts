import fs from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";

export async function GET() {
  const placesDir = path.join(process.cwd(), "public", "places");
  const allImages: Array<{
    src: string;
    alt: string;
    title: string;
    location: string;
    slug: string;
  }> = [];

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
          const locationMap: { [key: string]: string } = {
            'interlaken': 'Switzerland',
            'montreux': 'Switzerland', 
            'geneva': 'Switzerland',
            'paris': 'France',
            'annecy': 'France',
            'marrakech': 'Morocco',
            'nairobi': 'Kenya'
          };

          const location = locationMap[slug] || slug;
          const title = slug.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());

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

  return NextResponse.json({ images: allImages });
}
