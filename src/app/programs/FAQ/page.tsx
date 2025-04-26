"use client";

import DynamicButton from "@/components/button/button-dynamic";
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
