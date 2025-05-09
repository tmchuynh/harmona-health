import BackdropButton from "@/components/button/BackdropButton";
import {
  empowerHealthFeatures,
  supportFeatures,
  wellnessJourneyStats,
} from "@/lib/constants/constants";
import Image from "next/image";

export default function Page() {
  return (
    <div className="mt-30">
      <main>
        {/* Hero section */}
        <div className="relative overflow-hidden isolate">
          <div className="lg:flex mx-auto lg:py-40 pt-10 pb-24 sm:pb-32 max-w-7xl">
            <div className="mx-auto lg:mx-0 px-8 md:px-0 lg:px-12 lg:pt-8 max-w-2xl shrink-0">
              <Image
                alt="harmona-health"
                src="/images/logo/HH-Photoroom-HH.png"
                className="w-auto h-36 md:h-48 lg:h-80"
                width={900}
                height={900}
              />
              <h1 className="mt-10">Build a Life You’re Excited to Live</h1>
              <h5>Clarity. Strength. Balance. Your Journey Starts Here.</h5>
              <p>
                Each day is a new opportunity to rise stronger, live brighter,
                and move closer to your goals. At Harmona Health, we believe
                great health doesn’t just happen — it’s created through
                intentional choices, expert guidance, and powerful support.
                Whether you’re looking to ignite your strength, find balance, or
                embrace your full potential, we stand with you every step of the
                way.
              </p>
              <p>
                Whether you're seeking strength, striving for balance, or ready
                to step into your full potential, we’re here to walk with you —
                every step, every goal, every breakthrough.
              </p>
              <p>
                With our complete programs, we fuel your journey by empowering
                you to build lasting vitality, clarity, and confidence. True
                transformation starts within, and we’re here to guide you toward
                a future where you lead with purpose, energy, and resilience.
                You are capable of more than you know, and at Harmona Health,
                we’re committed to helping you unlock that power, step by bold
                step.
              </p>
              <p>
                This is your moment to rewrite the story. Let’s build a life
                that energizes you, empowers you, and reflects who you really
                are.
              </p>
              <div className="flex md:flex-row flex-col items-center gap-3 mt-10">
                <BackdropButton onClick="/programs/start-your-journey">
                  Get started
                </BackdropButton>
                <BackdropButton variant="accent" onClick="/programs">
                  Learn more
                </BackdropButton>
              </div>
            </div>
            <div className="flex lg:flex-none mx-auto mt-16 sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 xl:ml-32 max-w-2xl lg:max-w-none">
              <div className="flex-none w-full max-w-3xl sm:max-w-5xl lg:max-w-none">
                <Image
                  alt="App screenshot"
                  src="https://plus.unsplash.com/premium_photo-1675433344518-21eb72dfc7a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHww"
                  className="shadow-2xl md:rounded-md w-full lg:w-[36rem] max-h-[12em] md:max-h-[57em] object-center aspect-auto object-cover"
                  width={1152}
                  height={842}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Feature section */}
        <div className="mx-auto mt-32 sm:mt-56 w-10/12 md:w-11/12">
          <div className="flex justify-end mx-auto w-full">
            <div className="md:text-right md:w-4/5 lg:w-2/3 text-pretty">
              <h5>Balanced Health, Powerful Life</h5>
              <h1>Your Health, Your Way</h1>
              <p className="mt-6">
                Your health is your most valuable asset, and at Harmona Health,
                we are committed to helping you unlock its full potential. With
                our expert guidance and personalized support, you can take
                charge of your well-being and create a life of vitality and
                balance. Our tailored wellness programs are designed to meet
                your unique needs, equipping you with the knowledge, confidence,
                and tools to make informed decisions about your health. Whether
                you're looking to enhance your energy, improve your lifestyle,
                or achieve long-term wellness goals, we are here to guide you
                every step of the way. At Harmona Health, we believe that a
                balanced life is a powerful life. Let us help you embrace a
                healthier, more fulfilling future—because your journey to
                wellness starts here.
              </p>
            </div>
          </div>

          <dl className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 md:py-10 lg:max-w-none">
            {empowerHealthFeatures.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="font-semibold text-base/7">
                  <div className="flex justify-center items-center bg-secondary mb-6 rounded-lg size-10">
                    <feature.icon
                      aria-hidden="true"
                      className="text-secondary-foreground size-6"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="flex flex-col flex-auto mt-1 text-base/7">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="font-semibold text-sm/6 underline-offset-2 hover:underline"
                    >
                      Learn more
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Feature section */}
        <div className="mx-auto mt-8 md:mt-16 lg:mt-24 w-10/12 md:w-11/12">
          <div className="flex justify-end mx-auto w-full">
            <div className="md:text-right md:w-4/5 lg:w-2/3 text-pretty">
              <h5>
                Helping You Unlock Your Full Potential with Our Health Programs
              </h5>
              <h1>The Harmona Health Difference</h1>
              <p className="mt-6">
                At Harmona Health, we believe in the power of transformation.
                Our extensive approach to wellness supports lasting changes,
                helping you elevate every aspect of your health—whether it’s
                through fitness training, nutrition coaching, or emotional
                support. Start your journey today and see the difference. When
                your health is balanced, your life becomes powerful. At Harmona
                Health, we focus on integrating physical fitness, emotional
                wellness, and mental clarity to create a exhaustive approach
                that helps you achieve long-lasting vitality and strength.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-8 md:mt-12 lg:mt-16">
            <dl className="gap-x-6 gap-y-2 lg:gap-x-8 lg:gap-y-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto lg:mx-0 max-w-2xl lg:max-w-none text-base/7">
              {supportFeatures.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold">
                    <feature.icon
                      aria-hidden="true"
                      className="top-1 left-0 absolute text-accent size-6"
                    />
                    {feature.name}
                  </dt>
                  <dd>{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-12 md:mt-16 lg:mt-24 w-10/12 md:w-11/12">
          <div className="flex mx-auto w-full">
            <div className="md:w-4/5 lg:w-2/3 text-pretty">
              <h5>
                Supporting You Every Step of the Way to Health and Vitality
              </h5>
              <h1>Your Path to Wellness</h1>
              <p className="mt-6">
                Wellness is a journey, not a destination. At Harmona Health, we
                guide you every step of the way with a structured approach to
                health and well-being. From fitness to mental clarity, our
                programs are designed to help you reach your full potential and
                live a life of balance and vitality. Everyone’s journey to
                wellness is different, and that’s why at Harmona Health, we
                offer personalized programs that are designed specifically for
                your goals. Whether you're seeking physical fitness, mental
                clarity, or emotional balance, our services are crafted to fit
                your lifestyle and support your aspirations.
              </p>
            </div>
          </div>
          <dl className="gap-x-8 gap-y-10 md:gap-y-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto mt-6 md:mt-8 lg:max-w-none">
            {wellnessJourneyStats.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col gap-y-3 pl-6 border-l"
              >
                <dt className="text-sm/6">{stat.name} </dt>
                <dd className="order-first font-semibold text-3xl tracking-tight">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* CTA section */}
        <div className="mx-auto mt-12 md:mt-16 lg:mt-24 w-10/12 md:w-11/12">
          <div className="lg:mx-auto xl:mx-0 lg:w-2/3 lg:text-center xl:text-start">
            <h5>
              A Redefined Approach to Health That Nurtures Your Mind, Body, and
              Spirit
            </h5>
            <h1>Take the First Step Towards Wellness</h1>
            <p className="mt-6">
              True balance is the foundation of a thriving life. At Harmona
              Health, we focus on integrating physical fitness, mental clarity,
              and emotional health, helping you achieve lasting wellness. Our
              personalized programs empower you to achieve harmony between mind,
              body, and spirit, unlocking your full potential. It’s time to take
              your well-being to new heights. Our comprehensive and personalized
              programs focus on every aspect of health—physical, mental, and
              emotional. Whether you’re looking to enhance fitness or improve
              mental clarity, Harmona Health is here to guide you every step of
              the way.
            </p>
            <div className="flex justify-center xl:justify-start items-center gap-x-6 mt-10">
              <BackdropButton
                variant="accent"
                onClick="/programs/start-your-journey"
              >
                Get started
              </BackdropButton>
              <BackdropButton variant="outline" onClick="/programs">
                Learn more
              </BackdropButton>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
