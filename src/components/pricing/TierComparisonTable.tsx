import { Fragment } from "react";
import { CheckIcon, MinusIcon } from "@heroicons/react/20/solid";

type TierName = "Starter" | "Growth" | "Scale";

const tiers: Tier[] = [
  {
    name: "Starter",
    id: "tier-starter",
    href: "#",
    priceMonthly: "$19",
    mostPopular: false,
  },
  {
    name: "Growth",
    id: "tier-growth",
    href: "#",
    priceMonthly: "$49",
    mostPopular: true,
  },
  {
    name: "Scale",
    id: "tier-scale",
    href: "#",
    priceMonthly: "$99",
    mostPopular: false,
  },
];

interface Tier {
  name: TierName;
  id: string;
  href: string;
  priceMonthly: string;
  mostPopular?: boolean;
}
interface FeatureTiers {
  Starter: boolean | string;
  Growth: boolean | string;
  Scale: boolean | string;
}

interface Feature {
  name: string;
  tiers: FeatureTiers;
}

interface Section {
  name: string;
  features: Feature[];
}

const sections: Section[] = [
  {
    name: "Features",
    features: [
      {
        name: "Edge content delivery",
        tiers: { Starter: true, Growth: true, Scale: true },
      },
      {
        name: "Custom domains",
        tiers: { Starter: "1", Growth: "3", Scale: "Unlimited" },
      },
      {
        name: "Team members",
        tiers: { Starter: "3", Growth: "20", Scale: "Unlimited" },
      },
      {
        name: "Single sign-on (SSO)",
        tiers: { Starter: false, Growth: false, Scale: true },
      },
    ],
  },
  {
    name: "Reporting",
    features: [
      {
        name: "Advanced analytics",
        tiers: { Starter: true, Growth: true, Scale: true },
      },
      {
        name: "Basic reports",
        tiers: { Starter: false, Growth: true, Scale: true },
      },
      {
        name: "Professional reports",
        tiers: { Starter: false, Growth: false, Scale: true },
      },
      {
        name: "Custom report builder",
        tiers: { Starter: false, Growth: false, Scale: true },
      },
    ],
  },
  {
    name: "Support",
    features: [
      {
        name: "24/7 online support",
        tiers: { Starter: true, Growth: true, Scale: true },
      },
      {
        name: "Quarterly workshops",
        tiers: { Starter: false, Growth: true, Scale: true },
      },
      {
        name: "Priority phone support",
        tiers: { Starter: false, Growth: false, Scale: true },
      },
      {
        name: "1:1 onboarding tour",
        tiers: { Starter: false, Growth: false, Scale: true },
      },
    ],
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-semibold text-base/7 text-indigo-600">Pricing</h2>
          <p className="mt-2 font-semibold text-5xl text-balance text-gray-900 sm:text-6xl tracking-tight">
            Pricing that grows with you
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl font-medium text-center text-gray-600 text-lg text-pretty sm:text-xl/8">
          Choose an affordable plan that’s packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>

        {/* xs to lg */}
        <div className="space-y-8 lg:hidden mx-auto mt-12 sm:mt-16 max-w-md">
          {tiers.map((tier) => (
            <section
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? "rounded-xl bg-gray-400/5 ring-1 ring-gray-200 ring-inset"
                  : "",
                "p-8"
              )}
            >
              <h3
                id={tier.id}
                className="font-semibold text-gray-900 text-sm/6"
              >
                {tier.name}
              </h3>
              <p className="flex items-baseline gap-x-1 mt-2 text-gray-900">
                <span className="font-semibold text-4xl">
                  {tier.priceMonthly}
                </span>
                <span className="font-semibold text-sm">/month</span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "bg-indigo-600 text-white hover:bg-indigo-500"
                    : "text-indigo-600 ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300",
                  "mt-8 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                )}
              >
                Buy plan
              </a>
              <ul
                role="list"
                className="space-y-4 mt-10 text-gray-900 text-sm/6"
              >
                {sections.map((section) => (
                  <li key={section.name}>
                    <ul role="list" className="space-y-4">
                      {section.features.map((feature) =>
                        feature.tiers[tier.name] ? (
                          <li key={feature.name} className="flex gap-x-3">
                            <CheckIcon
                              aria-hidden="true"
                              className="flex-none w-5 h-6 text-indigo-600"
                            />
                            <span>
                              {feature.name}{" "}
                              {typeof feature.tiers[tier.name] === "string" ? (
                                <span className="text-gray-500 text-sm/6">
                                  ({feature.tiers[tier.name]})
                                </span>
                              ) : null}
                            </span>
                          </li>
                        ) : null
                      )}
                    </ul>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* lg+ */}
        <div className="lg:block hidden mt-20 isolate">
          <div className="relative -mx-8">
            {tiers.some((tier) => tier.mostPopular) ? (
              <div className="-z-10 absolute inset-x-4 inset-y-0 flex">
                <div
                  style={{
                    marginLeft: `${
                      (tiers.findIndex((tier) => tier.mostPopular) + 1) * 25
                    }%`,
                  }}
                  aria-hidden="true"
                  className="flex px-4 w-1/4"
                >
                  <div className="bg-gray-400/5 border-gray-900/10 border-x border-t rounded-t-xl w-full" />
                </div>
              </div>
            ) : null}
            <table className="table-fixed border-separate border-spacing-x-8 w-full text-left">
              <caption className="sr-only">Pricing plan comparison</caption>
              <colgroup>
                <col className="w-1/4" />
                <col className="w-1/4" />
                <col className="w-1/4" />
                <col className="w-1/4" />
              </colgroup>
              <thead>
                <tr>
                  <td />
                  {tiers.map((tier) => (
                    <th
                      key={tier.id}
                      scope="col"
                      className="px-6 xl:px-8 pt-6 xl:pt-8"
                    >
                      <div className="font-semibold text-gray-900 text-sm/7">
                        {tier.name}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <span className="sr-only">Price</span>
                  </th>
                  {tiers.map((tier) => (
                    <td key={tier.id} className="px-6 xl:px-8 pt-2">
                      <div className="flex items-baseline gap-x-1 text-gray-900">
                        <span className="font-semibold text-4xl">
                          {tier.priceMonthly}
                        </span>
                        <span className="font-semibold text-sm/6">/month</span>
                      </div>
                      <a
                        href={tier.href}
                        className={classNames(
                          tier.mostPopular
                            ? "bg-indigo-600 text-white hover:bg-indigo-500"
                            : "text-indigo-600 ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300",
                          "mt-8 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        )}
                      >
                        Buy plan
                      </a>
                    </td>
                  ))}
                </tr>
                {sections.map((section, sectionIdx) => (
                  <Fragment key={section.name}>
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan={4}
                        className={classNames(
                          sectionIdx === 0 ? "pt-8" : "pt-16",
                          "pb-4 text-sm/6 font-semibold text-gray-900"
                        )}
                      >
                        {section.name}
                        <div className="absolute inset-x-8 bg-gray-900/10 mt-4 h-px" />
                      </th>
                    </tr>
                    {section.features.map((feature) => (
                      <tr key={feature.name}>
                        <th
                          scope="row"
                          className="py-4 font-normal text-gray-900 text-sm/6"
                        >
                          {feature.name}
                          <div className="absolute inset-x-8 bg-gray-900/5 mt-4 h-px" />
                        </th>
                        {tiers.map((tier) => (
                          <td key={tier.id} className="px-6 xl:px-8 py-4">
                            {typeof feature.tiers[tier.name] === "string" ? (
                              <div className="text-center text-gray-500 text-sm/6">
                                {feature.tiers[tier.name]}
                              </div>
                            ) : (
                              <>
                                {feature.tiers[tier.name] === true ? (
                                  <CheckIcon
                                    aria-hidden="true"
                                    className="mx-auto text-indigo-600 size-5"
                                  />
                                ) : (
                                  <MinusIcon
                                    aria-hidden="true"
                                    className="mx-auto text-gray-400 size-5"
                                  />
                                )}

                                <span className="sr-only">
                                  {feature.tiers[tier.name] === true
                                    ? "Included"
                                    : "Not included"}{" "}
                                  in {tier.name}
                                </span>
                              </>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
