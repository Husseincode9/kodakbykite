import fs from "node:fs";
import path from "node:path";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function PlaceGallery({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const publicDir = path.join(process.cwd(), "public", "places", slug);

  let files: string[] = [];
  try {
    const all = fs.readdirSync(publicDir, { withFileTypes: true });
    files = all
      .filter((d) => d.isFile())
      .map((d) => d.name)
      .filter((name) => /\.(jpe?g|png|webp|gif)$/i.test(name));
  } catch {
    files = [];
  }

  const title = slug.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());

  return (
    <main style={{ padding: "2rem 1rem", backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <a href="/" style={{ color: "#FFD700", textDecoration: "none" }}>
          ← Back
        </a>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, margin: "1rem 0", letterSpacing: "0.02em" }}>{title}</h1>
        {files.length === 0 ? (
          <p style={{ color: "#c7c7c7" }}>
            No images found. Add photos to <code style={{ color: "#FFD700" }}>public/places/{slug}</code> (jpg, png, webp, gif) and refresh.
          </p>
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1rem",
          }}>
            {files.map((file) => (
              <div key={file} style={{ background: "#0a0a0a", border: "1px solid #1f1f1f", borderRadius: "10px", padding: "8px" }}>
                <img
                  src={`/places/${slug}/${file}`}
                  alt={`${title} - ${file}`}
                  style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: "6px" }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
