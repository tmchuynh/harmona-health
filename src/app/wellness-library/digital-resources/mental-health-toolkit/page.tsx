import ToolkitCard from "@/components/card/ToolkitCard";
import { toolkit } from "@/lib/resources/toolkits/toolkit";
import { sortByProperty } from "@/lib/utils/sort";
import React from "react";
export default function Page() {
  const sortedToolkits = sortByProperty(toolkit, "title");
  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <h1>Mental Health Toolkit</h1>
      <h5>
        Practical Tools for Daily Emotional Wellness: Reduce Anxiety, Improve
        Focus, and Strengthen Resilience
      </h5>

      <p className="my-8 md:my-4 lg:my-6">
        Unlock the power of therapeutic techniques with our comprehensive Mental
        Health Toolkit, specifically designed to support your mental well-being.
        Curated by licensed therapists and neuropsychologists, this toolkit
        offers a wide range of practical tools including guided meditations,
        grounding exercises, journaling prompts, and cognitive reframing
        worksheets. These tools are intended to be used daily, helping you
        reduce anxiety, improve concentration, and develop emotional regulation.
        Whether you’re seeking to manage stress or build resilience, this
        resource empowers you to take charge of your mental health with
        evidence-based techniques designed to fit seamlessly into your everyday
        life.
      </p>

      <div className="gap-x-8 gap-y-12 sm:gap-y-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
        {sortedToolkits.map((item, index) => (
          <ToolkitCard toolkit={item} key={index} />
        ))}
      </div>
    </div>
  );
}
