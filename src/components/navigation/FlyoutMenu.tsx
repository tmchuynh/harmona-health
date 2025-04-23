"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function FlyoutMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="flex justify-between items-center mx-auto lg:px-8 p-6 max-w-7xl"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="w-auto h-8"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex justify-center items-center -m-2.5 p-2.5 rounded-md text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="lg:flex lg:gap-x-12 hidden">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 font-semibold text-gray-900 text-sm/6">
              Product
              <ChevronDownIcon
                aria-hidden="true"
                className="flex-none text-gray-400 size-5"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="top-full -left-8 z-10 absolute bg-white data-closed:opacity-0 shadow-lg mt-3 rounded-3xl ring-1 ring-gray-900/5 w-screen max-w-md transition data-closed:translate-y-1 data-enter:duration-200 data-leave:duration-150 overflow-hidden data-enter:ease-out data-leave:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 hover:bg-gray-50 p-4 rounded-lg text-sm/6"
                  >
                    <div className="flex flex-none justify-center items-center bg-gray-50 group-hover:bg-white rounded-lg size-11">
                      <item.icon
                        aria-hidden="true"
                        className="text-gray-600 group-hover:text-indigo-600 size-6"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 bg-gray-50 divide-x divide-gray-900/5">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex justify-center items-center gap-x-2.5 hover:bg-gray-100 p-3 font-semibold text-gray-900 text-sm/6"
                  >
                    <item.icon
                      aria-hidden="true"
                      className="flex-none text-gray-400 size-5"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a href="#" className="font-semibold text-gray-900 text-sm/6">
            Features
          </a>
          <a href="#" className="font-semibold text-gray-900 text-sm/6">
            Marketplace
          </a>
          <a href="#" className="font-semibold text-gray-900 text-sm/6">
            Company
          </a>
        </PopoverGroup>
        <div className="lg:flex lg:flex-1 lg:justify-end hidden">
          <a href="#" className="font-semibold text-gray-900 text-sm/6">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="z-10 fixed inset-0" />
        <DialogPanel className="right-0 z-10 fixed inset-y-0 bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10 w-full sm:max-w-sm overflow-y-auto">
          <div className="flex justify-between items-center">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="w-auto h-8"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 p-2.5 rounded-md text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex justify-between items-center hover:bg-gray-50 py-2 pr-3.5 pl-3 rounded-lg w-full font-semibold text-base/7 text-gray-900">
                    Product
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="flex-none size-5 group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="space-y-2 mt-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block hover:bg-gray-50 py-2 pr-3 pl-6 rounded-lg font-semibold text-gray-900 text-sm/7"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="block hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg font-semibold text-base/7 text-gray-900"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="block hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg font-semibold text-base/7 text-gray-900"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="block hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg font-semibold text-base/7 text-gray-900"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="block hover:bg-gray-50 -mx-3 px-3 py-2.5 rounded-lg font-semibold text-base/7 text-gray-900"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
