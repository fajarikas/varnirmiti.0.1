/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#F4FAFF",
        "blue-1": "#265073",
        "blue-2": "#5389B7",
        "blue-3": "#0D4083",
        "green-1": "#2D9596",
        "yellow-1": "#ECF4D6",
        "red-1": "#B31312",
        "gray-1": "#505050",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
