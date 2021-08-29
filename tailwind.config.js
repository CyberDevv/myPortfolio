// tailwind.config.js
module.exports = {
  future: {},
  purge: ["./src/**/*.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        darker: "#171717",
        dark: "#444444",
        light: "#EDEDED",
        primary: "#DA0037",
        primaryDark: "#B8002E",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
