/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#1E2772",
          secondary: "#f6d860",
          accent: "#ffffffbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
    // dark: [
    //   {
    //     mytheme: {
    //       primary: "#a991f7",
    //       secondary: "#f6d860",
    //       accent: "#37cdbe",
    //       neutral: "#3d4451",
    //       "base-100": "#ffffff",
    //     },
    //   },
    // ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
