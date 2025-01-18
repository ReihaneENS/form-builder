export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
  ],
  css: [
    'primevue/resources/themes/lara-light-blue/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
    '~/assets/css/main.css',
  ],
  build: {
    transpile: ['primevue']
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  typescript: {
    strict: true
  },
  devtools: {
    enabled: false
  },
  experimental: {
    payloadExtraction: false
  },
  nitro: {
    prerender: {
      failOnError: false
    }
  }
})