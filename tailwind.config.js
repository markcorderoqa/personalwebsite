/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        // Figma "Frozen mist": neutral cool grays + cinnamon / burnt orange accent
        brand: {
          50: "#faf7f5",
          100: "#f3ebe6",
          200: "#e8d5c9",
          300: "#d7b49e",
          400: "#c58968",
          500: "#b86f45",
          600: "#9d5b3a",
          700: "#824b32",
          800: "#6b402e",
          900: "#5a3628"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(60, 55, 48, 0.08)"
      }
    }
  },
  plugins: []
};

