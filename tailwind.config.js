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
      "red-primary": "#FA5252",
      "blue-primary": "#228BE6",
      "blue-secondary": "#D0EBFF",
      "grape-primary": "#BE4BDB",
      "grape-secondary": "#F3D9FA",
      "orange-primary": "#FD7E14",
      "orange-secondary": "#FFE8CC",
      "green-primary": "#40C057",
      "green-secondary": "#D3F9D8",
      black: "#1e1e1e",
      white: "#ffffff",
      lightgray: "#aaaaaa",
      lightgray_300: "#D3D3D3",
      lightgray_200: "#F1F3F5",
      lightgray_100: "#F6F7F9",
      darkred: "#B91C1C",
      indigo_primary: "#4C6EF5",
      indigo_secondary: "#DBE4FF",
      blue_secondary: "#D0EBFF",
      blue_primary: "#228BE6",
      modalOverlay: '#000000ab',
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
        taskCard: `0px 2px 4px 0px rgba(0, 0, 0, 0.40), 0px 7px 6px -3px rgba(0, 0, 0, 0.30), 0px -3px 0px 0px rgba(0, 0, 0, 0.20) inset;`,
        taskColumn: `0px 3px 4px 0px rgba(0, 0, 0, 0.20)`,
      },
    },
  },
  plugins: [],
};
