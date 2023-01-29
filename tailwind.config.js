/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{html,js}"],
   theme: {
      extend: {
         colors: {
            primary: "#101C45",
         },
      },
      fontFamily: {
         "dm-sans": ["DM Sans", "sans-serif"],
      },
   },
   plugins: [],
};
