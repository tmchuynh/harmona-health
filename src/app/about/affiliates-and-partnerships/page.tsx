import DynamicButton from "@/components/button/button-dynamic";
import {
  affiliateCompanies,
  partnershipCompanies,
} from "@/lib/constants/about/partners";
import Image from "next/image";
import React from "react";
export default function Page() {
  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <h1>Empowering Transformation Through Affiliates & Partnerships</h1>
      <h5>Uniting Forces for a Healthier, Stronger Future</h5>

      <p>
        At Harmona Health, we firmly believe that true transformation occurs
        when organizations with a shared vision come together to support and
        empower individuals. Our affiliates and strategic partners play a
        crucial role in our mission to foster holistic wellness and create
        lasting change in both individuals and communities. These partnerships
        allow us to offer a wider array of resources, expert guidance, and
        innovative solutions, all aimed at enhancing the health and vitality of
        those we serve. By collaborating with experts in diverse fields, we have
        been able to build a comprehensive, interconnected wellness ecosystem
        where all aspects of health—physical, emotional, and mental—are
        supported and nurtured.
      </p>
      <p>
        Our partnerships bring together top-tier professionals across a wide
        range of specialties, including nutrition, fitness, mental health, and
        corporate wellness. This diverse collaboration empowers us to provide a
        broad spectrum of services, each tailored to meet the unique needs of
        those we support. Whether it’s through personalized fitness plans,
        mental health resources, or targeted nutritional guidance, these
        combined efforts ensure that no aspect of well-being is left
        unaddressed. We’re able to offer truly customized wellness journeys that
        empower individuals to live healthier, more fulfilled lives.
      </p>
      <p>
        Together, we are breaking down barriers to health, removing obstacles
        that prevent people from reaching their full potential, and ensuring
        that wellness is accessible to all. By uniting forces with our
        affiliates and partners, we amplify our ability to deliver
        comprehensive, well-rounded wellness solutions that address the mind,
        body, and spirit. Whether it’s providing cutting-edge fitness training,
        innovative mental health resources, or nutrition strategies designed for
        sustainable success, our collaborations make it possible to create a
        future where every individual has the tools, support, and resources to
        thrive. The future of wellness is collaborative, inclusive, and
        community-driven. Together with our partners, we are creating a legacy
        of health, strength, and empowerment that will benefit generations to
        come. As we unite forces for a healthier, stronger future, we invite you
        to join us in this movement—a movement toward holistic health,
        purposeful living, and a transformative impact on the world. Let’s
        create the future we all deserve, one step at a time.
      </p>
      <p>
        We invite you to explore our network of affiliates and partnerships to
        see how, by coming together, we’re creating a dynamic and supportive
        community where well-being thrives. Together, we’re building an
        ecosystem that makes transformation not just possible, but inevitable.
        Whether you’re looking to partner with us or take advantage of the
        resources we provide, we are committed to creating a brighter, healthier
        future for all. Together, we can make lasting change and empower the
        individuals and communities we serve to live their best lives.
      </p>

      {/* Affiliate Companies Section */}
      <section className="py-3">
        <h2>Affiliate Companies</h2>
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-2">
          {affiliateCompanies.map((company, index) => (
            <div key={index} className="flex flex-col justify-between">
              <div className="flex">
                <Image
                  src={company.logo}
                  alt={company.name}
                  className="py-3 rounded-2xl object-cover object-center"
                  width={200}
                  height={200}
                />
              </div>
              <h3>{company.name}</h3>
              <p>{company.description}</p>
              <DynamicButton
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                variant="accent"
              >
                Visit Website
              </DynamicButton>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership Companies Section */}
      <section className="py-3">
        <h2>Partnership Companies</h2>
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-2">
          {partnershipCompanies.map((company, index) => (
            <div key={index} className="flex flex-col justify-between">
              <div className="flex">
                <Image
                  src={company.logo}
                  alt={company.name}
                  className="py-3 rounded-2xl object-cover object-center"
                  width={200}
                  height={200}
                />
              </div>
              <h3>{company.name}</h3>
              <p>{company.description}</p>
              <p>
                <strong>Partnership Details:</strong>{" "}
                {company.partnershipDetails}
              </p>
              <DynamicButton
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                variant="accent"
              >
                Visit Website
              </DynamicButton>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
