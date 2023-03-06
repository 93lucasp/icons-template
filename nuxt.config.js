// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  image: {
    storyblok: {
      baseURL: 'https://a.storyblok.com'
    }
  },
  modules: [['@storyblok/nuxt', { accessToken: 'uiHAQzxUn1tVtEmEZRrKZwtt' }] , '@nuxt/image-edge'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})