import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    buildModules: ['@intlify/nuxt3'],
    intlify: {
        localeDir: 'locales', // set the `locales` directory at source directory of your Nuxt application
        vueI18n: {
          // ...
          locale: 'id',
        }
      }
})
