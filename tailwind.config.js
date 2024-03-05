/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      // "primary-orange": "#FF5722",
      // headerText: "rgb(9 64 94)",
      // background: "#0f172a",
      // subHeaderText: "#ed3d15",
      // btnColor: "#f06141",
      // btnColorDark: "#c21111",
      // inputBgColor: "#cacbd366",
      // countDownText: "#0b99b3",
      // navcol: "#F1B860",
      // purple: { 500: "rgb(24, 13, 238)", 800: "#fff" },
      // pink: { 500: "#B2194A" },
      white: "#fff",
      gray: "#4b5563",
      gray1: " #c5cbd3",
      black: "#000",
      lightblue: "#ADD8E6",
      darkblue: "#2253FF",
      // gray: {
      //   50: "#f9fafb",
      //   100: "#f3f4f6",
      //   200: "#474646",
      //   300: "gray",
      //   400: "#9ca3af",
      //   500: "#6b7280",
      //   600: "#4b5563",
      //   700: "#374151",
      //   900: "#0F172A",
      // },
      // yellow: {
      //   300: "#fde047",
      //   500: "#eab308",
      // },
      // red: "#ff0000",
      blue: "#3772FF",

      bluelight: "#E0F3FD",
      blue1: "#3772FF",
      blue2: "#ccd7ff",
      blue3: "#e6ebff",
      blue4: "#cddcfe",
      blue5: " #2253FF",

      green: " #BCF7E1",
      green1: "#40F39A",
      green2: "#9ff9cc",
    },
  },
  plugins: [],
};
