"use client";

import {
  callsToAction,
  callsToActionSecondary,
  mainPages,
  seccondaryPages,
  singlePage,
} from "@/lib/constants/navigation/menu";
import { NavigationMenu } from "@/lib/interfaces&types/types";
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
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";
import { ThemeToggle } from "../button/ThemeToggle";

export default function FlyoutMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background">
      <nav
        aria-label="Global"
        className="top-0 z-20 fixed flex justify-between items-center bg-background shadow-sm mx-auto lg:px-8 p-6 border-b w-full font-[Poppins]"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              alt=""
              src="/images/monogram-hq.png"
              className="w-24 h-auto aspect-video object-cover"
              width={200}
              height={100}
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex justify-center items-center -m-2.5 p-2.5 rounded-md"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="lg:flex lg:gap-x-12 hidden">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 font-semibold text-sm/6 cursor-pointer">
              Programs
              <ChevronDownIcon
                aria-hidden="true"
                className="flex-none size-5"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="top-full -left-8 z-10 absolute bg-background data-closed:opacity-0 shadow-lg mt-3 dark:border rounded-3xl ring-1 ring-gray-900/5 w-screen max-w-md transition data-closed:translate-y-1 data-enter:duration-200 data-leave:duration-150 overflow-hidden data-enter:ease-out data-leave:ease-in"
            >
              <div className="p-4">
                {mainPages.map((item: NavigationMenu) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 hover:bg-muted p-4 rounded-lg text-sm/6"
                  >
                    {item.icon && (
                      <div className="flex flex-none justify-center items-center group-hover:bg-accent rounded-lg group-hover:text-accent-foreground size-11">
                        <item.icon aria-hidden="true" className="size-6" />
                      </div>
                    )}
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 font-[Nunito]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group flex justify-center items-center gap-x-2.5 hover:bg-muted p-3 font-[IBMPlexSans] font-semibold text-sm/6"
                  >
                    {item.icon && (
                      <item.icon
                        aria-hidden="true"
                        className="flex-none group-hover:text-secondary size-5"
                      />
                    )}
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          {singlePage.map((item) => (
            <a
              href={item.href}
              key={item.name}
              className="font-semibold text-sm/6"
            >
              {item.name}
            </a>
          ))}

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 font-semibold text-sm/6 cursor-pointer">
              Resources
              <ChevronDownIcon
                aria-hidden="true"
                className="flex-none size-5"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="top-full -left-8 z-10 absolute bg-background data-closed:opacity-0 shadow-lg mt-3 dark:border rounded-3xl ring-1 ring-gray-900/5 w-screen max-w-md transition data-closed:translate-y-1 data-enter:duration-200 data-leave:duration-150 overflow-hidden data-enter:ease-out data-leave:ease-in"
            >
              <div className="p-4">
                {seccondaryPages.map((item: NavigationMenu) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 hover:bg-muted p-4 rounded-lg text-sm/6"
                  >
                    {item.icon && (
                      <div className="flex flex-none justify-center items-center group-hover:bg-accent rounded-lg group-hover:text-accent-foreground size-11">
                        <item.icon aria-hidden="true" className="size-6" />
                      </div>
                    )}
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 font-[Nunito]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5">
                {callsToActionSecondary.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group flex justify-center items-center gap-x-2.5 hover:bg-muted p-3 font-[IBMPlexSans] font-semibold text-sm/6"
                  >
                    {item.icon && (
                      <item.icon
                        aria-hidden="true"
                        className="flex-none group-hover:text-secondary size-5"
                      />
                    )}
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
        </PopoverGroup>
        <div className="lg:flex lg:flex-1 lg:justify-end hidden">
          <ThemeToggle />
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="z-10 fixed inset-0" />
        <DialogPanel className="right-0 z-10 fixed inset-y-0 bg-background px-6 py-6 sm:ring-1 sm:ring-gray-900/10 w-full sm:max-w-sm overflow-y-auto">
          <div className="flex justify-between items-center">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="w-auto h-8"
                width={32}
                height={32}
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 p-2.5 rounded-md"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3 font-[Poppins]">
                  <DisclosureButton className="group flex justify-between items-center py-2 pr-3.5 pl-3 rounded-lg w-full font-semibold text-base/7">
                    Programs
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="flex-none size-5 group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="space-y-2 mt-2">
                    {[...mainPages, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block py-2 pr-3 pl-6 rounded-lg font-[Nunito] font-semibold text-sm/7"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3 font-[Poppins]">
                  <DisclosureButton className="group flex justify-between items-center py-2 pr-3.5 pl-3 rounded-lg w-full font-semibold text-base/7">
                    Resources
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="flex-none size-5 group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="space-y-2 mt-2">
                    {[...seccondaryPages, ...callsToActionSecondary].map(
                      (item) => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block py-2 pr-3 pl-6 rounded-lg font-[Nunito] font-semibold text-sm/7"
                        >
                          {item.name}
                        </DisclosureButton>
                      )
                    )}
                  </DisclosurePanel>
                </Disclosure>
                {singlePage.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block -mx-3 px-3 py-2 rounded-lg font-[Poppins] font-semibold text-base/7"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <ThemeToggle />
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
