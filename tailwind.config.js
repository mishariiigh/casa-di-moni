export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f0f0f",     // black
        accent: "#7CB342",      // green
        brown: "#8B5E3C",       // coffee brown
        light: "#f5f5f5"
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}