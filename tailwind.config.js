/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './errors/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        body: ['Pavia-Bold']
      },
      backgroundColor: {
        color: {
          base: 'rgb(var(--bg-color-base) / <alpha-value>)',
          card: 'rgb(var(--bg-color-card) / <alpha-value>)'
        }
      },
      textColor: {
        color: {
          base: 'rgb(var(--text-color-base) / <alpha-value>)'
        }
      }
    },
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' }
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: []
}
