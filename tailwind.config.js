/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        '11': 'repeat(11, minmax(0, 1fr))',
      },
      gridRow: {
        'span-12': 'span 12 / span 12',
      },
      // gridRowStart: {
      //   '8': '8',
      //   '9': '9',
      //   '10': '10',
      //   '11': '11',
      //   '12': '12',
      //   '13': '13',
      // }
    },
  },
  plugins: [],
}

