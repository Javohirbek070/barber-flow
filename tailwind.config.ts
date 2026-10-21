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
        background: "#FFFFFF",
        foreground: "#0F0F12",
        cream: {
          50: "#FAF8F5",
          100: "#F5F2EB",
          200: "#EAE5D9",
        },
        onyx: {
          900: "#0D0D11",
          800: "#18181F",
          700: "#24242D",
        },
        gold: {
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
        },
        barber: {
          red: "#DC2626",
          blue: "#1D4ED8",
          dark: "#111114",
        },
        success: {
          DEFAULT: "#16A34A",
          foreground: "#FFFFFF",
          subtle: "#DCFCE7",
          border: "#86EFAC",
        },
      },
      borderRadius: {
        DEFAULT: "12px",
        md: "10px",
        lg: "14px",
        xl: "16px",
        "2xl": "20px",
        "3xl": "24px",
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        neo: "3px 3px 0px 0px #0F0F12",
        "neo-lg": "5px 5px 0px 0px #0F0F12",
        "neo-xl": "8px 8px 0px 0px #0F0F12",
        "neo-sm": "2px 2px 0px 0px #0F0F12",
        "neo-gold": "4px 4px 0px 0px #D97706",
        "neo-red": "4px 4px 0px 0px #DC2626",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
