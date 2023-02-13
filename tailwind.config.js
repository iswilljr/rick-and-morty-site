/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#a9d3e9",
        secondary: "#9e9e9e",
        dark: "#202329",
        "dark-secondary": "#333333",
        section: "#272b33",
      },
      fontSize: {
        "8xl": "5.625rem",
      },
    },
  },
  plugins: [],
};
