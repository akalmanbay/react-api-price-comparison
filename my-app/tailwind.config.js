/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // primary: "#2B5288", // example light blue
        // background: "bg-gray-900", // example light bg

        dark: {
          // primary: "#A0C4FF", // example lighter blue for dark
          // background: "#1E293B",
        },
      },
    },
  },
  plugins: [],
};
