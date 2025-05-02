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
                Stay informed and inspired with our expansive library of
                research-backed health articles. Covering a wide array of
                topics—from balanced nutrition and gut health to stress
                management and sleep optimization—our articles offer practical,
                actionable advice to help you make lasting lifestyle changes.
                Written by health experts and backed by scientific research,
                these articles provide you with the tools you need to make
                informed decisions about your wellness. Each piece is designed
                to not only educate but also empower you to take proactive steps
                toward improving your health, featuring meal plans, expert
                interviews, and proven strategies for living a healthier, more
                balanced life.
              </p>
              <p>
                Whether you're looking to enhance your nutrition, improve your
                sleep quality, or manage stress more effectively, our articles
                serve as a comprehensive resource for all your health needs.
                Dive in and discover the wealth of knowledge that awaits you.
              </p>
              <p>
                Our articles are designed to be informative, engaging, and easy
                to understand, making them accessible to everyone, regardless of
                their health background. We believe that knowledge is power, and
                our goal is to empower you with the information you need to take
                charge of your health. From the latest research findings to
                practical tips and tricks, our articles are a treasure trove of
                valuable insights that can help you navigate the complexities of
                health and wellness. So why wait? Start exploring our library of
                health articles today and take the first step toward a
                healthier, happier you.
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
                    src="https://plus.unsplash.com/premium_photo-1661761077411-d50cba031848?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzZWFyY2h8ZW58MHwwfDB8fHww"
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
                    src="https://plus.unsplash.com/premium_photo-1664372145543-d60ba2756a7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHJlc2VhcmNofGVufDB8MHwwfHx8MA%3D%3D"
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
                    src="https://images.unsplash.com/photo-1578496479914-7ef3b0193be3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHJlc2VhcmNofGVufDB8MHwwfHx8MA%3D%3D"
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
