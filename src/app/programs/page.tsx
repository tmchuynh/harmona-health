"use client";
import ProgramCategoryCard from "@/components/card/ProgramCategoryCard";
import { serviceCategories } from "@/lib/constants/services/serviceCategory";
export default function Page() {
  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-11/12">
      <h1>Health Programs</h1>
      <h5>Explore our complete wellness protocols tailored to your goals</h5>

      <p>
        At Harmona Health, we offer a diverse range of services designed to
        promote holistic well-being and empower individuals and organizations to
        thrive. From Wellness Programs that harmonize mind, body, and spirit, to
        Nutrition Coaching that provides personalized dietary guidance, our
        services cater to every aspect of health. Whether you're looking to
        enhance physical fitness through Fitness Training, seek emotional
        balance with Mental Health Support, or foster a healthier workplace with
        Corporate Wellness solutions, our expert-led programs are tailored to
        meet your unique needs and goals. Explore our offerings and take the
        first step toward a healthier, more fulfilling life.
      </p>

      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-2 md:my-4 lg:my-8 xl:my-12">
        {serviceCategories.map((category, index) => (
          <ProgramCategoryCard
            category={category}
            index={index}
            key={`${category.id}-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
