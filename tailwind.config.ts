import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F2EFE9",
        foreground: "#1F212E",
        clay: {
          bg: "#F2EFE9",
          card: "#FFFFFF",
          surface: "#F8F5F0",
          border: "rgba(255, 255, 255, 0.7)",
          dark: "#1A1B26",
          darkCard: "#222433",
          primary: "#2563EB",
          accent: "#F59E0B",
          mint: "#10B981",
          rose: "#F43F5E",
          purple: "#8B5CF6",
        },
      },
      borderRadius: {
        DEFAULT: "16px",
        md: "14px",
        lg: "18px",
        xl: "22px",
        "2xl": "28px",
        "3xl": "36px",
        full: "9999px",
      },
      boxShadow: {
        // Claymorphism Outer & Inset Shadow Combinations
        clay: "12px 16px 32px 0px rgba(166, 155, 142, 0.25), -8px -8px 20px 0px rgba(255, 255, 255, 0.9), inset 4px 4px 8px 0px rgba(255, 255, 255, 0.9), inset -4px -4px 8px 0px rgba(184, 172, 158, 0.25)",
        "clay-hover": "16px 22px 40px 0px rgba(166, 155, 142, 0.32), -10px -10px 24px 0px rgba(255, 255, 255, 0.95), inset 4px 4px 8px 0px rgba(255, 255, 255, 0.9), inset -4px -4px 8px 0px rgba(184, 172, 158, 0.25)",
        "clay-sm": "6px 8px 18px 0px rgba(166, 155, 142, 0.2), -4px -4px 12px 0px rgba(255, 255, 255, 0.85), inset 2px 2px 5px 0px rgba(255, 255, 255, 0.8), inset -2px -2px 5px 0px rgba(184, 172, 158, 0.2)",
        "clay-lg": "18px 24px 48px 0px rgba(166, 155, 142, 0.28), -12px -12px 30px 0px rgba(255, 255, 255, 0.95), inset 6px 6px 12px 0px rgba(255, 255, 255, 0.95), inset -6px -6px 12px 0px rgba(184, 172, 158, 0.25)",
        "clay-inset": "inset 3px 3px 8px 0px rgba(166, 155, 142, 0.3), inset -3px -3px 8px 0px rgba(255, 255, 255, 0.9)",
        "clay-amber": "0 14px 28px -6px rgba(245, 158, 11, 0.45), inset 3px 3px 7px 0px rgba(255, 255, 255, 0.65), inset -3px -3px 8px 0px rgba(180, 83, 9, 0.35)",
        "clay-dark": "12px 18px 36px 0px rgba(10, 10, 16, 0.45), inset 3px 3px 6px 0px rgba(255, 255, 255, 0.15), inset -4px -4px 10px 0px rgba(0, 0, 0, 0.5)",
        "clay-dark-sm": "6px 10px 20px 0px rgba(10, 10, 16, 0.35), inset 2px 2px 4px 0px rgba(255, 255, 255, 0.12), inset -2px -2px 6px 0px rgba(0, 0, 0, 0.45)",
        "clay-mint": "0 12px 24px -6px rgba(16, 185, 129, 0.4), inset 3px 3px 6px 0px rgba(255, 255, 255, 0.6), inset -3px -3px 8px 0px rgba(5, 150, 105, 0.35)",
        "clay-blue": "0 12px 26px -6px rgba(37, 99, 235, 0.45), inset 3px 3px 6px 0px rgba(255, 255, 255, 0.55), inset -3px -3px 8px 0px rgba(29, 78, 216, 0.4)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        marquee: "marquee 25s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
