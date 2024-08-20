/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "*.html",
  ],
  theme: {
    extend: {
    fontFamily: {
      'poppins': 'poppins'
    },
    screens: {
      'ssm': '450px',
      'xs': '300px',
      "xxs" : '250px'
    }

    },
  },
  plugins: [],
}
