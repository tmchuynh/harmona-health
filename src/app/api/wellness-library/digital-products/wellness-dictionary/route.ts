import { NextResponse } from "next/server";

const cache = new Map<string, any>(); // Simple in-memory cache
const CACHE_TTL = 60 * 1000; // Cache time-to-live (1 minute)

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const word = searchParams.get("word");

  if (!word) {
    return NextResponse.json({ error: "Word is required" }, { status: 400 });
  }

  // Check cache
  if (cache.has(word)) {
    const cachedData = cache.get(word);
    if (Date.now() - cachedData.timestamp < CACHE_TTL) {
      return NextResponse.json(cachedData.response);
    }
    cache.delete(word); // Remove expired cache
  }

  try {
    const dictionaryRes = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );

    if (!dictionaryRes.ok) {
      return NextResponse.json(
        { error: "Failed to fetch dictionary data" },
        { status: dictionaryRes.status }
      );
    }

    const dictionaryData = await dictionaryRes.json();

    // Cache the response
    const response = { dictionary: dictionaryData };
    cache.set(word, { response, timestamp: Date.now() });

    return NextResponse.json(response);
  } catch (err) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
