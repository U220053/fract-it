/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        42: "42px",
        5: "8px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      white: "#fff",
      gray: "#4b5563",
      gray1: " #c5cbd3",
      black: "#000",
      lightblue: "#ADD8E6",
      darkblue: "#2253FF",

      blue: "#3772FF",

      bluelight: "#E0F3FD",
      blue1: "#3772FF",
      blue2: "#ccd7ff",
      blue3: "#e6ebff",
      blue4: "#cddcfe",
      blue5: " #2253FF",

      green: "#BCF7E1",
      green1: "#40F39A",
      green2: "#9ff9cc",
      red: "#FF0000",
      pink: "#FFE8E8",
    },
  },
  plugins: [],
};
