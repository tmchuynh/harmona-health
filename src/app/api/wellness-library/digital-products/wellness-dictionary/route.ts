import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { word } = req.query;

  if (!word || typeof word !== "string") {
    return res
      .status(400)
      .json({ error: "Word is required and must be a string" });
  }

  const dictionaryApiKey = process.env.DICTIONARY;
  const thesaurusApiKey = process.env.THESAURUS;

  try {
    // Fetch data from the Collegiate Dictionary API
    const dictionaryResponse = await fetch(
      `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${dictionaryApiKey}`
    );
    if (!dictionaryResponse.ok) {
      return res
        .status(dictionaryResponse.status)
        .json({ error: "Failed to fetch dictionary data" });
    }
    const dictionaryData = await dictionaryResponse.json();

    // Fetch data from the Thesaurus API
    const thesaurusResponse = await fetch(
      `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${thesaurusApiKey}`
    );
    let synonyms: string[] = [];
    let antonyms: string[] = [];

    if (thesaurusResponse.ok) {
      const thesaurusData = await thesaurusResponse.json();
      if (Array.isArray(thesaurusData) && thesaurusData.length > 0) {
        const firstEntry = thesaurusData[0];
        synonyms = firstEntry.meta?.syns?.[0] || [];
        antonyms = firstEntry.meta?.ants?.[0] || [];
      }
    }

    // Combine data from both APIs
    const combinedData = {
      dictionary: dictionaryData,
      synonyms,
      antonyms,
    };

    return res.status(200).json(combinedData);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
}
