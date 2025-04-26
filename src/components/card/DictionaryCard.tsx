import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Meaning } from "@/lib/interfaces&types/dictionary";
import { capitalize, cleanText } from "@/lib/utils/format";

export default function DictionaryCard({ word }: { word: string }) {
  const [loading, setLoading] = useState(true);

  const [phonetic, setPhonetic] = useState<string | null>(null);
  const [meanings, setMeanings] = useState<Meaning[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDefinition() {
      try {
        const response = await fetch(
          `/api/wellness-library/digital-resources/wellness-dictionary?word=${word}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        const dictionaryData = data[0];
        setMeanings(dictionaryData.meanings);
        console.log(dictionaryData.meanings);
        setPhonetic(dictionaryData.phonetic);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    }

    fetchDefinition();
  }, [word]);

  if (loading) {
    return <></>;
  }

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
              <strong>Phonetic:</strong> {phonetic}
            </p>

            <div>
              <strong>Meanings:</strong>
              <ul className="list-decimal list-inside">
                {meanings?.map((meaning, index) => (
                  <li key={index}>
                    <p>
                      <em>{meaning.partOfSpeech}</em>
                    </p>
                    <div>
                      {meaning.definitions.map((definition, defIndex) => (
                        <div key={defIndex}>
                          <p>{definition.definition}</p>
                          <p className="ml-1 md:ml-2 xl:ml-3">
                            {definition.example}
                          </p>
                        </div>
                      ))}
                    </div>
                    {meaning.synonyms.length > 0 && (
                      <p>
                        <strong>Synonyms:</strong> {meaning.synonyms.join(", ")}
                      </p>
                    )}
                    {meaning.antonyms.length > 0 && (
                      <p>
                        <strong>Antonyms:</strong> {meaning.antonyms.join(", ")}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
