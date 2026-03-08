import PageShell from "@/components/PageShell";

function Section({
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

export default function CareGuidePage() {
  return (
    <PageShell
      eyebrow="Care Guide"
      title="Simple care for healthy, resilient columnar cacti."
      intro="Our care approach is built around bright light, mineral-rich drainage, and consistency. The goal is healthy roots, steady growth, and making growth easy."
    >
      <Section title="Columnar Cactus Varieties">
        <ul className="space-y-3">
          <li>
            <strong>Pachanoi (San Pedro)</strong> — known for fast growth and a
            classic columnar look.
          </li>
          <li>
            <strong>Bridgesii (Bolivian Torch)</strong> — often recognized for
            its upright growth and stronger spination.
          </li>
          <li>
            <strong>Peruvianus (Peruvian Torch)</strong> — admired for its
            blue-green tones and striking form.
          </li>
        </ul>
        <p>
          These varieties share similar needs and generally thrive in bright
          light, fast-draining soil, and a careful watering rhythm.
        </p>
      </Section>

      <Section title="The Ceraphina Philosophy">
        <p>
          We believe plants are living energetic beings that contribute to the
          feeling of a space. Healthy cacti bring structure, calm, beauty, and
          intention to homes, patios, studios, and gardens.
        </p>
        <ul className="space-y-3">
          <li>Healthy plants help create a positive and calming atmosphere.</li>
          <li>Columnar cacti are often associated with clearing stagnant energy.</li>
          <li>Plants contribute both physically and energetically to a room.</li>
          <li>Intentional plant care helps create sacred and grounded spaces.</li>
        </ul>
      </Section>

      <Section title="Core Care Basics">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl bg-[var(--ceraphina-surface,#f8faf8)] p-5">
            <h3 className="text-lg font-semibold">Light</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--ceraphina-muted,#5f7466)]">
              Give your cactus bright light daily. Outdoors, acclimate slowly
              to stronger sun. Indoors, use the brightest window available.
            </p>
          </div>
          <div className="rounded-2xl bg-[var(--ceraphina-surface,#f8faf8)] p-5">
            <h3 className="text-lg font-semibold">Water</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--ceraphina-muted,#5f7466)]">
              Let the soil dry fully between waterings. Water deeply, then wait
              until the mix is dry again before watering.
            </p>
          </div>
          <div className="rounded-2xl bg-[var(--ceraphina-surface,#f8faf8)] p-5">
            <h3 className="text-lg font-semibold">Soil</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--ceraphina-muted,#5f7466)]">
              Use a fast-draining mineral mix with ingredients like pumice,
              perlite, lava rock, and cactus soil.
            </p>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}