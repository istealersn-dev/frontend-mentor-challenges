/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'moderate-violet': 'hsl(263, 55%, 52%)',
        'dark-greyish-blue': 'hsl(217, 19%, 35%)',
        'dark-blackish-blue': 'hsl(219, 29%, 14%)',
        White: 'hsl(0, 0%, 100%)',
        'light-gray': 'hsl(0, 0%, 81%)',
        'light-grayish-blue': 'hsl(210, 46%, 95%)',
      },
      fontFamily: {
        'sans': ['Barlow Semi Condensed', ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        'medium': '500',
        'semi-bold': '600',
      },
      fontSize: {
        'xs': '.6875rem',
        'sm': '.8125rem',
        'xl': '1.25rem',
      }
    },
  },
  plugins: [],
}