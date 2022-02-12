module.exports = {
    purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
//    The second file is the postcss.config.js. It will already have the ‘tailwindcss’ and ‘autoprefixer’ configured and look like the code below.
  Code:
  module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }