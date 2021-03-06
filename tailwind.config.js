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
        formDark: "#1e1e1e",
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
      maxWidth: {
        "97%": "97%",
        "95%": "95%",
        "90%": "90%",
        "50%": "50%",
        "70%": "70%",
        "87%": "87%",
        "88%": "88%",
      },
    },
  },
  variants: {
    extend: { borderWidth: ["focus"] },
  },
  plugins: [],
}
