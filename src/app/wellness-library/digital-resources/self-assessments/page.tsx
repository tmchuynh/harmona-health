import SelfAssessmentCard from "@/components/card/SelfAssessmentCard";
import { selfAssessmentTools } from "@/lib/resources/toolkits/selfassessments";
import { sortByProperty } from "@/lib/utils/sort";
export default function Page() {
  const sortedAssessments = sortByProperty(selfAssessmentTools, "title");
  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-11/12">
      <h1>Self Assessments</h1>
      <h5>
        Personalized Health Insights: Evaluate Your Wellness and Receive
        Actionable Feedback
      </h5>

      <p className="my-8 md:my-4 lg:my-6">
        Take control of your health and wellness with our personalized digital
        self-assessments, which provide immediate, insightful feedback on your
        current health status. Whether you're interested in evaluating your
        stress resilience, tracking your sleep quality, measuring your hormonal
        balance, or assessing your cognitive performance, our self-assessments
        are designed to help you better understand your body and mind. These
        tools not only provide a snapshot of where you stand but also offer
        customized recommendations to guide your next steps. By using these
        assessments, you can make more informed decisions about how to improve
        your well-being and take actionable steps toward a healthier, more
        balanced life.
      </p>

      <div className="gap-10 grid grid-cols-1 md:grid-cols-2 my-2 md:my-4 lg:my-8 xl:my-12">
        {sortedAssessments.map((tool, index) => (
          <SelfAssessmentCard
            key={`${tool.title}-${index}`}
            assessment={tool}
          />
        ))}
      </div>
    </div>
  );
}
