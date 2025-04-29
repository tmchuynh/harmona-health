import { BehavioralActivities } from "@/lib/interfaces&types/resources";
import React from "react";

const BehavioralActivitiesCard = ({
  activity,
}: {
  activity: BehavioralActivities;
}) => {
  return (
    <div className="bg-card shadow-md mx-auto p-9 rounded-lg">
      <h1 className="mb-4 font-bold text-2xl">{activity.title}</h1>

      <section className="mb-6">
        <p>{activity.introduction}</p>
        <p>{activity.description}</p>
      </section>

      <section className="mb-6">
        <h3>Steps</h3>
        <ol className="pl-6 list-decimal">
          {activity.steps.map((step, index) => (
            <li key={index} className="mb-4">
              <p className="font-semibold">{step.step}</p>
              <p>{step.note}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-6">
        <p>{activity.conclusion}</p>
        <p>{activity.afterThoughts}</p>
      </section>
    </div>
  );
};

export default BehavioralActivitiesCard;
