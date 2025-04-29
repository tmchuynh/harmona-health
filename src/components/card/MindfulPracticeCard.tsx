import { MindfulnessPractices } from "@/lib/interfaces&types/resources";
import React from "react";

const MindfulPracticeCard = ({ data }: { data: MindfulnessPractices }) => {
  return (
    <div className="bg-card shadow-md mx-auto p-9 rounded-lg">
      <h1 className="font-bold text-2xl">{data.title}</h1>

      <p>{data.introduction}</p>

      <div className="my-3">
        <div className="flex items-center gap-3">
          <h5 className="mb-0">Approximate Time:</h5>
          <p>{data.approximateTime}</p>
        </div>

        <div className="flex items-center gap-3">
          <h5 className="mb-0">Frequency:</h5>
          <p>{data.frequency}</p>
        </div>
      </div>

      <div className="mb-6">
        <h3>When to Use:</h3>
        <ul className="mt-2 pl-6 list-disc">
          {data.useCases.map((useCase, index) => (
            <li key={index}>{useCase}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3>Steps:</h3>
        <ol className="space-y-2 pl-6 list-decimal">
          {data.steps.map((step, index) => (
            <li key={index}>{step.step}</li>
          ))}
        </ol>
      </div>

      <div>
        <h3>Conclusion:</h3>
        <p>{data.conclusion}</p>
      </div>
    </div>
  );
};

export default MindfulPracticeCard;
