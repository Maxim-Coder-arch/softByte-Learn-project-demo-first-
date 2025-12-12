import { Course } from "../dataCourse"

export const cssCourse: Course = {
  id: 3,
  slug: "css",
  title: "Курс по CSS",
  subTitle: "Стилизация веб-страниц",
  description: "Компактный курс по CSS3 от основ до продвинутых техник. Изучите все необходимое для создания красивых и адаптивных интерфейсов.",
  level: "Начинающий",
  lessons: [
    {
      id: "css-1",
      slug: "css-introduction",
      title: "Введение в CSS",
      description: "Основы CSS: селекторы, свойства, подключение стилей",
      duration: "25 минут",
      videoId: "cssintro123",
      order: 1,
      paragraphs: [
        {
          id: "p1",
          type: "heading",
          content: "Что такое CSS?",
          level: 1
        },
        {
          id: "p2",
          type: "text",
          content: "CSS (Cascading Style Sheets) - это язык стилей, который определяет, как HTML элементы должны отображаться на веб-странице. CSS отделяет содержание от представления, что делает код чище и легче в поддержке."
        },
        {
          id: "p3",
          type: "list",
          content: "Основные возможности CSS:",
          listItems: [
            "Изменение цветов, шрифтов и отступов",
            "Позиционирование элементов на странице",
            "Создание адаптивных макетов",
            "Анимации и переходы",
            "Работа с flexbox и grid системами"
          ]
        },
        {
          id: "p4",
          type: "heading",
          content: "Способы подключения CSS",
          level: 2
        },
        {
          id: "p5",
          type: "code",
          content: `<!-- 1. Внешний CSS файл (рекомендуется) -->
<link rel="stylesheet" href="styles.css">

<!-- 2. Внутренние стили в <head> -->
<style>
  body {
    font-family: Arial, sans-serif;
  }
</style>

<!-- 3. Инлайн-стили (избегайте) -->
<p style="color: red;">Текст красного цвета</p>`,
          language: "html"
        },
        {
          id: "p6",
          type: "heading",
          content: "Селекторы CSS",
          level: 2
        },
        {
          id: "p7",
          type: "code",
          content: `/* Элемент селектор */
p {
  color: blue;
}

/* Класс селектор */
.button {
  background-color: #4CAF50;
}

/* ID селектор */
#header {
  padding: 20px;
}

/* Селектор потомков */
.container p {
  font-size: 16px;
}

/* Дочерний селектор */
ul > li {
  list-style-type: square;
}

/* Соседний селектор */
h1 + p {
  margin-top: 10px;
}

/* Селектор атрибутов */
input[type="text"] {
  border: 1px solid #ccc;
}

a[href^="https"] {
  color: green;
}

/* Псевдоклассы */
a:hover {
  color: red;
}

li:nth-child(odd) {
  background-color: #f2f2f2;
}

/* Псевдоэлементы */
p::first-line {
  font-weight: bold;
}

p::before {
  content: "→ ";
}

/* Универсальный селектор */
* {
  box-sizing: border-box;
}`,
          language: "css"
        },
        {
          id: "p8",
          type: "note",
          content: "Избегайте использования !important и ID селекторов для стилизации - они затрудняют переопределение стилей и нарушают каскадность."
        }
      ]
    },
    {
      id: "css-2",
      slug: "css-box-model",
      title: "Боксовая модель и позиционирование",
      description: "Работа с отступами, границами и позиционированием элементов",
      duration: "35 минут",
      videoId: "boxmodel456",
      order: 2,
      paragraphs: [
        {
          id: "p1",
          type: "heading",
          content: "Боксовая модель CSS",
          level: 1
        },
        {
          id: "p2",
          type: "text",
          content: "Каждый HTML элемент представляет собой прямоугольную коробку, которая состоит из: контента, внутренних отступов (padding), границ (border) и внешних отступов (margin)."
        },
        {
          id: "p3",
          type: "code",
          content: `/* Стандартная боксовая модель */
.element {
  width: 300px;        /* Ширина контента */
  height: 200px;       /* Высота контента */
  padding: 20px;       /* Внутренние отступы */
  border: 2px solid #000; /* Граница */
  margin: 30px;        /* Внешние отступы */
  
  /* Общая ширина элемента будет:
     300px + 40px + 4px + 60px = 404px */
}

/* Border-box модель (рекомендуется) */
* {
  box-sizing: border-box;
}

/* С border-box ширина включает padding и border */
.element-box {
  width: 300px;
  padding: 20px;
  border: 2px solid #000;
  /* Общая ширина останется 300px */
}

/* Отдельные свойства padding/margin */
.element {
  padding: 10px;                   /* Все стороны */
  padding: 10px 20px;             /* Вертикальные | Горизонтальные */
  padding: 5px 10px 15px 20px;    /* Верх | Право | Низ | Лево */
  
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 15px;
  margin-left: 5px;
}

/* Автоматическое центрирование */
.center-box {
  width: 80%;
  max-width: 1200px;
  margin: 0 auto; /* Центрирует блок по горизонтали */
}

/* Схлопывание margin */
.parent {
  margin-bottom: 20px;
}
.child {
  margin-top: 30px;
  /* Фактический отступ между элементами будет 30px, а не 50px */
}`,
          language: "css"
        },
        {
          id: "p4",
          type: "heading",
          content: "Позиционирование элементов",
          level: 2
        },
        {
          id: "p5",
          type: "code",
          content: `/* Статическое позиционирование (по умолчанию) */
.static {
  position: static;
  /* Не реагирует на top, right, bottom, left */
}

/* Относительное позиционирование */
.relative {
  position: relative;
  top: 20px;    /* Сдвиг от нормального положения */
  left: 30px;
  /* Сохраняет место в потоке документа */
}

/* Абсолютное позиционирование */
.absolute {
  position: absolute;
  top: 0;
  right: 0;
  /* Позиционируется относительно ближайшего positioned родителя */
  /* Вырывается из потока документа */
}

/* Фиксированное позиционирование */
.fixed {
  position: fixed;
  bottom: 20px;
  right: 20px;
  /* Фиксируется относительно окна браузера */
  /* Полезно для навигации, модальных окон */
}

/* Липкое позиционирование */
.sticky {
  position: sticky;
  top: 0;
  /* Ведет себя как relative, пока не достигнет позиции top */
  /* Затем становится fixed */
}

/* Пример использования sticky для навигации */
.header {
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

/* Z-index для управления слоями */
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000; /* Поверх всех элементов */
}

/* Пример центрирования элемента */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Многослойное позиционирование */
.layer-1 {
  position: relative;
  z-index: 1;
}

.layer-2 {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
}

.layer-3 {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 3;
}`,
          language: "css"
        },
        {
          id: "p6",
          type: "note",
          content: "Всегда устанавливайте box-sizing: border-box для всех элементов - это упрощает расчеты размеров и предотвращает неожиданное поведение."
        }
      ]
    },
    {
      id: "css-3",
      slug: "css-flexbox",
      title: "Flexbox",
      description: "Создание гибких и адаптивных макетов с помощью Flexbox",
      duration: "40 минут",
      videoId: "flexbox789",
      order: 3,
      paragraphs: [
        {
          id: "p1",
          type: "heading",
          content: "Основы Flexbox",
          level: 1
        },
        {
          id: "p2",
          type: "text",
          content: "Flexbox (Flexible Box Layout) - это модуль CSS для создания гибких и адаптивных макетов. Он позволяет легко выравнивать элементы, распределять пространство и управлять порядком отображения."
        },
        {
          id: "p3",
          type: "code",
          content: `/* Контейнер Flexbox */
.container {
  display: flex;
  
  /* Основное направление */
  flex-direction: row;           /* Горизонтально слева направо */
  flex-direction: row-reverse;   /* Горизонтально справа налево */
  flex-direction: column;        /* Вертикально сверху вниз */
  flex-direction: column-reverse;/* Вертикально снизу вверх */
  
  /* Перенос элементов */
  flex-wrap: nowrap;            /* Все элементы в одну линию */
  flex-wrap: wrap;              /* Перенос на новую строку */
  flex-wrap: wrap-reverse;      /* Перенос с обратным порядком */
  
  /* Краткая запись */
  flex-flow: row wrap;
  
  /* Выравнивание по главной оси */
  justify-content: flex-start;   /* В начале контейнера */
  justify-content: flex-end;     /* В конце контейнера */
  justify-content: center;       /* По центру */
  justify-content: space-between;/* Равномерно, первый и последний у краев */
  justify-content: space-around; /* Равномерно, пространство вокруг */
  justify-content: space-evenly; /* Равномерно, одинаковые отступы */
  
  /* Выравнивание по поперечной оси */
  align-items: stretch;         /* Растянуть (по умолчанию) */
  align-items: flex-start;      /* В начале поперечной оси */
  align-items: flex-end;        /* В конце поперечной оси */
  align-items: center;          /* По центру поперечной оси */
  align-items: baseline;        /* По базовой линии */
  
  /* Многострочное выравнивание */
  align-content: stretch;
  align-content: flex-start;
  align-content: flex-end;
  align-content: center;
  align-content: space-between;
  align-content: space-around;
}

/* Свойства для flex-элементов */
.item {
  /* Размер элемента */
  flex-basis: 200px;           /* Базовый размер */
  flex-grow: 0;                /* Может ли увеличиваться */
  flex-shrink: 1;              /* Может ли уменьшаться */
  flex: 0 1 auto;              /* Краткая запись: grow shrink basis */
  
  /* Порядок отображения */
  order: 0;                    /* Порядок по умолчанию */
  
  /* Индивидуальное выравнивание */
  align-self: auto;            /* Наследует от align-items */
  align-self: flex-start;
  align-self: flex-end;
  align-self: center;
  align-self: stretch;
}

/* Практические примеры */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.card {
  flex: 1 1 300px; /* Минимальная ширина 300px */
  max-width: 400px;
}

.centered-element {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.sticky-footer {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.main-content {
  flex: 1; /* Занимает все доступное пространство */
}

.equal-height-columns {
  display: flex;
}

.column {
  flex: 1; /* Все колонки одинаковой высоты */
}`,
          language: "css"
        },
        {
          id: "p4",
          type: "heading",
          content: "Распространенные паттерны Flexbox",
          level: 2
        },
        {
          id: "p5",
          type: "code",
          content: `/* Горизонтальное меню */
.menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.menu-item {
  padding: 0.5rem 1rem;
}

/* Карточки в сетке */
.cards-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.card {
  flex: 1 1 calc(33.333% - 1.5rem);
  min-width: 250px;
}

@media (max-width: 768px) {
  .card {
    flex: 1 1 calc(50% - 1.5rem);
  }
}

@media (max-width: 480px) {
  .card {
    flex: 1 1 100%;
  }
}

/* Адаптивная навигация */
.nav-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.logo {
  margin-right: auto;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    gap: 1rem;
  }
  
  .logo {
    margin-right: 0;
  }
  
  .nav-links {
    flex-direction: column;
    width: 100%;
  }
}

/* Holy Grail Layout с Flexbox */
.holy-grail {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header, .footer {
  padding: 1rem;
  background: #333;
  color: white;
}

.main-content {
  display: flex;
  flex: 1;
}

.sidebar {
  flex: 0 0 250px;
  background: #f4f4f4;
  padding: 1rem;
}

.content {
  flex: 1;
  padding: 1rem;
}

@media (max-width: 768px) {
  .main-content {
    flex-direction: column;
  }
  
  .sidebar {
    order: 2;
  }
}

/* Мобильный first подход */
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (min-width: 768px) {
  .container {
    flex-direction: row;
  }
  
  .sidebar {
    flex: 0 0 200px;
  }
  
  .main {
    flex: 1;
  }
}`,
          language: "css"
        },
        {
          id: "p6",
          type: "note",
          content: "Flexbox идеально подходит для одномерных макетов (строка или колонка). Для двумерных сеток используйте CSS Grid."
        }
      ]
    },
    {
      id: "css-4",
      slug: "css-grid",
      title: "CSS Grid",
      description: "Создание сложных сеточных макетов",
      duration: "45 минут",
      videoId: "grid012",
      order: 4,
      paragraphs: [
        {
          id: "p1",
          type: "heading",
          content: "Основы CSS Grid",
          level: 1
        },
        {
          id: "p2",
          type: "text",
          content: "CSS Grid Layout - это мощная система для создания двумерных макетов. Она позволяет работать с строками и колонками одновременно, создавая сложные сетки с минимальным кодом."
        },
        {
          id: "p3",
          type: "code",
          content: `/* Создание Grid контейнера */
.container {
  display: grid;
  
  /* Определение колонок */
  grid-template-columns: 100px 200px auto;
  grid-template-columns: repeat(3, 1fr); /* 3 равные колонки */
  grid-template-columns: 1fr 2fr 1fr; /* Соотношение 1:2:1 */
  grid-template-columns: minmax(100px, 1fr) 300px;
  grid-template-columns: [col-start] 1fr [col-2] 1fr [col-3] 1fr [col-end];
  
  /* Определение строк */
  grid-template-rows: 100px auto 200px;
  grid-template-rows: repeat(2, minmax(100px, auto));
  
  /* Краткая запись */
  grid-template: 
    "header header header" 100px
    "sidebar main aside" auto
    "footer footer footer" 200px
    / 1fr 2fr 1fr;
  
  /* Промежутки между элементами */
  gap: 20px;          /* И для строк и для колонок */
  row-gap: 10px;      /* Только между строками */
  column-gap: 30px;   /* Только между колонками */
  
  /* Выравнивание содержимого */
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;
  
  /* Выравнивание элементов */
  justify-items: start | end | center | stretch;
  align-items: start | end | center | stretch;
}

/* Свойства Grid элементов */
.item {
  /* Размещение элемента в сетке */
  grid-column: 1 / 3;          /* От линии 1 до линии 3 */
  grid-column: span 2;         /* Занимает 2 колонки */
  grid-column: col-start / col-end;
  
  grid-row: 1 / 2;            /* От линии 1 до линии 2 */
  grid-row: 2 / span 2;       /* Начинается с линии 2, занимает 2 строки */
  
  /* Размещение по именованным областям */
  grid-area: header;
  
  /* Индивидуальное выравнивание */
  justify-self: start | end | center | stretch;
  align-self: start | end | center | stretch;
  
  /* Порядок отображения */
  order: 0;
}

/* Именованные области Grid */
.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.header {
  grid-area: header;
}

.sidebar {
  grid-area: sidebar;
}

.main {
  grid-area: main;
}

.aside {
  grid-area: aside;
}

.footer {
  grid-area: footer;
}

@media (max-width: 768px) {
  .container {
    grid-template-areas:
      "header"
      "sidebar"
      "main"
      "aside"
      "footer";
    grid-template-columns: 1fr;
  }
}`,
          language: "css"
        },
        {
          id: "p4",
          type: "heading",
          content: "Практические примеры Grid",
          level: 2
        },
        {
          id: "p5",
          type: "code",
          content: `/* Карточки в адаптивной сетке */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
}

/* Галерея изображений */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 200px;
  gap: 0.5rem;
  grid-auto-flow: dense; /* Заполняет пустоты */
}

.gallery-item {
  overflow: hidden;
}

.gallery-item:nth-child(3n) {
  grid-column: span 2;
  grid-row: span 2;
}

/* Сложный макет страницы */
.page-layout {
  display: grid;
  grid-template-columns: 
    [full-start] minmax(1rem, 1fr) 
    [content-start] minmax(0, 1200px) [content-end]
    minmax(1rem, 1fr) [full-end];
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.page-header {
  grid-column: full;
}

.page-content {
  grid-column: content;
}

.page-footer {
  grid-column: full;
}

/* Адаптивный макет */
.responsive-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .responsive-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .responsive-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Grid + Flexbox */
.container {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

/* Masonry сетка (как Pinterest) */
.masonry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 10px; /* Базовый размер строки */
  gap: 0.5rem;
}

.masonry-item {
  grid-row-end: span var(--item-height); /* JS вычисляет высоту */
}

/* CSS для календаря */
.calendar {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
}

.calendar-header {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.day {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}`,
          language: "css"
        },
        {
          id: "p6",
          type: "note",
          content: "Используйте Grid для сложных двумерных макетов, а Flexbox для простых одномерных. Они прекрасно работают вместе!"
        }
      ]
    },
    {
      id: "css-5",
      slug: "css-responsive",
      title: "Адаптивный дизайн",
      description: "Создание сайтов, работающих на всех устройствах",
      duration: "35 минут",
      videoId: "responsive345",
      order: 5,
      paragraphs: [
        {
          id: "p1",
          type: "heading",
          content: "Медиа-запросы и адаптивность",
          level: 1
        },
        {
          id: "p2",
          type: "text",
          content: "Адаптивный дизайн позволяет создавать сайты, которые корректно отображаются на всех устройствах - от мобильных телефонов до десктопных компьютеров."
        },
        {
          id: "p3",
          type: "code",
          content: `/* Базовый viewport мета-тег */
<meta name="viewport" content="width=device-width, initial-scale=1.0">

/* Медиа-запросы */
/* Mobile First подход */
.container {
  padding: 1rem;
  font-size: 16px;
}

/* Планшеты */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
    font-size: 18px;
  }
}

/* Десктопы */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
    font-size: 20px;
  }
}

/* Desktop First подход */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

@media (max-width: 1023px) {
  .container {
    padding: 1rem;
  }
}

@media (max-width: 767px) {
  .container {
    padding: 0.5rem;
  }
}

/* Типы медиа-запросов */
/* Только для экранов */
@media screen and (min-width: 768px) {
  /* Стили для экранов */
}

/* Только для печати */
@media print {
  .no-print {
    display: none !important;
  }
  
  body {
    font-size: 12pt;
    color: black;
  }
}

/* Ориентация устройства */
@media (orientation: landscape) {
  .header {
    height: 100vh;
  }
}

@media (orientation: portrait) {
  .header {
    height: 50vh;
  }
}

/* Плотность пикселей */
@media (-webkit-min-device-pixel-ratio: 2), 
       (min-resolution: 192dpi) {
  .logo {
    background-image: url('logo@2x.png');
  }
}

/* Сочетание условий */
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .tablet-only {
    display: block;
  }
}

@media screen and (max-width: 767px), 
       screen and (orientation: portrait) {
  .mobile-or-portrait {
    display: block;
  }
}

/* Переменные CSS для адаптивности */
:root {
  --font-size-base: 16px;
  --spacing-unit: 1rem;
  --container-width: 100%;
}

@media (min-width: 768px) {
  :root {
    --font-size-base: 18px;
    --spacing-unit: 1.5rem;
    --container-width: 750px;
  }
}

@media (min-width: 1024px) {
  :root {
    --font-size-base: 20px;
    --spacing-unit: 2rem;
    --container-width: 1200px;
  }
}

.container {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: var(--spacing-unit);
}

body {
  font-size: var(--font-size-base);
}`,
          language: "css"
        },
        {
          id: "p4",
          type: "heading",
          content: "Адаптивные изображения и типографика",
          level: 2
        },
        {
          id: "p5",
          type: "code",
          content: `/* Адаптивные изображения */
.responsive-img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Фоновая картинка */
.hero {
  background-image: url('hero-small.jpg');
  background-size: cover;
  background-position: center;
}

@media (min-width: 768px) {
  .hero {
    background-image: url('hero-medium.jpg');
  }
}

@media (min-width: 1200px) {
  .hero {
    background-image: url('hero-large.jpg');
  }
}

/* Элемент picture */
<picture>
  <source media="(min-width: 1200px)" srcset="large.jpg">
  <source media="(min-width: 768px)" srcset="medium.jpg">
  <img src="small.jpg" alt="Описание" class="responsive-img">
</picture>

/* Адаптивная типографика */
body {
  font-size: 16px;
  line-height: 1.5;
}

h1 {
  font-size: 2rem; /* 32px */
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.5rem; /* 24px */
}

@media (min-width: 768px) {
  body {
    font-size: 18px;
  }
  
  h1 {
    font-size: 2.5rem; /* 45px */
  }
}

@media (min-width: 1024px) {
  body {
    font-size: 20px;
  }
  
  h1 {
    font-size: 3rem; /* 60px */
  }
}

/* Fluid типографика */
:root {
  --min-font-size: 16px;
  --max-font-size: 20px;
  --min-viewport: 320px;
  --max-viewport: 1200px;
}

body {
  font-size: calc(
    var(--min-font-size) + 
    (var(--max-font-size) - var(--min-font-size)) * 
    ((100vw - var(--min-viewport)) / 
    (var(--max-viewport) - var(--min-viewport)))
  );
  
  /* Ограничиваем размер */
  font-size: clamp(
    var(--min-font-size),
    calc(var(--min-font-size) + (var(--max-font-size) - var(--min-font-size)) * 
    ((100vw - var(--min-viewport)) / (var(--max-viewport) - var(--min-viewport)))),
    var(--max-font-size)
  );
}

/* Адаптивные отступы */
.container {
  padding: clamp(1rem, 5vw, 3rem);
  margin: 0 auto;
  width: min(100%, 1200px);
}

/* CSS Container Queries (современная технология) */
.card {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: flex;
    gap: 1rem;
  }
  
  .card-image {
    flex: 0 0 150px;
  }
}

/* Скрытие/показ элементов */
.mobile-menu {
  display: none;
}

.desktop-menu {
  display: flex;
}

@media (max-width: 767px) {
  .mobile-menu {
    display: block;
  }
  
  .desktop-menu {
    display: none;
  }
}`,
          language: "css"
        },
        {
          id: "p6",
          type: "note",
          content: "Всегда используйте Mobile First подход - начинайте с мобильной версии и добавляйте стили для больших экранов. Это проще и эффективнее."
        }
      ]
    },
    {
      id: "css-6",
      slug: "css-animations",
      title: "Анимации и переходы",
      description: "Создание интерактивных и анимированных интерфейсов",
      duration: "30 минут",
      videoId: "animations678",
      order: 6,
      paragraphs: [
        {
          id: "p1",
          type: "heading",
          content: "Transitions и Animations",
          level: 1
        },
        {
          id: "p2",
          type: "text",
          content: "CSS позволяет создавать плавные переходы и сложные анимации без использования JavaScript. Это улучшает пользовательский опыт и делает интерфейсы более живыми."
        },
        {
          id: "p3",
          type: "code",
          content: `/* CSS Transitions */
.button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  /* Переход для всех свойств */
  transition: all 0.3s ease;
  
  /* Или для конкретных свойств */
  transition: background-color 0.3s ease,
              transform 0.2s ease-out,
              box-shadow 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  /* Детальные свойства */
  transition-property: background-color, transform;
  transition-duration: 0.3s, 0.2s;
  transition-timing-function: ease, cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-delay: 0s, 0.1s;
}

.button:hover {
  background-color: #45a049;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.button:active {
  transform: translateY(0);
  transition-duration: 0.1s;
}

/* Примеры переходов */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.menu-item {
  position: relative;
}

.menu-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #007bff;
  transition: width 0.3s ease;
}

.menu-item:hover::after {
  width: 100%;
}

/* CSS Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes shimmer {
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
}

/* Применение анимаций */
.animated-element {
  animation-name: fadeIn;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-delay: 0.5s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: both;
  animation-play-state: running;
  
  /* Краткая запись */
  animation: fadeIn 1s ease-out 0.5s 1 normal both;
}

.loading-spinner {
  animation: rotate 1s linear infinite;
}

.notification {
  animation: slideInLeft 0.5s ease-out,
             bounce 0.5s ease-out 0.5s;
}

.pulsing-button {
  animation: pulse 2s infinite;
}

/* Анимация загрузки */
.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

/* Контроль анимаций через JavaScript */
.animated-element {
  animation-play-state: paused;
}

/* В JavaScript */
element.style.animationPlayState = 'running';

/* Анимация для SVG */
.spinner {
  animation: rotate 2s linear infinite;
}

.spinner circle {
  stroke-dasharray: 187;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes dash {
  0% {
    stroke-dashoffset: 187;
  }
  50% {
    stroke-dashoffset: 46.75;
    transform: rotate(135deg);
  }
  100% {
    stroke-dashoffset: 187;
    transform: rotate(450deg);
  }
}

/* Performance-friendly анимации */
/* Хорошо для производительности */
.element {
  transform: translateX(100px);
  opacity: 0.5;
}

/* Плохо для производительности */
.element-slow {
  margin-left: 100px;
  width: 200px;
}

/* Пример прогресс-бара */
.progress-bar {
  width: 100%;
  height: 4px;
  background: #f0f0f0;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: linear-gradient(90deg, #4CAF50, #8BC34A);
  animation: progress 2s ease-in-out infinite;
}

@keyframes progress {
  0% {
    width: 0%;
    transform: translateX(-100%);
  }
  50% {
    width: 100%;
    transform: translateX(0%);
  }
  100% {
    width: 0%;
    transform: translateX(100%);
  }
}`,
          language: "css"
        },
        {
          id: "p4",
          type: "heading",
          content: "3D трансформации и перспектива",
          level: 2
        },
        {
          id: "p5",
          type: "code",
          content: `/* 2D трансформации */
.element {
  transform: translate(50px, 100px); /* Сдвиг */
  transform: rotate(45deg);          /* Поворот */
  transform: scale(1.5);             /* Масштаб */
  transform: skew(20deg, 10deg);     /* Наклон */
  
  /* Комбинирование */
  transform: translateX(50px) rotate(45deg) scale(1.2);
  
  /* Точка трансформации */
  transform-origin: center center;
  transform-origin: top left;
  transform-origin: 50% 50%;
}

/* 3D трансформации */
.perspective-container {
  perspective: 1000px; /* Глубина сцены */
  perspective-origin: center;
}

.three-d-element {
  transform-style: preserve-3d; /* Для вложенных элементов */
  transform: translate3d(0, 0, 0); /* Аппаратное ускорение */
  transform: rotateX(45deg) rotateY(30deg);
  transform: translateZ(100px);
  backface-visibility: hidden; /* Скрыть обратную сторону */
}

/* Карточка с 3D эффектом */
.card-3d {
  position: relative;
  width: 300px;
  height: 400px;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card-3d:hover {
  transform: rotateY(180deg);
}

.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  padding: 20px;
}

.card-back {
  transform: rotateY(180deg);
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
}

/* Анимация параллакса */
.parallax-container {
  perspective: 1px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}

.parallax-layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.parallax-layer-back {
  transform: translateZ(-1px) scale(2);
}

.parallax-layer-base {
  transform: translateZ(0);
}

/* Flip анимация */
.flip-container {
  perspective: 1000px;
}

.flipper {
  transition: transform 0.6s;
  transform-style: preserve-3d;
  position: relative;
}

.flip-container:hover .flipper {
  transform: rotateY(180deg);
}

.front, .back {
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}

.back {
  transform: rotateY(180deg);
}

/* Морфинг анимация с clip-path */
.morph-element {
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  transition: clip-path 0.5s cubic-bezier(0.77, 0, 0.175, 1);
}

.morph-element:hover {
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
}

/* Анимация для модальных окон */
.modal {
  animation: modalSlideIn 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Анимация для тултипов */
.tooltip {
  animation: tooltipFade 0.2s ease-out;
}

@keyframes tooltipFade {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}`,
          language: "css"
        },
        {
          id: "p6",
          type: "note",
          content: "Для плавной анимации используйте свойства transform и opacity - они работают с аппаратным ускорением. Избегайте анимации свойств, вызывающих пересчет макета (width, height, margin)."
        }
      ]
    },
    {
      id: "css-7",
      slug: "css-project",
      title: "Практический проект",
      description: "Создание адаптивного веб-сайта с использованием всех изученных техник",
      duration: "60 минут",
      videoId: "cssproject901",
      order: 7,
      paragraphs: [
        {
          id: "p1",
          type: "heading",
          content: "Проект: Адаптивный сайт-портфолио",
          level: 1
        },
        {
          id: "p2",
          type: "code",
          content: `/* styles.css - Полный файл стилей */

/* CSS Reset и базовые стили */
:root {
  /* Цветовая палитра */
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #f56565;
  --text-color: #2d3748;
  --text-light: #718096;
  --bg-color: #ffffff;
  --bg-light: #f7fafc;
  --border-color: #e2e8f0;
  
  /* Типографика */
  --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-size-base: 16px;
  --line-height: 1.6;
  
  /* Отступы и размеры */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  
  /* Тени */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.12);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 25px rgba(0,0,0,0.15);
  
  /* Скругления */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  
  /* Анимации */
  --transition-fast: 150ms ease;
  --transition-base: 300ms ease;
  --transition-slow: 500ms ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-size: var(--font-size-base);
}

body {
  font-family: var(--font-family);
  color: var(--text-color);
  line-height: var(--line-height);
  background-color: var(--bg-color);
  overflow-x: hidden;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color var(--transition-fast);
}

a:hover {
  color: var(--secondary-color);
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

/* Header */
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-base);
}

.header.scrolled {
  padding: var(--spacing-xs) 0;
  box-shadow: var(--shadow-md);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md) 0;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.nav-links {
  display: flex;
  gap: var(--spacing-lg);
  list-style: none;
}

.nav-link {
  font-weight: 500;
  position: relative;
  padding: var(--spacing-xs) 0;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary-color);
  transition: width var(--transition-base);
}

.nav-link:hover::after {
  width: 100%;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--spacing-xs);
}

/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0,0 L100,0 L100,100 Z" fill="rgba(255,255,255,0.05)"/></svg>');
  background-size: cover;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: var(--spacing-md);
  animation: fadeInUp 1s ease-out;
}

.hero-subtitle {
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  margin-bottom: var(--spacing-lg);
  opacity: 0.9;
  animation: fadeInUp 1s ease-out 0.2s both;
}

.hero-buttons {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  animation: fadeInUp 1s ease-out 0.4s both;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-md);
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: all var(--transition-base);
  border: none;
  gap: var(--spacing-xs);
}

.btn-primary {
  background-color: var(--accent-color);
  color: white;
}

.btn-primary:hover {
  background-color: #e53e3e;
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-secondary {
  background-color: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.btn-secondary:hover {
  border-color: white;
  transform: translateY(-2px);
}

/* Skills Section */
.skills {
  padding: var(--spacing-xl) 0;
  background-color: var(--bg-light);
}

.section-title {
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: var(--spacing-xl);
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
  border-radius: 2px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
}

.skill-card {
  background: white;
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
  text-align: center;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.skill-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.skill-name {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
}

/* Projects Section */
.projects {
  padding: var(--spacing-xl) 0;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
}

.project-card {
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.project-image {
  height: 200px;
  width: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.project-content {
  padding: var(--spacing-lg);
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin: var(--spacing-sm) 0;
}

.tag {
  background-color: var(--bg-light);
  color: var(--text-light);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
}

/* Contact Form */
.contact {
  padding: var(--spacing-xl) 0;
  background-color: var(--bg-light);
}

.contact-form {
  max-width: 600px;
  margin: var(--spacing-xl) auto 0;
  background: white;
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.form-group {
  margin-bottom: var(--spacing-md);
}

.form-label {
  display: block;
  margin-bottom: var(--spacing-xs);
  font-weight: 500;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: var(--spacing-sm);
  border: 2px solid var(--border-color);
  border-radius: var(--radius-md);
  font-family: inherit;
  font-size: 1rem;
  transition: border-color var(--transition-fast);
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--primary-color);
}

.form-textarea {
  min-height: 150px;
  resize: vertical;
}

/* Footer */
.footer {
  background-color: var(--text-color);
  color: white;
  padding: var(--spacing-xl) 0;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-xl);
}

.footer-section h3 {
  font-size: 1.25rem;
  margin-bottom: var(--spacing-md);
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: var(--spacing-xs);
}

.footer-links a {
  color: rgba(255, 255, 255, 0.7);
}

.footer-links a:hover {
  color: white;
}

.social-links {
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transition: all var(--transition-fast);
}

.social-link:hover {
  background-color: var(--primary-color);
  transform: translateY(-2px);
}

.copyright {
  text-align: center;
  margin-top: var(--spacing-xl);
  padding-top: var(--spacing-md);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
}

/* Анимации */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Progressive Enhancement */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Темная тема */
@media (prefers-color-scheme: dark) {
  :root {
    --text-color: #e2e8f0;
    --text-light: #a0aec0;
    --bg-color: #1a202c;
    --bg-light: #2d3748;
    --border-color: #4a5568;
  }
  
  .skill-card,
  .project-card,
  .contact-form {
    background-color: var(--bg-light);
  }
}

/* Адаптивность */
@media (max-width: 768px) {
  :root {
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
  }
  
  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    height: 100vh;
    background-color: white;
    flex-direction: column;
    padding: var(--spacing-xl);
    transition: right var(--transition-base);
    box-shadow: var(--shadow-lg);
    z-index: 1001;
  }
  
  .nav-links.active {
    right: 0;
  }
  
  .mobile-menu-btn {
    display: block;
    z-index: 1002;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 300px;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .social-links {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 var(--spacing-sm);
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.125rem;
  }
  
  .skills-grid,
  .projects-grid {
    grid-template-columns: 1fr;
  }
}

/* Печать */
@media print {
  .header,
  .hero-buttons,
  .footer {
    display: none;
  }
  
  body {
    font-size: 12pt;
    color: black;
  }
  
  a {
    color: black;
    text-decoration: underline;
  }
  
  .container {
    max-width: none;
    padding: 0;
  }
}`,
          language: "css"
        },
        {
          id: "p3",
          type: "heading",
          content: "Итоги курса",
          level: 2
        },
        {
          id: "p4",
          type: "list",
          content: "Что вы изучили в курсе:",
          listItems: [
            "✓ Основы CSS: селекторы, свойства, каскадность",
            "✓ Боксовую модель и позиционирование",
            "✓ Flexbox для создания гибких макетов",
            "✓ CSS Grid для сложных сеток",
            "✓ Адаптивный дизайн и медиа-запросы",
            "✓ Анимации и переходы",
            "✓ Создание полноценного адаптивного сайта"
          ]
        },
        {
          id: "p5",
          type: "heading",
          content: "Советы для дальнейшего развития",
          level: 2
        },
        {
          id: "p6",
          type: "list",
          content: "",
          listItems: [
            "Изучите CSS-препроцессоры (Sass, Less)",
            "Освойте CSS-in-JS библиотеки (Styled Components, Emotion)",
            "Практикуйтесь в создании UI компонентов",
            "Изучите методологии (BEM, SMACSS, OOCSS)",
            "Следите за новыми CSS-функциями (Container Queries, :has())",
            "Оптимизируйте производительность CSS",
            "Изучите доступность (accessibility) в CSS"
          ]
        },
        {
          id: "p7",
          type: "quote",
          content: "CSS - это не просто стилизация, это искусство создания красивых и функциональных интерфейсов. Практика - ключ к мастерству."
        },
        {
          id: "p8",
          type: "note",
          content: "Поздравляем с завершением курса! Теперь вы можете создавать современные, адаптивные и красивые веб-сайты. Продолжайте практиковаться и изучать новые техники."
        }
      ]
    }
  ]
}