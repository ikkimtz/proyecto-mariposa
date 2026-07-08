import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FFFCF8",
        rose: "#F7D9E3",
        coral: "#F48C8C",
        lavender: "#DCCEF8",
        sage: "#A8C7A3",
        gold: "#C9A227",
        ink: "#4E3B3B",
        muted: "#806865"
      },
      fontFamily: {
        script: ["var(--font-great-vibes)"],
        serif: ["var(--font-cormorant)"],
        sans: ["var(--font-poppins)"]
      },
      boxShadow: {
        soft: "0 20px 42px rgba(84, 58, 45, 0.08)",
        button: "0 14px 26px rgba(244, 140, 140, 0.30)"
      }
    }
  },
  plugins: []
};

export default config;
