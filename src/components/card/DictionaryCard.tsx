import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Meaning } from "@/lib/interfaces&types/dictionary";

export default function DictionaryCard({ word }: { word: string }) {
  const [headword, setHeadword] = useState<string | null>(null);
  const [phonetic, setPhonetic] = useState<string | null>(null);
  const [meanings, setMeanings] = useState<Meaning[] | null>(null);
  const [origin, setOrigin] = useState<string | null>(null); // New state for origin
  const [synonyms, setSynonyms] = useState<string[]>([]);
  const [antonyms, setAntonyms] = useState<string[]>([]);
  const [relatedWords, setRelatedWords] = useState<string[]>([]);
  const [nearSynonyms, setNearSynonyms] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDefinition() {
      try {
        const response = await fetch(
          `/api/wellness-library/digital-products/wellness-dictionary?word=${word}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        // Extract data from the combined API response
        const dictionaryData = data.dictionary[0];
        setHeadword(dictionaryData?.hwi?.hw || "No headword available");
        setPhonetic(
          dictionaryData?.hwi?.prs?.[0]?.mw || "No phonetic available"
        );
        setMeanings(
          dictionaryData?.def?.map((def: any) => ({
            partOfSpeech: dictionaryData.fl,
            definitions: def.sseq.flatMap((seq: any) =>
              seq[0][1]?.dt?.map((dt: any) => ({
                definition: dt[1],
                example: dt[2]?.vis?.[0]?.t || null,
              }))
            ),
          })) || []
        );
        setOrigin(
          dictionaryData?.et?.[0]?.[1] || "No origin available" // Extract origin
        );
        setSynonyms(data.synonyms || []);
        setAntonyms(data.antonyms || []);
        setRelatedWords(data.related || []);
        setNearSynonyms(data.near || []);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      }
    }

    fetchDefinition();
  }, [word]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{word}</CardTitle>
      </CardHeader>
      <CardContent>
        {error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : meanings ? (
          <>
            <p>
              <strong>Headword:</strong> {headword}
            </p>
            <p>
              <strong>Phonetic:</strong> {phonetic}
            </p>

            <div>
              <strong>Meanings:</strong>
              {meanings.map((meaning, index) => (
                <div key={index}>
                  <p>
                    <em>{meaning.partOfSpeech}</em>
                  </p>
                  <ul>
                    {meaning.definitions.map((definition, defIndex) => (
                      <li key={defIndex}>
                        {definition.definition}
                        {definition.example && (
                          <p>
                            <small>
                              <strong>Example:</strong> {definition.example}
                            </small>
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {synonyms.length > 0 && (
              <p>
                <strong>Synonyms:</strong> {synonyms.join(", ")}
              </p>
            )}
            {antonyms.length > 0 && (
              <p>
                <strong>Antonyms:</strong> {antonyms.join(", ")}
              </p>
            )}
            {relatedWords.length > 0 && (
              <p>
                <strong>Related Words:</strong> {relatedWords.join(", ")}
              </p>
            )}
            {nearSynonyms.length > 0 && (
              <p>
                <strong>Near Synonyms:</strong> {nearSynonyms.join(", ")}
              </p>
            )}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </CardContent>
      <CardFooter>
        <p>
          <strong>Origin:</strong> {origin}
        </p>
      </CardFooter>
    </Card>
  );
}
