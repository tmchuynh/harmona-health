"use client";
import { Button } from "@/components/ui/button";
import { commitments, timeline } from "@/lib/constants/about/about";
import { supporters, teamMembers } from "@/lib/constants/about/staff";
import { wellnessJourneyStats } from "@/lib/constants/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoLeafOutline } from "react-icons/io5";

export default function Page() {
  const router = useRouter();
  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <h1>Building Wellness from the Inside Out</h1>
      <h5>
        Harmona Health’s Commitment to Your Strength, Clarity, and Lasting
        Vitality
      </h5>

      <div className="flex flex-col gap-10 py-5">
        <section>
          <div className="max-w-2xl lg:max-w-none">
            <h2>Purpose with Heart</h2>
            <div className="gap-x-8 gap-y-20 grid grid-cols-1 lg:grid-cols-7 2xl:grid-cols-8">
              <div className="lg:flex-auto lg:col-span-3 lg:w-full">
                <p className="text-xl/8">
                  At Harmona Health, we guide individuals to wellness with care,
                  empathy, and purpose — empowering every step of the journey
                  through personalized, holistic support.
                </p>
                <p className="mt-3">
                  We believe that true health is about more than physical
                  fitness — it's about creating harmony between your mind, body,
                  and spirit. Our mission is simple: to empower individuals and
                  organizations to unlock their full potential, live with
                  vitality, and lead lives of balance, strength, and purpose.
                </p>
                <p>
                  Our goal is to build an ecosystem that is greater than the sum
                  of its parts—where diverse perspectives and expertise come
                  together to address the complexities of modern wellness. This
                  interconnected network of partners and affiliates allows us to
                  cater to the unique needs of every person we serve, while
                  driving innovation and progress across the wellness landscape.
                  We’re not just working toward healthier individuals; we’re
                  fostering stronger communities and more resilient
                  organizations. From workplace wellness programs that promote
                  productivity and emotional well-being, to specialized programs
                  that support individuals through life’s challenges, our
                  partnerships provide the comprehensive solutions needed for
                  long-term, sustainable health.
                </p>
              </div>
              <div className="lg:col-span-4 3xl:col-span-5">
                <dl className="space-y-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                  {wellnessJourneyStats.map((stat) => (
                    <div
                      key={stat.name}
                      className="flex flex-col-reverse justify-end gap-y-4 h-full"
                    >
                      <dt className="text-base/7 text-primary">{stat.name}</dt>
                      <dd className="font-semibold text-5xl tracking-tight">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h2>How Our Commitment to Wellness Began</h2>
            <p>
              Harmona Health was founded on the belief that wellness is not a
              destination — it’s a lifelong journey. At Harmona Health, we
              believe that everyone carries a spark of untapped potential — a
              brighter, stronger, more vibrant version of themselves waiting to
              be awakened. We are driven by a powerful belief: wellness is not a
              destination, but a continuous journey. We understand that life can
              be overwhelming at times—between the demands of work, family, and
              personal obligations, it’s easy to lose sight of the most
              important thing: your health. But what if, instead of just
              surviving, you could thrive? What if you could uncover the
              vibrant, powerful version of yourself that has always been waiting
              to emerge?
            </p>
            <p>
              We believe that each of us carries an untapped spark of
              potential—an inner strength and vitality that can be awakened when
              we focus on the right things. Yet in today’s fast-paced world,
              it’s easy to let stress, exhaustion, and imbalance define your
              life. It’s easy to think that feeling drained, overwhelmed, or
              stuck is just a normal part of living.
            </p>
            <p>But at Harmona Health, we don’t accept that.</p>
            <p>We believe something different.</p>
            <p>
              We believe you deserve to feel strong, clear, and balanced in
              every aspect of your life. We believe in a wellness journey that
              nurtures the whole person—one that honors your mind, body, and
              spirit. We don’t believe in quick fixes, because we know that real
              transformation is about more than just temporary solutions. It’s
              about creating lasting change that empowers you to be your best
              self.
            </p>
            <p>
              We saw the need for an approach that nurtures the whole person,
              offering structured support not only for physical health, but also
              for mental clarity, emotional balance, and lasting resilience. We
              set out to create an approach to wellness that was different from
              the rest—one that didn’t just focus on physical health, but on the
              full spectrum of well-being. From mental clarity and emotional
              resilience to building strength and vitality, we knew that true
              health isn’t just about looking good or feeling good in the
              moment—it’s about creating a life that’s filled with purpose,
              energy, and lasting fulfillment. Every program, every service, and
              every experience we offer is thoughtfully designed to meet people
              where they are and inspire them to rise to their highest selves.
            </p>
            <p>
              We believe wellness should be within reach — not a luxury, but a
              way of life. And most importantly, we believe that when you find
              your balance, you unlock a life filled with strength, vitality,
              and purpose.
            </p>
            <p>
              That’s why Harmona Health was created — to guide you back to
              yourself.
            </p>
            <p>
              Our mission is to guide you on a path to becoming the best version
              of yourself—one step at a time. We know that your wellness journey
              is uniquely yours, and we’re here to meet you exactly where you
              are, helping you rise to your highest potential. Whether it’s
              regaining your energy, strengthening your body, balancing your
              emotions, or reconnecting with your sense of purpose, we’re here
              to help you reclaim what’s rightfully yours: a life filled with
              vitality, clarity, and strength. Over the years, we've helped
              individuals reclaim their energy, regain their strength, and
              re-imagine what’s possible when wellness becomes a way of life.
            </p>
          </div>

          {/* Timeline section */}
          <div className="mx-auto mt-4 px-6 lg:px-8 max-w-7xl">
            <div className="gap-8 grid grid-cols-1 lg:grid-cols-4 mx-auto lg:mx-0 max-w-2xl lg:max-w-none overflow-hidden">
              {timeline.map((item) => (
                <div key={item.name}>
                  <time
                    dateTime={item.dateTime}
                    className="flex items-center font-semibold text-primary text-sm/6"
                  >
                    <svg
                      viewBox="0 0 4 4"
                      aria-hidden="true"
                      className="flex-none mr-4 size-1"
                    >
                      <circle r={2} cx={2} cy={2} />
                    </svg>
                    {item.date}
                    <div
                      aria-hidden="true"
                      className="lg:static absolute lg:flex-auto bg-primary/10 lg:-mr-6 -ml-2 sm:-ml-4 lg:ml-8 w-screen lg:w-auto h-px -translate-x-full lg:translate-x-0"
                    />
                  </time>
                  <p className="mt-6 font-semibold text-lg/8 tracking-tight">
                    {item.name}
                  </p>
                  <p className="mt-1 text-base/7">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden">
          <div className="mx-auto pt-3 md:pt-12 lg:pt-8 pb-12">
            <div className="lg:flex lg:items-center gap-x-14 mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
              <div className="gap-x-6 grid grid-cols-1 lg:grid-cols-2">
                <div className="relative w-full lg:max-w-xl xl:max-w-2xl lg:shrink-0">
                  <h1>
                    To help you rise, thrive, and live boldly — in every area of
                    your life
                  </h1>
                  <p className="mt-8 sm:max-w-xl lg:max-w-none font-medium text-pretty sm:text-xl/8 lg:text-lg">
                    We believe that true wellness is not a destination you reach
                    — it’s a way of living, a way of being. It’s in the strength
                    you build through movement, the clarity you cultivate in
                    your mind, the nourishment you give to your body, and the
                    love you offer your heart. It’s in the everyday choices you
                    make that shape your life—choices that, over time, create
                    profound transformation.
                  </p>
                  <p>
                    We understand that real change doesn’t happen overnight.
                    It’s not about quick fixes or short-term solutions.
                    Transformation happens through consistent, courageous steps
                    forward—honoring your unique journey, embracing your
                    individuality, and taking the time to listen to your body
                    and soul. It’s a process of growth, learning, and, most
                    importantly, self-compassion. It comes from honoring your
                    journey, embracing your individuality, and taking meaningful
                    steps toward a healthier, more fulfilling life. It happens
                    through small, courageous choices, made consistently over
                    time. It happens when you have the right tools,
                    compassionate guidance, and a community that believes in
                    your potential — even on the days you doubt yourself.
                  </p>
                </div>
                <div className="relative w-full lg:max-w-xl xl:max-w-2xl lg:shrink-0">
                  <h2 className="mt-8 lg:mt-0">
                    Every path is unique — and so is the way forward
                  </h2>
                  <div>
                    <p className="mt-8 sm:max-w-xl lg:max-w-none font-medium text-pretty sm:text-xl/8 lg:text-lg">
                      At Harmona Health, we don’t believe in cookie-cutter
                      solutions. We understand that each person’s needs and
                      goals are different, and we’re here to create a
                      personalized wellness experience just for you. Whether
                      your goal is to reclaim your energy, strengthen your body,
                      restore emotional balance, or rediscover your inner spark,
                      our programs are designed to meet you where you are and
                      guide you toward where you want to be.
                    </p>
                    <p>
                      Our programs are not one-size-fits-all. Our programs are
                      designed to meet you exactly where you are and guide you
                      toward where you want to go — whether that means
                      reclaiming your energy, strengthening your body, finding
                      emotional balance, or rediscovering your inner spark. We
                      provide the tools, the knowledge, and the support needed
                      to help you create lasting change in your life. You’re
                      never alone in this journey. We walk alongside you every
                      step of the way, offering encouragement and guidance as
                      you move forward. Together, we’ll build the life you
                      deserve—a life filled with purpose, vitality, and
                      resilience. They are crafted around you — your goals, your
                      lifestyle, your dreams.
                    </p>
                  </div>
                  <h3 className="mt-8 lg:mt-5">You aren't alone.</h3>
                  <p>
                    You don’t have to walk this journey alone. We meet you where
                    you are and walk with you every step of the way, offering
                    the tools, knowledge, and support to help you reclaim your
                    health and create lasting change. We are here — to inspire,
                    to equip, and to walk beside you — as you build the life you
                    deserve.
                  </p>
                  <p>
                    We believe in you—in your strength, your potential, and your
                    ability to create lasting, positive change. Your journey to
                    wellness is a powerful one, and we are honored to be part of
                    it. Whether you’re starting fresh or continuing on a path of
                    growth, we’re here to help you unlock the healthiest, most
                    vibrant version of yourself. The next chapter of your life
                    is waiting. Let’s write it together.
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto mt-12 md:mt-18 px-8 lg:px-18">
              <div className="mx-auto lg:mx-0 max-w-2xl">
                <h2>
                  We believe well-being is the foundation of lasting impact
                </h2>
                <p className="mt-6 text-base/7">
                  At Harmona Health, we see every individual’s wellness journey
                  as a ripple that extends outward — strengthening families,
                  workplaces, and communities. Through integrative healing,
                  personalized coaching, and science-backed strategies, we
                  empower people to live with resilience, vitality, and purpose.
                </p>
              </div>
              <div className="flex lg:flex-row flex-col lg:items-end gap-8 mx-auto lg:mx-0 mt-16 lg:mt-20 max-w-2xl lg:max-w-none">
                <div className="flex sm:flex-row-reverse lg:flex-col flex-col-reverse lg:flex-none justify-between sm:items-end lg:items-start gap-x-16 gap-y-8 bg-tertiary p-8 rounded-2xl sm:w-3/4 lg:w-72 sm:max-w-md lg:max-w-none">
                  <p className="flex-none font-bold text-3xl text-tertiary-foreground tracking-tight">
                    50,000+
                  </p>
                  <div className="lg:flex-none sm:w-80 lg:w-auto sm:shrink">
                    <p className="font-semibold text-lg text-tertiary-foreground tracking-tight">
                      Lives impacted through wellness programs
                    </p>
                    <p className="mt-2 text-base/7 text-tertiary-foreground">
                      Through coaching, fitness, nutrition, and emotional health
                      services, we’ve supported thousands in cultivating
                      sustainable well-being.
                    </p>
                  </div>
                </div>
                <div className="flex sm:flex-row-reverse lg:flex-col flex-col-reverse lg:flex-auto justify-between sm:items-end lg:items-start gap-x-16 gap-y-8 lg:gap-y-44 bg-secondary p-8 rounded-2xl lg:w-full lg:max-w-sm">
                  <p className="flex-none font-bold text-3xl text-secondary-foreground tracking-tight">
                    120+
                  </p>
                  <div className="lg:flex-none sm:w-80 lg:w-auto sm:shrink">
                    <p className="font-semibold text-lg text-secondary-foreground tracking-tight">
                      Organizations partnered for Corporate Wellness
                    </p>
                    <p className="mt-2 text-base/7 text-secondary-foreground">
                      From small businesses to enterprise teams, we’ve helped
                      create healthier, more resilient workplace cultures across
                      industries.
                    </p>
                  </div>
                </div>
                <div className="flex sm:flex-row-reverse lg:flex-col flex-col-reverse lg:flex-auto justify-between sm:items-end lg:items-start gap-x-16 gap-y-8 lg:gap-y-28 bg-accent p-8 rounded-2xl sm:w-11/12 lg:w-full sm:max-w-xl lg:max-w-none">
                  <p className="flex-none font-bold text-3xl text-accent-foreground tracking-tight">
                    300,000+
                  </p>
                  <div className="lg:flex-none sm:w-80 lg:w-auto sm:shrink">
                    <p className="font-semibold text-accent-foreground text-lg tracking-tight">
                      Wellness coaching sessions delivered
                    </p>
                    <p className="mt-2 text-accent-foreground text-base/7">
                      Across fitness, nutrition, therapy, and resilience
                      coaching, our personalized approach has transformed
                      countless lives worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2>What We Stand For</h2>
          <p>
            At Harmona Health, we believe that wellness is more than a
            destination — it’s a daily practice, a mindset, and a way of living
            that brings you closer to your most vibrant self. We don’t chase
            trends or quick fixes. Instead, we focus on what truly matters:
            helping you create a life of clarity, strength, and balance through
            intentional action, compassionate support, and a deep understanding
            of who you are. Your journey is as unique as your fingerprint. And
            that journey deserves care, patience, and expertise tailored to your
            needs. Whether you're seeking more energy, emotional balance,
            improved habits, or deeper resilience, our purpose is to walk beside
            you with encouragement, insight, and unwavering belief in your
            potential.
          </p>
          <p>
            We are here to break down the noise, to simplify the science, and to
            demystify wellness in a way that’s both approachable and empowering.
            We guide you in building strong foundations — not just physically,
            but mentally and emotionally. Because true wellness doesn’t live in
            extremes. It lives in balance. It grows from self-awareness. And it
            thrives when you're supported by people who genuinely care. This is
            the heart of Harmona Health. We’re not just another wellness brand —
            we’re a partner in your growth. Every step you take toward wholeness
            is a step we take with you. We believe in your ability to rise, to
            rebuild, and to re-imagine what's possible. And we’re here to help
            you do just that — boldly, intentionally, and with purpose.
          </p>
          <div className="md:gap-10 grid lg:grid-cols-2 mt-2 md:mt-8">
            {commitments.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-3 bg-card shadow-md rounded-2xl h-full transition duration-300 overflow-hidden"
              >
                <div className="md:col-span-2 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <h3>{item.name}</h3>
                  </div>
                  <ul className="space-y-3">
                    {item.description.map((sentence, idx) => (
                      <li key={idx} className="flex items-start gap-x-3">
                        <div className="flex-shrink-0 mt-1">
                          <IoLeafOutline className="w-4 h-4 text-primary" />
                        </div>
                        <span>{sentence}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Image
                  alt={item.name}
                  src={item.href}
                  className="md:h-full object-center object-cover"
                  width={700}
                  height={700}
                />
              </div>
            ))}
          </div>
          <p></p>
        </section>

        <section>
          <h2>Our Approach: Empowering You at Every Step</h2>
          <p>
            At Harmona Health, we believe that true transformation is not just
            about changing one part of yourself—it’s about nurturing every
            aspect of who you are. We know that true wellness comes when you
            honor and care for your body, mind, and spirit. That’s why we
            approach health in its most holistic form, understanding that
            balance and vitality are achieved only when all three elements are
            in harmony.
          </p>
          <p>
            We understand that each person’s journey is unique, and that’s why
            our programs are thoughtfully designed to meet you exactly where you
            are—without judgment or expectation. Whether you’re just beginning
            to explore your wellness journey or looking to deepen your
            commitment to your well-being, our programs are here to guide you
            every step of the way. Our goal is not just to help you achieve
            temporary results, but to support lasting change that empowers you
            to live a life filled with strength, clarity, resilience, and joy.
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
            Our programs are fueled by compassion, expertise, and a deep belief
            in your limitless potential. We know that within you lies the
            ability to create the life you’ve always dreamed of—one filled with
            energy, clarity, and a sense of purpose. At Harmona Health, we are
            here to help you unlock that potential, supporting you as you step
            into your most vibrant self. We don’t just guide you through a
            program; we walk with you on your journey, offering encouragement,
            expert knowledge, and a compassionate hand to help you overcome
            obstacles and celebrate victories, both big and small. This is more
            than just a service—it’s a partnership, a shared commitment to your
            health, happiness, and future.
          </p>
          <p>
            Through every step, we are with you. And together, we will create a
            future where you not only thrive, but live your life with power,
            purpose, and unshakable confidence.
          </p>
          <div className="gap-4 grid grid-cols-1 lg:grid-cols-6 lg:grid-rows-2 mt-4 md:mt-9">
            <div className="relative lg:col-span-3">
              <div className="absolute inset-px bg-card rounded-lg max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
              <div className="relative flex flex-col rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)] h-full overflow-hidden">
                <Image
                  alt=""
                  src="https://plus.unsplash.com/premium_photo-1664299353570-8806eb1de970?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2VsbG5lc3N8ZW58MHwwfDB8fHww"
                  className="h-70 object-center object-cover"
                  width={700}
                  height={700}
                />
                <div className="flex flex-col justify-between p-10 pt-4 h-full">
                  <div>
                    <h5>
                      Awaken your fullest potential through integrated mind-body
                      wellness.
                    </h5>
                    <h3>Comprehensive Wellness Programs</h3>
                    <p>
                      Our Wellness Programs weave together modern science,
                      ancient healing traditions, and evidence-based practices
                      to support transformation on every level. Through tailored
                      coaching, mindfulness, and full-scale strategies, you’ll
                      cultivate lasting resilience, balance, and vibrant energy.
                      We believe wellness is not a destination, but a dynamic,
                      ongoing journey — one that reconnects you with your
                      truest, healthiest self. Embrace a life of deep vitality,
                      authenticity, and joy.
                    </p>
                  </div>
                  <Button
                    className="mt-3"
                    onClick={() => router.push("/programs/wellness-programs")}
                  >
                    Explore This Category
                  </Button>
                </div>
              </div>
              <div className="absolute inset-px shadow-sm rounded-lg max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem] ring-1 ring-black/5 pointer-events-none" />
            </div>
            <div className="relative lg:col-span-3">
              <div className="absolute inset-px bg-card rounded-lg lg:rounded-tr-[2rem]" />
              <div className="relative flex flex-col rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)] h-full overflow-hidden">
                <Image
                  alt=""
                  src="https://images.unsplash.com/photo-1548534143-1779f5b68bab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZW1vdGlvbmFsJTIwd2VsbCUyMGJlaW5nfGVufDB8MHwwfHx8MA%3D%3D"
                  className="h-70 object-center object-cover"
                  width={700}
                  height={700}
                />
                <div className="flex flex-col justify-between p-10 pt-4 h-full">
                  <div>
                    <h5>
                      Wellness isn't complete without mental and emotional
                      balance.
                    </h5>
                    <h3>Mental & Emotional Well-Being</h3>
                    <p>
                      At Harmona Health, we recognize that true well-being
                      requires care for the heart and mind, not just the body.
                      Our programs combine therapy, mindfulness, and resilience
                      coaching to foster emotional intelligence, stress
                      management, and personal growth. Whether you're navigating
                      life transitions or striving for deeper inner peace, our
                      approach offers personalized support every step of the
                      way. Heal, grow, and thrive with greater clarity,
                      strength, and compassion for yourself.
                    </p>
                  </div>
                  <Button
                    className="mt-3"
                    onClick={() => router.push("/programs/mental-health")}
                  >
                    Explore This Category
                  </Button>
                </div>
              </div>
              <div className="absolute inset-px shadow-sm rounded-lg lg:rounded-tr-[2rem] ring-1 ring-black/5 pointer-events-none" />
            </div>
            <div className="relative lg:col-span-2">
              <div className="absolute inset-px bg-card rounded-lg lg:rounded-bl-[2rem]" />
              <div className="relative flex flex-col rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)] h-full overflow-hidden">
                <Image
                  alt=""
                  src="https://images.unsplash.com/photo-1562114658-c1889b52410f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG51dHJpdGlvbiUyMGNvYWNoaW5nfGVufDB8MHwwfHx8MA%3D%3D"
                  className="h-70 object-center object-cover"
                  width={700}
                  height={700}
                />
                <div className="flex flex-col justify-between p-10 pt-4 h-full">
                  <div>
                    <h5>
                      Redefine your relationship with food and reclaim your
                      vitality.
                    </h5>
                    <h3>Nutrition Coaching</h3>
                    <p>
                      Nutrition is more than just eating — it’s about deeply
                      nourishing your body and spirit. Our Nutrition Coaching
                      goes beyond meal plans, blending functional nutrition,
                      intuitive eating, and personalized strategies that honor
                      your unique body and lifestyle. Through a supportive,
                      empowering approach, we help you build habits that
                      energize, heal, and sustain you. True strength begins from
                      the inside out — and we’re here to guide your journey.
                    </p>
                  </div>
                  <Button
                    className="mt-3"
                    onClick={() => router.push("/programs/nutrition-coaching")}
                  >
                    Explore This Category
                  </Button>
                </div>
              </div>
              <div className="absolute inset-px shadow-sm rounded-lg lg:rounded-bl-[2rem] ring-1 ring-black/5 pointer-events-none" />
            </div>
            <div className="relative lg:col-span-2">
              <div className="absolute inset-px bg-card rounded-lg" />
              <div className="relative flex flex-col rounded-[calc(var(--radius-lg)+1px)] h-full overflow-hidden">
                <Image
                  alt=""
                  src="https://plus.unsplash.com/premium_photo-1661281288734-49d3606234c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEZpdG5lc3MlMjBUcmFpbmluZ3xlbnwwfDB8MHx8fDA%3D"
                  className="h-70 object-center object-cover"
                  width={700}
                  height={700}
                />
                <div className="flex flex-col justify-between p-10 pt-4 h-full">
                  <div>
                    <h5>
                      Unlock strength, move with purpose, and live with
                      vitality.
                    </h5>
                    <h3>Fitness Training</h3>
                    <p>
                      Our Fitness Training programs are designed for every stage
                      of your journey — from beginner to seasoned athlete. With
                      an emphasis on functional movement, injury prevention, and
                      real-world strength, we customize training that builds
                      more than just muscle — it builds confidence, energy, and
                      lasting results. Every session moves you closer to your
                      highest potential, empowering you to live actively,
                      vibrantly, and fully aligned with your goals.
                    </p>
                  </div>
                  <Button
                    className="mt-3"
                    onClick={() => router.push("/programs/fitness-training")}
                  >
                    Explore This Category
                  </Button>
                </div>
              </div>
              <div className="absolute inset-px shadow-sm rounded-lg ring-1 ring-black/5 pointer-events-none" />
            </div>
            <div className="relative lg:col-span-2">
              <div className="absolute inset-px bg-card rounded-lg max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
              <div className="relative flex flex-col rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)] h-full overflow-hidden">
                <Image
                  alt=""
                  src="https://plus.unsplash.com/premium_photo-1714229505416-4c7726c59dac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q29ycG9yYXRlJTIwV2VsbG5lc3N8ZW58MHwwfDB8fHww"
                  className="h-70 object-center object-cover"
                  width={700}
                  height={700}
                />
                <div className="flex flex-col justify-between p-10 pt-4 h-full">
                  <div>
                    <h5>Thriving teams start with thriving individuals</h5>
                    <h3>Corporate Wellness</h3>
                    <p>
                      We collaborate with organizations to nurture employee
                      well-being at every level — physically, mentally, and
                      emotionally. Our Corporate Wellness initiatives blend
                      stress reduction, mental health strategies, fitness
                      programs, and leadership development into a powerful
                      blueprint for organizational vitality. By creating spaces
                      where well-being fuels innovation and resilience, we help
                      businesses grow stronger from the inside out. Investing in
                      people isn't just good leadership — it’s the foundation of
                      lasting success.
                    </p>
                  </div>
                  <Button
                    className="mt-3"
                    onClick={() => router.push("/programs/corporate-wellness")}
                  >
                    Explore This Category
                  </Button>
                </div>
              </div>
              <div className="absolute inset-px shadow-sm rounded-lg max-lg:rounded-b-[2rem] lg:rounded-br-[2rem] ring-1 ring-black/5 pointer-events-none" />
            </div>
          </div>
        </section>

        <section>
          <h2>Our Experts, Your Allies in Transformation</h2>
          <h5>
            Guided by wisdom. Driven by heart. Committed to your lasting
            success.
          </h5>
          <p>
            At Harmona Health, our programs are fueled by more than expertise —
            they are powered by the passion, compassion, and dedication of the
            incredible people who stand behind them. Each member of our team
            brings a unique gift: deep knowledge, real-world experience, and a
            profound commitment to helping you thrive. When you step into
            Harmona Health, you step into a community dedicated to your growth.
            Our team of experts brings deep experience, diverse perspectives,
            and a shared belief that your wellness journey deserves personal,
            empowering, and transformative support.
          </p>
          <p>
            We are more than practitioners. We are partners on your journey.
            Here to uplift, empower, and walk beside you every step of the way.
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
    </div>
  );
}
