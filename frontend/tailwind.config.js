/** @type {import("tailwindcss").Config} */
const plugin = require("tailwindcss/plugin")
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm:"480px",
      md:"768px",
      lg:"976px",
      xl:"1440px"
    },
    extend: {
      colors:{
        primaryLightBlue:"#6EC1E4",
        secondaryPaleBlack:"#54595F",
        textLightGray:"#7A7A7A",
        accentLightGreeen:"#61CE70",
        customDarkBlue:"#4054B2",
        customDarkGreen:"#23A455",
        black:"#000000",
        white:"#FFFFFF",
        paleBlack:"#001d35",
        lightBlack:"rgba(0,0,0,0.07)",
        customBlack:"#4e4e4e",
        light:"rgba(255,255,255,0)",
        lightWhite:"#E1D9D1",
        lightGray:"#f4f4f4",
        lightBlue:"#3197d6"
      }
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.3xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      })
    })
  ],
}
