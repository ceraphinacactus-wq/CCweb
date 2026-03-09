"use client";

import Link from "next/link";
import { ReactNode } from "react";

type PageShellProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export default function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: PageShellProps) {
  return (
    <main className="min-h-screen bg-[var(--ceraphina-bg,#ffffff)] text-[var(--ceraphina-text,#17331f)]">
      <section className="border-b border-[var(--ceraphina-border,#d7e6d9)] bg-gradient-to-b from-[var(--ceraphina-surface,#f8faf8)] to-white">
        <div className="mx-auto max-w-5xl px-6 py-14 md:px-8 md:py-20">
          {eyebrow ? (
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ceraphina-cactus,#2f6b3d)]">
              {eyebrow}
            </p>
          ) : null}

          

          {intro ? (
            <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--ceraphina-muted,#5f7466)] md:text-lg">
              {intro}
            </p>
          ) : null}

         
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 md:px-8 md:py-16">
        <div className="">
          {children}
        </div>
      </section>
    </main>
  );
}