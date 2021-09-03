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
      spacing: {
        "97%": "97%",
        "90%": "90%",
        "87%": "87%",
        "88%": "88%",
        "95%": "95%",
        "70%": "70%",
        "87%": "87%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
