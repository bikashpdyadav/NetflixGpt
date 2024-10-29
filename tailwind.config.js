module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px", // Custom extra-small breakpoint
        xsm: "500px",
        sm: "640px", // Custom small breakpoint
        md: "768px", // Custom medium breakpoint
        lmd: "900px",
        lg: "1024px", // Custom large breakpoint
        xl: "1280px", // Custom extra-large breakpoint
      },
    },
  },
  plugins: [],
};
