export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        caveat: ["'Caveat'", "cursive"],
        nunito: ["'Nunito'", "sans-serif"],
      },
      colors: {
        purrpink:     "#fce4ef",
        purrpeach:    "#f4a0bc",
        purryellow:   "#fde8b2",
        purrlavender: "#ede8fb",
        purrtext:     "#b85c78",
      },
    },
  },
  plugins: [],
}