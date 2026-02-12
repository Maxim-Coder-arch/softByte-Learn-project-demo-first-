import { ISection } from "../../types/data.roadmap.type";

const sections: ISection[] = [
    {
      title: "01. HTML",
      description:
        "Скелет веба. Научись создавать семантическую разметку, формы, таблицы, SEO-теги. Без этого никуда.",
      details: [
        "Семантические теги: header, main, section, article",
        "Формы и валидация",
        "Доступность (a11y) — aria-метки",
        "SEO-разметка, Open Graph",
      ],
    },
    {
      title: "02. CSS",
      description:
        "Красота и отзывчивость. Освой Flex, Grid, анимации и препроцессоры.",
      details: [
        "Flexbox / Grid — полная верстка",
        "Адаптивность, медиазапросы",
        "Анимации, transition, keyframes",
        "SCSS / модули / styled components",
      ],
    },
    {
      title: "03. JavaScript",
      description:
        "Мозг фронтенда. Переменные, циклы, функции, события, асинхронность.",
      details: [
        "ES6+: let, const, стрелки, деструктуризация",
        "Промисы, async/await",
        "DOM, события, обработчики",
        "LocalStorage, fetch, работа с API",
      ],
    },
    {
      title: "04. React",
      description:
        "Библиотека для интерфейсов. Начни с компонентов и JSX.",
      details: [
        "Компоненты: функциональные vs классовые",
        "JSX, props, children",
        "Условный рендеринг, списки",
        "Жизненный цикл, useEffect",
      ],
    },
    {
      title: "05. React Hooks",
      description:
        "Современный React без классов. Хуки — твои лучшие друзья.",
      details: [
        "useState, useEffect, useContext",
        "useReducer, useMemo, useCallback",
        "useRef, useLayoutEffect",
        "Кастомные хуки — переиспользование логики",
      ],
    },
    {
      title: "06. TypeScript",
      description:
        "Типизация спасает от багов. Строгость и предсказуемость.",
      details: [
        "Интерфейсы, типы, enums",
        "Generics — дженерики",
        "Типизация пропсов React",
        "Utility Types: Pick, Omit, Partial",
      ],
    },
    {
      title: "07. Data Structures",
      description:
        "Массивы, объекты, стеки, очереди. Для собесов и архитектуры.",
      details: [
        "Массивы: map, filter, reduce",
        "Объекты и хеш-таблицы",
        "Стек, очередь, связные списки",
        "Деревья, графы — базово",
      ],
    },
    {
      title: "08. Next.js",
      description:
        "Фреймворк на React. SSR, SSG, файловая маршрутизация.",
      details: [
        "Pages & App Router",
        "SSR, SSG, ISR",
        "API routes",
        "Оптимизация изображений и шрифтов",
      ],
    },
    {
      title: "09. Next Router",
      description:
        "Навигация в Next. Динамические роуты, middleware, layout.",
      details: [
        "Динамические маршруты [id]",
        "useRouter, Link",
        "Middleware для редиректов",
        "Группировка и layout",
      ],
    },
    {
      title: "10. Компоненты",
      description:
        "Архитектура. Разделяй и властвуй, переиспользуй.",
      details: [
        "Атомарный дизайн (атомы, молекулы)",
        "Композиция vs наследование",
        "Render props, children as function",
        "Выделение логики в хуки",
      ],
    },
    {
      title: "11. Redux Toolkit",
      description:
        "Глобальный стейт без боли. Слайсы, thunk, devtools.",
      details: [
        "configureStore, createSlice",
        "Actions, reducers, immer",
        "createAsyncThunk",
        "Devtools, middleware",
      ],
    },
    {
      title: "12. RTK Query",
      description:
        "Работа с API в Redux. Кэширование, инвалидация, мутации.",
      details: [
        "createApi, fetchBaseQuery",
        "Хуки useQuery, useMutation",
        "Автоматическое кэширование",
        "Инвалидация тегов",
      ],
    },
    {
      title: "13. AJAX / NestJS",
      description:
        "HTTP-запросы, REST, бэкенд-контекст. Понимай, с чем работаешь.",
      details: [
        "fetch, axios",
        "REST-принципы",
        "NestJS: контроллеры, провайдеры",
        "CORS, заголовки",
      ],
    },
    {
      title: "14. WebSocket",
      description:
        "Реалтайм. Чаты, уведомления, live-обновления.",
      details: [
        "WebSocket-соединение",
        "socket.io",
        "Обработка событий",
        "Комнаты, broadcast",
      ],
    },
    {
      title: "15. Обработка ошибок",
      description:
        "Не дай приложению упасть. try/catch, ErrorBoundary.",
      details: [
        "try/catch в асинхронных операциях",
        "Error Boundary в React",
        "HTTP-ошибки и статусы",
        "Логирование ошибок",
      ],
    },
    {
      title: "16. Переиспользуемые компоненты",
      description:
        "Напиши один раз — используй везде. Гибкость и абстракция.",
      details: [
        "Составные компоненты (compound)",
        "HOC (higher-order components)",
        "Полиморфные компоненты",
        "Слоты и контекст",
      ],
    },
    {
      title: "17. Правильный UX",
      description:
        "Забота о пользователе. Состояния загрузки, скелетоны, фокусы.",
      details: [
        "Скелетоны, лоадеры",
        "Состояния ошибок",
        "Фокус клавиатуры, tabindex",
        "Микроанимации",
      ],
    },
    {
      title: "18. React Hook Form",
      description:
        "Формы без боли. Производительность, валидация.",
      details: [
        "useForm, register, handleSubmit",
        "Валидация (Yup, Zod)",
        "Контролируемые vs неконтролируемые",
        "Массивы полей",
      ],
    },
    {
      title: "19. Code Style",
      description:
        "Код, который не стыдно показать. Линтеры, форматеры.",
      details: [
        "ESLint, Prettier",
        "Husky, lint-staged",
        "Соглашения в команде",
        "Чистый код (Роберт Мартин)",
      ],
    },
    {
      title: "20. Сборщики и импорты",
      description:
        "Webpack, Vite. Алиасы, бандлы, окружения.",
      details: [
        "Vite / Webpack config",
        "Алиасы (@/components)",
        "Разделение чанков",
        "Переменные окружения",
      ],
    },
    {
      title: "21. Настройка сложных приложений",
      description:
        "Архитектура, монорепа, env, конфиги.",
      details: [
        "Feature-Sliced Design",
        "Монорепозитории (Turborepo)",
        "Настройка CI/CD",
        "Мультиокружение",
      ],
    },
    {
      title: "22. Оптимизация",
      description:
        "Скорость загрузки, рендеринга. Lighthouse 100.",
      details: [
        "Code splitting, lazy loading",
        "Мемоизация (memo, useMemo)",
        "Оптимизация изображений",
        "Аудит Lighthouse",
      ],
    },
    {
      title: "23. Тестирование (Vitest)",
      description:
        "Уверенность в коде. Юниты, компоненты, e2e.",
      details: [
        "Настройка Vitest",
        "describe, it, expect",
        "React Testing Library",
        "Моки и снепшоты",
      ],
    },
  ];

  export default sections;