import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./src/content/**/*.{md,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        border: {
          DEFAULT: "var(--border)",
          2: "var(--border-2)",
        },
        black: {
          DEFAULT: "var(--black)",
          2: "var(--black-2)",
          "old-2": "var(--black-old-2)",
        },
        white: {
          DEFAULT: "var(--white)",
          2: "var(--white-2)",
          3: "var(--white-3)",
        },
        theme: {
          DEFAULT: "var(--theme)",
          100: "var(--theme-100)",
          300: "var(--theme-300)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          100: "var(--primary-100)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
        },
        action: {
          DEFAULT: "var(--action)",
        },
        gray: {
          DEFAULT: "var(--gray)",
          2: "var(--gray-2)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
        },
        sec_bg: {
          DEFAULT: "var(--sec_bg)",
          2: "var(--sec_bg-2)",
          3: "var(--sec_bg-3)",
        },
        btn: {
          "bg-main": "var(--btn-bg-main)",
          "bg-hover": "var(--btn-bg-hover)",
          "text-main": "var(--btn-text-main)",
          "text-hover": "var(--btn-text-hover)",
          "bg-hover2": "var(--btn2-bg-hover)",
          "text-hover2": "var(--btn2-text-hover)",
          border: "var(--btn-border)",
        },
      },
      fontFamily: {
        primary: ["DM Sans", "sans-serif"],
        colasta: ["colasta"],
        instrument: ["Instrument Sans", "sans-serif"],
        pt_serif: ["PT Serif", "serif"],
        plus_jakarta_sans: ["Plus Jakarta Sans", "sans-serif"],
        onest: ["onest", "sans-serif"],
        tropiline: ["tropiline", "sans-serif"],
        beatrice: ["beatrice"],
        PPFragment: ["PPFragment"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        characters: {
          "0%,75%,100%": { opacity: "0", transform: "rotateY(-90deg)" },
          "25%,50%": { opacity: "1", transform: "rotateY(0deg)" },
        },
        "wc-y-anim": {
          "0%": { transform: "translateY(-30px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "wc-y-anim": "wc-y-anim 3s ease-in-out infinite alternate",
      },
      transformOrigin: {
        "origin-1": "50% 0",
      },
      backgroundImage: {
        "gradient-180": "linear-gradient(180deg, var(--tw-gradient-stops))",
        "gradient-92": "linear-gradient(91.59deg, var(--tw-gradient-stops))",
        "gradient-120": "linear-gradient(120.51deg, var(--tw-gradient-stops))",
        "gradient-160": "linear-gradient(160deg, var(--tw-gradient-stops))",
        "gradient-105": "linear-gradient(105.52deg, var(--tw-gradient-stops))",
        "gradient-89": "linear-gradient(89.68deg, var(--tw-gradient-stops))",
        "gradient-105-full":
          "linear-gradient(105.52deg, #FF856A 0%, #FFED4E 34%, #4BFFF4 69%, #7F52FF 100%)",
        "gradient-135-full":
          "linear-gradient(135deg, rgba(255, 133, 107, 1) 0%, rgba(255, 228, 69, 1) 33%, rgba(81, 252, 255, 1) 66%, rgba(125, 89, 255, 1) 100%)",
      },
      boxShadow: {
        integration: "10px 10px 45px rgba(0, 0, 0, 0.07)",
      },
      dropShadow: {
        1: "0px 30px 30px rgba(28, 32, 49, 0.13)",
        2: "0px -30px 50px rgba(40, 41, 54, 0.15)",
        3: "0px 40px 50px rgba(23, 34, 63, 0.1)",
        4: "0px 40px 50px rgba(34, 40, 72, 0.08)",
      },
      borderRadius: {
        theme: "20px",
      },
      variants: {
        space: ["responsive", "direction"],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@xpd/tailwind-3dtransforms"),
    require("@pyncz/tailwind-mask-image"),
    require("tailwindcss-dir"),
  ],
} satisfies Config;

export default config;
