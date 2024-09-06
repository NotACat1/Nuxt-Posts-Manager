// https://nuxt.com/docs/api/configuration/nuxt-config
import { createPinia } from 'pinia';

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@pinia/nuxt'],
  hooks: {
    'vue:setup'(vueApp) {
      vueApp.use(createPinia());
    },
  },
  ssr: true,
  app: {
    baseURL: '/<REPOSITORY_NAME>/',
  },
});
