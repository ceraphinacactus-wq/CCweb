"use client";

import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

const SQUARE_STORE_URL = "https://ceraphina-cactus.square.site/";

export const Navbar = () => {
  const navigation = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Care Guide", href: "/care" },
    { label: "Products", href: "/products" },
    { label: "Mission", href: "/mission" },
    
  ];

  return (
    <div className="w-full border-b border-ceraphina-border bg-white">
      <nav className="container relative mx-auto flex flex-wrap items-center justify-between p-6 lg:justify-between xl:px-1">
        {/* Logo */}
        <Link href="/" className="brand-link flex items-center gap-3">
          <Image
            src="/img/logo.png"
            width={32}
            height={32}
            alt="Ceraphina Cactus"
            className="w-8 h-8"
            priority
          />
          <span className="text-lg font-semibold text-ceraphina-cactus">
            Ceraphina Cactus
          </span>
        </Link>

        {/* Right side */}
        <div className="nav__item mr-2 ml-auto flex gap-3 lg:order-2 lg:ml-0">
          <ThemeChanger />

          <div className="nav__item hidden lg:flex">
            <a
              href={SQUARE_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
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
                className="rounded-md px-2 py-1 text-ceraphina-cactus hover:text-ceraphina-purple focus:bg-ceraphina-accentGreenSoft focus:text-ceraphina-purple focus:outline-none lg:hidden"
              >
                <svg
                  className="h-6 w-6 fill-current"
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

              <Disclosure.Panel className="my-5 flex w-full flex-wrap rounded-2xl border border-ceraphina-border bg-ceraphina-surface p-3 lg:hidden">
                <>
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="w-full rounded-xl px-4 py-3 text-ceraphina-cactus transition hover:bg-ceraphina-accentGreenSoft hover:text-ceraphina-purple focus:bg-ceraphina-accentGreenSoft focus:text-ceraphina-purple focus:outline-none"
                    >
                      {item.label}
                    </Link>
                  ))}

                  <a
                    href={SQUARE_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-3 w-full text-center"
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
          <ul className="flex flex-1 items-center justify-end pt-6 lg:pt-0">
            {navigation.map((item) => (
              <li className="mr-2 nav__item" key={item.href}>
                <Link
                  href={item.href}
                  className="inline-block rounded-xl px-4 py-2 text-base font-medium text-ceraphina-cactus no-underline transition hover:bg-ceraphina-accentGreenSoft hover:text-ceraphina-purple focus:bg-ceraphina-accentGreenSoft focus:text-ceraphina-purple focus:outline-none"
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