"use client";

import { useState } from "react";
import { Radio, RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { cn } from "@/lib/utils";

const frequencies = [
  { value: "monthly" as const, label: "Monthly", priceSuffix: "/month" },
  { value: "annually" as const, label: "Annually", priceSuffix: "/year" },
];
const tiers = [
  {
    name: "Freelancer",
    id: "tier-freelancer",
    href: "#",
    price: { monthly: "$19", annually: "$199" },
    description: "The essentials to provide your best work for clients.",
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
    ],
    featured: false,
    cta: "Buy plan",
  },
  {
    name: "Startup",
    id: "tier-startup",
    href: "#",
    price: { monthly: "$29", annually: "$299" },
    description: "A plan that scales with your rapidly growing business.",
    features: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
      "Marketing automations",
    ],
    featured: false,
    cta: "Buy plan",
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    price: "Custom",
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "1-hour, dedicated support response time",
      "Marketing automations",
      "Custom reporting tools",
    ],
    featured: true,
    cta: "Contact sales",
  },
];

export default function SimpleThreeTier() {
  const [frequency, setFrequency] = useState(frequencies[0]);

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-semibold text-base/7 text-indigo-600">Pricing</h2>
          <p className="mt-2 font-semibold text-5xl text-balance sm:text-6xl tracking-tight">
            Pricing that grows with you
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl font-medium text-center text-lg text-pretty sm:text-xl/8">
          Choose an affordable plan that’s packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
        <div className="flex justify-center mt-16">
          <fieldset aria-label="Payment frequency">
            <RadioGroup
              value={frequency}
              onChange={setFrequency}
              className="gap-x-1 grid grid-cols-2 p-1 rounded-full ring-1 ring-gray-200 ring-inset font-semibold text-center text-xs/5"
            >
              {frequencies.map((option) => (
                <Radio
                  key={option.value}
                  value={option}
                  className="px-2.5 py-1 rounded-full cursor-pointer data-checked: data-checked:"
                >
                  {option.label}
                </Radio>
              ))}
            </RadioGroup>
          </fieldset>
        </div>
        <div className="gap-8 grid grid-cols-1 lg:grid-cols-3 mx-auto lg:mx-0 mt-10 max-w-md lg:max-w-none isolate">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={cn(
                tier.featured ? " ring-gray-900" : "ring-gray-200",
                "rounded-3xl p-8 ring-1 xl:p-10"
              )}
            >
              <h3
                id={tier.id}
                className={cn(
                  tier.featured ? "" : "",
                  "text-lg/8 font-semibold"
                )}
              >
                {tier.name}
              </h3>
              <p className={cn(tier.featured ? "" : "", "mt-4 text-sm/6")}>
                {tier.description}
              </p>
              <p className="flex items-baseline gap-x-1 mt-6">
                <span
                  className={cn(
                    tier.featured ? "" : "",
                    "text-4xl font-semibold tracking-tight"
                  )}
                >
                  {typeof tier.price === "string"
                    ? tier.price
                    : tier.price[frequency.value as keyof typeof tier.price]}
                </span>
                {typeof tier.price !== "string" ? (
                  <span
                    className={cn(
                      tier.featured ? "" : "",
                      "text-sm/6 font-semibold"
                    )}
                  >
                    {frequency.priceSuffix}
                  </span>
                ) : null}
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={cn(
                  tier.featured
                    ? "   focus-visible:outline-white"
                    : "  shadow-xs  focus-visible:outline-indigo-600",
                  "mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2"
                )}
              >
                {tier.cta}
              </a>
              <ul
                role="list"
                className={cn(
                  tier.featured ? "" : "",
                  "mt-8 space-y-3 text-sm/6 xl:mt-10"
                )}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className={cn(
                        tier.featured ? "" : "text-indigo-600",
                        "h-6 w-5 flex-none"
                      )}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
