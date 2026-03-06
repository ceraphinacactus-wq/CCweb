"use client";

import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

const SQUARE_STORE_URL = "https://ceraphina-cactus.square.site/";

export const Navbar = () => {
  const navigation = [
    { label: "Home", href: "/" },
    { label: "Care Guide", href: "/care" },
    { label: "Soil Blends", href: "/products" },
    { label: "Markets", href: "/markets" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
          <span>
            <Image
              src="/img/logo.png"
              width={32}
              height={32}
              alt="Ceraphina Cactus"
              className="w-8"
              priority
            />
          </span>
          <span>Ceraphina Cactus</span>
        </Link>

        {/* Right side (theme + button) */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <ThemeChanger />

          <div className="hidden mr-3 lg:flex nav__item">
            <a
              href={SQUARE_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
            >
              Shop (Square)
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                <>
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                    >
                      {item.label}
                    </Link>
                  ))}

                  <a
                    href={SQUARE_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-6 py-2 mt-3 text-center text-white bg-#2E6021 rounded-md"
                  >
                    Shop (Square)
                  </a>
                </>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* Desktop menu */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((item) => (
              <li className="mr-3 nav__item" key={item.href}>
                <Link
                  href={item.href}
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};