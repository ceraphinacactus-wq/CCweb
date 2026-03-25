export default function Page() {
  const ingredientRows = [
     {
      ingredient: "Pachanoi (San Pedro Cactus)",
      physical:
        "A hardy columnar cactus species well suited to fast-draining mineral soils and dry climates. Known for strong vertical growth and resilience in cultivation.",
      metaphysical:
        "Resilience, heart-centered awareness, protection, and connection to nature.",
    },
    {
      ingredient: "Pumice",
      physical:
        "Improves drainage, helps prevent compaction, holds a small amount of moisture while maintaining airflow around roots.",
      metaphysical: "Transformation, energy flow, renewal.",
    },
    {
      ingredient: "Perlite (Soil Grade)",
      physical:
        "Increases aeration, keeps the mix loose, and improves root oxygenation in fast-draining cactus soil.",
      metaphysical: "Lightness, clarity, openness.",
    },
    {
      ingredient: "Cactus Soil",
      physical:
        "Provides an organic base that helps hold nutrients and supports beneficial microbial life.",
      metaphysical: "Grounding connection to earth.",
    },
    {
      ingredient: "Lava Rock",
      physical:
        "Adds structure, long-term drainage, and mineral stability to the blend.",
      metaphysical: "Strength, grounding, stability.",
    },
    {
      ingredient: "Biochar / Horticultural Charcoal",
      physical:
        "Helps hold nutrients, supports soil biology, and can absorb impurities in the mix.",
      metaphysical: "Purification, energetic filtration.",
    },
    {
      ingredient: "Worm Castings",
      physical:
        "Adds gentle natural nutrition, beneficial microbes, and improves soil structure.",
      metaphysical: "Renewal, fertility, life cycles.",
    },
    {
      ingredient: "Zeolite",
      physical:
        "Helps capture and slowly release nutrients while supporting soil balance.",
      metaphysical: "Detoxification, energetic balance.",
    },
    {
      ingredient: "Azomite",
      physical:
        "Provides trace minerals that support overall plant health and long-term vitality.",
      metaphysical: "Ancient earth minerals, vitality.",
    },
    {
      ingredient: "Oyster Shell",
      physical:
        "Adds calcium and helps support pH stability in the soil.",
      metaphysical: "Protection, structural stability.",
    },
    {
      ingredient: "Red Lava Rock",
      physical:
        "Long-lasting mineral top dress that improves drainage and finishes the soil surface cleanly.",
      metaphysical: "Fire energy, vitality.",
    },
    {
      ingredient: "Black Lava Rock",
      physical:
        "Adds durable mineral coverage, aeration, and surface protection for potted cactus.",
      metaphysical: "Grounding, protective energy.",
    },
    {
      ingredient: "Clear Quartz",
      physical:
        "Decorative mineral accent used in specialty top dress blends.",
      metaphysical: "Energy amplification, clarity.",
    },
    {
      ingredient: "Amethyst",
      physical:
        "Decorative mineral accent that adds visual interest to specialty top dress blends.",
      metaphysical: "Calm, intuitive balance.",
    },
   
  ];

  const soilProducts = [
    {
      name: "Basic Cactus Soil",
      price: "$12 / 8 qt",
      description:
        "A balanced everyday cactus mix made for reliable drainage and healthy root growth.",
      ingredients: ["Cactus soil", "Perlite (soil grade)", "Pumice", "Worm castings"],
      squareLink: "https://ceraphina-cactus.square.site/product/basic-soil-blend-8-quart/KK7IINWR7GRZP2ZZ673ZFRZP?cp=true&sa=true&sbp=false&q=false"
    },
    {
      name: "Premium Mineral Cactus Soil",
      price: "$16 / 8 qt",
      description:
        "A mineral-rich blend designed for stronger root aeration and long-term soil stability.",
      ingredients: [
        "Pumice",
        "Perlite (soil grade)",
        "Cactus soil",
        "Lava rock",
        "Biochar",
        "Worm castings",
        "Oyster shell",
      ],
    },
    {
      name: "Elite Mineral Cactus Mix",
      price: "$20 / 8 qt",
      description:
        "Collector-grade cactus soil with enhanced mineral diversity and beneficial soil biology.",
      ingredients: [
        "Pumice",
        "Perlite (soil grade)",
        "Cactus soil",
        "Lava rock",
        "Biochar",
        "Worm castings",
        "Zeolite",
        "Azomite",
        "Oyster shell",
        "Mycorrhizal inoculant",
      ],
    },
  ];

  const topDressProducts = [
    {
      name: "High Country Cactus Top Dress",
      price: "$8 / 1 qt",
      ingredients: ["Pumice", "Perlite", "Lava rock", "Biochar"],
    },
    {
      name: "Desert Mineral Cactus Top Dress",
      price: "$10 / 1 qt",
      ingredients: ["Red lava rock", "Black lava rock", "Pumice", "Biochar", "Perlite"],
    },
    {
      name: "Sacred Energy Top Dress",
      price: "$15 / 1 qt",
      ingredients: ["Black lava rock", "Pumice", "Biochar", "Clear quartz", "Amethyst"],
    },
  ];

  return (
    <main className="bg-white text-neutral-900">
       <section className="mx-auto max-w-7xl px-6 py-14 md:px-8 lg:px-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-950">
            Soil Blends
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-700">
            Each soil blend is designed to support ornamental cactus with a different level of
            mineral structure, nutrition, and long-term performance.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {soilProducts.map((product) => (
            <article
              key={product.name}
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-neutral-950">{product.name}</h3>
                <span className="rounded-full bg-fuchsia-700 px-3 py-1 text-sm font-semibold text-white">
                  {product.price}
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-neutral-700">{product.description}</p>
              <div className="mt-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-green-800">
                  Ingredients
                </p>
                <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                  {product.ingredients.map((ingredient) => (
                    <li key={ingredient} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-green-700" />
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
  <a
    href={product.squareLink}
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full text-center bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-5 rounded-xl transition duration-200 shadow-md hover:shadow-lg"
  >
    Buy Now
  </a>
</div>
            </article>
          ))}
        </div>
        
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-8 lg:px-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-950">
            Mineral Top Dress Collection
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-700">
            Top dress helps protect the soil surface, improves drainage at the crown, and gives
            each cactus container a clean finished look.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {topDressProducts.map((product) => (
            <article
              key={product.name}
              className="rounded-3xl border border-neutral-200 bg-green-50/40 p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-neutral-950">{product.name}</h3>
                <span className="rounded-full bg-fuchsia-700 px-3 py-1 text-sm font-semibold text-white">
                  {product.price}
                </span>
              </div>
              <div className="mt-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-green-800">
                  Ingredients
                </p>
                <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                  {product.ingredients.map((ingredient) => (
                    <li key={ingredient} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-green-700" />
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-fuchsia-700">
            Active Cactus Soil Blends
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            Soil Blends & Ingredient Benefits
          </h1>
          <p className="mt-5 text-lg leading-8 text-neutral-700">
            Healthy cactus begin with the right soil. Our blends combine mineral drainage,
            natural nutrients, and earth-derived materials that support strong root
            development while honoring the natural symbolism of stone, earth, renewal, and
            balance.
          </p>
          <div className="mt-6 inline-flex rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-900">
            “Stone erodes, but cactus grows.”
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8 md:px-8 lg:px-10">
        <div className="overflow-hidden rounded-3xl border border-neutral-200 shadow-sm">
          <div className="grid grid-cols-1 bg-neutral-50 text-sm font-semibold text-neutral-800 md:grid-cols-[1.1fr_1.5fr_1.2fr]">
            <div className="border-b border-neutral-200 px-5 py-4 md:border-b-0 md:border-r">Ingredient</div>
            <div className="border-b border-neutral-200 px-5 py-4 md:border-b-0 md:border-r">Physical Benefits</div>
            <div className="px-5 py-4">Metaphysical Benefits</div>
          </div>

          {ingredientRows.map((row, index) => (
            <div
              key={row.ingredient}
              className={`grid grid-cols-1 md:grid-cols-[1.1fr_1.5fr_1.2fr] ${
                index !== ingredientRows.length - 1 ? "border-t border-neutral-200" : ""
              }`}
            >
              <div className="px-5 py-5 font-medium text-neutral-950 md:border-r md:border-neutral-200">
                {row.ingredient}
              </div>
              <div className="px-5 pb-2 text-neutral-700 md:border-r md:border-neutral-200 md:py-5">
                {row.physical}
              </div>
              <div className="px-5 pb-5 text-neutral-700 md:py-5">
                {row.metaphysical}
              </div>
            </div>
          ))}
        </div>
      </section>

     
    </main>
  );
}
