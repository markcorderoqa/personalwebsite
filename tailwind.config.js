/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f4f7ff",
          100: "#e4ebff",
          200: "#c2d0ff",
          300: "#90a6ff",
          400: "#5e7bff",
          500: "#3656f5",
          600: "#2540d0",
          700: "#1e36a8",
          800: "#1c3186",
          900: "#1b2b6b"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.12)"
      }
    }
  },
  plugins: []
};

