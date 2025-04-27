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
      <h1>Building Wellness from the Inside Out</h1>
      <h5>
        Harmona Health’s Commitment to Your Strength, Clarity, and Lasting
        Vitality
      </h5>

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
        <p>
          Our goal is to build an ecosystem that is greater than the sum of its
          parts—where diverse perspectives and expertise come together to
          address the complexities of modern wellness. This interconnected
          network of partners and affiliates allows us to cater to the unique
          needs of every person we serve, while driving innovation and progress
          across the wellness landscape. We’re not just working toward healthier
          individuals; we’re fostering stronger communities and more resilient
          organizations. From workplace wellness programs that promote
          productivity and emotional well-being, to specialized programs that
          support individuals through life’s challenges, our partnerships
          provide the comprehensive solutions needed for long-term, sustainable
          health.
        </p>
      </section>

      <section className="py-3">
        <h2>Our Story: A Journey Toward True Wellness</h2>
        <p>
          Harmona Health was founded on the belief that wellness is not a
          destination — it’s a lifelong journey. At Harmona Health, we believe
          that everyone carries a spark of untapped potential — a brighter,
          stronger, more vibrant version of themselves waiting to be awakened.
          We are driven by a powerful belief: wellness is not a destination, but
          a continuous journey. We understand that life can be overwhelming at
          times—between the demands of work, family, and personal obligations,
          it’s easy to lose sight of the most important thing: your health. But
          what if, instead of just surviving, you could thrive? What if you
          could uncover the vibrant, powerful version of yourself that has
          always been waiting to emerge?
        </p>
        <p>
          We believe that each of us carries an untapped spark of potential—an
          inner strength and vitality that can be awakened when we focus on the
          right things. Yet in today’s fast-paced world, it’s easy to let
          stress, exhaustion, and imbalance define your life. It’s easy to think
          that feeling drained, overwhelmed, or stuck is just a normal part of
          living.
        </p>
        <p>But at Harmona Health, we don’t accept that.</p>
        <p>We believe something different.</p>
        <p>
          We believe you deserve to feel strong, clear, and balanced in every
          aspect of your life. We believe in a wellness journey that nurtures
          the whole person—one that honors your mind, body, and spirit. We don’t
          believe in quick fixes, because we know that real transformation is
          about more than just temporary solutions. It’s about creating lasting
          change that empowers you to be your best self.
        </p>
        <p>
          We saw the need for an approach that nurtures the whole person,
          offering structured support not only for physical health, but also for
          mental clarity, emotional balance, and lasting resilience. We set out
          to create an approach to wellness that was different from the rest—one
          that didn’t just focus on physical health, but on the full spectrum of
          well-being. From mental clarity and emotional resilience to building
          strength and vitality, we knew that true health isn’t just about
          looking good or feeling good in the moment—it’s about creating a life
          that’s filled with purpose, energy, and lasting fulfillment. Every
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
          Our mission is to guide you on a path to becoming the best version of
          yourself—one step at a time. We know that your wellness journey is
          uniquely yours, and we’re here to meet you exactly where you are,
          helping you rise to your highest potential. Whether it’s regaining
          your energy, strengthening your body, balancing your emotions, or
          reconnecting with your sense of purpose, we’re here to help you
          reclaim what’s rightfully yours: a life filled with vitality, clarity,
          and strength. Over the years, we've helped individuals reclaim their
          energy, regain their strength, and reimagine what’s possible when
          wellness becomes a way of life.
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
          way of living, a way of being. It’s in the strength you build through
          movement, the clarity you cultivate in your mind, the nourishment you
          give to your body, and the love you offer your heart. It’s in the
          everyday choices you make that shape your life—choices that, over
          time, create profound transformation.
        </p>
        <p>
          We understand that real change doesn’t happen overnight. It’s not
          about quick fixes or short-term solutions. Transformation happens
          through consistent, courageous steps forward—honoring your unique
          journey, embracing your individuality, and taking the time to listen
          to your body and soul. It’s a process of growth, learning, and, most
          importantly, self-compassion.
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
          At Harmona Health, we don’t believe in cookie-cutter solutions. We
          understand that each person’s needs and goals are different, and we’re
          here to create a personalized wellness experience just for you.
          Whether your goal is to reclaim your energy, strengthen your body,
          restore emotional balance, or rediscover your inner spark, our
          programs are designed to meet you where you are and guide you toward
          where you want to be.
        </p>
        <p>
          Our programs are not one-size-fits-all. Our programs are designed to
          meet you exactly where you are and guide you toward where you want to
          go — whether that means reclaiming your energy, strengthening your
          body, finding emotional balance, or rediscovering your inner spark. We
          provide the tools, the knowledge, and the support needed to help you
          create lasting change in your life. You’re never alone in this
          journey. We walk alongside you every step of the way, offering
          encouragement and guidance as you move forward. Together, we’ll build
          the life you deserve—a life filled with purpose, vitality, and
          resilience.
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
        <h3>We Believe in You</h3>
        <p>
          We believe in you—in your strength, your potential, and your ability
          to create lasting, positive change. Your journey to wellness is a
          powerful one, and we are honored to be part of it. Whether you’re
          starting fresh or continuing on a path of growth, we’re here to help
          you unlock the healthiest, most vibrant version of yourself.
        </p>
        <h3>
          The next chapter of your life is waiting. Let’s write it together.
        </h3>
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
          At Harmona Health, we believe that true transformation is not just
          about changing one part of yourself—it’s about nurturing every aspect
          of who you are. We know that true wellness comes when you honor and
          care for your body, mind, and spirit. That’s why we approach health in
          its most holistic form, understanding that balance and vitality are
          achieved only when all three elements are in harmony.
        </p>
        <p>
          We understand that each person’s journey is unique, and that’s why our
          programs are thoughtfully designed to meet you exactly where you
          are—without judgment or expectation. Whether you’re just beginning to
          explore your wellness journey or looking to deepen your commitment to
          your well-being, our programs are here to guide you every step of the
          way. Our goal is not just to help you achieve temporary results, but
          to support lasting change that empowers you to live a life filled with
          strength, clarity, resilience, and joy.
        </p>
        <p>
          Every service we offer is more than just a program; it’s a deeply
          personalized experience, carefully crafted with intention. We
          recognize that wellness is a deeply individual experience, which is
          why we take the time to understand your goals, challenges, and
          aspirations. From fitness training and nutrition coaching to mental
          health support and corporate wellness solutions, each service is
          tailored to fit your unique needs and desires.
        </p>
        <p>
          Our programs are fueled by compassion, expertise, and a deep belief in
          your limitless potential. We know that within you lies the ability to
          create the life you’ve always dreamed of—one filled with energy,
          clarity, and a sense of purpose. At Harmona Health, we are here to
          help you unlock that potential, supporting you as you step into your
          most vibrant self. We don’t just guide you through a program; we walk
          with you on your journey, offering encouragement, expert knowledge,
          and a compassionate hand to help you overcome obstacles and celebrate
          victories, both big and small. This is more than just a service—it’s a
          partnership, a shared commitment to your health, happiness, and
          future.
        </p>
        <p>
          Through every step, we are with you. And together, we will create a
          future where you not only thrive, but live your life with power,
          purpose, and unshakable confidence.
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
          profound commitment to helping you thrive. When you step into Harmona
          Health, you step into a community dedicated to your growth. Our team
          of experts brings deep experience, diverse perspectives, and a shared
          belief that your wellness journey deserves personal, empowering, and
          transformative support.
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
