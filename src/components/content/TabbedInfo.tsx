import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { Fragment } from 'react';

const tabs = [
  {
    name: 'Design',
    features: [
      {
        name: 'Adaptive and modular',
        description:
          'The Organize base set allows you to configure and evolve your setup as your items and habits change. The included trays and optional add-ons are easily rearranged to achieve that perfect setup.',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-feature-06-detail-01.jpg',
        imageAlt: 'Maple organizer base with slots, supporting white polycarbonate trays of various sizes.',
      },
    ],
  },
  {
    name: 'Material',
    features: [
      {
        name: 'Natural wood options',
        description:
          'Organize has options for rich walnut and bright maple base materials. Accent your desk with a contrasting material, or match similar woods for a calm and cohesive look. Every base is hand sanded and finished.',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-feature-06-detail-02.jpg',
        imageAlt:
          'Walnut organizer base with pen, sticky note, phone, and bin trays, next to modular drink coaster attachment.',
      },
    ],
  },
  {
    name: 'Considerations',
    features: [
      {
        name: 'Helpful around the home',
        description:
          "Our customers use Organize throughout the house to bring efficiency to many daily routines. Enjoy Organize in your workspace, kitchen, living room, entry way, garage, and more. We can't wait to see how you'll use it!",
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-feature-06-detail-03.jpg',
        imageAlt: 'Walnut organizer base with white polycarbonate trays in the kitchen with various kitchen utensils.',
      },
    ],
  },
  {
    name: 'Included',
    features: [
      {
        name: "Everything you'll need",
        description:
          'The Organize base set includes the pen, phone, small, and large trays to help you group all your essential items. Expand your set with the drink coaster and headphone stand add-ons.',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-feature-06-detail-04.jpg',
        imageAlt: 'Walnut organizer system on black leather desk mat on top of white desk.',
      },
    ],
  },
]

export default function Example() {
  return (
    <div className="bg-white">
      <section aria-labelledby="features-heading" className="mx-auto sm:px-2 lg:px-8 py-32 max-w-7xl">
        <div className="mx-auto px-4 lg:px-0 max-w-2xl lg:max-w-none">
          <div className="max-w-3xl">
            <h2 id="features-heading" className="font-bold text-3xl text-gray-900 sm:text-4xl tracking-tight">
              Technical Specifications
            </h2>
            <p className="mt-4 text-gray-500">
              The Organize modular system offers endless options for arranging your favorite and most used items. Keep
              everything at reach and in its place, while dressing up your workspace.
            </p>
          </div>

          <TabGroup className="mt-4">
            <div className="flex -mx-4 sm:mx-0 overflow-x-auto">
              <div className="flex-auto px-4 sm:px-0 border-gray-200 border-b">
                <TabList className="flex space-x-10 -mb-px">
                  {tabs.map((tab) => (
                    <Tab
                      key={tab.name}
                      className="py-6 data-selected:border-indigo-500 hover:border-gray-300 border-transparent border-b-2 font-medium text-gray-500 text-sm data-selected:text-indigo-600 hover:text-gray-700 whitespace-nowrap"
                    >
                      {tab.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
            </div>

            <TabPanels as={Fragment}>
              {tabs.map((tab) => (
                <TabPanel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
                  {tab.features.map((feature) => (
                    <div key={feature.name} className="flex flex-col-reverse lg:gap-x-8 lg:grid lg:grid-cols-12">
                      <div className="lg:col-span-5 mt-6 lg:mt-0">
                        <h3 className="font-medium text-gray-900 text-lg">{feature.name}</h3>
                        <p className="mt-2 text-gray-500 text-sm">{feature.description}</p>
                      </div>
                      <div className="lg:col-span-7">
                        <img
                          alt={feature.imageAlt}
                          src={feature.imageSrc}
                          className="bg-gray-100 rounded-lg w-full aspect-2/1 object-cover sm:aspect-5/2"
                        />
                      </div>
                    </div>
                  ))}
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>
      </section>
    </div>
  )
}
