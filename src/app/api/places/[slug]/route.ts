import fs from "node:fs";
import path from "node:path";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
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

  return NextResponse.json({ files });
}
