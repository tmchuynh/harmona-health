"use client";

import BackdropButton from "@/components/button/button-dynamic";
import { FAQ } from "@/lib/constants/services/frequently-asked-questions";
import { RiTelegram2Fill, RiTelegram2Line } from "react-icons/ri";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <div className="mx-auto py-8 xl:py-24 w-11/12">
      <div className="lg:gap-8 lg:grid lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h1>Frequently Asked Questions</h1>
          <h5>
            Your Questions Answered: Clear and Concise Information to Support
            Your Wellness Journey
          </h5>

          <p className="my-8 md:my-4 lg:my-6">
            Welcome to our Frequently Asked Questions (FAQ) page, where we’ve
            compiled answers to common queries about our resources, services,
            and wellness programs. Whether you’re looking for more details about
            our toolkits, events, or how to get started on your wellness
            journey, you’ll find clear and concise information here. We’re
            committed to supporting you every step of the way, so if you don’t
            find the answer you’re looking for, don’t hesitate to reach out to
            our team for further assistance.
          </p>
          <p className="mt-4 text-base/7 text-pretty">
            Can’t find the answer you’re looking for? Reach out to our team.
            <BackdropButton
              icon={RiTelegram2Line}
              hoverIcon={RiTelegram2Fill}
              href="/contact"
              variant="tertiary"
            >
              customer support
            </BackdropButton>
          </p>
        </div>
        <div className="lg:col-span-7 mt-10 lg:mt-0">
          <Accordion type="single" collapsible>
            {FAQ.map((faq, index) => (
              <AccordionItem
                value={faq.question}
                className={cn("w-full", {
                  "border-b my-2": index !== FAQ.length - 1,
                })}
                key={faq.question}
              >
                <AccordionTrigger>
                  <h3>{faq.question}</h3>
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
