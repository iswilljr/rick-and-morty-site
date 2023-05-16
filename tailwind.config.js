/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#399CD0',
        secondary: '#9e9e9e',
        dark: '#202329',
        'dark-secondary': '#333333',
        section: '#272b33',
        'status-alive': '#55cc44',
        'status-dead': '#d63d2e',
        'status-unknown': '#9e9e9e',
      },
      fontSize: {
        '8xl': '5.625rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
