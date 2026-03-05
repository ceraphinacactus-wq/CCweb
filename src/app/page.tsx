// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-14 pb-10 sm:pt-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="inline-flex items-center rounded-full border px-3 py-1 text-sm">
              Colorado Springs micro nursery • Markets • Local pickup
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Ceraphina Cactus
            </h1>

            <p className="mt-4 text-lg text-neutral-600">
              Healthy, happy columnar cacti and mineral-forward soil blends made
              for strong roots, fast growth, and easy care.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/care"
                className="rounded-xl bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90"
              >
                View Care Guide
              </Link>

              <Link
                href="/products"
                className="rounded-xl border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
              >
                Browse Soil + Top Dress
              </Link>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
              >
                Visit Facebook
              </a>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <Stat label="Market-ready" value="Weekly" />
              <Stat label="Soil blends" value="Active Cactus" />
              <Stat label="Local focus" value="Colorado Springs" />
            </div>
          </div>

          {/* “Image” card (no dependency on assets) */}
          <div className="rounded-3xl border bg-gradient-to-b from-neutral-50 to-white p-6 shadow-sm">
            <div className="rounded-2xl border bg-white p-6">
              <p className="text-sm font-medium text-neutral-500">
                Featured lineup
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                Active Cactus Soil Blends
              </h2>

              <p className="mt-3 text-neutral-600">
                Two core mixes + three top dresses built for drainage, airflow,
                and long-term root health.
              </p>

              <div className="mt-6 grid gap-3">
                <Item
                  title="Basic Cactus Soil"
                  desc="Balanced everyday mix for most cacti."
                />
                <Item
                  title="Premium Mineral Cactus Soil"
                  desc="Extra-mineral blend for fast drainage and stability."
                />
                <Item
                  title="Top Dress: High Country / Desert Mineral / Sacred Energy"
                  desc="Dial in moisture, aesthetics, and texture."
                />
              </div>

              <div className="mt-6">
                <Link
                  href="/products"
                  className="inline-flex rounded-xl bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90"
                >
                  See products + pricing
                </Link>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border bg-white p-5">
              <p className="text-sm font-medium">What we’re about</p>
              <ul className="mt-3 space-y-2 text-sm text-neutral-600">
                <li>• Healthy plants, clean pots, honest descriptions</li>
                <li>• Mineral-forward mixes (drainage first)</li>
                <li>• Friendly guidance for beginners + collectors</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="border-t bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-xl font-semibold tracking-tight">
            Start here
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Card
              title="Care Guide"
              desc="Our simple SoCo care basics—light, water, soil, and seasonal tips."
              href="/care"
              cta="Open guide"
            />
            <Card
              title="Products"
              desc="Active Cactus Soil Blends + top dress options for repotting and finishing."
              href="/products"
              cta="View products"
            />
            <Card
              title="Markets"
              desc="Find us locally—dates, locations, and what we’re bringing."
              href="/markets"
              cta="See schedule"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="rounded-3xl border bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">
                Want a starter kit for your first repot?
              </h3>
              <p className="mt-2 text-neutral-600">
                We’ll help you choose a cactus, the right soil, and the perfect
                top dress—easy, clean, and beginner-friendly.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90"
              >
                Contact us
              </Link>
              <Link
                href="/products"
                className="rounded-xl border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
              >
                Build a kit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border bg-white p-4">
      <div className="text-sm text-neutral-500">{label}</div>
      <div className="mt-1 text-lg font-semibold">{value}</div>
    </div>
  );
}

function Item({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border p-4">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-sm text-neutral-600">{desc}</div>
    </div>
  );
}

function Card({
  title,
  desc,
  href,
  cta,
}: {
  title: string;
  desc: string;
  href: string;
  cta: string;
}) {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">
      <div className="text-lg font-semibold tracking-tight">{title}</div>
      <p className="mt-2 text-sm text-neutral-600">{desc}</p>
      <div className="mt-5">
        <Link
          href={href}
          className="inline-flex rounded-xl border px-4 py-2 text-sm font-medium hover:bg-neutral-50"
        >
          {cta}
        </Link>
      </div>
    </div>
  );
}