import { WorkLifeBalance } from "@/lib/interfaces&types/resources";
import Image from "next/image";
import React from "react";

const WorkLifeBalanceCard = ({ data }: { data: WorkLifeBalance }) => {
  return (
    <div className="flex flex-col justify-between bg-card shadow-md mx-auto p-9 rounded-lg">
      <div>
        <h1 className="mb-4 font-bold text-2xl">{data.title}</h1>

        {/* Introduction Section */}
        <div className="">
          {data.introduction.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>

        <section className="gap-4 grid grid-cols-1 lg:grid-cols-2 my-8">
          {/* Work Scenario Section */}
          <div className="flex flex-col justify-between">
            <div className="pb-6">
              <h3>Work Scenario:</h3>
              <p>{data.workScenarioDescription}</p>
            </div>
            <Image
              src={data.workScenarioImage}
              alt="Work Scenario"
              className="shadow-md rounded-lg h-full object-cover object-center"
              width={500}
              height={300}
            />
          </div>

          {/* Life Scenario Section */}
          <div className="flex flex-col justify-between">
            <div className="pb-6">
              <h3>Life Scenario:</h3>
              <p>{data.lifeScenarioDescription}</p>
            </div>
            <Image
              src={data.lifeScenarioImage}
              alt="Life Scenario"
              className="shadow-md rounded-lg h-full object-cover object-center"
              width={500}
              height={300}
            />
          </div>
        </section>
      </div>

      <section>
        {/* Reasoning Section */}
        <div className="mb-6">
          <h3>Reasoning:</h3>
          <p>{data.reasoning}</p>
        </div>

        {/* Conclusion Section */}
        <div className="mb-6">
          <h3>Conclusion:</h3>
          <p>{data.conclusion}</p>
          <p>{data.afterThoughts}</p>
        </div>
      </section>
    </div>
  );
};

export default WorkLifeBalanceCard;
