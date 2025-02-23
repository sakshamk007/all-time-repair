/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./views/pages/**/*.{js,ejs,html}",
      "./views/partials/**/*.{js,ejs,html}",
      "./views/services/**/*.{js,ejs,html}",
      "./public/**/*.{css}"
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }