import { Course } from "../dataCourse"


export const htmlcourse: Course = {
  id: 1,
  slug: "html",
  title: "Курс по HTML",
  subTitle: "Гипертекстовая разметка",
  description: "Полный курс по HTML5 с нуля до профессионала. Изучите все аспекты современного HTML.",
  level: "Начинающий",
  lessons: [
    {
      id: "html-1",
      slug: "html-introduction",
      title: "Введение в HTML",
      description: "Основные понятия и структура HTML документа",
      duration: "25 минут",
      videoId: "_R5a-Kc0pRc?list=PLDyJYA6aTY1nlkG0gBj96XDmDSC4Fy1TO",
      order: 1,
      paragraphs: [
        {
          id: "p1",
          type: "heading",
          content: "Что такое HTML?",
          level: 1
        },
        {
          id: "p2",
          type: "text",
          content: "HTML (HyperText Markup Language) - это стандартизированный язык разметки документов для просмотра веб-страниц в браузере. HTML определяет структуру и семантическое содержание веб-страницы."
        },
        {
          id: "p3",
          type: "text",
          content: "HTML не является языком программирования - это язык разметки, который сообщает браузеру, как отображать контент. HTML использует теги для обозначения различных элементов страницы."
        },
        {
          id: "p4",
          type: "heading",
          content: "История HTML",
          level: 2
        },
        {
          id: "p5",
          type: "list",
          content: "Основные версии HTML:",
          listItems: [
            "1991 - HTML (первая версия)",
            "1995 - HTML 2.0 (первый стандарт)",
            "1997 - HTML 3.2 (расширенная поддержка таблиц)",
            "1999 - HTML 4.01 (последняя версия классического HTML)",
            "2000 - XHTML (более строгий XML-вариант)",
            "2014 - HTML5 (современный стандарт)"
          ]
        },
        {
          id: "p6",
          type: "heading",
          content: "Базовая структура HTML документа",
          level: 2
        },
        {
          id: "p7",
          type: "code",
          content: `<!DOCTYPE html>
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
</html>`,
          language: "html"
        },
        {
          id: "p8",
          type: "text",
          content: "Каждый HTML документ должен содержать декларацию <!DOCTYPE html>, которая указывает браузеру, что это документ HTML5."
        },
        {
          id: "p9",
          type: "note",
          content: "Важно: Всегда указывайте атрибут lang в теге <html> для правильной работы скринридеров и SEO."
        }
      ]
    },
    {
      id: "html-2",
      slug: "html-basic-elements",
      title: "Базовые элементы HTML",
      description: "Изучаем основные теги HTML",
      duration: "35 минут",
      videoId: "YzYkebeN7mg?list=PLDyJYA6aTY1nlkG0gBj96XDmDSC4Fy1TO",
      order: 2,
      paragraphs: [
        {
          id: "p1",
          type: "heading",
          content: "Текстовые элементы",
          level: 1
        },
        {
          id: "p2",
          type: "code",
          content: `<!-- Заголовки -->
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
<p>Текст после горизонтальной линии.</p>`,
          language: "html"
        },
        {
          id: "p3",
          type: "list",
          content: "Основные текстовые теги:",
          listItems: [
            "<strong> или <b> - жирный текст",
            "<em> или <i> - курсивный текст",
            "<u> - подчеркнутый текст",
            "<mark> - выделенный текст",
            "<small> - мелкий текст",
            "<sub> - нижний индекс",
            "<sup> - верхний индекс",
            "<code> - код программы",
            "<pre> - преформатированный текст"
          ]
        },
        {
          id: "p4",
          type: "heading",
          content: "Ссылки и изображения",
          level: 2
        },
        {
          id: "p5",
          type: "code",
          content: `<!-- Ссылки -->
<a href="https://example.com">Внешняя ссылка</a>
<a href="/about.html">Внутренняя ссылка</a>
<a href="#section2">Якорная ссылка</a>
<a href="mailto:email@example.com">Ссылка на email</a>
<a href="tel:+1234567890">Ссылка на телефон</a>

<!-- Изображения -->
<img src="image.jpg" alt="Описание изображения" width="300" height="200">
<img src="logo.png" alt="Логотип компании" loading="lazy">`,
          language: "html"
        },
        {
          id: "p6",
          type: "note",
          content: "Всегда указывайте атрибут alt для изображений - это важно для доступности и SEO."
        }
      ]
    },
    {
      id: "html-3",
      slug: "html-lists-tables",
      title: "Списки и таблицы",
      description: "Создание списков и таблиц в HTML",
      duration: "40 минут",
      videoId: "table123",
      order: 3,
      paragraphs: [
        {
          id: "p1",
          type: "heading",
          content: "Типы списков в HTML",
          level: 1
        },
        {
          id: "p2",
          type: "code",
          content: `<!-- Нумерованный список -->
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
</ul>`,
          language: "html"
        },
        {
          id: "p3",
          type: "heading",
          content: "Создание таблиц",
          level: 2
        },
        {
          id: "p4",
          type: "code",
          content: `<!-- Базовая таблица -->
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
</table>`,
          language: "html"
        },
        {
          id: "p5",
          type: "note",
          content: "Используйте таблицы только для табличных данных. Для верстки используйте CSS Grid или Flexbox."
        }
      ]
    },
    {
      id: "html-4",
      slug: "html-forms",
      title: "HTML формы",
      description: "Создание интерактивных форм",
      duration: "45 минут",
      videoId: "forms456",
      order: 4,
      paragraphs: [
        {
          id: "p1",
          type: "heading",
          content: "Основы HTML форм",
          level: 1
        },
        {
          id: "p2",
          type: "code",
          content: `<!-- Базовая форма -->
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
</form>`,
          language: "html"
        },
        {
          id: "p3",
          type: "heading",
          content: "Новые типы input в HTML5",
          level: 2
        },
        {
          id: "p4",
          type: "code",
          content: `<!-- Современные типы полей -->
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
</datalist>`,
          language: "html"
        },
        {
          id: "p5",
          type: "note",
          content: "Всегда используйте атрибут required для обязательных полей и правильные типы input для лучшей мобильной поддержки."
        }
      ]
    },
    {
      id: "html-5",
      slug: "html-semantic-elements",
      title: "Семантические элементы HTML5",
      description: "Современные семантические теги",
      duration: "35 минут",
      videoId: "semantic789",
      order: 5,
      paragraphs: [
        {
          id: "p1",
          type: "heading",
          content: "Зачем нужны семантические теги?",
          level: 1
        },
        {
          id: "p2",
          type: "text",
          content: "Семантические теги делают HTML код более понятным как для разработчиков, так и для браузеров, поисковых систем и скринридеров. Они точно описывают назначение каждого раздела страницы."
        },
        {
          id: "p3",
          type: "code",
          content: `<!-- Структура с семантическими тегами -->
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
</html>`,
          language: "html"
        },
        {
          id: "p4",
          type: "list",
          content: "Основные семантические теги HTML5:",
          listItems: [
            "<header> - заголовок страницы или раздела",
            "<nav> - навигационные ссылки",
            "<main> - основное содержимое страницы",
            "<article> - независимый контент (статья, пост)",
            "<section> - тематическая группа контента",
            "<aside> - дополнительный контент (сайдбар)",
            "<footer> - подвал страницы или раздела",
            "<figure> и <figcaption> - иллюстрации с подписями",
            "<time> - время и дата",
            "<mark> - выделенный текст",
            "<details> и <summary> - раскрывающийся блок"
          ]
        }
      ]
    },
    {
      id: "html-6",
      slug: "html-media",
      title: "Медиа элементы",
      description: "Работа с аудио, видео и графикой",
      duration: "30 минут",
      videoId: "media012",
      order: 6,
      paragraphs: [
        {
          id: "p1",
          type: "heading",
          content: "Аудио и видео в HTML5",
          level: 1
        },
        {
          id: "p2",
          type: "code",
          content: `<!-- Аудио плеер -->
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
</picture>`,
          language: "html"
        },
        {
          id: "p3",
          type: "heading",
          content: "SVG графика",
          level: 2
        },
        {
          id: "p4",
          type: "code",
          content: `<!-- Встроенный SVG -->
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
</svg>`,
          language: "html"
        },
        {
          id: "p5",
          type: "note",
          content: "SVG изображения масштабируются без потери качества и обычно имеют меньший размер файла по сравнению с растровой графикой."
        }
      ]
    },
    {
      id: "html-7",
      slug: "html-meta-tags",
      title: "Мета-теги и SEO",
      description: "Оптимизация для поисковых систем",
      duration: "25 минут",
      videoId: "seo345",
      order: 7,
      paragraphs: [
        {
          id: "p1",
          type: "heading",
          content: "Важные мета-теги",
          level: 1
        },
        {
          id: "p2",
          type: "code",
          content: `<!-- Основные мета-теги -->
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
</head>`,
          language: "html"
        },
        {
          id: "p3",
          type: "heading",
          content: "Микроразметка Schema.org",
          level: 2
        },
        {
          id: "p4",
          type: "code",
          content: `<!-- Микроразметка для статьи -->
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
</div>`,
          language: "html"
        }
      ]
    },
    {
      id: "html-8",
      slug: "html-advanced",
      title: "Продвинутый HTML",
      description: "Современные возможности HTML5",
      duration: "40 минут",
      videoId: "advanced678",
      order: 8,
      paragraphs: [
        {
          id: "p1",
          type: "heading",
          content: "Web Components и Custom Elements",
          level: 1
        },
        {
          id: "p2",
          type: "code",
          content: `<!-- Использование кастомных элементов -->
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
<button onclick="document.getElementById('modal').showModal()">Открыть модальное окно</button>`,
          language: "html"
        },
        {
          id: "p3",
          type: "heading",
          content: "Доступность (Accessibility)",
          level: 2
        },
        {
          id: "p4",
          type: "code",
          content: `<!-- Элементы с правильной доступностью -->
<nav aria-label="Основная навигация">
    <ul>
        <li><a href="/" aria-current="page">Главная</a></li>
        <li><a href="/about">О нас</a></li>
    </ul>
</nav>

<button aria-label="Закрыть меню" onclick="closeMenu()">×</button>

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
</div>`,
          language: "html"
        },
        {
          id: "p5",
          type: "heading",
          content: "Оптимизация производительности",
          level: 2
        },
        {
          id: "p6",
          type: "list",
          content: "Рекомендации по производительности:",
          listItems: [
            "Используйте атрибут loading='lazy' для изображений",
            "Указывайте размеры изображений через width и height",
            "Используйте современные форматы изображений (WebP, AVIF)",
            "Минимизируйте использование iframe",
            "Используйте preconnect и prefetch для критических ресурсов",
            "Декларируйте фавиконки в правильном порядке"
          ]
        }
      ]
    },
    {
      id: "html-9",
      slug: "html-best-practices",
      title: "Лучшие практики HTML",
      description: "Правила написания качественного HTML кода",
      duration: "30 минут",
      videoId: "best901",
      order: 9,
      paragraphs: [
        {
          id: "p1",
          type: "heading",
          content: "Кодстайл и организация",
          level: 1
        },
        {
          id: "p2",
          type: "list",
          content: "Основные правила:",
          listItems: [
            "Используйте нижний регистр для тегов и атрибутов",
            "Всегда заключайте значения атрибутов в кавычки",
            "Используйте отступы в 2 или 4 пробела",
            "Закрывайте все теги, даже если они не обязательны",
            "Пишите комментарии для сложных разделов",
            "Группируйте связанные элементы вместе"
          ]
        },
        {
          id: "p3",
          type: "code",
          content: `<!-- Плохой пример -->
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
<!-- Header секция заканчивается здесь -->`,
          language: "html"
        },
        {
          id: "p4",
          type: "heading",
          content: "Валидация HTML",
          level: 2
        },
        {
          id: "p5",
          type: "text",
          content: "Всегда проверяйте свой HTML код на валидность с помощью W3C Validator. Валидный код гарантирует правильное отображение во всех браузерах и лучшую производительность."
        },
        {
          id: "p6",
          type: "quote",
          content: "Хороший HTML код - это не только о том, что работает, но и о том, что понятно, доступно и поддерживаемо."
        },
        {
          id: "p7",
          type: "heading",
          content: "Чеклист качества HTML кода",
          level: 2
        },
        {
          id: "p8",
          type: "list",
          content: "",
          listItems: [
            "✓ Используется doctype HTML5",
            "✓ Указан атрибут lang",
            "✓ Корректная кодировка UTF-8",
            "✓ Viewport meta тег для мобильных",
            "✓ Семантические теги вместо div",
            "✓ Все изображения имеют alt текст",
            "✓ Формы имеют правильные label",
            "✓ Нет ошибок в консоли браузера",
            "✓ Код проходит валидацию W3C",
            "✓ Поддержка скринридеров (ARIA)"
          ]
        }
      ]
    },
    {
      id: "html-10",
      slug: "html-practical-project",
      title: "Практический проект",
      description: "Создание полноценной веб-страницы",
      duration: "50 минут",
      videoId: "project234",
      order: 10,
      paragraphs: [
        {
          id: "p1",
          type: "heading",
          content: "Финальный проект: Сайт портфолио",
          level: 1
        },
        {
          id: "p2",
          type: "code",
          content: `<!DOCTYPE html>
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
</html>`,
          language: "html"
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
          content: "Что вы узнали:",
          listItems: [
            "Основы HTML и его историю",
            "Все базовые элементы и теги",
            "Создание форм и таблиц",
            "Семантическую разметку HTML5",
            "Работу с медиа элементами",
            "SEO оптимизацию и мета-теги",
            "Доступность (accessibility)",
            "Лучшие практики написания кода",
            "Создание полноценных веб-страниц"
          ]
        },
        {
          id: "p5",
          type: "note",
          content: "Поздравляем! Вы завершили полный курс по HTML. Теперь вы готовы создавать современные, семантические и доступные веб-страницы."
        },
        {
          id: "p6",
          type: "quote",
          content: "HTML - это фундамент веб-разработки. Хорошее понимание HTML открывает путь к освоению CSS, JavaScript и современных фреймворков."
        }
      ]
    }
  ]
}