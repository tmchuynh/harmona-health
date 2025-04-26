"use client";

import DictionaryCard from "@/components/card/DictionaryCard";
import { mentalHealthWords } from "@/lib/resources/dictionary/dictionary";
import { capitalize } from "@/lib/utils/format";
import { sortAlphabetically } from "@/lib/utils/sort";
import React from "react";
export default function Page() {
  const sortedArray = sortAlphabetically(mentalHealthWords);

  // Group words by their starting letter
  const groupedWords = sortedArray.reduce(
    (acc: Record<string, string[]>, word: string) => {
      const firstLetter = word[0].toUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(word);
      return acc;
    },
    {}
  );

  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-11/12">
      <h1>Wellness Dictionary</h1>
      <h5>Blank blank blank blank</h5>

      <p>
        Ipsum excepteur dolore id velit adipisicing magna quis in commodo sint
        sit nostrud dolor. Eiusmod amet adipisicing consequat ea. Aute voluptate
        sunt sint elit qui aute ea non eiusmod labore. Ea voluptate ex ullamco
        qui aliqua qui minim voluptate ut incididunt nostrud. Cillum elit minim
        cupidatat officia.
      </p>

      <div className="flex flex-col gap-4 py-6">
        {Object.keys(groupedWords)
          .sort()
          .map((letter, index) => (
            <div key={`${letter}-${index}`}>
              <h2>{letter}</h2>
              <ul className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {groupedWords[letter].map((word, index) => (
                  <li key={`${word}-${index}`} className="cursor-pointer">
                    <DictionaryCard word={word} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
}
