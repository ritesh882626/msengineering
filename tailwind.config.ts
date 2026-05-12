import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        warm: "#FAFAF7",
        paper: "#FFFFFF",
        ink: "#050505",
        charcoal: "#2B2B2B",
        muted: "#6B7280",
        line: "#E5E5E0",
        soft: "#F3F2EE",
        yellow: "#F2C300",
        deepYellow: "#D9A900",
        executive: "#080808",
        navy: "#0B1220",
        steel: "#1F4E79",
        copper: "#C87533",
        graphite: "#111827",
        industrial: "#F8FAFC",
        borderSteel: "#CBD5E1",
        processGreen: "#2E7D32"
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "ui-monospace", "monospace"]
      },
      boxShadow: {
        technical: "0 18px 60px rgba(8, 8, 8, 0.08)",
        darkpanel: "0 24px 70px rgba(0, 0, 0, 0.22)"
      },
      backgroundImage: {
        "technical-grid":
          "linear-gradient(rgba(5,5,5,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(5,5,5,0.06) 1px, transparent 1px)",
        "light-grid":
          "linear-gradient(rgba(5,5,5,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(5,5,5,0.045) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
