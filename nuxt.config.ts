// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    head: {
      titleTemplate: '%s - Online booking',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1, minimum-scale=1.0, user-scalable=no',
        },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'og:site:name', property: 'og:site_name', content: 'Rate.Club' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
    },
  },

  css: ['~/assets/styles/main.scss'],

  components: [
    {
      path: '~/components', // will get any components nested in let's say /components/test too
      pathPrefix: false,
    },
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@pinia/nuxt',
    '@nuxt/eslint',
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
})
