"use client";

import DynamicButton from "@/components/button/button-dynamic";
import { FAQ } from "@/lib/constants/services/frequently-asked-questions";
import { RiTelegram2Fill, RiTelegram2Line } from "react-icons/ri";

export default function Page() {
  return (
    <div className="mx-auto py-8 xl:py-24 w-11/12">
      <div className="lg:gap-8 lg:grid lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2>Frequently asked questions</h2>
          <p className="mt-4 text-base/7 text-pretty">
            Can’t find the answer you’re looking for? Reach out to our team.
            <DynamicButton
              icon={RiTelegram2Line}
              hoverIcon={RiTelegram2Fill}
              href="/contact"
            >
              customer support
            </DynamicButton>
          </p>
        </div>
        <div className="lg:col-span-7 mt-10 lg:mt-0">
          <dl className="space-y-10">
            {FAQ.map((faq) => (
              <div key={faq.question}>
                <dt className="font-semibold text-base/7">{faq.question}</dt>
                <dd className="mt-2 text-base/7">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
