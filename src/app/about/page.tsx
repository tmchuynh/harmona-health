"use client";
import DynamicButton from "@/components/button/button-dynamic";
import { Button } from "@/components/ui/button";
import { commitments, healthPrograms } from "@/lib/constants/about/about";
import { supporters, teamMembers } from "@/lib/constants/about/staff";
import useLargeScreen from "@/lib/screens/useLargeScreen";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaLeaf } from "react-icons/fa";

export default function Page() {
  const isLargeScreen = useLargeScreen();
  const router = useRouter();
  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <h1>About Harmona Health</h1>
      <h5>Blank blank blank blank</h5>

      <section className="py-3">
        <h2>Our Mission</h2>
        <p>
          At Harmona Health, we are dedicated to transforming lives through the
          power of holistic wellness.
        </p>
        <p>
          We believe that true health is about more than physical fitness — it's
          about creating harmony between your mind, body, and spirit. Our
          mission is simple: to empower individuals and organizations to unlock
          their full potential, live with vitality, and lead lives of balance,
          strength, and purpose.
        </p>
      </section>

      <section className="py-3">
        <h2>Our Story: A Journey Toward True Wellness</h2>
        <p>
          Harmona Health was founded on the belief that wellness is not a
          destination — it’s a lifelong journey. At Harmona Health, we believe
          that everyone carries a spark of untapped potential — a brighter,
          stronger, more vibrant version of themselves waiting to be awakened.
        </p>
        <p>But in the rush of daily life, it’s easy to lose sight of that.</p>
        <p>
          It’s easy to believe that exhaustion, stress, or imbalance are just
          parts of living.
        </p>
        <p>We believe something different.</p>
        <p>
          We believe you deserve to feel powerful in your own body, clear in
          your mind, and grounded in your spirit.
        </p>
        <p>
          We saw the need for an approach that nurtures the whole person,
          offering structured support not only for physical health, but also for
          mental clarity, emotional balance, and lasting resilience. Every
          program, every service, and every experience we offer is thoughtfully
          designed to meet people where they are and inspire them to rise to
          their highest selves.
        </p>
        <p>
          We believe wellness should be within reach — not a luxury, but a way
          of life. And most importantly, we believe that when you find your
          balance, you unlock a life filled with strength, vitality, and
          purpose.
        </p>
        <p>
          That’s why Harmona Health was created — to guide you back to yourself.
        </p>
        <p>
          Over the years, we've helped individuals reclaim their energy, regain
          their strength, and reimagine what’s possible when wellness becomes a
          way of life.
        </p>
      </section>

      <section className="py-3">
        <h2>Our Purpose</h2>
        <p>
          At Harmona Health, our purpose is simple, yet profound: To help you
          rise, thrive, and live boldly — in every area of your life.
        </p>
        <p>
          We believe that true wellness is not a destination you reach — it’s a
          way of living, a way of being. It's in the strength you build through
          movement, the clarity you cultivate in your mind, the nourishment you
          give your body, and the care you offer your heart.
        </p>
        <p>
          We know that true transformation doesn’t come from quick fixes. We
          know that real transformation doesn't happen overnight.
        </p>
        <p>
          It comes from honoring your journey, embracing your individuality, and
          taking meaningful steps toward a healthier, more fulfilling life. It
          happens through small, courageous choices, made consistently over
          time. It happens when you have the right tools, compassionate
          guidance, and a community that believes in your potential — even on
          the days you doubt yourself.
        </p>
        <p>
          At Harmona Health, we don’t believe in one-size-fits-all solutions.
        </p>
        <p>
          Our programs are not one-size-fits-all. Our programs are designed to
          meet you exactly where you are and guide you toward where you want to
          go — whether that means reclaiming your energy, strengthening your
          body, finding emotional balance, or rediscovering your inner spark.
        </p>
        <p>
          They are crafted around you — your goals, your lifestyle, your dreams.
        </p>
        <p>
          You don’t have to walk this journey alone. We meet you where you are
          and walk with you every step of the way, offering the tools,
          knowledge, and support to help you reclaim your health and create
          lasting change. We are here — to inspire, to equip, and to walk beside
          you — as you build the life you deserve.
        </p>
        <p>
          We believe in you — your story, your dreams, your capacity to create a
          vibrant, resilient life. The next chapter of your life is waiting.
          Let’s create it together.
        </p>
      </section>

      <section className="py-3">
        <h2>What We Stand For</h2>
        <p></p>
        <div className="md:gap-10 grid md:grid-cols-2">
          {commitments.map((item, index) => (
            <div
              key={index}
              className="shadow-md p-6 rounded-2xl transition duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {item.icon}
                <h3>{item.name}</h3>
              </div>
              <ul className="space-y-3">
                {item.description.map((sentence, idx) => (
                  <li key={idx} className="flex items-start gap-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <FaLeaf className="w-4 h-4 text-primary" />
                    </div>
                    <span>{sentence}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p></p>
      </section>

      <section className="py-3">
        <h2>Our Approach: Empowering You at Every Step</h2>
        <p>
          At Harmona Health, we believe that true transformation comes from
          nurturing every part of who you are — body, mind, and spirit.
        </p>
        <p>
          That’s why our programs are thoughtfully designed to meet you where
          you are and guide you toward where you’re meant to be: living with
          strength, clarity, resilience, and joy.
        </p>
        <p>
          Every service we offer is more than a program — it’s a personalized
          journey, crafted with intention and fueled by compassion, expertise,
          and a belief in your limitless potential.
        </p>
        <p>Explore how we support you at every stage of your growth:</p>
        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-3">
          {healthPrograms.map((program, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between shadow-md p-6 rounded-lg transition-all duration-300 dark:outline"
            >
              <div>
                <h3>{program.name}</h3>
                <ul className="space-y-3 my-4">
                  {program.description.map((sentence, index) => (
                    <li key={index} className="flex items-start gap-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <FaLeaf className="w-4 h-4 text-primary" />
                      </div>
                      <span>{sentence}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-center">
                <p className="my-7 h-[4em]">{program.callToAction}</p>
                <div>
                  {isLargeScreen ? (
                    <Button onClick={() => router.push("#")}>
                      {program.linkText}
                    </Button>
                  ) : (
                    <DynamicButton href="#">{program.linkText}</DynamicButton>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-3">
        <h2>Our Experts, Your Allies in Transformation</h2>
        <h5>
          Guided by wisdom. Driven by heart. Committed to your lasting success.
        </h5>
        <p>
          At Harmona Health, our programs are fueled by more than expertise —
          they are powered by the passion, compassion, and dedication of the
          incredible people who stand behind them. Each member of our team
          brings a unique gift: deep knowledge, real-world experience, and a
          profound commitment to helping you thrive.
        </p>
        <p>
          When you step into Harmona Health, you step into a community dedicated
          to your growth. Our team of experts brings deep experience, diverse
          perspectives, and a shared belief that your wellness journey deserves
          personal, empowering, and transformative support.
        </p>
        <p>
          We are more than practitioners. We are partners on your journey. Here
          to uplift, empower, and walk beside you every step of the way.
          Together, we are here to help you rise — stronger, clearer, and more
          vibrant than ever before.
        </p>

        <section className="flex flex-col gap-8 py-6">
          <div>
            <h3>The Heart of Our Programs</h3>
            <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-3">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="shadow-md hover:shadow-lg rounded-2xl transition overflow-hidden dark:outline"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="object-top w-full h-64 object-cover"
                    width={200}
                    height={200}
                  />
                  <div className="p-6">
                    <h3 className="font-semibold text-primary text-xl">
                      {member.name}
                    </h3>
                    <h5>{member.title}</h5>
                    <p className="text-sm">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3>The Backbone of Our Wellness Programs</h3>
            <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-3">
              {supporters.map((member) => (
                <div
                  key={member.name}
                  className="shadow-md hover:shadow-lg rounded-2xl transition overflow-hidden dark:outline"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                    width={200}
                    height={200}
                  />
                  <div className="p-6">
                    <h3 className="font-semibold text-primary text-xl">
                      {member.name}
                    </h3>
                    <h5>{member.title}</h5>
                    <p className="text-sm">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
