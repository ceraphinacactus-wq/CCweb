"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    title: "Columnar Cactus",
    subtitle: "Quality plants at a fair price.",
    description:
      "Ceraphina Cactus specializes in healthy, well-rooted columnar cacti grown for strength, beauty, and long-term growth.",
    image: "/img/cactus-slide.jpg",
  },
  {
    title: "Active Cactus Soil Blends",
    subtitle: "Quality growth begins with quality soil.",
    description:
      "Our mineral-balanced soil blends are designed for excellent drainage, strong root systems, and resilient cactus growth.",
    image: "/img/soil-slide.jpg",
  },
  {
    title: "Ceraphina Cactus Collective",
    subtitle: "Quality growers come from a quality community.",
    description:
      "Join a growing community of cactus enthusiasts sharing knowledge, experience, and a passion for cultivating extraordinary plants.",
    image: "/img/community-slide.png",
  },
];

export default function HomeCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative w-full h-[420px] overflow-hidden bg-black text-white">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-60"
        style={{ backgroundImage: `url(${slide.image})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {slide.title}
        </h1>

        <p className="text-xl text-purple-300 font-semibold mb-3">
          {slide.subtitle}
        </p>

        <p className="max-w-2xl text-lg text-gray-200">
          {slide.description}
        </p>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full ${
              current === index ? "bg-purple-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}