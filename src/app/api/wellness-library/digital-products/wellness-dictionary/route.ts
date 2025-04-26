// app/api/wellness-library/digital-products/wellness-dictionary/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const word = searchParams.get("word");

  if (!word) {
    return NextResponse.json({ error: "Word is required" }, { status: 400 });
  }

  const dictionaryApiKey = process.env.DICTIONARY;
  const thesaurusApiKey = process.env.THESAURUS;

  if (!dictionaryApiKey || !thesaurusApiKey) {
    return NextResponse.json({ error: "Missing API keys" }, { status: 500 });
  }

  try {
    const dictionaryRes = await fetch(
      `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${dictionaryApiKey}`
    );

    if (!dictionaryRes.ok) {
      return NextResponse.json(
        { error: "Failed to fetch dictionary data" },
        { status: dictionaryRes.status }
      );
    }

    const dictionaryData = await dictionaryRes.json();

    const thesaurusRes = await fetch(
      `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${thesaurusApiKey}`
    );

    let synonyms: string[] = [];
    let antonyms: string[] = [];

    if (thesaurusRes.ok) {
      const thesaurusData = await thesaurusRes.json();
      if (Array.isArray(thesaurusData) && thesaurusData.length > 0) {
        const firstEntry = thesaurusData[0];
        synonyms = firstEntry.meta?.syns?.[0] || [];
        antonyms = firstEntry.meta?.ants?.[0] || [];
      }
    }

    return NextResponse.json({
      dictionary: dictionaryData,
      synonyms,
      antonyms,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
