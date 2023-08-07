/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    gridTemplateColumns: {
      "auto-fill": "repeat(auto-fill, minmax(200px, 1fr))",
    },
    extend: {
      height: {
        128: "40rem",
      },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    minHeight: {
      128: "40rem",
    },
  },
  plugins: [],
};
