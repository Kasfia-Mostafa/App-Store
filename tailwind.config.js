/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1C1C1B",
        secondary: "#272727",
        third: "#181817",
        textPrimary: "#B5B5B5",
        textSecondary: "#FDFDFD",
        heroPrimary: "#FF9E01",
        heroSecondary: "#F77801",
      },
    },
  },
  plugins: [],
};
