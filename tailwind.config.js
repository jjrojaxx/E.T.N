/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './node_modules/flowbite/**/*.js' // <- necesario para Flowbite
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') // <- habilita Flowbite
  ],
}