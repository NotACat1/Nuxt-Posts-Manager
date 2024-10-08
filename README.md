# NuxtPostsManager

![Nuxtjs](https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxtdotjs&logoColor=#00DC82)
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

NuxtPostsManager — это веб-приложение, которое отображает список постов с использованием API [JSONPlaceholder](https://jsonplaceholder.typicode.com/). Приложение реализует функции просмотра, сортировки, пагинации и создания постов с помощью модального окна.

## Функциональность

- Загрузка постов с API
- Пагинация (по 10 постов на страницу)
- Сортировка по ID (по возрастанию и убыванию)
- Создание новых постов через модальное окно
- Управление состоянием с помощью Pinia

## Стек технологий

- **Nuxt 3**: фреймворк для создания Vue-приложений с SSR (серверным рендерингом) и статической генерацией.
- **Composition API**: современный подход к написанию компонентов во Vue.
- **Tailwind CSS**: утилитарный CSS-фреймворк для создания адаптивных пользовательских интерфейсов.
- **TypeScript**: строго типизированный язык программирования, расширяющий возможности JavaScript.
- **Pinia**: состояние менеджер для Vue.js.

## Установка и запуск

1.  Склонируйте репозиторий:

    ```bash
    git clone https://github.com/username/NuxtPostsManager.git
    ```

2.  Перейдите в папку проекта:

    ```bash
    cd NuxtPostsManager
    ```

3.  Установите зависимости:

    ```bash
    npm install
    ```

4.  Запустите сервер разработки:
    ```bash
    npm run dev
    ```

Приложение будет доступно по адресу: `http://localhost:3000`.

## Структура проекта

- `components/`: содержит компоненты Vue, такие как `PostsTable` и `Modal`.
- `store/`: состояние приложения, управляемое с помощью Pinia.
- `pages/`: страницы приложения (основная страница с таблицей постов).
- `assets/`: стили для Tailwind CSS.

## API

Приложение использует [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) для получения списка постов через эндпоинт `/posts`.

### Пример ответа:

```json
[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit..."
  },
  ...
]
```
