"use client";

import {
  aboutPages,
  mainPages,
  secondaryPages,
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
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "../button/ThemeToggle";

export default function FlyoutMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav
        aria-label="Global"
        className="top-0 z-20 fixed flex justify-between items-center bg-secondary dark:bg-sidebar-primary shadow-sm mx-auto lg:px-8 p-6 w-full font-[Poppins] text-secondary-foreground"
      >
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
          <Link href={"/"} key={"home"} className="font-semibold text-sm/6">
            Home
          </Link>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 font-semibold text-sm/6 cursor-pointer">
              About HH
              <ChevronDownIcon
                aria-hidden="true"
                className="flex-none size-5"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="top-full -left-8 z-10 absolute bg-background data-closed:opacity-0 shadow-lg mt-3 dark:border rounded-3xl ring-1 ring-gray-900/5 w-screen max-w-md text-foreground transition data-closed:translate-y-1 data-enter:duration-200 data-leave:duration-150 overflow-hidden data-enter:ease-out data-leave:ease-in"
            >
              <div className="p-4">
                {aboutPages.map((item: NavigationMenu) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 hover:bg-muted p-4 rounded-lg text-sm/6"
                  >
                    {item.icon && (
                      <div className="flex flex-none justify-center items-center bg-primary group-hover:bg-secondary rounded-lg text-primary-foreground group-hover:text-secondary-foreground size-11">
                        <item.icon aria-hidden="true" className="size-6" />
                      </div>
                    )}
                    <div className="flex-auto dark:group-hover:text-background">
                      <a href={item.href} className="block font-semibold">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 font-[Nunito]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
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
              className="top-full -left-8 z-10 absolute bg-background data-closed:opacity-0 shadow-lg mt-3 dark:border rounded-3xl ring-1 ring-gray-900/5 w-screen max-w-md text-foreground transition data-closed:translate-y-1 data-enter:duration-200 data-leave:duration-150 overflow-hidden data-enter:ease-out data-leave:ease-in"
            >
              <div className="p-4">
                {mainPages.map((item: NavigationMenu) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 hover:bg-muted p-4 rounded-lg text-sm/6"
                  >
                    {item.icon && (
                      <div className="flex flex-none justify-center items-center bg-primary group-hover:bg-secondary rounded-lg text-primary-foreground group-hover:text-secondary-foreground size-11">
                        <item.icon aria-hidden="true" className="size-6" />
                      </div>
                    )}
                    <div className="flex-auto dark:group-hover:text-background">
                      <a href={item.href} className="block font-semibold">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 font-[Nunito]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

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
              className="top-full -left-8 z-10 absolute bg-background data-closed:opacity-0 shadow-lg mt-3 dark:border rounded-3xl ring-1 ring-gray-900/5 w-screen max-w-md text-foreground transition data-closed:translate-y-1 data-enter:duration-200 data-leave:duration-150 overflow-hidden data-enter:ease-out data-leave:ease-in"
            >
              <div className="p-4">
                {secondaryPages.map((item: NavigationMenu) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 hover:bg-muted p-4 rounded-lg text-sm/6"
                  >
                    {item.icon && (
                      <div className="flex flex-none justify-center items-center bg-primary group-hover:bg-secondary rounded-lg text-primary-foreground group-hover:text-secondary-foreground size-11">
                        <item.icon aria-hidden="true" className="size-6" />
                      </div>
                    )}
                    <div className="flex-auto dark:group-hover:text-background">
                      <a href={item.href} className="block font-semibold">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 font-[Nunito]">{item.description}</p>
                    </div>
                  </div>
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
        <div className="z-20 fixed inset-0" />
        <DialogPanel className="right-0 z-20 fixed inset-y-0 bg-background px-6 py-6 sm:ring-1 sm:ring-gray-900/10 w-full sm:max-w-sm overflow-y-auto">
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 p-2.5 rounded-md"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="relative mt-6 h-screen flow-root">
            <div className="-my-6 pb-12 divide-y divide-gray-500/10">
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
                    {[...mainPages].map((item) => (
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
                    {[...secondaryPages].map((item) => (
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
