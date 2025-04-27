"use client";

import { Fragment } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { usePathname } from "next/navigation";
import { serviceTierInformation } from "@/lib/constants/services/tierInformation";

export default function Page() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const program = pathSegments[2];

  const tiers = serviceTierInformation.filter(
    (tier) => tier.serviceId === program
  );

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto px-6 lg:px-8 max-w-4xl lg:max-w-7xl max-lg:text-center">
        <h1 className="font-semibold text-5xl text-balance sm:text-6xl lg:text-pretty tracking-tight">
          Pricing that grows with your team size
        </h1>
        <p className="max-lg:mx-auto mt-6 max-w-2xl font-medium text-lg text-pretty sm:text-xl/8">
          Choose an affordable plan that’s packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
      </div>
      <div className="relative pt-16 sm:pt-24">
        <div className="top-48 bottom-0 absolute inset-x-0 bg-[radial-gradient(circle_at_center_center,#7775D6,#592E71,#030712_70%)] lg:bg-[radial-gradient(circle_at_center_150%,#7775D6,#592E71,#030712_70%)]" />
        <div className="relative mx-auto px-6 lg:px-8 max-w-2xl lg:max-w-7xl">
          <div className="gap-10 grid grid-cols-1 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.tier}
                className="grid grid-cols-1 shadow-[inset_0_0_2px_1px_#ffffff4d] -m-2 max-lg:mx-auto rounded-[2rem] ring-1 ring-black/5 max-lg:w-full max-lg:max-w-md"
              >
                <div className="grid grid-cols-1 shadow-black/5 shadow-md p-2 rounded-[2rem]">
                  <div className="shadow-2xl p-10 pb-9 rounded-3xl ring-1 ring-black/5">
                    <h2 className="font-semibold text-indigo-600 text-sm">
                      {tier.tier} <span className="sr-only">plan</span>
                    </h2>
                    <p className="mt-2 text-pretty text-sm/6">
                      {tier.introduction}
                    </p>
                    <div className="flex items-center gap-4 mt-8">
                      <div className="font-semibold text-5xl">{tier.price}</div>
                      <div className="text-sm">
                        <p>USD</p>
                        <p>per session</p>
                      </div>
                    </div>
                    <div className="mt-8">
                      <a
                        href={"/programs/start-your-journey"}
                        aria-label={`Start a free trial on the ${tier.tier} plan`}
                        className="inline-block bg-indigo-600 hover:bg-indigo-500 shadow-xs px-3.5 py-2 rounded-md font-semibold text-center text-sm/6 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Start a free trial
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto px-6 lg:px-8 pt-16 sm:pt-24 max-w-2xl lg:max-w-7xl">
        <table className="max-sm:hidden w-full text-left">
          <caption className="sr-only">Pricing plan comparison</caption>
          <colgroup>
            <col className="w-2/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
          </colgroup>
          <thead>
            <tr>
              <td className="p-0" />
              {tiers.map((tier) => (
                <th key={tier.tier} scope="col" className="p-0">
                  <div className="font-semibold text-indigo-600 text-sm">
                    {tier.tier} <span className="sr-only">plan</span>
                  </div>
                </th>
              ))}
            </tr>
            <tr>
              {tiers.map((tier) => (
                <td key={tier.tier} className="px-0 pt-3 pb-0">
                  <a
                    href={tier.tier}
                    aria-label={`Get started with the ${tier.tier} plan`}
                    className="inline-block hover:bg-gray-50 shadow-xs px-2.5 py-1.5 rounded-md ring-1 ring-gray-300 ring-inset font-semibold text-gray-900 text-sm"
                  >
                    Get started
                  </a>
                </td>
              ))}
            </tr>
          </thead>
          {/* {sections.map((section) => (
            <tbody key={section.name} className="group">
              <tr>
                <th scope="colgroup" colSpan={4} className="px-0 pt-10 group-first-of-type:pt-5 pb-0">
                  <div className="bg-gray-50 -mx-4 px-4 py-3 rounded-lg font-semibold text-sm/6">
                    {section.name}
                  </div>
                </th>
              </tr>
              {section.features.map((feature) => (
                <tr key={feature.name} className="border-gray-100 border-b last:border-none">
                  <th scope="row" className="px-0 py-4 font-normal text-sm/6">
                    {feature.name}
                  </th>
                  {tiers.map((tier) => (
                    <td key={tier.name} className="p-4 max-sm:text-center">
                      {typeof feature.tiers[tier.name] === 'string' ? (
                        <>
                          <span className="sr-only">{tier.name} includes:</span>
                          <span className="text-sm/6">{feature.tiers[tier.name]}</span>
                        </>
                      ) : (
                        <>
                          {feature.tiers[tier.name] === true ? (
                            <CheckIcon aria-hidden="true" className="inline-block size-4 fill-green-600" />
                          ) : (
                            <MinusIcon aria-hidden="true" className="inline-block size-4 fill-gray-400" />
                          )}

                          <span className="sr-only">
                            {feature.tiers[tier.name] === true
                              ? `Included in ${tier.name}`
                              : `Not included in ${tier.name}`}
                          </span>
                        </>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          ))} */}
        </table>
        <TabGroup className="sm:hidden">
          <TabList className="flex">
            {tiers.map((tier) => (
              <Tab
                key={tier.tier}
                className="[&:not([data-focus])]:focus:outline-hidden py-4 border-gray-100 data-selected:border-indigo-600 border-b w-1/3 font-medium text-base/8 text-indigo-600"
              >
                {tier.tier}
              </Tab>
            ))}
          </TabList>
          <TabPanels as={Fragment}>
            {tiers.map((tier) => (
              <TabPanel key={tier.tier}>
                <a
                  href={tier.tier}
                  className="block hover:bg-gray-50 shadow-xs mt-8 px-3.5 py-2.5 rounded-md ring-1 ring-gray-300 ring-inset font-semibold text-center text-gray-900 text-sm"
                >
                  Get started
                </a>
                {/* {sections.map((section) => (
                  <Fragment key={section.name}>
                    <div className="bg-gray-50 -mx-6 mt-10 group-first-of-type:mt-5 px-6 py-3 rounded-lg font-semibold text-sm/6">
                      {section.name}
                    </div>
                    <dl>
                      {section.features.map((feature) => (
                        <div
                          key={feature.name}
                          className="grid grid-cols-2 py-4 border-gray-100 border-b last:border-none"
                        >
                          <dt className="font-normal text-sm/6">{feature.name}</dt>
                          <dd className="text-center">
                            {typeof feature.tiers[tier.name] === 'string' ? (
                              <span className="text-sm/6">{feature.tiers[tier.name]}</span>
                            ) : (
                              <>
                                {feature.tiers[tier.name] === true ? (
                                  <CheckIcon aria-hidden="true" className="inline-block size-4 fill-green-600" />
                                ) : (
                                  <MinusIcon aria-hidden="true" className="inline-block size-4 fill-gray-400" />
                                )}

                                <span className="sr-only">{feature.tiers[tier.name] === true ? 'Yes' : 'No'}</span>
                              </>
                            )}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </Fragment>
                ))} */}
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
