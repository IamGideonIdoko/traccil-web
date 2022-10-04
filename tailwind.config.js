/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'onboard-pattern': "url('/assets/img/OnboardPattern.png')",
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
