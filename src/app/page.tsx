// app/page.tsx
import Link from "next/link";
import HomeCarousel from "@/components/homecarousel";

const SQUARE_STORE_URL = "https://ceraphina-cactus.square.site/";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-ceraphina-text">
      {/* HERO */}
      
      
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-14 sm:pt-20">
        <HomeCarousel />
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="inline-flex items-center rounded-full border border-ceraphina-border bg-ceraphina-accentGreenSoft px-3 py-1 text-sm text-ceraphina-cactus">
              Colorado Springs micro nursery • Markets • Local pickup
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-ceraphina-cactus sm:text-5xl">
              Ceraphina Cactus
            </h1>

            <p className="mt-4 text-lg text-ceraphina-muted">
              Healthy, happy columnar cacti and mineral-forward soil blends made
              for strong roots, fast growth, and easy care.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/care" className="btn-primary">
                View Care Guide
              </Link>

              <Link href="/products" className="btn-secondary">
                Browse Soil + Top Dress
              </Link>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
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

          <div className="rounded-3xl border border-ceraphina-border bg-gradient-to-b from-ceraphina-accentGreenSoft to-white p-6 shadow-sm">
            <div className="rounded-2xl border border-ceraphina-border bg-white p-6">
              <p className="text-sm font-medium text-ceraphina-muted">
                Featured lineup
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ceraphina-cactus">
                Active Cactus Soil Blends
              </h2>

              <p className="mt-3 text-ceraphina-muted">
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
                <Link href="/products" className="btn-primary">
                  See products + pricing
                </Link>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-ceraphina-border bg-white p-5">
              <p className="text-sm font-medium text-ceraphina-cactus">
                What we’re about
              </p>
              <ul className="mt-3 space-y-2 text-sm text-ceraphina-muted">
                <li>• Healthy plants, clean pots, honest descriptions</li>
                <li>• Mineral-forward mixes (drainage first)</li>
                <li>• Friendly guidance for beginners + collectors</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="border-t border-ceraphina-border bg-ceraphina-surface">
        <div className="mx-auto max-w-6xl px-6 py-12">
         

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Card
              title="Care Guide"
              desc="The Ceraphina Cactus care guide provides practical tips for growing columnar cacti in homes and outdoor spaces 
                so growers of any experience level can care for their plants with confidence."
              href="/care"
              cta="Open guide"
            />
            <Card
              title="Products"
              desc="Active Cactus Soil Blends and mineral top dress options provide the balanced foundation columnar cacti need for healthy roots, proper drainage, and strong growth."
              href="/products"
              cta="View products"
            />
            <Card
              title="Mission"
              desc=" Our mission at Ceraphina Cactus is to cultivate healthy, resilient
          cactus plants while promoting stewardship, creating positive living
          spaces, and making growth easy."
              href="/mission"
              cta="See schedule"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="rounded-3xl border border-ceraphina-border bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-ceraphina-cactus">
                Want a starter kit for your first repot?
              </h3>
              <p className="mt-2 text-ceraphina-muted">
                We’ll help you choose a cactus, the right soil, and the perfect
                top dress—easy, clean, and beginner-friendly.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/products" className="btn-primary">
                View Products
              </Link>
              <Link href={SQUARE_STORE_URL} className="btn-secondary">
                Shop Products 
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
    <div className="rounded-2xl border border-ceraphina-border bg-white p-4">
      <div className="text-sm text-ceraphina-muted">{label}</div>
      <div className="mt-1 text-lg font-semibold text-ceraphina-cactus">
        {value}
      </div>
    </div>
  );
}

function Item({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-ceraphina-border bg-white p-4">
      <div className="text-sm font-semibold text-ceraphina-cactus">{title}</div>
      <div className="mt-1 text-sm text-ceraphina-muted">{desc}</div>
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
    <div className="rounded-3xl border border-ceraphina-border bg-white p-6 shadow-sm">
      <div className="text-lg font-semibold tracking-tight text-ceraphina-cactus">
        {title}
      </div>
      <p className="mt-2 text-sm text-ceraphina-muted">{desc}</p>
      <div className="mt-5">
        <Link href={href} className="btn-secondary">
          {cta}
        </Link>
      </div>
    </div>
  );
}