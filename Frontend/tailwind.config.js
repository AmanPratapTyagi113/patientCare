module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3B84D0",
        secondary: "#9CB2AA",
        tertiary: "#B2D8CB",
        bgprimary: "#FAFCFF",
        bgsecondary: "#E3F0FB",
      },
      fontFamily: {
        roboto: ["Roboto", "ui-sans-serif"],
        poppins: ["Poppins", "ui-sans-serif"],
        lato: ["Lato", "SFMono-ui-monospace"],
      },
    },
  },
  plugins: [],
};
