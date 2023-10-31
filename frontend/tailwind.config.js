/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Julius: ["Julius Sans One"],
      },
      colors: {
        facebook : "#3b5998",
        whatsapp : "#008000",
        instap : "#800080",
        instay : "#ffff00",
        gold : "#ffd700",
        silver : "#e0e0e0",
        diamond : "#70d1f4",
        otherdiamond : "#b9f2ff",
      },
    },
    screens: {
      xs: "0",
      sm: "576px",
      smmd: "672px",
      md: "760px",
      mdlg: "860px",
      bet: "900px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    }
  },
  plugins: [],
}