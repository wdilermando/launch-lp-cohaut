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
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
