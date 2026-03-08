import PageShell from "@/components/PageShell";

export default function Page() {
  return (
    <PageShell
      eyebrow="Mission"
      title="Helping people grow beautiful cactus with stewardship, confidence, and ease."
      intro="Ceraphina Cactus exists to cultivate healthy, resilient ornamental cactus plants while making growth easy through practical education, thoughtful products, and respect for the natural world."
    >
      <section className="rounded-3xl border border-[var(--ceraphina-border,#d7e6d9)] bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-semibold text-[var(--ceraphina-cactus,#2f6b3d)]">
          Mission Statement
        </h2>
        <p className="mt-4 text-base leading-7 text-[var(--ceraphina-text,#17331f)]">
          Our mission at Ceraphina Cactus is to cultivate healthy, resilient
          cactus plants while promoting stewardship, creating positive living
          spaces, and making growth easy for every grower.
        </p>
        <p className="mt-4 text-base leading-7 text-[var(--ceraphina-text,#17331f)]">
          We do that through healthy ornamental plants, mineral-based soil
          blends, and simple guidance designed for beginners, collectors, and
          everyday plant lovers alike.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        <div className="rounded-3xl border border-[var(--ceraphina-border,#d7e6d9)] bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-semibold text-[var(--ceraphina-cactus,#2f6b3d)]">
            What Guides Us
          </h2>
          <ul className="mt-4 space-y-3 text-base leading-7">
            <li>Stewardship of plants and the growing process</li>
            <li>Clear, approachable cactus education</li>
            <li>Healthy ornamental plants and dependable materials</li>
            <li>Intentional spaces filled with beauty and resilience</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-[var(--ceraphina-border,#d7e6d9)] bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-semibold text-[var(--ceraphina-cactus,#2f6b3d)]">
            Tagline
          </h2>
          <p className="mt-4 text-3xl font-semibold tracking-tight text-[var(--ceraphina-cactus,#2f6b3d)]">
            Growth Made Easy.
          </p>
        </div>
      </section>
    </PageShell>
  );
}