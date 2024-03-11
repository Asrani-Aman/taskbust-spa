<<<<<<< HEAD
const defaultTheme = require("tailwindcss/defaultTheme");
=======
/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

>>>>>>> 6dbd184c5cd2d5d12ce1e98f48c197f63f4f2fbf
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
<<<<<<< HEAD
 
/** @type {import('tailwindcss').Config} */
=======

>>>>>>> 6dbd184c5cd2d5d12ce1e98f48c197f63f4f2fbf
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
<<<<<<< HEAD
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [ addVariablesForColors,],
}

function addVariablesForColors({ addBase, theme }: any) {
=======
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
    },
  },
  plugins: [addVariablesForColors],
}

function addVariablesForColors({ addBase, theme }) {
>>>>>>> 6dbd184c5cd2d5d12ce1e98f48c197f63f4f2fbf
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
<<<<<<< HEAD
 
=======
>>>>>>> 6dbd184c5cd2d5d12ce1e98f48c197f63f4f2fbf
  addBase({
    ":root": newVars,
  });
}