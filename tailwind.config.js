/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9800FF",
        secondary: "#FF00C6",
        darker: "#1a1a1a",
        darkest: "#141414",
      },
    },
  },
  plugins: [],
};
