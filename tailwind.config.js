/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#131313",
        goldenrod: "#ffbd00",
        sb: "#1F2028",
      },
      animation: {
        blob: "blob 7s infinite",
      },
    },
  },
  plugins: [],
};
