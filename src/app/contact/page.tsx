"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <section className="flex flex-col gap-12">
        {/* Office Locations */}
        <div>
          <div className="mx-auto lg:mx-0">
            <h2>Our Offices</h2>
            <p className="mt-6 text-lg/8">
              We’re proud to have a global presence, with offices in cities
              around the world. Whether you're nearby or across the globe, we're
              always within reach and ready to connect.
            </p>
          </div>
          <div className="gap-10 md:gap-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto lg:mx-0 mt-16">
            <div className="space-y-5">
              <h3>Los Angeles</h3>
              <address className="pl-6 border-gray-200 border-l not-italic">
                <p>4556 Brendan Ferry</p>
                <p>Los Angeles, CA 90210</p>
              </address>
            </div>
            <div className="space-y-5">
              <h3>New York</h3>
              <address className="pl-6 border-gray-200 border-l not-italic">
                <p>886 Walter Street</p>
                <p>New York, NY 12345</p>
              </address>
            </div>
            <div className="space-y-5">
              <h3>Toronto</h3>
              <address className="pl-6 border-gray-200 border-l not-italic">
                <p>7363 Cynthia Pass</p>
                <p>Toronto, ON N3Y 4H8</p>
              </address>
            </div>
            <div className="space-y-5">
              <h3>London</h3>
              <address className="pl-6 border-gray-200 border-l not-italic">
                <p>114 Cobble Lane</p>
                <p>London N1 2EF</p>
              </address>
            </div>
          </div>
        </div>

        {/* Contact Options */}
        <div className="gap-3 grid grid-cols-1 lg:grid-cols-3 py-12">
          <div>
            <h2>Let’s Connect</h2>
            <p>
              Have a question, idea, or just want to say hello? We’d love to
              hear from you. Explore the best way to reach out below—we’re here
              to help.
            </p>
          </div>

          <div className="gap-6 lg:gap-8 grid grid-cols-1 sm:grid-cols-2 lg:col-span-2">
            {/* Collaborate */}
            <div className="bg-card p-6 rounded-2xl">
              <h3>Partnerships & Collaboration</h3>
              <p>
                Interested in working together on something meaningful? We're
                always open to new ideas and creative partnerships.
              </p>
              <dl className="mt-3">
                <div>
                  <dt className="sr-only">Email</dt>
                  <dd>
                    <Button
                      variant={"link"}
                      onClick={() =>
                        router.push("mailto:collaborate@example.com")
                      }
                      className="px-0 font-semibold"
                    >
                      collaborate@example.com
                    </Button>
                  </dd>
                </div>
                <div className="mt-1">
                  <dt className="sr-only">Phone number</dt>
                  <dd>
                    <Button
                      variant={"link"}
                      onClick={() => router.push("tel:15559052345")}
                      className="px-0 font-semibold"
                    >
                      +1 (555) 905-2345
                    </Button>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Research */}
            <div className="bg-card p-6 rounded-2xl">
              <h3>Media & Research</h3>
              <p>
                For press inquiries, research collaborations, or academic
                interests—reach out and let's explore opportunities together.
              </p>
              <dl className="mt-3">
                <div>
                  <dt className="sr-only">Email</dt>
                  <dd>
                    <Button
                      variant={"link"}
                      onClick={() => router.push("mailto:press@example.com")}
                      className="px-0 font-semibold"
                    >
                      press@example.com
                    </Button>
                  </dd>
                </div>
                <div className="mt-1">
                  <dt className="sr-only">Phone number</dt>
                  <dd>
                    <Button
                      variant={"link"}
                      onClick={() => router.push("tel:15558330283")}
                      className="px-0 font-semibold"
                    >
                      +1 (555) 833-0283
                    </Button>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Careers */}
            <div className="bg-card p-6 rounded-2xl">
              <h3>Careers</h3>
              <p>
                Looking to join a team that values creativity, collaboration,
                and purpose? Let’s start a conversation about your next
                opportunity.
              </p>
              <dl className="mt-3">
                <div>
                  <dt className="sr-only">Email</dt>
                  <dd>
                    <Button
                      variant={"link"}
                      onClick={() => router.push("mailto:careers@example.com")}
                      className="px-0 font-semibold"
                    >
                      careers@example.com
                    </Button>
                  </dd>
                </div>
                <div className="mt-1">
                  <dt className="sr-only">Phone number</dt>
                  <dd>
                    <Button
                      variant={"link"}
                      onClick={() => router.push("tel:15558759945")}
                      className="px-0 font-semibold"
                    >
                      +1 (555) 875-9945
                    </Button>
                  </dd>
                </div>
              </dl>
            </div>

            {/* General Inquiries */}
            <div className="bg-card p-6 rounded-2xl">
              <h3>General Questions</h3>
              <p>
                Need assistance or have a question about our services? Our team
                is happy to help—feel free to reach out anytime.
              </p>
              <dl className="mt-3">
                <div>
                  <dt className="sr-only">Email</dt>
                  <dd>
                    <Button
                      variant={"link"}
                      onClick={() => router.push("mailto:info@example.com")}
                      className="px-0 font-semibold"
                    >
                      info@example.com
                    </Button>
                  </dd>
                </div>
                <div className="mt-1">
                  <dt className="sr-only">Phone number</dt>
                  <dd>
                    <Button
                      variant={"link"}
                      onClick={() => router.push("tel:15552732192")}
                      className="px-0 font-semibold"
                    >
                      +1 (555) 273-2192
                    </Button>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
