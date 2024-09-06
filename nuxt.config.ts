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
    baseURL: '/Nuxt-Posts-Manager/',
    head: {
      title: 'Nuxt Posts Manager',
      meta: [
        {
          name: 'description',
          content:
            'NuxtPostsManager — это веб-приложение, которое отображает список постов с использованием API JSONPlaceholder. Приложение реализует функции просмотра, сортировки, пагинации и создания постов с помощью модального окна.',
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
      ],
    },
  },
});
