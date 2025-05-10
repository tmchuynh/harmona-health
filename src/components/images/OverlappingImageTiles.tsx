import Image from "next/image";

export default function OverlappingImageTiles() {
  return (
    <div className="pt-12 md:pt-20 2xl:pb-18">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-[95%]">
        <div className="relative">
          <div>
            <h1>Health Articles</h1>
            <h5>
              Evidence-Based Health Insights: Practical Advice for Balanced
              Nutrition, Better Sleep, and More
            </h5>
            <div className="my-8 md:my-4 lg:my-6 lg:w-4/9 xl:w-1/2">
              <p>
                Explore a comprehensive library of expertly curated,
                research-backed health articles designed to inform, educate, and
                inspire. Whether you’re focused on optimizing your nutrition,
                supporting gut health, managing daily stress, or improving the
                quality of your sleep, our collection offers actionable insights
                grounded in science. Each article is crafted to deliver
                practical, evidence-based guidance that empowers you to make
                meaningful and lasting changes in your wellness journey.
              </p>
              <p>
                Developed in collaboration with health professionals and
                subject-matter experts, our articles bridge the gap between
                scientific research and everyday application. You’ll find clear
                explanations, step-by-step strategies, expert interviews, and
                curated meal plans tailored to promote a balanced and healthier
                lifestyle. Our content is intentionally designed to be both
                accessible and engaging, ensuring that individuals from all
                backgrounds can benefit from the knowledge we provide.
              </p>
              <p>
                Whether you're a wellness enthusiast, just starting your health
                journey, or seeking targeted solutions to specific concerns, our
                content library serves as a trusted, all-in-one resource. From
                sleep hygiene techniques and mindfulness practices to dietary
                frameworks and immune support, each topic is thoroughly
                researched and updated regularly to reflect the latest
                advancements in health science. With a strong emphasis on
                sustainability and real-world application, our articles support
                lasting, positive behavioral change.
              </p>
              <p>
                We believe that well-informed individuals make empowered
                decisions. That’s why we prioritize clarity, reliability, and
                usability in every article we publish. More than just facts, we
                provide context, tips, and guided insights so you can
                confidently navigate the complexities of health and wellness. By
                exploring our resources, you’ll gain the knowledge and
                motivation needed to take proactive steps toward a healthier,
                more balanced life.
              </p>
              <p>
                Start your journey today by diving into our growing archive of
                wellness content. With a wide range of topics and user-friendly
                language, there’s something for everyone—whether you’re looking
                to fine-tune your existing habits or make a transformative
                change. Let our health library be your guide to informed,
                intentional living, one article at a time.
              </p>
            </div>
          </div>

          <div className="-top-48 sm:top-6 2xl:top-0 left-1/2 -z-10 absolute lg:flex hidden min-w-max transform -translate-x-1/2 sm:translate-x-0">
            <div className="absolute bg-gradient-to-t from-background via-65% via-background/65 w-full h-full" />
            <div className="flex space-x-6 lg:space-x-8 ml-24 sm:ml-3">
              <div className="flex sm:flex-col space-x-6 sm:space-x-0 sm:space-y-6 lg:space-y-8">
                <div className="shrink-0">
                  <Image
                    alt=""
                    src="https://plus.unsplash.com/premium_photo-1667762241847-37471e8c8bc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhbHRofGVufDB8MHwwfHx8MA%3D%3D"
                    className="rounded-lg size-64 object-cover md:size-72"
                    width={500}
                    height={500}
                  />
                </div>

                <div className="mt-6 sm:mt-0 shrink-0">
                  <Image
                    alt=""
                    src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzZWFyY2h8ZW58MHwwfDB8fHww"
                    className="rounded-lg size-64 object-cover md:size-72"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
              <div className="flex sm:flex-col space-x-6 sm:space-x-0 sm:space-y-6 lg:space-y-8 sm:-mt-20">
                <div className="shrink-0">
                  <Image
                    alt=""
                    src="https://plus.unsplash.com/premium_photo-1675808577247-2281dc17147a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhlYWx0aHxlbnwwfDB8MHx8fDA%3D"
                    className="rounded-lg size-64 object-cover md:size-72"
                    width={500}
                    height={500}
                  />
                </div>

                <div className="mt-6 sm:mt-0 shrink-0">
                  <Image
                    alt=""
                    src="https://plus.unsplash.com/premium_photo-1661721744843-8f2894938739?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHJlc2VhcmNofGVufDB8MHwwfHx8MA%3D%3D"
                    className="rounded-lg size-64 object-cover md:size-72"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
              <div className="flex sm:flex-col space-x-6 sm:space-x-0 sm:space-y-6 lg:space-y-8">
                <div className="shrink-0">
                  <Image
                    alt=""
                    src="https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHJlc2VhcmNofGVufDB8MHwwfHx8MA%3D%3D"
                    className="rounded-lg size-64 object-cover md:size-72"
                    width={500}
                    height={500}
                  />
                </div>

                <div className="mt-6 sm:mt-0 shrink-0">
                  <Image
                    alt=""
                    src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhlYWx0aHxlbnwwfDB8MHx8fDA%3D"
                    className="rounded-lg size-64 object-cover md:size-72"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
