// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  alias: {
    '@': resolve(__dirname, "/"),
  },
  modules: [['@storyblok/nuxt', { accessToken: 'FMkFh7E7QeFYjgcAqrpQowtt' }]],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true }
})
