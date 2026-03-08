import PageShell from "@/components/PageShell";

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-[var(--ceraphina-border,#d7e6d9)] bg-white p-6 shadow-sm md:p-8">
      <h2 className="text-2xl font-semibold text-[var(--ceraphina-cactus,#2f6b3d)]">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-base leading-7 text-[var(--ceraphina-text,#17331f)]">
        {children}
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About Ceraphina"
      title="Colorado-grown columnar cactus, thoughtful care, and growth made easy."
      intro="Ceraphina Cactus is a Colorado micro-nursery focused on beautiful ornamental columnar cacti, clean mineral soil blends, and approachable education for growers at every stage."
    >
      <Card title="Our Story">
        <p>
          Ceraphina Cactus was created to make cactus growing feel approachable,
          inspiring, and grounded in real care. We focus on resilient columnar
          cactus varieties, practical growing advice, and products designed to
          support long-term success.
        </p>
        <p>
          Based in Colorado, our approach is shaped by bright sun, dry air,
          strong seasonal shifts, and the needs of growers who want dependable
          guidance without unnecessary complexity.
        </p>
      </Card>

      <Card title="What We Specialize In">
        <p>
          Ceraphina Cactus specializes in columnar cactus varieties including
          Pachanoi (San Pedro), Bridgesii (Bolivian Torch), and Peruvianus
          (Peruvian Torch).
        </p>
        <p>
          These species are valued for their sculptural beauty, resilience, and
          their ability to thrive in containers, greenhouses, and carefully
          managed outdoor environments.
        </p>
      </Card>

      <Card title="Columnar Cactus Traditions">
        <p>
          Many plant traditions associate different columnar cactus species with
          different energetic qualities. At Ceraphina Cactus, we appreciate
          these traditions while staying rooted in healthy ornamental growing
          practices and practical care.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-[var(--ceraphina-surface,#f8faf8)] p-5">
            <h3 className="text-lg font-semibold text-[var(--ceraphina-cactus,#2f6b3d)]">
              Pachanoi
            </h3>
            <p className="mt-2 text-sm leading-6 text-[var(--ceraphina-muted,#5f7466)]">
              Often associated with harmony, compassion, and balanced
              environments.
            </p>
          </div>

          <div className="rounded-2xl bg-[var(--ceraphina-surface,#f8faf8)] p-5">
            <h3 className="text-lg font-semibold text-[var(--ceraphina-cactus,#2f6b3d)]">
              Bridgesii
            </h3>
            <p className="mt-2 text-sm leading-6 text-[var(--ceraphina-muted,#5f7466)]">
              Traditionally linked with protection, strength, and energetic
              cleansing.
            </p>
          </div>

          <div className="rounded-2xl bg-[var(--ceraphina-surface,#f8faf8)] p-5">
            <h3 className="text-lg font-semibold text-[var(--ceraphina-cactus,#2f6b3d)]">
              Peruvianus
            </h3>
            <p className="mt-2 text-sm leading-6 text-[var(--ceraphina-muted,#5f7466)]">
              Often connected with clarity, inspiration, and expanded awareness.
            </p>
          </div>
        </div>
      </Card>
    </PageShell>
  );
}