/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "className",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "no1-color": "#071E3D",
        "no2-color": "#1F4287",
        "no3-color": "#278EA5",
        "no4-color": "#21E6C1",
      },
    },
  },
  plugins: [],
};
