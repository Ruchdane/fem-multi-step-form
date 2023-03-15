const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      /* Primary*/
      'marine-blue':'hsl(213, 96%, 18%)',
      'purplish-blue':'hsl(243, 100%, 62%)',
      'pastel-blue':'hsl(228, 100%, 84%)',
      'light-blue':'hsl(206, 94%, 87%)',
      'strawberry-red':'hsl(354, 84%, 57%)',
      /* Neutral */
      'cool-gray':'hsl(231, 11%, 63%)',
      'light-gray':'hsl(229, 24%, 87%)',
      'magnolia':'hsl(217, 100%, 97%)',
      'alabaster':'hsl(231, 100%, 99%)',
      /* default */
      ...colors
    },
    borderColor: {
      //light-gray 
      'primary':'hsl(229, 24%, 87%)',
      //pastel-blue 
      'second':'hsl(228, 100%, 84%)',
      //purplish blue
      'tertiary':'hsl(243, 100%, 62%)',
      /* default */
      ...colors
    },
    extend: {
      backgroundImage:{
        mobile: "url('/bg-sidebar-mobile.svg')",
        desktop: "url('/bg-sidebar-desktop.svg')",
      }
    },
  },
  plugins: [],
}
