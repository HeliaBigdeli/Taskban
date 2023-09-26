/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      "brand-primary": "#208d8e",
      black: "#1e1e1e",
      white: "#ffffff",
      lightgray: "#aaaaaa",
      lightgray_300: "#D3D3D3",
      lightgray_200: "#F1F3F5",
      lightgray_100: "#F6F7F9",
      darkred: "#B91C1C",
      indigo_primary: "#4C6EF5",
      indigo_secondary: "#DBE4FF",
    },
    fontFamily: {
      yekan: ["IRANYekan"],
    },
    fontSize: {
      xs: ["12px", "20.73px"],
      sm: ["14px", "24.18px"],
      base: ["16px", "27.64px"],
      xl: ["20px", "34.55px"],
      "2xl": ["24px", "41.45px"],
    },
    extend: {
      spacing: {
        "2XL": "50px",
        XL: "40px",
        L: "32px",
        M: "24px",
        S: "16px",
        XS: "8px",
      },
      boxShadow: {
        authCard: `0px 50px 100px -20px rgba(50, 50, 93, 0.25),
        0px 30px 60px -30px rgba(0, 0, 0, 0.3)`,
      },
    },
  },
  plugins: [],
};
