module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media', // or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#121212',
        purple: '#7b2cbf',
        neon: '#03e9f4',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
