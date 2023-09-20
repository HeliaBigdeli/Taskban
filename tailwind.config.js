/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "brand-primary": "#208d8e",
      black: "#1e1e1e",
      white: "#ffffff",
      lightgray: "#aaaaaa"
    },
    fontFamily: {
      yekan: ['IRANYekan'],
    },
    extend: {
      spacing: {
        XL: "40px",
        L: "32px",
        M: "24px",
        S: "16px",
        XS: "8px",
      },
      boxShadow: {
        card: `0px 50px 100px -20px rgba(50, 50, 93, 0.25),
        0px 30px 60px -30px rgba(0, 0, 0, 0.3)`,
      },
    },
  },
  plugins: [],
};
