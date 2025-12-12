(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,18566,(e,t,n)=>{t.exports=e.r(76562)},6752,e=>{"use strict";let t={id:3,slug:"css",title:"Курс по CSS",subTitle:"Стилизация веб-страниц",description:"Компактный курс по CSS3 от основ до продвинутых техник. Изучите все необходимое для создания красивых и адаптивных интерфейсов.",level:"Начинающий",lessons:[{id:"css-1",slug:"css-introduction",title:"Введение в CSS",description:"Основы CSS: селекторы, свойства, подключение стилей",duration:"25 минут",videoId:"cssintro123",order:1,paragraphs:[{id:"p1",type:"heading",content:"Что такое CSS?",level:1},{id:"p2",type:"text",content:"CSS (Cascading Style Sheets) - это язык стилей, который определяет, как HTML элементы должны отображаться на веб-странице. CSS отделяет содержание от представления, что делает код чище и легче в поддержке."},{id:"p3",type:"list",content:"Основные возможности CSS:",listItems:["Изменение цветов, шрифтов и отступов","Позиционирование элементов на странице","Создание адаптивных макетов","Анимации и переходы","Работа с flexbox и grid системами"]},{id:"p4",type:"heading",content:"Способы подключения CSS",level:2},{id:"p5",type:"code",content:`<!-- 1. Внешний CSS файл (рекомендуется) -->
<link rel="stylesheet" href="styles.css">

<!-- 2. Внутренние стили в <head> -->
<style>
  body {
    font-family: Arial, sans-serif;
  }
</style>

<!-- 3. Инлайн-стили (избегайте) -->
<p style="color: red;">Текст красного цвета</p>`,language:"html"},{id:"p6",type:"heading",content:"Селекторы CSS",level:2},{id:"p7",type:"code",content:`/* Элемент селектор */
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
}`,language:"css"},{id:"p8",type:"note",content:"Избегайте использования !important и ID селекторов для стилизации - они затрудняют переопределение стилей и нарушают каскадность."}]},{id:"css-2",slug:"css-box-model",title:"Боксовая модель и позиционирование",description:"Работа с отступами, границами и позиционированием элементов",duration:"35 минут",videoId:"boxmodel456",order:2,paragraphs:[{id:"p1",type:"heading",content:"Боксовая модель CSS",level:1},{id:"p2",type:"text",content:"Каждый HTML элемент представляет собой прямоугольную коробку, которая состоит из: контента, внутренних отступов (padding), границ (border) и внешних отступов (margin)."},{id:"p3",type:"code",content:`/* Стандартная боксовая модель */
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
}`,language:"css"},{id:"p4",type:"heading",content:"Позиционирование элементов",level:2},{id:"p5",type:"code",content:`/* Статическое позиционирование (по умолчанию) */
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
}`,language:"css"},{id:"p6",type:"note",content:"Всегда устанавливайте box-sizing: border-box для всех элементов - это упрощает расчеты размеров и предотвращает неожиданное поведение."}]},{id:"css-3",slug:"css-flexbox",title:"Flexbox",description:"Создание гибких и адаптивных макетов с помощью Flexbox",duration:"40 минут",videoId:"flexbox789",order:3,paragraphs:[{id:"p1",type:"heading",content:"Основы Flexbox",level:1},{id:"p2",type:"text",content:"Flexbox (Flexible Box Layout) - это модуль CSS для создания гибких и адаптивных макетов. Он позволяет легко выравнивать элементы, распределять пространство и управлять порядком отображения."},{id:"p3",type:"code",content:`/* Контейнер Flexbox */
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
}`,language:"css"},{id:"p4",type:"heading",content:"Распространенные паттерны Flexbox",level:2},{id:"p5",type:"code",content:`/* Горизонтальное меню */
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
}`,language:"css"},{id:"p6",type:"note",content:"Flexbox идеально подходит для одномерных макетов (строка или колонка). Для двумерных сеток используйте CSS Grid."}]},{id:"css-4",slug:"css-grid",title:"CSS Grid",description:"Создание сложных сеточных макетов",duration:"45 минут",videoId:"grid012",order:4,paragraphs:[{id:"p1",type:"heading",content:"Основы CSS Grid",level:1},{id:"p2",type:"text",content:"CSS Grid Layout - это мощная система для создания двумерных макетов. Она позволяет работать с строками и колонками одновременно, создавая сложные сетки с минимальным кодом."},{id:"p3",type:"code",content:`/* Создание Grid контейнера */
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
}`,language:"css"},{id:"p4",type:"heading",content:"Практические примеры Grid",level:2},{id:"p5",type:"code",content:`/* Карточки в адаптивной сетке */
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
}`,language:"css"},{id:"p6",type:"note",content:"Используйте Grid для сложных двумерных макетов, а Flexbox для простых одномерных. Они прекрасно работают вместе!"}]},{id:"css-5",slug:"css-responsive",title:"Адаптивный дизайн",description:"Создание сайтов, работающих на всех устройствах",duration:"35 минут",videoId:"responsive345",order:5,paragraphs:[{id:"p1",type:"heading",content:"Медиа-запросы и адаптивность",level:1},{id:"p2",type:"text",content:"Адаптивный дизайн позволяет создавать сайты, которые корректно отображаются на всех устройствах - от мобильных телефонов до десктопных компьютеров."},{id:"p3",type:"code",content:`/* Базовый viewport мета-тег */
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
}`,language:"css"},{id:"p4",type:"heading",content:"Адаптивные изображения и типографика",level:2},{id:"p5",type:"code",content:`/* Адаптивные изображения */
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
}`,language:"css"},{id:"p6",type:"note",content:"Всегда используйте Mobile First подход - начинайте с мобильной версии и добавляйте стили для больших экранов. Это проще и эффективнее."}]},{id:"css-6",slug:"css-animations",title:"Анимации и переходы",description:"Создание интерактивных и анимированных интерфейсов",duration:"30 минут",videoId:"animations678",order:6,paragraphs:[{id:"p1",type:"heading",content:"Transitions и Animations",level:1},{id:"p2",type:"text",content:"CSS позволяет создавать плавные переходы и сложные анимации без использования JavaScript. Это улучшает пользовательский опыт и делает интерфейсы более живыми."},{id:"p3",type:"code",content:`/* CSS Transitions */
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
}`,language:"css"},{id:"p4",type:"heading",content:"3D трансформации и перспектива",level:2},{id:"p5",type:"code",content:`/* 2D трансформации */
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
}`,language:"css"},{id:"p6",type:"note",content:"Для плавной анимации используйте свойства transform и opacity - они работают с аппаратным ускорением. Избегайте анимации свойств, вызывающих пересчет макета (width, height, margin)."}]},{id:"css-7",slug:"css-project",title:"Практический проект",description:"Создание адаптивного веб-сайта с использованием всех изученных техник",duration:"60 минут",videoId:"cssproject901",order:7,paragraphs:[{id:"p1",type:"heading",content:"Проект: Адаптивный сайт-портфолио",level:1},{id:"p2",type:"code",content:`/* styles.css - Полный файл стилей */

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
}`,language:"css"},{id:"p3",type:"heading",content:"Итоги курса",level:2},{id:"p4",type:"list",content:"Что вы изучили в курсе:",listItems:["✓ Основы CSS: селекторы, свойства, каскадность","✓ Боксовую модель и позиционирование","✓ Flexbox для создания гибких макетов","✓ CSS Grid для сложных сеток","✓ Адаптивный дизайн и медиа-запросы","✓ Анимации и переходы","✓ Создание полноценного адаптивного сайта"]},{id:"p5",type:"heading",content:"Советы для дальнейшего развития",level:2},{id:"p6",type:"list",content:"",listItems:["Изучите CSS-препроцессоры (Sass, Less)","Освойте CSS-in-JS библиотеки (Styled Components, Emotion)","Практикуйтесь в создании UI компонентов","Изучите методологии (BEM, SMACSS, OOCSS)","Следите за новыми CSS-функциями (Container Queries, :has())","Оптимизируйте производительность CSS","Изучите доступность (accessibility) в CSS"]},{id:"p7",type:"quote",content:"CSS - это не просто стилизация, это искусство создания красивых и функциональных интерфейсов. Практика - ключ к мастерству."},{id:"p8",type:"note",content:"Поздравляем с завершением курса! Теперь вы можете создавать современные, адаптивные и красивые веб-сайты. Продолжайте практиковаться и изучать новые техники."}]}]},n={id:1,slug:"html",title:"Курс по HTML",subTitle:"Гипертекстовая разметка",description:"Полный курс по HTML5 с нуля до профессионала. Изучите все аспекты современного HTML.",level:"Начинающий",lessons:[{id:"html-1",slug:"html-introduction",title:"Введение в HTML",description:"Основные понятия и структура HTML документа",duration:"25 минут",videoId:"_R5a-Kc0pRc?list=PLDyJYA6aTY1nlkG0gBj96XDmDSC4Fy1TO",order:1,paragraphs:[{id:"p1",type:"heading",content:"Что такое HTML?",level:1},{id:"p2",type:"text",content:"HTML (HyperText Markup Language) - это стандартизированный язык разметки документов для просмотра веб-страниц в браузере. HTML определяет структуру и семантическое содержание веб-страницы."},{id:"p3",type:"text",content:"HTML не является языком программирования - это язык разметки, который сообщает браузеру, как отображать контент. HTML использует теги для обозначения различных элементов страницы."},{id:"p4",type:"heading",content:"История HTML",level:2},{id:"p5",type:"list",content:"Основные версии HTML:",listItems:["1991 - HTML (первая версия)","1995 - HTML 2.0 (первый стандарт)","1997 - HTML 3.2 (расширенная поддержка таблиц)","1999 - HTML 4.01 (последняя версия классического HTML)","2000 - XHTML (более строгий XML-вариант)","2014 - HTML5 (современный стандарт)"]},{id:"p6",type:"heading",content:"Базовая структура HTML документа",level:2},{id:"p7",type:"code",content:`<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Моя первая веб-страница</title>
</head>
<body>
    <h1>Добро пожаловать!</h1>
    <p>Это мой первый HTML документ.</p>
</body>
</html>`,language:"html"},{id:"p8",type:"text",content:"Каждый HTML документ должен содержать декларацию <!DOCTYPE html>, которая указывает браузеру, что это документ HTML5."},{id:"p9",type:"note",content:"Важно: Всегда указывайте атрибут lang в теге <html> для правильной работы скринридеров и SEO."}]},{id:"html-2",slug:"html-basic-elements",title:"Базовые элементы HTML",description:"Изучаем основные теги HTML",duration:"35 минут",videoId:"YzYkebeN7mg?list=PLDyJYA6aTY1nlkG0gBj96XDmDSC4Fy1TO",order:2,paragraphs:[{id:"p1",type:"heading",content:"Текстовые элементы",level:1},{id:"p2",type:"code",content:`<!-- Заголовки -->
<h1>Главный заголовок</h1>
<h2>Заголовок раздела</h2>
<h3>Подзаголовок</h3>
<h4>Второстепенный заголовок</h4>
<h5>Мелкий заголовок</h5>
<h6>Самый мелкий заголовок</h6>

<!-- Параграфы -->
<p>Это обычный параграф текста.</p>
<p>Это другой параграф с <strong>жирным</strong> и <em>курсивным</em> текстом.</p>

<!-- Разрывы и горизонтальные линии -->
<p>Первая строка.<br>Вторая строка после переноса.</p>
<hr>
<p>Текст после горизонтальной линии.</p>`,language:"html"},{id:"p3",type:"list",content:"Основные текстовые теги:",listItems:["<strong> или <b> - жирный текст","<em> или <i> - курсивный текст","<u> - подчеркнутый текст","<mark> - выделенный текст","<small> - мелкий текст","<sub> - нижний индекс","<sup> - верхний индекс","<code> - код программы","<pre> - преформатированный текст"]},{id:"p4",type:"heading",content:"Ссылки и изображения",level:2},{id:"p5",type:"code",content:`<!-- Ссылки -->
<a href="https://example.com">Внешняя ссылка</a>
<a href="/about.html">Внутренняя ссылка</a>
<a href="#section2">Якорная ссылка</a>
<a href="mailto:email@example.com">Ссылка на email</a>
<a href="tel:+1234567890">Ссылка на телефон</a>

<!-- Изображения -->
<img src="image.jpg" alt="Описание изображения" width="300" height="200">
<img src="logo.png" alt="Логотип компании" loading="lazy">`,language:"html"},{id:"p6",type:"note",content:"Всегда указывайте атрибут alt для изображений - это важно для доступности и SEO."}]},{id:"html-3",slug:"html-lists-tables",title:"Списки и таблицы",description:"Создание списков и таблиц в HTML",duration:"40 минут",videoId:"table123",order:3,paragraphs:[{id:"p1",type:"heading",content:"Типы списков в HTML",level:1},{id:"p2",type:"code",content:`<!-- Нумерованный список -->
<ol>
    <li>Первый пункт</li>
    <li>Второй пункт</li>
    <li>Третий пункт</li>
</ol>

<!-- Маркированный список -->
<ul>
    <li>Элемент списка 1</li>
    <li>Элемент списка 2</li>
    <li>Элемент списка 3</li>
</ul>

<!-- Список определений -->
<dl>
    <dt>HTML</dt>
    <dd>Язык разметки гипертекста</dd>
    <dt>CSS</dt>
    <dd>Каскадные таблицы стилей</dd>
</dl>

<!-- Вложенные списки -->
<ul>
    <li>Пункт 1
        <ul>
            <li>Подпункт 1.1</li>
            <li>Подпункт 1.2</li>
        </ul>
    </li>
    <li>Пункт 2</li>
</ul>`,language:"html"},{id:"p3",type:"heading",content:"Создание таблиц",level:2},{id:"p4",type:"code",content:`<!-- Базовая таблица -->
<table>
    <caption>Расписание занятий</caption>
    <thead>
        <tr>
            <th>День</th>
            <th>Предмет</th>
            <th>Время</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Понедельник</td>
            <td>Математика</td>
            <td>9:00</td>
        </tr>
        <tr>
            <td>Вторник</td>
            <td>Физика</td>
            <td>10:00</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="3">Всего занятий: 2</td>
        </tr>
    </tfoot>
</table>

<!-- Таблица с объединением ячеек -->
<table border="1">
    <tr>
        <th rowspan="2">Месяц</th>
        <th colspan="2">Продажи</th>
    </tr>
    <tr>
        <th>Количество</th>
        <th>Сумма</th>
    </tr>
    <tr>
        <td>Январь</td>
        <td>100</td>
        <td>5000$</td>
    </tr>
</table>`,language:"html"},{id:"p5",type:"note",content:"Используйте таблицы только для табличных данных. Для верстки используйте CSS Grid или Flexbox."}]},{id:"html-4",slug:"html-forms",title:"HTML формы",description:"Создание интерактивных форм",duration:"45 минут",videoId:"forms456",order:4,paragraphs:[{id:"p1",type:"heading",content:"Основы HTML форм",level:1},{id:"p2",type:"code",content:`<!-- Базовая форма -->
<form action="/submit" method="POST">
    <fieldset>
        <legend>Контактная информация</legend>
        
        <!-- Текстовое поле -->
        <label for="name">Имя:</label>
        <input type="text" id="name" name="name" required>
        
        <!-- Email поле -->
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        
        <!-- Пароль -->
        <label for="password">Пароль:</label>
        <input type="password" id="password" name="password" minlength="8">
        
        <!-- Текстовая область -->
        <label for="message">Сообщение:</label>
        <textarea id="message" name="message" rows="4"></textarea>
        
        <!-- Выпадающий список -->
        <label for="country">Страна:</label>
        <select id="country" name="country">
            <option value="">Выберите страну</option>
            <option value="ru">Россия</option>
            <option value="us">США</option>
            <option value="de">Германия</option>
        </select>
        
        <!-- Чекбоксы -->
        <div>
            <input type="checkbox" id="subscribe" name="subscribe" checked>
            <label for="subscribe">Подписаться на рассылку</label>
        </div>
        
        <!-- Радио-кнопки -->
        <fieldset>
            <legend>Пол:</legend>
            <input type="radio" id="male" name="gender" value="male">
            <label for="male">Мужской</label>
            <input type="radio" id="female" name="gender" value="female">
            <label for="female">Женский</label>
        </fieldset>
        
        <!-- Кнопки -->
        <button type="submit">Отправить</button>
        <button type="reset">Сбросить</button>
    </fieldset>
</form>`,language:"html"},{id:"p3",type:"heading",content:"Новые типы input в HTML5",level:2},{id:"p4",type:"code",content:`<!-- Современные типы полей -->
<input type="date" name="birthdate">
<input type="color" name="favcolor">
<input type="range" name="volume" min="0" max="100">
<input type="number" name="age" min="1" max="120">
<input type="url" name="website" placeholder="https://example.com">
<input type="tel" name="phone" pattern="[0-9]{10}">
<input type="search" name="search">
<input type="file" name="photo" accept="image/*">
<input type="datetime-local" name="meeting-time">

<!-- Список автодополнения -->
<input list="browsers" name="browser">
<datalist id="browsers">
    <option value="Chrome">
    <option value="Firefox">
    <option value="Safari">
</datalist>`,language:"html"},{id:"p5",type:"note",content:"Всегда используйте атрибут required для обязательных полей и правильные типы input для лучшей мобильной поддержки."}]},{id:"html-5",slug:"html-semantic-elements",title:"Семантические элементы HTML5",description:"Современные семантические теги",duration:"35 минут",videoId:"semantic789",order:5,paragraphs:[{id:"p1",type:"heading",content:"Зачем нужны семантические теги?",level:1},{id:"p2",type:"text",content:"Семантические теги делают HTML код более понятным как для разработчиков, так и для браузеров, поисковых систем и скринридеров. Они точно описывают назначение каждого раздела страницы."},{id:"p3",type:"code",content:`<!-- Структура с семантическими тегами -->
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Семантическая разметка</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="/">Главная</a></li>
                <li><a href="/about">О нас</a></li>
                <li><a href="/contact">Контакты</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <article>
            <header>
                <h1>Заголовок статьи</h1>
                <time datetime="2024-01-15">15 января 2024</time>
            </header>
            
            <section>
                <h2>Введение</h2>
                <p>Текст введения...</p>
            </section>
            
            <section>
                <h2>Основная часть</h2>
                <p>Основной текст статьи...</p>
                <figure>
                    <img src="image.jpg" alt="Иллюстрация">
                    <figcaption>Подпись к изображению</figcaption>
                </figure>
            </section>
            
            <footer>
                <p>Автор: Иван Иванов</p>
            </footer>
        </article>
        
        <aside>
            <h3>Похожие статьи</h3>
            <ul>
                <li><a href="#">Статья 1</a></li>
                <li><a href="#">Статья 2</a></li>
            </ul>
        </aside>
    </main>
    
    <footer>
        <p>&copy; 2024 Моя компания. Все права защищены.</p>
        <address>
            Контакты: <a href="mailto:info@example.com">info@example.com</a>
        </address>
    </footer>
</body>
</html>`,language:"html"},{id:"p4",type:"list",content:"Основные семантические теги HTML5:",listItems:["<header> - заголовок страницы или раздела","<nav> - навигационные ссылки","<main> - основное содержимое страницы","<article> - независимый контент (статья, пост)","<section> - тематическая группа контента","<aside> - дополнительный контент (сайдбар)","<footer> - подвал страницы или раздела","<figure> и <figcaption> - иллюстрации с подписями","<time> - время и дата","<mark> - выделенный текст","<details> и <summary> - раскрывающийся блок"]}]},{id:"html-6",slug:"html-media",title:"Медиа элементы",description:"Работа с аудио, видео и графикой",duration:"30 минут",videoId:"media012",order:6,paragraphs:[{id:"p1",type:"heading",content:"Аудио и видео в HTML5",level:1},{id:"p2",type:"code",content:`<!-- Аудио плеер -->
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    Ваш браузер не поддерживает аудио элементы.
</audio>

<!-- Видео плеер -->
<video controls width="640" height="360" poster="preview.jpg">
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    <track src="subtitles.vtt" kind="subtitles" srclang="ru" label="Русский">
    Ваш браузер не поддерживает видео элементы.
</video>

<!-- Элемент picture для адаптивных изображений -->
<picture>
    <source media="(min-width: 1200px)" srcset="large.jpg">
    <source media="(min-width: 768px)" srcset="medium.jpg">
    <img src="small.jpg" alt="Адаптивное изображение">
</picture>`,language:"html"},{id:"p3",type:"heading",content:"SVG графика",level:2},{id:"p4",type:"code",content:`<!-- Встроенный SVG -->
<svg width="100" height="100">
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
    <text x="50" y="55" text-anchor="middle" fill="white">SVG</text>
</svg>

<!-- SVG через img -->
<img src="logo.svg" alt="Логотип SVG" width="100" height="100">

<!-- Фигуры SVG -->
<svg width="200" height="200">
    <rect width="100" height="100" x="10" y="10" fill="blue" />
    <line x1="10" y1="10" x2="110" y2="110" stroke="red" stroke-width="2" />
    <polygon points="150,10 190,90 110,90" fill="green" />
</svg>`,language:"html"},{id:"p5",type:"note",content:"SVG изображения масштабируются без потери качества и обычно имеют меньший размер файла по сравнению с растровой графикой."}]},{id:"html-7",slug:"html-meta-tags",title:"Мета-теги и SEO",description:"Оптимизация для поисковых систем",duration:"25 минут",videoId:"seo345",order:7,paragraphs:[{id:"p1",type:"heading",content:"Важные мета-теги",level:1},{id:"p2",type:"code",content:`<!-- Основные мета-теги -->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SEO мета-теги -->
    <title>Мой сайт - Главная страница</title>
    <meta name="description" content="Описание страницы для поисковых систем">
    <meta name="keywords" content="ключевые, слова, через, запятую">
    <meta name="author" content="Имя автора">
    
    <!-- Open Graph для социальных сетей -->
    <meta property="og:title" content="Заголовок для соцсетей">
    <meta property="og:description" content="Описание для соцсетей">
    <meta property="og:image" content="https://example.com/image.jpg">
    <meta property="og:url" content="https://example.com/page.html">
    <meta property="og:type" content="website">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Заголовок для Twitter">
    
    <!-- Другие полезные мета-теги -->
    <meta name="robots" content="index, follow">
    <meta name="theme-color" content="#4285f4">
    <link rel="canonical" href="https://example.com/page.html">
    
    <!-- Фавиконки -->
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link rel="icon" href="/icon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    
    <!-- Manifest для PWA -->
    <link rel="manifest" href="/manifest.json">
</head>`,language:"html"},{id:"p3",type:"heading",content:"Микроразметка Schema.org",level:2},{id:"p4",type:"code",content:`<!-- Микроразметка для статьи -->
<article itemscope itemtype="https://schema.org/Article">
    <h1 itemprop="headline">Заголовок статьи</h1>
    <div itemprop="author" itemscope itemtype="https://schema.org/Person">
        Автор: <span itemprop="name">Иван Иванов</span>
    </div>
    <time itemprop="datePublished" datetime="2024-01-15">15 января 2024</time>
    <div itemprop="articleBody">
        <p>Текст статьи...</p>
    </div>
</article>

<!-- Микроразметка для организации -->
<div itemscope itemtype="https://schema.org/Organization">
    <span itemprop="name">Моя компания</span>
    <div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
        Адрес: <span itemprop="streetAddress">ул. Примерная, д. 1</span>
    </div>
    Телефон: <span itemprop="telephone">+7 (123) 456-78-90</span>
</div>`,language:"html"}]},{id:"html-8",slug:"html-advanced",title:"Продвинутый HTML",description:"Современные возможности HTML5",duration:"40 минут",videoId:"advanced678",order:8,paragraphs:[{id:"p1",type:"heading",content:"Web Components и Custom Elements",level:1},{id:"p2",type:"code",content:`<!-- Использование кастомных элементов -->
<user-card name="Иван Иванов" avatar="ivan.jpg">
    <span slot="email">ivan@example.com</span>
    <span slot="phone">+7 (123) 456-78-90</span>
</user-card>

<!-- Template элемент -->
<template id="product-card">
    <div class="product">
        <img class="product-image" src="" alt="">
        <h3 class="product-title"></h3>
        <p class="product-price"></p>
        <button class="buy-button">Купить</button>
    </div>
</template>

<!-- Details/Summary элемент -->
<details>
    <summary>Подробнее о продукте</summary>
    <p>Здесь находится дополнительная информация...</p>
    <p>Которая изначально скрыта от пользователя.</p>
</details>

<!-- Dialog элемент -->
<dialog id="modal">
    <h2>Модальное окно</h2>
    <p>Содержимое модального окна...</p>
    <button onclick="document.getElementById('modal').close()">Закрыть</button>
</dialog>
<button onclick="document.getElementById('modal').showModal()">Открыть модальное окно</button>`,language:"html"},{id:"p3",type:"heading",content:"Доступность (Accessibility)",level:2},{id:"p4",type:"code",content:`<!-- Элементы с правильной доступностью -->
<nav aria-label="Основная навигация">
    <ul>
        <li><a href="/" aria-current="page">Главная</a></li>
        <li><a href="/about">О нас</a></li>
    </ul>
</nav>

<button aria-label="Закрыть меню" onclick="closeMenu()">\xd7</button>

<div role="alert" aria-live="assertive">
    Важное сообщение для пользователя!
</div>

<!-- Прогресс бар -->
<label for="progress">Загрузка:</label>
<progress id="progress" value="75" max="100">75%</progress>

<!-- Скрытые элементы для скринридеров -->
<div class="visually-hidden">
    Этот текст виден только скринридерам.
</div>

<!-- Атрибуты ARIA -->
<button aria-expanded="false" aria-controls="dropdown-content">
    Меню
</button>
<div id="dropdown-content" aria-hidden="true">
    Содержимое меню...
</div>`,language:"html"},{id:"p5",type:"heading",content:"Оптимизация производительности",level:2},{id:"p6",type:"list",content:"Рекомендации по производительности:",listItems:["Используйте атрибут loading='lazy' для изображений","Указывайте размеры изображений через width и height","Используйте современные форматы изображений (WebP, AVIF)","Минимизируйте использование iframe","Используйте preconnect и prefetch для критических ресурсов","Декларируйте фавиконки в правильном порядке"]}]},{id:"html-9",slug:"html-best-practices",title:"Лучшие практики HTML",description:"Правила написания качественного HTML кода",duration:"30 минут",videoId:"best901",order:9,paragraphs:[{id:"p1",type:"heading",content:"Кодстайл и организация",level:1},{id:"p2",type:"list",content:"Основные правила:",listItems:["Используйте нижний регистр для тегов и атрибутов","Всегда заключайте значения атрибутов в кавычки","Используйте отступы в 2 или 4 пробела","Закрывайте все теги, даже если они не обязательны","Пишите комментарии для сложных разделов","Группируйте связанные элементы вместе"]},{id:"p3",type:"code",content:`<!-- Плохой пример -->
<DIV CLASS="container"><P>Текст без отступа</P></DIV>

<!-- Хороший пример -->
<div class="container">
    <p>Текст с правильным отступом</p>
</div>

<!-- Комментарии в коде -->
<!-- Header секция начинается здесь -->
<header>
    <!-- Логотип и навигация -->
    <nav>
        <!-- Список навигации -->
        <ul>
            <li><a href="/">Главная</a></li>
            <!-- TODO: Добавить выпадающее меню -->
            <li><a href="/about">О нас</a></li>
        </ul>
    </nav>
</header>
<!-- Header секция заканчивается здесь -->`,language:"html"},{id:"p4",type:"heading",content:"Валидация HTML",level:2},{id:"p5",type:"text",content:"Всегда проверяйте свой HTML код на валидность с помощью W3C Validator. Валидный код гарантирует правильное отображение во всех браузерах и лучшую производительность."},{id:"p6",type:"quote",content:"Хороший HTML код - это не только о том, что работает, но и о том, что понятно, доступно и поддерживаемо."},{id:"p7",type:"heading",content:"Чеклист качества HTML кода",level:2},{id:"p8",type:"list",content:"",listItems:["✓ Используется doctype HTML5","✓ Указан атрибут lang","✓ Корректная кодировка UTF-8","✓ Viewport meta тег для мобильных","✓ Семантические теги вместо div","✓ Все изображения имеют alt текст","✓ Формы имеют правильные label","✓ Нет ошибок в консоли браузера","✓ Код проходит валидацию W3C","✓ Поддержка скринридеров (ARIA)"]}]},{id:"html-10",slug:"html-practical-project",title:"Практический проект",description:"Создание полноценной веб-страницы",duration:"50 минут",videoId:"project234",order:10,paragraphs:[{id:"p1",type:"heading",content:"Финальный проект: Сайт портфолио",level:1},{id:"p2",type:"code",content:`<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Портфолио разработчика</title>
    <meta name="description" content="Персональное портфолио веб-разработчика">
    <meta name="keywords" content="веб-разработка, HTML, CSS, JavaScript, портфолио">
    <meta name="author" content="Иван Иванов">
    <link rel="icon" href="favicon.ico">
</head>
<body>
    <!-- Навигация -->
    <header>
        <nav aria-label="Основная навигация">
            <a href="/" aria-current="page">
                <img src="logo.svg" alt="Логотип" width="50" height="50">
            </a>
            <ul>
                <li><a href="#about">Обо мне</a></li>
                <li><a href="#portfolio">Портфолио</a></li>
                <li><a href="#skills">Навыки</a></li>
                <li><a href="#contact">Контакты</a></li>
            </ul>
        </nav>
    </header>

    <!-- Основной контент -->
    <main>
        <!-- Герой-секция -->
        <section id="hero">
            <h1>Иван Иванов<br><small>Веб-разработчик</small></h1>
            <p>Создаю современные и функциональные веб-приложения</p>
            <a href="#portfolio" class="button">Посмотреть работы</a>
        </section>

        <!-- Обо мне -->
        <section id="about">
            <h2>Обо мне</h2>
            <article>
                <img src="avatar.jpg" alt="Фото Ивана Иванова" width="200" height="200" loading="lazy">
                <div>
                    <p>Привет! Я веб-разработчик с 5-летним опытом...</p>
                    <p>Специализируюсь на frontend разработке с использованием современных технологий.</p>
                </div>
            </article>
        </section>

        <!-- Портфолио -->
        <section id="portfolio">
            <h2>Мои работы</h2>
            <div class="projects">
                <article class="project">
                    <img src="project1.jpg" alt="Скриншот проекта 1" loading="lazy">
                    <h3>Корпоративный сайт</h3>
                    <p>Сайт для IT компании с адаптивным дизайном</p>
                    <a href="https://project1.example.com" target="_blank" rel="noopener">Посмотреть проект</a>
                </article>
                <!-- Еще проекты -->
            </div>
        </section>

        <!-- Навыки -->
        <section id="skills">
            <h2>Технические навыки</h2>
            <table>
                <thead>
                    <tr>
                        <th>Технология</th>
                        <th>Уровень</th>
                        <th>Опыт</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>HTML5</td>
                        <td><meter value="95" min="0" max="100">95%</meter></td>
                        <td>5 лет</td>
                    </tr>
                    <tr>
                        <td>CSS3</td>
                        <td><meter value="90" min="0" max="100">90%</meter></td>
                        <td>5 лет</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <!-- Контакты -->
        <section id="contact">
            <h2>Связаться со мной</h2>
            <form action="/contact" method="POST">
                <label for="contact-name">Имя:</label>
                <input type="text" id="contact-name" name="name" required>
                
                <label for="contact-email">Email:</label>
                <input type="email" id="contact-email" name="email" required>
                
                <label for="contact-message">Сообщение:</label>
                <textarea id="contact-message" name="message" required></textarea>
                
                <button type="submit">Отправить</button>
            </form>
            
            <address>
                <p>Email: <a href="mailto:ivan@example.com">ivan@example.com</a></p>
                <p>Телефон: <a href="tel:+71234567890">+7 (123) 456-78-90</a></p>
            </address>
        </section>
    </main>

    <!-- Футер -->
    <footer>
        <p>&copy; 2024 Иван Иванов. Все права защищены.</p>
        <p>
            <a href="/privacy">Политика конфиденциальности</a> |
            <a href="/terms">Условия использования</a>
        </p>
        <div class="social">
            <a href="https://github.com" aria-label="GitHub"><img src="github.svg" alt="GitHub"></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><img src="linkedin.svg" alt="LinkedIn"></a>
        </div>
    </footer>

    <!-- Скрипты -->
    <script>
        // Базовая JavaScript логика
        console.log('Сайт загружен');
    </script>
</body>
</html>`,language:"html"},{id:"p3",type:"heading",content:"Итоги курса",level:2},{id:"p4",type:"list",content:"Что вы узнали:",listItems:["Основы HTML и его историю","Все базовые элементы и теги","Создание форм и таблиц","Семантическую разметку HTML5","Работу с медиа элементами","SEO оптимизацию и мета-теги","Доступность (accessibility)","Лучшие практики написания кода","Создание полноценных веб-страниц"]},{id:"p5",type:"note",content:"Поздравляем! Вы завершили полный курс по HTML. Теперь вы готовы создавать современные, семантические и доступные веб-страницы."},{id:"p6",type:"quote",content:"HTML - это фундамент веб-разработки. Хорошее понимание HTML открывает путь к освоению CSS, JavaScript и современных фреймворков."}]}]},o={id:2,slug:"javascript",title:"Курс по JavaScript",subTitle:"Язык программирования для веба",description:"Полный курс JavaScript от основ до продвинутых концепций. Изучите самый популярный язык программирования в мире.",level:"Начинающий",lessons:[{id:"js-1",slug:"js-introduction",title:"Введение в JavaScript",description:"Основы JavaScript: переменные, типы данных, операторы",duration:"45 минут",videoId:"dQw4w9WgXcQ",order:1,paragraphs:[{id:"p1",type:"heading",content:"Что такое JavaScript?",level:1},{id:"p2",type:"text",content:"JavaScript - это высокоуровневый, интерпретируемый язык программирования, который используется для создания интерактивных веб-страниц. Это один из трех основных языков веб-разработки (HTML, CSS, JavaScript)."},{id:"p3",type:"list",content:"Где используется JavaScript:",listItems:["Веб-разработка (фронтенд и бэкенд через Node.js)","Мобильные приложения (React Native, Ionic)","Десктопные приложения (Electron)","Игры (WebGL, Phaser)","Машинное обучение (TensorFlow.js)"]},{id:"p4",type:"heading",content:"Переменные и константы",level:2},{id:"p5",type:"code",content:`// Объявление переменных
var oldVariable = "Устаревший способ"; // ES5
let modernVariable = "Современный способ"; // ES6+
const constantVariable = "Неизменяемое значение"; // ES6+

// Попробуем изменить
modernVariable = "Новое значение"; // ОК
// constantVariable = "Другое значение"; // Ошибка!

// Области видимости
function scopeExample() {
    if (true) {
        var functionScoped = "Функциональная область";
        let blockScoped = "Блочная область";
        const alsoBlockScoped = "Тоже блочная";
    }
    console.log(functionScoped); // Работает
    // console.log(blockScoped); // Ошибка!
    // console.log(alsoBlockScoped); // Ошибка!
}

// Правила именования
const userName = "Иван"; // camelCase
const API_KEY = "secret123"; // UPPER_SNAKE_CASE
const $specialVariable = "jQuery style";
const _privateVariable = "приватная";`,language:"javascript"},{id:"p6",type:"note",content:"Всегда используйте const по умолчанию, и только let если значение действительно будет меняться. Старайтесь избегать var."},{id:"p7",type:"heading",content:"Типы данных",level:2},{id:"p8",type:"code",content:`// Примитивные типы
const stringType = "Текст"; // Строка
const numberType = 42; // Число
const booleanType = true; // Логическое значение
const nullType = null; // "Ничего"
const undefinedType = undefined; // "Не определено"
const symbolType = Symbol('id'); // Символ
const bigIntType = 9007199254740991n; // Большое целое

// Объектные типы
const objectType = { name: "Иван", age: 30 }; // Объект
const arrayType = [1, 2, 3, 4, 5]; // Массив
const functionType = function() { return "Привет"; }; // Функция
const dateType = new Date(); // Дата

// Проверка типов
console.log(typeof stringType); // "string"
console.log(typeof numberType); // "number"
console.log(typeof booleanType); // "boolean"
console.log(typeof nullType); // "object" (историческая особенность)
console.log(typeof undefinedType); // "undefined"
console.log(typeof arrayType); // "object"
console.log(Array.isArray(arrayType)); // true

// Динамическая типизация
let dynamic = "текст"; // string
dynamic = 123; // теперь number
dynamic = true; // теперь boolean`,language:"javascript"},{id:"p9",type:"heading",content:"Операторы",level:2},{id:"p10",type:"code",content:`// Арифметические операторы
let sum = 10 + 5; // 15
let difference = 10 - 5; // 5
let product = 10 * 5; // 50
let quotient = 10 / 5; // 2
let remainder = 10 % 3; // 1
let power = 2 ** 3; // 8

// Операторы сравнения
console.log(5 == "5"); // true (нестрогое)
console.log(5 === "5"); // false (строгое)
console.log(5 != "5"); // false
console.log(5 !== "5"); // true
console.log(10 > 5); // true
console.log(10 >= 10); // true

// Логические операторы
const and = true && false; // false
const or = true || false; // true
const not = !true; // false

// Тернарный оператор
const age = 18;
const status = age >= 18 ? "Взрослый" : "Ребенок";

// Операторы присваивания
let x = 10;
x += 5; // x = 15
x -= 3; // x = 12
x *= 2; // x = 24
x /= 4; // x = 6

// Операторы нулевого слияния и опциональной цепочки
const user = { name: "Иван" };
const userName = user?.name ?? "Гость";
console.log(userName); // "Иван"`,language:"javascript"}]},{id:"js-2",slug:"js-control-flow",title:"Управление потоком выполнения",description:"Условные операторы и циклы",duration:"40 минут",videoId:"controlflow123",order:2,paragraphs:[{id:"p1",type:"heading",content:"Условные операторы",level:1},{id:"p2",type:"code",content:`// if...else
const hour = new Date().getHours();
let greeting;

if (hour < 12) {
    greeting = "Доброе утро!";
} else if (hour < 18) {
    greeting = "Добрый день!";
} else {
    greeting = "Добрый вечер!";
}

// Switch
const day = new Date().getDay();
let dayName;

switch (day) {
    case 0:
        dayName = "Воскресенье";
        break;
    case 1:
        dayName = "Понедельник";
        break;
    case 2:
        dayName = "Вторник";
        break;
    case 3:
        dayName = "Среда";
        break;
    case 4:
        dayName = "Четверг";
        break;
    case 5:
        dayName = "Пятница";
        break;
    case 6:
        dayName = "Суббота";
        break;
    default:
        dayName = "Неизвестный день";
}

// Тернарный оператор
const isAdult = age >= 18 ? "Взрослый" : "Ребенок";

// Логические операторы как условные
const user = null;
const username = user && user.name; // null
const defaultName = user || "Гость"; // "Гость"`,language:"javascript"},{id:"p3",type:"heading",content:"Циклы",level:2},{id:"p4",type:"code",content:`// Цикл for
for (let i = 0; i < 5; i++) {
    console.log(\`Итерация: \${i}\`);
}

// Цикл while
let count = 0;
while (count < 5) {
    console.log(\`Счет: \${count}\`);
    count++;
}

// Цикл do...while
let num = 0;
do {
    console.log(\`Число: \${num}\`);
    num++;
} while (num < 3);

// Цикл for...in (для объектов)
const person = { name: "Иван", age: 30, city: "Москва" };
for (let key in person) {
    console.log(\`\${key}: \${person[key]}\`);
}

// Цикл for...of (для итерируемых объектов)
const colors = ["красный", "зеленый", "синий"];
for (let color of colors) {
    console.log(color);
}

// Методы break и continue
for (let i = 0; i < 10; i++) {
    if (i === 3) continue; // Пропустить итерацию
    if (i === 7) break; // Прервать цикл
    console.log(i);
}

// Метки для циклов
outerLoop: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outerLoop; // Прервать внешний цикл
        }
        console.log(\`i=\${i}, j=\${j}\`);
    }
}`,language:"javascript"},{id:"p5",type:"note",content:"Для массивов предпочтительнее использовать методы map, filter, reduce вместо циклов for. Это улучшает читаемость кода."}]},{id:"js-3",slug:"js-functions",title:"Функции в JavaScript",description:"Все о функциях: объявление, параметры, замыкания",duration:"50 минут",videoId:"functions456",order:3,paragraphs:[{id:"p1",type:"heading",content:"Объявление функций",level:1},{id:"p2",type:"code",content:`// Function Declaration (поднимается)
function greet(name) {
    return \`Привет, \${name}!\`;
}

// Function Expression
const greetExpression = function(name) {
    return \`Привет, \${name}!\`;
};

// Arrow Function (ES6+)
const greetArrow = (name) => {
    return \`Привет, \${name}!\`;
};

// Сокращенная Arrow Function
const greetShort = name => \`Привет, \${name}!\`;

// Функции как значения
const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b
};

console.log(operations.add(5, 3)); // 8

// Параметры по умолчанию
function createUser(name, age = 18, city = "Москва") {
    return { name, age, city };
}

// Rest параметры
function sumAll(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10

// Деструктуризация параметров
function printUser({ name, age, city = "Неизвестно" }) {
    console.log(\`\${name}, \${age} лет, город: \${city}\`);
}

const user = { name: "Иван", age: 30 };
printUser(user); // Иван, 30 лет, город: Неизвестно`,language:"javascript"},{id:"p3",type:"heading",content:"Замыкания и области видимости",level:2},{id:"p4",type:"code",content:`// Замыкание (Closure)
function createCounter() {
    let count = 0; // приватная переменная
    
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount()); // 2
// console.log(count); // Ошибка: count не определена

// Каррирование
function multiply(a) {
    return function(b) {
        return a * b;
    };
}

const double = multiply(2);
const triple = multiply(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15

// Каррирование с arrow functions
const multiplyArrow = a => b => a * b;

// IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("Эта функция выполняется сразу!");
})();

// Модульный паттерн
const calculator = (function() {
    let memory = 0;
    
    return {
        add: function(x) {
            memory += x;
            return this;
        },
        subtract: function(x) {
            memory -= x;
            return this;
        },
        getResult: function() {
            return memory;
        },
        clear: function() {
            memory = 0;
            return this;
        }
    };
})();

calculator.add(5).add(3).subtract(2);
console.log(calculator.getResult()); // 6`,language:"javascript"},{id:"p5",type:"heading",content:"Рекурсия",level:2},{id:"p6",type:"code",content:`// Факториал
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

// Числа Фибоначчи
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6)); // 8

// Глубокое копирование объекта с рекурсией
function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    
    if (Array.isArray(obj)) {
        return obj.map(item => deepCopy(item));
    }
    
    const copied = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copied[key] = deepCopy(obj[key]);
        }
    }
    return copied;
}

const original = { a: 1, b: { c: 2, d: [3, 4] } };
const copy = deepCopy(original);`,language:"javascript"},{id:"p7",type:"note",content:"Будьте осторожны с рекурсией - всегда убедитесь, что есть условие выхода, иначе получите бесконечную рекурсию и переполнение стека."}]},{id:"js-4",slug:"js-arrays",title:"Массивы и методы работы с ними",description:"Работа с массивами: создание, методы, итерация",duration:"45 минут",videoId:"arrays789",order:4,paragraphs:[{id:"p1",type:"heading",content:"Создание и базовые операции",level:1},{id:"p2",type:"code",content:`// Создание массивов
const emptyArray = [];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "текст", true, { name: "Иван" }, [1, 2]];
const fromString = Array.from("Hello"); // ['H', 'e', 'l', 'l', 'o']
const withFill = new Array(5).fill(0); // [0, 0, 0, 0, 0]

// Доступ к элементам
const fruits = ["яблоко", "банан", "апельсин"];
console.log(fruits[0]); // "яблоко"
console.log(fruits[fruits.length - 1]); // последний элемент

// Изменение массивов
fruits.push("манго"); // Добавить в конец
fruits.pop(); // Удалить с конца
fruits.unshift("киви"); // Добавить в начало
fruits.shift(); // Удалить с начала
fruits[1] = "груша"; // Изменить элемент

// Методы массивов
const numbers = [1, 2, 3, 4, 5];

// map - преобразовать каждый элемент
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]

// filter - отфильтровать элементы
const even = numbers.filter(n => n % 2 === 0); // [2, 4]

// reduce - свернуть массив в одно значение
const sum = numbers.reduce((acc, n) => acc + n, 0); // 15

// find - найти элемент
const found = numbers.find(n => n > 3); // 4

// findIndex - найти индекс элемента
const index = numbers.findIndex(n => n > 3); // 3

// some - хотя бы один элемент удовлетворяет условию
const hasEven = numbers.some(n => n % 2 === 0); // true

// every - все элементы удовлетворяют условию
const allPositive = numbers.every(n => n > 0); // true

// sort - сортировка
const unsorted = [3, 1, 4, 1, 5];
const sorted = unsorted.sort((a, b) => a - b); // [1, 1, 3, 4, 5]

// Деструктуризация массива
const [first, second, ...rest] = numbers; // first=1, second=2, rest=[3,4,5]`,language:"javascript"},{id:"p3",type:"heading",content:"Продвинутые методы",level:2},{id:"p4",type:"code",content:`// flatMap - map + flat
const phrases = ["Привет мир", "Как дела"];
const words = phrases.flatMap(phrase => phrase.split(" "));
// ["Привет", "мир", "Как", "дела"]

// reduce для сложных операций
const people = [
    { name: "Иван", age: 30, city: "Москва" },
    { name: "Мария", age: 25, city: "Санкт-Петербург" },
    { name: "Алексей", age: 30, city: "Москва" }
];

// Группировка по городу
const byCity = people.reduce((acc, person) => {
    const city = person.city;
    if (!acc[city]) acc[city] = [];
    acc[city].push(person);
    return acc;
}, {});

// Сортировка объектов
const users = [
    { name: "Иван", age: 30 },
    { name: "Мария", age: 25 },
    { name: "Алексей", age: 35 }
];

const sortedByAge = users.sort((a, b) => a.age - b.age);
const sortedByName = users.sort((a, b) => 
    a.name.localeCompare(b.name, 'ru')
);

// Удаление дубликатов
const duplicates = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(duplicates)]; // [1, 2, 3, 4, 5]
const uniqueObjects = Array.from(
    new Map(people.map(p => [p.name, p])).values()
);

// Многомерные массивы
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Транспонирование матрицы
const transposed = matrix[0].map((_, colIndex) =>
    matrix.map(row => row[colIndex])
);`,language:"javascript"},{id:"p5",type:"note",content:"Методы map, filter, reduce не изменяют исходный массив - они возвращают новый. Это важно для функционального программирования."}]},{id:"js-5",slug:"js-objects",title:"Объекты в JavaScript",description:"Работа с объектами: создание, свойства, методы",duration:"50 минут",videoId:"objects012",order:5,paragraphs:[{id:"p1",type:"heading",content:"Создание и работа с объектами",level:1},{id:"p2",type:"code",content:`// Создание объектов
const obj1 = {}; // Литерал объекта
const obj2 = new Object(); // Конструктор
const obj3 = Object.create(null); // С прототипом

// Объект с данными
const person = {
    name: "Иван",
    age: 30,
    city: "Москва",
    isEmployed: true,
    
    // Методы
    greet() {
        return \`Привет, меня зовут \${this.name}\`;
    },
    
    // Getter
    get birthYear() {
        return new Date().getFullYear() - this.age;
    },
    
    // Setter
    set fullName(value) {
        const parts = value.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

// Доступ к свойствам
console.log(person.name); // Точечная нотация
console.log(person["age"]); // Скобочная нотация
const prop = "city";
console.log(person[prop]); // Динамический доступ

// Добавление и удаление свойств
person.email = "ivan@example.com";
delete person.isEmployed;

// Проверка свойств
console.log("name" in person); // true
console.log(person.hasOwnProperty("age")); // true

// Деструктуризация
const { name, age, ...rest } = person;
const { name: userName, city = "Неизвестно" } = person;

// Spread оператор для объектов
const updatedPerson = { ...person, age: 31 };
const merged = { ...person, ...{ hobby: "чтение" } };

// Методы Object
const keys = Object.keys(person); // ["name", "age", ...]
const values = Object.values(person); // ["Иван", 30, ...]
const entries = Object.entries(person); // [["name", "Иван"], ...]

// Копирование объектов
const shallowCopy = { ...person };
const deepCopy = JSON.parse(JSON.stringify(person));`,language:"javascript"},{id:"p3",type:"heading",content:"Прототипы и наследование",level:2},{id:"p4",type:"code",content:`// Прототипное наследование
const animal = {
    eats: true,
    walk() {
        console.log("Животное гуляет");
    }
};

const rabbit = {
    jumps: true,
    __proto__: animal // Устаревший способ
};

// Современный способ
const rabbit2 = Object.create(animal, {
    jumps: { value: true }
});

console.log(rabbit.eats); // true (из прототипа)
rabbit.walk(); // "Животное гуляет"

// Конструкторы и классы (старый стиль)
function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.sayHi = function() {
    console.log(\`Привет, меня зовут \${this.name}\`);
};

const user1 = new User("Иван", 30);

// Современные классы (ES6+)
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        Person.count++;
    }
    
    // Метод экземпляра
    greet() {
        return \`Привет, я \${this.name}\`;
    }
    
    // Статический метод
    static compare(a, b) {
        return a.age - b.age;
    }
    
    // Getter
    get birthYear() {
        return new Date().getFullYear() - this.age;
    }
    
    // Setter
    set fullName(value) {
        const [firstName, lastName] = value.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// Наследование классов
class Employee extends Person {
    constructor(name, age, position) {
        super(name, age); // Вызов родительского конструктора
        this.position = position;
    }
    
    work() {
        return \`\${this.name} работает как \${this.position}\`;
    }
    
    // Переопределение метода
    greet() {
        return \`\${super.greet()}, я \${this.position}\`;
    }
}

const employee = new Employee("Мария", 25, "Разработчик");
console.log(employee.greet()); // "Привет, я Мария, я Разработчик"`,language:"javascript"},{id:"p5",type:"note",content:"В JavaScript все объекты связаны цепочкой прототипов. Когда вы обращаетесь к свойству объекта, JavaScript сначала ищет его в самом объекте, затем в его прототипе, и так далее по цепочке."}]},{id:"js-6",slug:"js-async",title:"Асинхронный JavaScript",description:"Работа с асинхронным кодом: колбэки, промисы, async/await",duration:"55 минут",videoId:"async345",order:6,paragraphs:[{id:"p1",type:"heading",content:"Callback Hell и Промисы",level:1},{id:"p2",type:"code",content:`// Callback Hell (Ад колбэков)
function getUserData(userId, callback) {
    setTimeout(() => {
        const user = { id: userId, name: "Иван" };
        callback(user);
    }, 1000);
}

function getOrders(userId, callback) {
    setTimeout(() => {
        const orders = [{ id: 1, total: 100 }, { id: 2, total: 200 }];
        callback(orders);
    }, 1000);
}

// Проблема: вложенные колбэки
getUserData(1, function(user) {
    getOrders(user.id, function(orders) {
        console.log("Заказы пользователя:", orders);
        // И так далее...
    });
});

// Промисы (Promises) - решение
function getUserDataPromise(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = { id: userId, name: "Иван" };
            resolve(user);
            // reject(new Error("Пользователь не найден")); // В случае ошибки
        }, 1000);
    });
}

function getOrdersPromise(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const orders = [{ id: 1, total: 100 }, { id: 2, total: 200 }];
            resolve(orders);
        }, 1000);
    });
}

// Использование промисов
getUserDataPromise(1)
    .then(user => {
        console.log("Пользователь:", user);
        return getOrdersPromise(user.id);
    })
    .then(orders => {
        console.log("Заказы:", orders);
    })
    .catch(error => {
        console.error("Ошибка:", error);
    })
    .finally(() => {
        console.log("Запрос завершен");
    });

// Параллельное выполнение
Promise.all([
    getUserDataPromise(1),
    getUserDataPromise(2)
])
.then(([user1, user2]) => {
    console.log("Оба пользователя:", user1, user2);
});

// Первый выполнившийся промис
Promise.race([
    getUserDataPromise(1),
    new Promise((_, reject) => 
        setTimeout(() => reject(new Error("Таймаут")), 500)
    )
])
.then(user => console.log("Победитель:", user))
.catch(error => console.error("Ошибка:", error));`,language:"javascript"},{id:"p3",type:"heading",content:"Async/Await",level:2},{id:"p4",type:"code",content:`// Async/await - современный подход
async function fetchUserData(userId) {
    try {
        // Ждем выполнение промиса
        const user = await getUserDataPromise(userId);
        console.log("Пользователь получен:", user);
        
        // Параллельное выполнение
        const [orders, profile] = await Promise.all([
            getOrdersPromise(userId),
            fetchUserProfile(userId)
        ]);
        
        console.log("Заказы:", orders);
        console.log("Профиль:", profile);
        
        return { user, orders, profile };
    } catch (error) {
        console.error("Ошибка при получении данных:", error);
        throw error; // Пробрасываем ошибку дальше
    } finally {
        console.log("Запрос данных завершен");
    }
}

// Использование async функции
fetchUserData(1)
    .then(data => console.log("Все данные:", data))
    .catch(error => console.error("Финальная ошибка:", error));

// IIFE с async/await
(async () => {
    try {
        const data = await fetchUserData(1);
        console.log("Данные получены:", data);
    } catch (error) {
        console.error("Ошибка в IIFE:", error);
    }
})();

// Генераторы для асинхронного кода
async function* asyncGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

// Использование async генератора
(async () => {
    const generator = asyncGenerator();
    for await (const value of generator) {
        console.log(value); // 1, затем 2, затем 3
    }
})();

// Top-level await (ES2022)
const user = await getUserDataPromise(1); // В модулях ES6`,language:"javascript"},{id:"p5",type:"heading",content:"Fetch API для работы с HTTP",level:2},{id:"p6",type:"code",content:`// Базовый fetch запрос
async function fetchData(url) {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(\`HTTP ошибка! Статус: \${response.status}\`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Ошибка fetch:", error);
        throw error;
    }
}

// POST запрос с данными
async function postData(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer token123'
        },
        body: JSON.stringify(data),
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin'
    });
    
    return response.json();
}

// Загрузка файла
async function uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await fetch('/upload', {
        method: 'POST',
        body: formData
    });
    
    return response.json();
}

// Обработка прогресса загрузки
async function fetchWithProgress(url, onProgress) {
    const response = await fetch(url);
    const reader = response.body.getReader();
    const contentLength = +response.headers.get('Content-Length');
    
    let receivedLength = 0;
    let chunks = [];
    
    while(true) {
        const { done, value } = await reader.read();
        
        if (done) break;
        
        chunks.push(value);
        receivedLength += value.length;
        
        if (onProgress && contentLength) {
            onProgress(receivedLength / contentLength);
        }
    }
    
    const chunksAll = new Uint8Array(receivedLength);
    let position = 0;
    for(let chunk of chunks) {
        chunksAll.set(chunk, position);
        position += chunk.length;
    }
    
    return new TextDecoder().decode(chunksAll);
}`,language:"javascript"},{id:"p7",type:"note",content:"Всегда обрабатывайте ошибки в асинхронном коде с помощью try/catch. Необработанные промисы могут привести к утечкам памяти и неожиданному поведению."}]},{id:"js-7",slug:"js-dom",title:"Работа с DOM",description:"Манипуляции с Document Object Model",duration:"50 минут",videoId:"dom678",order:7,paragraphs:[{id:"p1",type:"heading",content:"Основы DOM манипуляций",level:1},{id:"p2",type:"code",content:`// Получение элементов
const byId = document.getElementById('myId');
const byClass = document.getElementsByClassName('myClass');
const byTag = document.getElementsByTagName('div');
const byName = document.getElementsByName('username');

// Современные методы
const querySingle = document.querySelector('.container');
const queryAll = document.querySelectorAll('.item');
const queryInElement = document.querySelector('.parent').querySelector('.child');

// Создание элементов
const newDiv = document.createElement('div');
const newText = document.createTextNode('Привет, мир!');
const fragment = document.createDocumentFragment();

// Добавление элементов
const container = document.querySelector('.container');
container.appendChild(newDiv);
container.insertBefore(newDiv, container.firstChild);
container.replaceChild(newDiv, oldDiv);

// Манипуляции с содержимым
element.innerHTML = '<strong>Новый HTML</strong>';
element.textContent = 'Простой текст';
element.innerText = 'Текст с учетом стилей';

// Атрибуты и свойства
element.setAttribute('data-id', '123');
const id = element.getAttribute('data-id');
element.removeAttribute('data-id');
element.hasAttribute('data-visible');

// dataset API
element.dataset.userId = '123';
element.dataset.userRole = 'admin';
console.log(element.dataset.userId); // "123"

// Классы
element.classList.add('active', 'highlight');
element.classList.remove('inactive');
element.classList.toggle('visible');
element.classList.contains('active');
element.className = 'new-class another-class';

// Стили
element.style.color = 'red';
element.style.backgroundColor = '#f0f0f0';
element.style.fontSize = '16px';

// Получение вычисленных стилей
const computed = window.getComputedStyle(element);
const color = computed.getPropertyValue('color');

// Размеры и положение
const rect = element.getBoundingClientRect();
console.log(rect.width, rect.height, rect.top, rect.left);

const offset = {
    top: element.offsetTop,
    left: element.offsetLeft,
    width: element.offsetWidth,
    height: element.offsetHeight
};

const scroll = {
    top: element.scrollTop,
    left: element.scrollLeft,
    width: element.scrollWidth,
    height: element.scrollHeight
};`,language:"javascript"},{id:"p3",type:"heading",content:"События (Events)",level:2},{id:"p4",type:"code",content:`// Добавление обработчиков событий
const button = document.querySelector('button');

// Старый способ (не рекомендуется)
button.onclick = function() {
    console.log('Нажата кнопка');
};

// Современный способ
button.addEventListener('click', function(event) {
    console.log('Клик!', event);
    console.log('Цель:', event.target);
    console.log('Координаты:', event.clientX, event.clientY);
});

// Обработчик с опциями
button.addEventListener('click', handler, {
    capture: false, // Фаза перехвата
    once: true,     // Выполнить только один раз
    passive: true   // Не вызывать preventDefault()
});

// Удаление обработчика
button.removeEventListener('click', handler);

// Делегирование событий
document.querySelector('.list').addEventListener('click', function(event) {
    if (event.target.matches('.item')) {
        console.log('Нажат элемент:', event.target);
    }
});

// Создание и dispatch событий
const customEvent = new CustomEvent('myEvent', {
    detail: { message: 'Привет!' },
    bubbles: true,
    cancelable: true
});

button.dispatchEvent(customEvent);

// Обработка пользовательского события
button.addEventListener('myEvent', function(event) {
    console.log('Пользовательское событие:', event.detail.message);
});

// Клавиатурные события
document.addEventListener('keydown', function(event) {
    console.log('Клавиша:', event.key);
    console.log('Код:', event.code);
    console.log('Ctrl:', event.ctrlKey);
    
    if (event.key === 'Escape') {
        console.log('Нажат Escape');
    }
});

// События мыши
element.addEventListener('mousemove', function(event) {
    console.log('Мышь:', event.clientX, event.clientY);
});

element.addEventListener('wheel', function(event) {
    console.log('Прокрутка:', event.deltaY);
});

// События формы
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Отменить отправку формы
    console.log('Форма отправлена');
});

form.addEventListener('input', function(event) {
    console.log('Ввод:', event.target.value);
});

form.addEventListener('change', function(event) {
    console.log('Изменение:', event.target.value);
});`,language:"javascript"},{id:"p5",type:"heading",content:"Анимации и Intersection Observer",level:2},{id:"p6",type:"code",content:`// requestAnimationFrame для анимаций
function animate() {
    const element = document.querySelector('.animated');
    let position = 0;
    
    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        
        position = (progress / 1000) * 100; // 100px за секунду
        
        element.style.transform = \`translateX(\${position}px)\`;
        
        if (progress < 1000) {
            requestAnimationFrame(step);
        }
    }
    
    let startTime = null;
    requestAnimationFrame(step);
}

// Web Animations API
const element = document.querySelector('.box');
element.animate([
    { transform: 'translateX(0px)', opacity: 1 },
    { transform: 'translateX(100px)', opacity: 0.5 }
], {
    duration: 1000,
    easing: 'ease-in-out',
    iterations: Infinity,
    direction: 'alternate'
});

// Intersection Observer для ленивой загрузки
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            observer.unobserve(img);
        }
    });
}, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
});

// Наблюдаем за изображениями
document.querySelectorAll('img[data-src]').forEach(img => {
    observer.observe(img);
});

// Mutation Observer для отслеживания изменений DOM
const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
            console.log('Добавлены/удалены элементы');
        }
        if (mutation.type === 'attributes') {
            console.log('Изменен атрибут:', mutation.attributeName);
        }
    });
});

mutationObserver.observe(document.body, {
    childList: true,
    attributes: true,
    subtree: true
});`,language:"javascript"}]},{id:"js-8",slug:"js-modules",title:"Модули в JavaScript",description:"Импорт и экспорт, организация кода",duration:"35 минут",videoId:"modules901",order:8,paragraphs:[{id:"p1",type:"heading",content:"ES6 Модули",level:1},{id:"p2",type:"code",content:`// math.js - модуль с экспортом
export const PI = 3.14159;

export function add(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}

// Именованный экспорт класса
export class Calculator {
    constructor() {
        this.result = 0;
    }
    
    add(x) {
        this.result += x;
        return this;
    }
    
    getResult() {
        return this.result;
    }
}

// Экспорт по умолчанию (только один на модуль)
export default function greet(name) {
    return \`Привет, \${name}!\`;
}

// Импорт в другом файле
import greet, { PI, add, multiply, Calculator } from './math.js';

// Импорт всего как объект
import * as math from './math.js';
console.log(math.PI, math.add(2, 3));

// Импорт с переименованием
import { add as sum, multiply as product } from './math.js';

// Динамический импорт
async function loadModule() {
    const module = await import('./math.js');
    console.log(module.add(5, 3));
    
    // Или с деструктуризацией
    const { add, multiply } = await import('./math.js');
}

// Модуль с side effects
import './analytics.js'; // Выполняется сразу

// Циклические зависимости (осторожно!)
// moduleA.js
import { b } from './moduleB.js';
export const a = 'A';

// moduleB.js
import { a } from './moduleA.js';
export const b = 'B';`,language:"javascript"},{id:"p3",type:"heading",content:"CommonJS и другие системы",level:2},{id:"p4",type:"code",content:`// CommonJS (Node.js)
// math.js
const PI = 3.14159;

function add(a, b) {
    return a + b;
}

module.exports = {
    PI,
    add,
    Calculator: class Calculator {
        // ...
    }
};

// Или экспорт по умолчанию
module.exports = function greet(name) {
    return \`Привет, \${name}!\`;
};

// Импорт в CommonJS
const math = require('./math.js');
const { PI, add } = require('./math.js');

// AMD (Asynchronous Module Definition) - устаревший
define(['dependency1', 'dependency2'], function(dep1, dep2) {
    return {
        method: function() {
            return dep1.doSomething();
        }
    };
});

// UMD (Universal Module Definition)
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['exports'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        factory(exports);
    } else {
        // Глобальная переменная
        factory(root.myModule = {});
    }
}(typeof self !== 'undefined' ? self : this, function(exports) {
    exports.myFunction = function() {
        return 'Hello World';
    };
}));

// Tree shaking и оптимизация
// webpack и другие сборщики удаляют неиспользуемый код
export const used = 'Используется';
export const unused = 'Не используется'; // Будет удалено

// Бандл анализ
import(/* webpackChunkName: "math" */ './math.js')
    .then(module => {
        console.log('Модуль загружен');
    });`,language:"javascript"},{id:"p5",type:"note",content:"Используйте ES6 модули для нового кода. Они поддерживаются во всех современных браузерах и имеют лучшую производительность."}]},{id:"js-9",slug:"js-advanced",title:"Продвинутый JavaScript",description:"Современные возможности и паттерны",duration:"60 минут",videoId:"advanced234",order:9,paragraphs:[{id:"p1",type:"heading",content:"Прокси и Рефлексия",level:1},{id:"p2",type:"code",content:`// Proxy - перехват операций над объектом
const target = {
    name: "Иван",
    age: 30
};

const handler = {
    get(obj, prop) {
        console.log(\`Чтение свойства \${prop}\`);
        return prop in obj ? obj[prop] : "Не существует";
    },
    
    set(obj, prop, value) {
        console.log(\`Установка свойства \${prop} в \${value}\`);
        
        if (prop === 'age' && typeof value !== 'number') {
            throw new TypeError('Возраст должен быть числом');
        }
        
        obj[prop] = value;
        return true; // Успешно
    },
    
    has(obj, prop) {
        console.log(\`Проверка существования \${prop}\`);
        return prop in obj;
    },
    
    deleteProperty(obj, prop) {
        console.log(\`Удаление свойства \${prop}\`);
        delete obj[prop];
        return true;
    },
    
    ownKeys(obj) {
        console.log('Получение ключей');
        return Reflect.ownKeys(obj);
    }
};

const proxy = new Proxy(target, handler);
console.log(proxy.name); // "Иван" + лог
proxy.age = 31; // Лог + установка
console.log('name' in proxy); // true + лог

// Proxy для валидации
const validator = {
    set(obj, prop, value) {
        if (prop === 'age') {
            if (!Number.isInteger(value) || value < 0 || value > 150) {
                throw new TypeError('Некорректный возраст');
            }
        }
        
        if (prop === 'name') {
            if (typeof value !== 'string' || value.length < 2) {
                throw new TypeError('Некорректное имя');
            }
        }
        
        obj[prop] = value;
        return true;
    }
};

// Reflect API
const user = { name: "Иван" };

// Вместо user.name = "Петр"
Reflect.set(user, 'name', 'Петр');

// Вместо 'name' in user
console.log(Reflect.has(user, 'name'));

// Вместо delete user.name
Reflect.deleteProperty(user, 'name');

// Вместо Object.getOwnPropertyDescriptor
const descriptor = Reflect.getOwnPropertyDescriptor(user, 'name');

// Proxy + Reflect
const loggingHandler = {
    get(target, prop, receiver) {
        console.log(\`GET \${prop}\`);
        return Reflect.get(...arguments);
    },
    
    set(target, prop, value, receiver) {
        console.log(\`SET \${prop} = \${value}\`);
        return Reflect.set(...arguments);
    }
};`,language:"javascript"},{id:"p3",type:"heading",content:"Генераторы и Итераторы",level:2},{id:"p4",type:"code",content:`// Итераторы
const myIterable = {
    [Symbol.iterator]() {
        let step = 0;
        return {
            next() {
                step++;
                if (step <= 3) {
                    return { value: \`Шаг \${step}\`, done: false };
                }
                return { value: undefined, done: true };
            },
            
            return() {
                console.log('Итерация прервана');
                return { done: true };
            }
        };
    }
};

for (let value of myIterable) {
    console.log(value);
    if (value === 'Шаг 2') break; // Вызовет return()
}

// Генераторы
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numberGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

// Бесконечный генератор
function* infiniteSequence() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

// Генератор для асинхронного кода
async function* asyncNumberGenerator() {
    for (let i = 0; i < 5; i++) {
        // Имитация асинхронной операции
        await new Promise(resolve => setTimeout(resolve, 1000));
        yield i;
    }
}

// Использование async генератора
(async () => {
    for await (let num of asyncNumberGenerator()) {
        console.log(num);
    }
})();

// yield* для делегирования
function* generator1() {
    yield 1;
    yield 2;
}

function* generator2() {
    yield* generator1();
    yield 3;
    yield 4;
}

const gen2 = generator2();
console.log([...gen2]); // [1, 2, 3, 4]

// Генераторы для обработки данных
function* filterGenerator(array, predicate) {
    for (let item of array) {
        if (predicate(item)) {
            yield item;
        }
    }
}

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = [...filterGenerator(numbers, n => n % 2 === 0)];
console.log(evenNumbers); // [2, 4, 6]`,language:"javascript"},{id:"p5",type:"heading",content:"Мемоизация и Оптимизация",level:2},{id:"p6",type:"code",content:`// Мемоизация (кеширование результатов)
function memoize(fn) {
    const cache = new Map();
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (cache.has(key)) {
            console.log('Из кэша:', key);
            return cache.get(key);
        }
        
        console.log('Вычисление:', key);
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

// Пример тяжелой функции
function expensiveCalculation(n) {
    console.log(\`Вычисление для \${n}...\`);
    // Имитация тяжелых вычислений
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
        result += Math.sin(i) * Math.cos(i);
    }
    return n * n;
}

const memoizedCalc = memoize(expensiveCalculation);

console.log(memoizedCalc(5)); // Вычисление
console.log(memoizedCalc(5)); // Из кэша
console.log(memoizedCalc(5)); // Из кэша

// Throttle и Debounce
function throttle(func, limit) {
    let inThrottle;
    
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function debounce(func, delay) {
    let timeoutId;
    
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Пример использования
window.addEventListener('resize', throttle(() => {
    console.log('Размер окна изменился');
}, 1000));

const searchInput = document.querySelector('#search');
searchInput.addEventListener('input', debounce((event) => {
    console.log('Поиск:', event.target.value);
}, 300));

// Ленивая загрузка (Lazy Loading)
class LazyLoader {
    constructor() {
        this.observers = new Map();
    }
    
    observe(element, callback) {
        if (!('IntersectionObserver' in window)) {
            callback();
            return;
        }
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    callback();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(element);
        this.observers.set(element, observer);
    }
    
    unobserve(element) {
        if (this.observers.has(element)) {
            this.observers.get(element).unobserve(element);
            this.observers.delete(element);
        }
    }
}`,language:"javascript"}]},{id:"js-10",slug:"js-project",title:"Финальный проект",description:"Создание приложения с использованием всех изученных концепций",duration:"90 минут",videoId:"project567",order:10,paragraphs:[{id:"p1",type:"heading",content:"Проект: Task Manager",level:1},{id:"p2",type:"code",content:`// taskManager.js - основной модуль
class TaskManager {
    constructor() {
        this.tasks = this.loadTasks();
        this.currentFilter = 'all';
        this.init();
    }
    
    init() {
        this.render();
        this.bindEvents();
    }
    
    loadTasks() {
        const saved = localStorage.getItem('tasks');
        return saved ? JSON.parse(saved) : [];
    }
    
    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
    
    addTask(title, description = '', priority = 'medium') {
        const task = {
            id: Date.now(),
            title,
            description,
            priority,
            completed: false,
            createdAt: new Date().toISOString()
        };
        
        this.tasks.push(task);
        this.saveTasks();
        this.render();
        
        return task;
    }
    
    deleteTask(id) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            this.saveTasks();
            this.render();
            return true;
        }
        return false;
    }
    
    toggleTask(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.completed = !task.completed;
            this.saveTasks();
            this.render();
            return true;
        }
        return false;
    }
    
    updateTask(id, updates) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            Object.assign(task, updates);
            this.saveTasks();
            this.render();
            return true;
        }
        return false;
    }
    
    filterTasks(filter) {
        this.currentFilter = filter;
        this.render();
    }
    
    getFilteredTasks() {
        switch (this.currentFilter) {
            case 'active':
                return this.tasks.filter(task => !task.completed);
            case 'completed':
                return this.tasks.filter(task => task.completed);
            default:
                return this.tasks;
        }
    }
    
    getStats() {
        const total = this.tasks.length;
        const completed = this.tasks.filter(task => task.completed).length;
        const active = total - completed;
        
        return { total, completed, active };
    }
    
    bindEvents() {
        // Добавление задачи
        document.getElementById('add-task-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const titleInput = document.getElementById('task-title');
            const descriptionInput = document.getElementById('task-description');
            const prioritySelect = document.getElementById('task-priority');
            
            if (titleInput.value.trim()) {
                this.addTask(
                    titleInput.value.trim(),
                    descriptionInput.value.trim(),
                    prioritySelect.value
                );
                
                titleInput.value = '';
                descriptionInput.value = '';
            }
        });
        
        // Фильтры
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filter = e.target.dataset.filter;
                this.filterTasks(filter);
                
                // Обновляем активную кнопку
                document.querySelectorAll('.filter-btn').forEach(b => {
                    b.classList.toggle('active', b === e.target);
                });
            });
        });
        
        // Делегирование событий для списка задач
        document.getElementById('task-list').addEventListener('click', (e) => {
            const taskElement = e.target.closest('.task-item');
            if (!taskElement) return;
            
            const taskId = parseInt(taskElement.dataset.id);
            
            if (e.target.classList.contains('delete-btn')) {
                if (confirm('Удалить задачу?')) {
                    this.deleteTask(taskId);
                }
            } else if (e.target.classList.contains('toggle-btn')) {
                this.toggleTask(taskId);
            } else if (e.target.classList.contains('edit-btn')) {
                this.editTask(taskId);
            }
        });
        
        // Поиск
        const searchInput = document.getElementById('task-search');
        let searchTimeout;
        
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                this.searchTasks(e.target.value.trim());
            }, 300);
        });
        
        // Drag and Drop
        this.setupDragAndDrop();
    }
    
    searchTasks(query) {
        if (!query) {
            this.render();
            return;
        }
        
        const filtered = this.tasks.filter(task =>
            task.title.toLowerCase().includes(query.toLowerCase()) ||
            task.description.toLowerCase().includes(query.toLowerCase())
        );
        
        this.render(filtered);
    }
    
    setupDragAndDrop() {
        const taskList = document.getElementById('task-list');
        
        taskList.addEventListener('dragstart', (e) => {
            if (e.target.classList.contains('task-item')) {
                e.dataTransfer.setData('text/plain', e.target.dataset.id);
                e.target.classList.add('dragging');
            }
        });
        
        taskList.addEventListener('dragend', (e) => {
            if (e.target.classList.contains('task-item')) {
                e.target.classList.remove('dragging');
            }
        });
        
        taskList.addEventListener('dragover', (e) => {
            e.preventDefault();
            const dragging = document.querySelector('.dragging');
            const afterElement = this.getDragAfterElement(taskList, e.clientY);
            
            if (afterElement) {
                taskList.insertBefore(dragging, afterElement);
            } else {
                taskList.appendChild(dragging);
            }
        });
    }
    
    getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.task-item:not(.dragging)')];
        
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }
    
    editTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (!task) return;
        
        const newTitle = prompt('Новое название:', task.title);
        if (newTitle !== null && newTitle.trim()) {
            this.updateTask(id, { title: newTitle.trim() });
        }
    }
    
    render(tasksToRender = null) {
        const tasks = tasksToRender || this.getFilteredTasks();
        const stats = this.getStats();
        
        // Обновляем статистику
        document.getElementById('total-tasks').textContent = stats.total;
        document.getElementById('active-tasks').textContent = stats.active;
        document.getElementById('completed-tasks').textContent = stats.completed;
        
        // Рендерим список задач
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = '';
        
        if (tasks.length === 0) {
            taskList.innerHTML = \`
                <div class="empty-state">
                    <p>\${this.currentFilter === 'all' 
                        ? 'Задач пока нет. Добавьте первую!' 
                        : 'Нет задач по выбранному фильтру.'}</p>
                </div>
            \`;
            return;
        }
        
        tasks.forEach(task => {
            const taskElement = this.createTaskElement(task);
            taskList.appendChild(taskElement);
        });
    }
    
    createTaskElement(task) {
        const element = document.createElement('div');
        element.className = \`task-item \${task.priority} \${task.completed ? 'completed' : ''}\`;
        element.dataset.id = task.id;
        element.draggable = true;
        
        element.innerHTML = \`
            <div class="task-content">
                <input type="checkbox" class="toggle-btn" \${task.completed ? 'checked' : ''}>
                <div class="task-info">
                    <h3 class="task-title">\${this.escapeHtml(task.title)}</h3>
                    \${task.description ? \`
                        <p class="task-description">\${this.escapeHtml(task.description)}</p>
                    \` : ''}
                    <div class="task-meta">
                        <span class="priority-badge \${task.priority}">\${this.getPriorityText(task.priority)}</span>
                        <span class="task-date">\${new Date(task.createdAt).toLocaleDateString('ru-RU')}</span>
                    </div>
                </div>
            </div>
            <div class="task-actions">
                <button class="edit-btn" title="Редактировать">✏️</button>
                <button class="delete-btn" title="Удалить">🗑️</button>
            </div>
        \`;
        
        return element;
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    getPriorityText(priority) {
        const texts = {
            low: 'Низкий',
            medium: 'Средний',
            high: 'Высокий'
        };
        return texts[priority] || priority;
    }
}

// Инициализация приложения
document.addEventListener('DOMContentLoaded', () => {
    const taskManager = new TaskManager();
    
    // Экспорт для консоли
    window.taskManager = taskManager;
    
    // Сохранение перед закрытием страницы
    window.addEventListener('beforeunload', () => {
        taskManager.saveTasks();
    });
});`,language:"javascript"},{id:"p3",type:"heading",content:"Итоги курса",level:2},{id:"p4",type:"list",content:"Что вы изучили в курсе:",listItems:["✓ Основы JavaScript: переменные, типы данных, операторы","✓ Управление потоком: условия, циклы, функции","✓ Работа с массивами и объектами","✓ Асинхронное программирование: промисы, async/await","✓ DOM манипуляции и обработка событий","✓ Модульная система ES6+","✓ Продвинутые концепции: прокси, генераторы, итераторы","✓ Оптимизация и паттерны проектирования","✓ Работа с локальным хранилищем","✓ Создание полноценного приложения"]},{id:"p5",type:"heading",content:"Дальнейшие шаги",level:2},{id:"p6",type:"list",content:"Что изучать дальше:",listItems:["TypeScript - типизированный JavaScript","React/Vue/Angular - современные фреймворки","Node.js - серверный JavaScript","Тестирование (Jest, Mocha, Cypress)","Оптимизация производительности","Архитектурные паттерны (MVC, Flux, Redux)","Работа с базами данных","DevOps и CI/CD для JavaScript проектов"]},{id:"p7",type:"quote",content:"JavaScript - это не просто язык, это экосистема. Постоянное обучение и практика - ключ к успеху в веб-разработке."},{id:"p8",type:"note",content:"Поздравляем с завершением курса! Теперь вы обладаете всеми необходимыми знаниями для создания современных веб-приложений на JavaScript."}]}]};e.s(["courses",0,[n,o,t]],6752)}]);