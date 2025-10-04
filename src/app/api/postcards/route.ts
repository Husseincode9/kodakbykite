import { NextResponse } from "next/server";
import placesData from "@/data/places.json";

export async function GET() {
  // Return pre-generated static data
  return NextResponse.json(placesData);
}
