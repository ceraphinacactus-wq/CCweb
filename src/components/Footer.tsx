import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

export function Footer() {
  const navigation = [
    { label: "Home", href: "/" },
    { label: "Care Guide", href: "/care" },
    { label: "Soil Blends", href: "/products" },
    { label: "Markets", href: "/markets" },
    { label: "Contact", href: "/contact" },
  ];

  const social = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/",
      icon: <Facebook />,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/",
      icon: <Instagram />,
    },
  ];

  return (
    <footer className="border-t border-ceraphina-border bg-white">
      <Container>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/img/logo.png"
                alt="Ceraphina Cactus"
                width={36}
                height={36}
                className="h-9 w-9"
              />
              <span className="text-xl font-semibold text-ceraphina-cactus">
                Ceraphina Cactus
              </span>
            </Link>

            <p className="mt-4 max-w-md text-sm text-ceraphina-muted">
              Colorado Springs micro nursery focused on healthy columnar cacti,
              mineral-forward soil blends, and beginner-friendly plant care.
            </p>

            <p className="mt-4 text-sm text-ceraphina-muted">
              Local pickup • Market events • Care guidance
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ceraphina-cactus">
              Explore
            </h3>
            <div className="mt-4 flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-2 py-2 text-sm text-ceraphina-muted transition hover:bg-ceraphina-accentGreenSoft hover:text-ceraphina-purple"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ceraphina-cactus">
              Follow Us
            </h3>

            <div className="mt-4 flex items-center gap-4">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-ceraphina-border bg-white text-ceraphina-cactus transition hover:bg-ceraphina-accentGreenSoft hover:text-ceraphina-purple"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-ceraphina-border bg-ceraphina-surface p-4">
              <p className="text-sm font-medium text-ceraphina-cactus">
                Need help choosing a mix?
              </p>
              <p className="mt-2 text-sm text-ceraphina-muted">
                Reach out for help with soil blends, top dress choices, and
                first-time repotting.
              </p>
              <div className="mt-4">
                <Link href="/contact" className="btn-secondary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-ceraphina-border px-6 py-6 text-center text-sm text-ceraphina-muted">
          © {new Date().getFullYear()} Ceraphina Cactus. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

const Facebook = ({ size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);

const Instagram = ({ size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);