/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tl': '340px',
    },
    extend: {
      fontFamily:{
        oxa: 'SVN-Hemi Head',
        pop: 'Poppins',
      },
     
    },
  },
  plugins: [],
}