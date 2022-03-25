module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        lpPrimary: '#121212',
        lpSecondary: '#ff7149',
        lpSecondary2: '#d55539',
      },
      fontFamily: {
        simplon: ['Simplon', 'sans-serif'],
        simplonBold: ['Simplon Bold', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
