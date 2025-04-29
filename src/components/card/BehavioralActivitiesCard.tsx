import { BehavioralActivities } from "@/lib/interfaces&types/resources";
import React from "react";

const BehavioralActivitiesCard = ({ data }: { data: BehavioralActivities }) => {
  return (
    <div className="bg-card shadow-md mx-auto p-9 rounded-lg">
      <h1 className="mb-4 font-bold text-2xl">{data.title}</h1>

      <section className="mb-6">
        <p>{data.introduction}</p>
        {data.description && <p>{data.description}</p>}
      </section>

      <section className="mb-6">
        <h3>Steps</h3>
        <ol className="pl-6 list-decimal">
          {data.steps.map((step, index) => (
            <li key={index} className="mb-4">
              <p className="font-semibold">{step.step}</p>
              <p>{step.note}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-6">
        <p>{data.conclusion}</p>
        <p>{data.afterThoughts}</p>
      </section>
    </div>
  );
};

export default BehavioralActivitiesCard;
