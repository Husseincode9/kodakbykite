import { NextRequest, NextResponse } from "next/server";
import placesFiles from "@/data/places-files.json";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  
  // Get files from pre-generated static data
  const files = (placesFiles as Record<string, string[]>)[slug] || [];

  return NextResponse.json({ files });
}
