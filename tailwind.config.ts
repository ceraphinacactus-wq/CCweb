import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ceraphina: {
          bg: "#ffffff",
          surface: "#f8faf8",
          text: "#17331f",
          muted: "#5f7466",
          border: "#d7e6d9",
          cactus: "#2f6b3d",
          cactusDark: "#214d2c",
          accentGreen: "#7dff72",
          accentGreenSoft: "#e8ffe5",
          purple: "#7c3aed",
          purpleDark: "#6d28d9",
        },
      },
      boxShadow: {
        glow: "0 0 0 3px rgba(125, 255, 114, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;