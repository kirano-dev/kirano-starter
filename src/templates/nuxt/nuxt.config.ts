// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  modules: [
  ],

  app: {
    pageTransition: {name: 'page', mode: 'out-in'},
  },

  css: [
    '~/assets/scss/app.scss',
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  },

  alias: {
    '@icons': '~/assets/icons',
    '@img': '~/assets/img',
  }
})
