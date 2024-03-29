/** @type {import("tailwindcss").Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
      colors: {
        primaryLightBlue: "#6EC1E4",
        secondaryPaleBlack: "#54595F",
        textLightGray: "#7A7A7A",
        superLightGray: "#f0f0f0",
        accentLightGreeen: "#61CE70",
        dark: "#5A5A66",
        customDarkBlue: "#4054B2",
        blogNavHoverBlue: "#0084d6",
        customDarkGreen: "#23A455",
        black: "#000000",
        white: "#FFFFFF",
        paleBlack: "#001d35",
        lightBlack: "rgba(0,0,0,0.07)",
        customBlack: "#4e4e4e",
        breadCrumbBlack: "#777",
        blogH2Black: "#333333",
        light: "rgba(255,255,255,0)",
        lightWhite: "#E1D9D1",
        lightGray: "#f4f4f4",
        paleGray: "F9F9F9",
        lightBlue: "#185D8B",
        yellow: "FDCC0D",
        whoWeAreBackgroundGray: "#EDEDEF",
        followUsLightGray: "#DCDDDF",
        errorRed: "#dc3232",
        successGreen: "#46b450",
        contactFormGray: "#FAFAFA",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.3xl") },
        h2: { fontSize: theme("fontSize.xl") },
        h3: { fontSize: theme("fontSize.lg") },
      });
    }),
  ],
};
