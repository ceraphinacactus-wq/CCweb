export default function Page() {
  const pests = [
    "Spider mites — Fine webbing, dull or stippled skin. More common in dry indoor air. Increase airflow and rinse plant gently if infestation is caught early.",
    "Mealybugs — White cotton-like clusters around ribs or roots. Remove with alcohol on a cotton swab or isolate and treat.",
    "Fungus gnats — Small flying insects near soil surface. Usually caused by overwatering. Allow soil to dry fully between waterings.",
    "Rot — Soft, dark, or mushy tissue. Usually caused by moisture retention, poor drainage, or cold wet roots. Remove affected tissue and repot into fast-draining soil.",
    "Sunburn — Pale or bleached patches after sudden sun exposure. Move to shade and re-acclimate gradually.",
    "Etiolation — Thin, stretched growth caused by insufficient light. Increase light intensity or duration.",
  ];

  const prevention = [
    "Always use well-draining soil such as Active Cactus Basic Soil Mix, Active Cactus Premium Soil Blend, or Active Cactus Soil Blend.",
    "Water only when the soil is completely dry between waterings.",
    "Overwatering is the most common cause of plant stress and decline.",
    "Use top dress to improve soil surface drainage and natural resistance.",
    "Avoid crowding plants too closely. Keep airflow around your collection to prevent pest spread.",
    "Use yellow sticky traps indoors to reduce spider mites and fungus gnats.",
    "Avoid oversized pots that retain excess moisture.",
  ];

  const potSoil = [
    "Choose a pot with proper drainage holes. Drainage is essential for columnar cactus and all potted cacti.",
    "For a 6–10 inch Pachanoi, a ½ gallon pot generally works well. For a 10–14 inch Pachanoi, a 1 gallon pot provides enough root space for steady growth without holding excess moisture. For larger cuttings or rooted plants over 14 inches tall, a 2 gallon pot is a good next step.",
    "When repotting, increase pot size only one size at a time to mentally dry-down cycles.",
    "Rooted cactus can remain in the same pot for several months to over a year depending on growth rate, mix, and watering.",
    "If roots are emerging from drainage holes, circling heavily, or the soil is drying extremely fast, it is time to repot.",
    "Use Active Cactus Soil Mix for general ornamental growing.",
    "Use Active Cactus Premium Soil Blend for mature plants, heavy feeders, or growers who want faster moisture re-release and stronger root zones.",
    "Avoid heavy, moisture-retaining potting soils.",
    "After repotting, wait 5–7 days before watering to allow roots to settle and prevent stress.",
  ];

  const propagation = [
    "Use a clean, sharp blade to make a straight cut. Sanitize tools before and after cutting to prevent contamination.",
    "Allow the cut surface to dry and callous in a shaded, well-ventilated area for 5–10 days longer for thicker cuts or humid climates.",
    "Before planting, use dry Active Cactus Soil Mix or Active Cactus Premium Soil Blend. Do not water immediately after planting.",
    "Wait 7–10 days before the first light watering to encourage rooting and reduce the chance of rot.",
    "Keep newly planted cuttings in bright indirect light until roots establish. Avoid intense direct sun during this stage.",
    "Bottom warmth and bright conditions (70–85°F) encourage faster root development.",
  ];

  const transitionOutdoors = [
    "Begin hardening off in late spring once nighttime temperatures consistently stay above 50°F.",
    "Hardening off means gradually exposing cactus to outdoor conditions so they can adjust without stress.",
    "Start with 1–2 hours of gentle morning sun on Day 1 and increase by 1–2 hours every 1–2 days.",
    "Thin-skinned, actively growing, or indoor-grown cactus have softer skin and are more sensitive to UV. Sudden full sun can cause permanent bleaching or scarring.",
    "If the plant was under grow lights, begin with bright shade or filtered sun outdoors first.",
    "Ways to protect from intense sun:",
    "• Use 30%–50% shade cloth during peak afternoon hours.",
    "• Place near a wall or patio that provides afternoon shade before increasing direct sun.",
    "• Position where the plant receives morning direct sun with filtered or indirect afternoon light.",
    "Watch for signs of stress such as yellowing, bleaching, corking, or soft patches. Reduce exposure immediately if these appear.",
    "After acclimation, Pachanoi can handle several hours of direct sun daily, but many growers still prefer afternoon shade for optimal ornamental growth in Colorado.",
    "Bring plants indoors if nighttime temperatures drop below 40°F. Move all indoor plants indoors to prevent cold damage.",
  ];

  const seasonal = {
    spring: [
      "Increase watering gradually as temperatures rise.",
      "Begin hardening off once nights stay above 50°F.",
      "Repot if rootbound.",
      "Watch for rapid drying as sun intensity increases.",
    ],
    summer: [
      "Water more consistently with light and heat.",
      "Provide morning sun with afternoon shade where needed.",
      "Monitor for pests.",
      "Protect from extreme heat waves and hail.",
    ],
    fall: [
      "Reduce watering frequency.",
      "Bring indoors before nights drop below 40°F.",
      "Stop fertilization if used.",
      "Inspect for pests before moving inside.",
    ],
    winter: [
      "Growth slows or stops completely — this is normal.",
      "Do not fertilize heavily or water often.",
      "Move plants to a dark place and maintain temperatures above 45°F.",
      "Avoid repotting or taking cuttings until spring returns.",
      "Transitioning outdoors waits until temperatures stay above 45 degrees.",
    ],
  };

  const watering = [
    "Water deeply and infrequently. Completely soak the soil, then allow it to dry out completely.",
    "During active growing months, water every 10–14 days depending on light and temperature.",
    "In winter, soil dries much slower.",
    "Water closer to 9–12 days if soil dries faster than expected. In cool or lower-light conditions, average dry time may extend to 10–14 days.",
    "If temperatures fall below 65°F, slow drying can extend to 14–21+ days.",
    "One hour after watering, discard any standing water in the saucer.",
    "Adding airflow with a fan can help drying, as can using a top dress. Top dress will help with topsoil erosion and reduce fungus gnats.",
  ];

  const lighting = [
    "Place your cactus near a bright south-facing window whenever possible. South exposure provides the strongest natural light in Colorado.",
    "If using grow lights, provide 12–14 hours of light per day. Keep lights approximately 12–18 inches above the plant and adjust as needed depending on the fixture and growth response.",
    "Brighter light encourages thicker, more compact growth. Low light causes stretching.",
    "Understanding bulb strength:",
    "• DLI (daily light integral)",
    "• PPFD / PFD / μmol/m²/s",
    "For cactus, strong indoor light is usually much higher than a normal household bulb. Dedicated LED grow lights are better than standard room lights.",
    "For steady indoor growth, roughly 100–300 μmol/m²/s supports compact, healthy growth indoors.",
    "Free light-measuring apps can help estimate light level.",
    "Rotate your plant every 1–2 weeks to promote even growth and prevent leaning toward the light source.",
    "Supplemental grow lighting is often necessary due to shorter daylight hours.",
  ];

  return (
    <main className="page-shell">
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="section-card">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <p className="badge-accent">Ceraphina Cactus</p>
              <h1 className="site-heading mt-4">Cactus Care Guide</h1>
              <p className="site-subheading mt-4">
                Ceraphina Cactus — Growth Made Easy
              </p>
              <p className="mt-4 text-ceraphina-muted">
                Use this page as the web version of the printable guide. It
                follows the same care topics, checklist flow, and bullet-style
                information from the PDF.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3">
              <a
                href="/ceraphina-cactus-care-guide.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center"
              >
                Open Printable PDF
              </a>
              <p className="text-sm text-ceraphina-muted">
                Great for saving, printing, or sharing at markets.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <section className="section-card">
            <h2 className="text-2xl font-semibold text-ceraphina-cactus">
              Common Pests & Issues
            </h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-ceraphina-muted">
              {pests.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="section-card">
            <h2 className="text-2xl font-semibold text-ceraphina-cactus">
              Prevention Tips
            </h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-ceraphina-muted">
              {prevention.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <section className="section-card">
            <h2 className="text-2xl font-semibold text-ceraphina-cactus">
              Pot & Soil
            </h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-ceraphina-muted">
              {potSoil.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <aside className="section-card flex items-center justify-center text-center">
            <div>
              <p className="text-xl font-semibold text-ceraphina-cactus">
                Fertilize sparingly.
              </p>
              <p className="mt-3 text-lg font-medium text-ceraphina-text">
                Up pot and refresh the soil approximately every 12 months with a
                good cactus soil like an Active Cactus Soil Blend.
              </p>
            </div>
          </aside>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <section className="section-card">
            <h2 className="text-2xl font-semibold text-ceraphina-cactus">
              Cutting & Propagation
            </h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-ceraphina-muted">
              {propagation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="section-card">
            <h2 className="text-2xl font-semibold text-ceraphina-cactus">
              Transitioning Outdoors
            </h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-ceraphina-muted">
              {transitionOutdoors.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <section className="section-card">
            <h2 className="text-2xl font-semibold text-ceraphina-cactus">
              Watering
            </h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-ceraphina-muted">
              {watering.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="section-card">
            <h2 className="text-2xl font-semibold text-ceraphina-cactus">
              Indoor Lighting
            </h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-ceraphina-muted">
              {lighting.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <section className="section-card mt-6">
          <h2 className="text-2xl font-semibold text-ceraphina-cactus">
            Colorado Seasonal Care Checklist
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-ceraphina-border bg-white p-5">
              <h3 className="text-xl font-semibold text-ceraphina-cactus">
                Spring (March–May)
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-ceraphina-muted">
                {seasonal.spring.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-ceraphina-border bg-white p-5">
              <h3 className="text-xl font-semibold text-ceraphina-cactus">
                Summer (June–August)
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-ceraphina-muted">
                {seasonal.summer.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-ceraphina-border bg-white p-5">
              <h3 className="text-xl font-semibold text-ceraphina-cactus">
                Fall (September–October)
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-ceraphina-muted">
                {seasonal.fall.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-ceraphina-border bg-white p-5">
              <h3 className="text-xl font-semibold text-ceraphina-cactus">
                Winter (November–February)
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-ceraphina-muted">
                {seasonal.winter.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}