import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background-rgb) / <alpha-value>)",
        section: "rgb(var(--section-rgb) / <alpha-value>)",
        surface: "rgb(var(--surface-rgb) / <alpha-value>)",
        primary: "rgb(var(--primary-rgb) / <alpha-value>)",
        muted: "rgb(var(--muted-rgb) / <alpha-value>)",
        heading: "rgb(var(--heading-rgb) / <alpha-value>)",
        forge: {
          black: "rgb(var(--forge-black-rgb) / <alpha-value>)",
          section: "rgb(var(--forge-section-rgb) / <alpha-value>)",
          surface: "rgb(var(--forge-surface-rgb) / <alpha-value>)",
          accent: "rgb(var(--forge-accent-rgb) / <alpha-value>)",
          "accent-hover": "rgb(var(--forge-accent-hover-rgb) / <alpha-value>)",
          "accent-muted": "var(--forge-accent-muted)",
          "accent-dark": "rgb(var(--forge-accent-dark-rgb) / <alpha-value>)",
          white: "rgb(var(--forge-text-rgb) / <alpha-value>)",
          grey: "rgb(var(--forge-grey-rgb) / <alpha-value>)",
          border: "rgb(var(--forge-border-rgb) / <alpha-value>)",
          /** @deprecated use forge.section — gleiche Werte */
          "black-warm": "rgb(var(--forge-section-rgb) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        forge: "1.5rem",
        "forge-sm": "0.75rem",
        pill: "9999px",
      },
      maxWidth: {
        shell: "var(--shell-max)",
      },
      spacing: {
        section: "var(--section-y)",
        gutter: "var(--gutter-x)",
      },
      backgroundImage: {
        "forge-grid":
          "linear-gradient(var(--forge-grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--forge-grid-line) 1px, transparent 1px)",
        "forge-radial":
          "radial-gradient(ellipse 80% 50% at 50% -20%, var(--forge-glow), transparent 55%)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
    },
  },
  plugins: [],
};

export default config;
