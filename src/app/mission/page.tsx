import PageShell from "@/components/PageShell";

const values = [
  {
    title: "Stewardship",
    text: "We believe plants deserve thoughtful care. Ceraphina Cactus promotes responsible cultivation and long-term plant health through proper soil, lighting, and growing practices.",
  },
  {
    title: "Plant Health First",
    text: "Healthy roots create healthy plants. Our cactus soils and top dress blends are designed to support drainage, mineral balance, and resilient root systems.",
  },
  {
    title: "Accessibility",
    text: "Growing cacti should not feel complicated. We focus on clear guidance, balanced soil mixes, and reliable plants that make success easier for growers.",
  },
  {
    title: "Craftsmanship",
    text: "Every soil blend and top dress is created with purpose. We carefully select mineral ingredients that support strong growth and lasting soil structure.",
  },
  {
    title: "Knowledge Sharing",
    text: "Great growers learn from each other. Ceraphina Cactus is committed to sharing practical information that helps people better understand and care for their plants.",
  },
];

export default function Page() {
  return (
    <main className="page-shell">
      <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="section-card">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <p className="badge-accent">Ceraphina Cactus</p>
              <h1 className="site-heading mt-4">Mission Statement</h1>
              <p className="site-subheading mt-4">
                Ceraphina Cactus — Growth Made Easy
              </p>
              <p className="mt-4 text-ceraphina-muted">
                Our mission at Ceraphina Cactus is to cultivate healthy, resilient cactus plants while promoting stewardship and creating positive living spaces.
                </p>
                <p className="mt-4 text-3xl font-semibold tracking-tight text-[var(--ceraphina-cactus,#2f6b3d)]">
            Growth Made Easy.
          </p>
            </div>
        
          </div>
        </div>
      <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="section-card">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <p className="badge-accent">Ceraphina Cactus</p>
              <h1 className="site-heading mt-4">Philosophy</h1>
              <p className="site-subheading mt-4">
                Ceraphina Cactus — Growth Made Easy
              </p>
              <p className="mt-4 text-ceraphina-muted">
                We believe plants are living contributors to the environments around them.
                Healthy plants improve spaces not only through their beauty, but also through
                the calm and balance they bring to a room. Columnar cacti are particularly powerful
                plants. Their resilience, structure, and presence make them ideal companions in homes,
                studios, and workspaces. When grown in balanced soil and cared for properly, they become
                long-lived plants that continue to grow stronger year after year. Our goal is simple: 
                Make growing strong plants easy.

                </p>
                
            </div>
        
          </div>
        </div>  
        <section className="mx-auto max-w-7xl px-6 py-6"></section>
       <div className="section-card">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <p className="badge-accent">Ceraphina Cactus</p>
              <h1 className="site-heading mt-4">Vision</h1>
              
              <p className="mt-4 text-ceraphina-muted">
                Our vision is to create a community of growers who appreciate the strength, beauty, 
                and resilience of columnar cacti. Through healthy plants, carefully designed soils, 
                and shared knowledge, we aim to help people create living spaces that are vibrant, 
                intentional, and connected to nature.Ceraphina Cactus strives to become a trusted 
                source for cactus cultivation, plant care education, and high-quality mineral soil 
                blends that support long-term plant health.

                </p>
                
            </div>
        
          </div>
        </div>
        
        <p></p>
       
        <p className="mt-4 text-base leading-7 text-[var(--ceraphina-text,#17331f)]">
       
      <section className="mx-auto max-w-6xl px-6 pb-16 md:px-10 lg:px-12">
  <div className="mb-8 max-w-2xl">
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2f6b3d]">
      Our Values
    </p>

    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
      What guides Ceraphina
    </h2>
  </div>

  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
    {values.map((value) => (
      <article
        key={value.title}
        className="rounded-3xl border border-[#d7e6d9] bg-white p-7 shadow-sm hover:shadow-md transition"
      >
        <h3 className="text-xl font-semibold text-[#17331f]">
          {value.title}
        </h3>

        <p className="mt-3 leading-7 text-[#4f6557]">
          {value.text}
        </p>
      </article>
    ))}
  </div>
</section></p>
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

       
      </section>
      </section>
    </main>
  );
}