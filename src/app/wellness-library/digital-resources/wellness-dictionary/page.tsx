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
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <h1>Wellness Dictionary</h1>
      <h5>
        Your Guide to Holistic Health: Clear Definitions and Insights on 500+
        Health Terms
      </h5>

      <p className="my-8 md:my-4 lg:my-6">
        Empower your health journey with our extensive Wellness Dictionary, your
        go-to resource for understanding the language of holistic health. In
        this comprehensive guide, you’ll find over 500 entries defining the
        essential terms, acronyms, and methodologies commonly used in wellness
        and alternative medicine. From adapters and biofeedback to circadian
        rhythm and functional foods, each entry provides clear explanations,
        practical usage examples, and helpful links to further deepen your
        knowledge. This resource is designed to help you navigate the
        complexities of health and wellness with confidence, offering you the
        tools to make informed decisions for your well-being.
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
