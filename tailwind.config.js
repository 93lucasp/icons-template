/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '20px',
      '6': '6px',
      '8': '8px',
      '15': '60px'
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'lp': '1400px',
      '2xl': '1536px',
    },
    fontFamily: {
      'sora': ['Sora' , 'sans-serif']
    },
    extend: {
      colors: {
        'white': '#ffffff',
        'lightGray': '#f3f3f4',
        'innerShadow': '#f0f1f2',
        'sidebar': '#f2f2f3',
        'sidebarActive': '#e9e9eb',
        darkBlue: '#090F24',
        topGradient: '#9487FF40',
        lila: '#9487FF',
      },
    },
  },
  plugins: [],
}