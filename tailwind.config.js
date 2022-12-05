/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontWeight: {
      hairline: 100,
      "extra-light": 100,
      thins: 10,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      "extra-bold": 800,
      black: 900,
    },

    screens: {
      xsm: "360px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ['"Barlow"', "sans-serif"],
    },

    //extend: {},
  },
  variants: {
    extend: {
      display: ["group-focus"],
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwind-scrollbar-hide")],
  variants: {
    scrollbar: ["rounded"],
  },
};
