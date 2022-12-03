/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      "dark-blue": "#0b3a58",
      blue: "rgb(82, 179, 221)",
      white: "#ffffff",
      purple: "#7e5bef",
      pink: "#f7418e",
      lightPink: "rgb(255, 73, 176)",
      orange: "#ff7849",
      green: "#28a745",
      lightGreen: "#4db749",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      grey: "#676767",
      "gray-light": "#d3dce6",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "30rem": "30rem",
        "1/5": "20%",
        "5%": "5%",
        "8xl": "96rem",
        "9xl": "128rem",
        "20%": "20%",
      },
      borderRadius: {
        "4xl": "2rem",
        "37px": "37px",
        "30px": "30px",
      },
      borderWidth: {
        "1px": "1px",
      },
      fontSize: {
        "28px": "28px",
        "18px": "18px",
        "54px": "54px",
        "4.5xl": "2.5rem",
      },
      width: {
        "420px": "420px",
      },
      height: {
        "65px": "65px",
        "360px": "360px",
      },
    },
  },
  plugins: [],
};
