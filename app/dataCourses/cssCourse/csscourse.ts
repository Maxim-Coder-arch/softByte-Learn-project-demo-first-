import { Course } from "../../types/type";

export const cssCourse: Course = {
  id: 3,
  slug: "css",
  title: "Сделайте свой сайт красивым",
  subTitle: "Практический курс по CSS3 для начинающих",
  description: "Курс по современному CSS от основ до продвинутых техник. Изучите все необходимое для создания красивых и адаптивных интерфейсов на практике.",
  image: "/cardImage/2150061960.jpg",
  level: "Начинающий",
  lessons: [
    {
      id: "css-1",
      slug: "css1",
      title: "Введение в CSS. Первые стили и порядок применения",
      description: "Первый урок практического курса CSS. Понимаем, как браузер применяет стили, порядок CSS, inline / internal / external стили, специфичность. Пишем первые простые стили.",
      duration: "Длительность 7:40",
      videoId: "mDaFK3VubYI",
      order: 1,
      paragraphs: [
        {
          id: "p1",
          type: "heading",
          content: "Введение в CSS"
        },
        {
          id: "p2",
          type: "text",
          content: "Каждый урок — это готовый UI-компонент, который можно положить в портфолио. Но прежде чем строить красивые интерфейсы, нужно понять одну важную вещь: как браузер применяет стили. Без этого CSS всегда кажется «магией»."
        },
        {
          id: "p3",
          type: "heading",
          content: "Как браузер применяет стили"
        },
        {
          id: "p4",
          type: "text",
          content: "Когда вы открываете сайт, браузер делает несколько шагов: сначала читает HTML и строит структуру страницы, потом читает CSS и решает, как всё должно выглядеть. Здесь и возникает вся красота — объектная модель стилей. Можно представить это как соединение структуры страницы (HTML) и внешнего вида (CSS) для получения финального результата."
        },
        {
          id: "p5",
          type: "heading",
          content: "Типичная ошибка новичков"
        },
        {
          id: "p6",
          type: "text",
          content: "Новички думают: 'Я написал стиль → он применился'. Но на самом деле браузер получает множество правил и выбирает победителя. CSS — это конкуренция стилей, где побеждает правило с наибольшей специфичностью или которое объявлено позже."
        },
        {
          id: "p7",
          type: "heading",
          content: "Способы подключения CSS"
        },
        {
          id: "p8",
          type: "text",
          content: "CSS можно подключить тремя способами: inline, internal и external. Новички часто смешивают их, и это приводит к хаосу."
        },
        {
          id: "p9",
          type: "heading",
          content: "Inline-стили (неправильный способ)"
        },
        {
          id: "p10",
          type: "code",
          content: `<h1 style="color: red;">Привет CSS</h1>`
        },
        {
          id: "p11",
          type: "text",
          content: "Стили работают, но если заголовков 50, писать их вручную в каждом теге — плохая практика. Inline-стили используют редко."
        },
        {
          id: "p12",
          type: "heading",
          content: "External CSS (правильный способ)"
        },
        {
          id: "p13",
          type: "text",
          content: "Создаём файл style.css и подключаем его в HTML через тег <link>. Это способ, которым работают настоящие разработчики."
        },
        {
          id: "p14",
          type: "code",
          content: `
<head>
  <link rel="stylesheet" href="style.css">
</head>
    `
        },
        {
          id: "p15",
          type: "heading",
          content: "Пишем первые стили"
        },
        {
          id: "p16",
          type: "text",
          content: "HTML для примера:"
        },
        {
          id: "p17",
          type: "code",
          content: `
<body>
  <h1>Мой первый CSS</h1>
  <p>Я начинаю изучать стили</p>
</body>
    `
        },
        {
          id: "p18",
          type: "text",
          content: "Теперь в style.css:"
        },
        {
          id: "p19",
          type: "code",
          content: `
/* Все элементы h1 сделаем синими */
h1 {
  color: blue; /* Цвет текста */
}

/* Добавим фон всей странице */
body {
  background-color: #f4f6f8; /* Светлый фон */
}

/* Увеличим текст абзаца */
p {
  font-size: 20px; /* Размер шрифта */
}
      `
        },
        {
          id: "p20",
          type: "text",
          content: "CSS читается как правило: кого выбрать и что сделать. Браузер применяет стиль сверху вниз. Последнее правило побеждает, если специфичность одинаковая."
        },
        {
          id: "p21",
          type: "heading",
          content: "Специфичность селекторов"
        },
        {
          id: "p22",
          type: "text",
          content: "CSS имеет иерархию силы селекторов: Тег → Класс → ID. Например:"
        },
        {
          id: "p23",
          type: "code",
          content: `
h1 {
  color: blue; /* Слабое правило */
}

.title {
  color: red; /* Сильнее, чем тег */
}

#main-title {
  color: purple; /* ID сильнее всего */
}
      `
        },
        {
          id: "p24",
          type: "text",
          content: "HTML:"
        },
        {
          id: "p25",
          type: "code",
          content: `<h1 id="main-title" class="title">Заголовок</h1>`
        },
        {
          id: "p26",
          type: "text",
          content: "В итоге цвет заголовка будет фиолетовый — ID победил класс и тег. Это и есть специфичность."
        },
        {
          id: "p27",
          type: "heading",
          content: "Финальный пример урока"
        },
        {
          id: "p28",
          type: "code",
          content: `
/* style.css */
body {
  background-color: #f4f6f8; /* Фон страницы */
  font-family: Arial, sans-serif; /* Шрифт */
}

h1 {
  color: blue; /* Цвет по тегу */
}

.title {
  color: #2b7cff; /* Цвет по классу */
}

p {
  font-size: 20px; /* Размер текста */
}

/* HTML */
<body>
  <h1 class="title">Мой первый CSS</h1>
  <p>Теперь я понимаю как работают стили</p>
</body>
    `
        },
        {
          id: "p29",
          type: "text",
          content: "Сегодня мы: подключили CSS, написали первые стили, поняли порядок применения и разобрались со специфичностью. Это фундамент всего CSS."
        },
        {
          id: "p30",
          type: "heading",
          content: "Итог урока"
        },
        {
          id: "p31",
          type: "text",
          content: "CSS — это не набор свойств, а система правил и приоритетов. Теперь вы знаете, почему стили иногда не применяются. В следующем уроке мы разберём Box Model и создадим первую карточку. Здесь CSS начнёт превращаться в дизайн."
        }
      ]
    },
    {
      id: "css-2",
      slug: "css2",
      title: "Box Model и визуальная геометрия. Делаем красивую карточку",
      description: "Подробно разбираем Box Model: content, padding, border, margin, box-sizing, margin collapsing. Учимся управлять отступами, используем сокращённые свойства, делаем reset через * и создаём аккуратную карточку в тёмном стиле.",
      duration: "Длительность 8:38",
      videoId: "ZOHxSAFz38g",
      order: 2,
      paragraphs: [
        {
          id: "p1",
          type: "heading",
          content: "Box Model — фундамент визуальной геометрии"
        },
        {
          id: "p2",
          type: "text",
          content: "Каждый HTML-элемент в браузере — это прямоугольник. Не текст. Не «блок». А именно прямоугольная коробка. И если вы не понимаете, из чего она состоит, верстка будет постоянно «ломаться»."
        },
        {
          id: "p3",
          type: "heading",
          content: "Из чего состоит Box Model"
        },
        {
          id: "p4",
          type: "text",
          content: "Любой элемент состоит из четырёх частей: content (контент), padding (внутренний отступ), border (рамка) и margin (внешний отступ). Браузер считает размеры именно по этой формуле."
        },
        {
          id: "p5",
          type: "code",
          content: `
    .card {
      width: 300px;      /* Ширина только контента */
      padding: 20px;     /* Внутренний отступ со всех сторон */
      border: 2px solid #333; /* Рамка: толщина, стиль, цвет */
      margin: 30px;      /* Внешний отступ со всех сторон */
    }
          `
        },
        {
          id: "p6",
          type: "text",
          content: "width: 300px — это ширина только области content. Padding добавляется сверху. Border тоже увеличивает итоговый размер. Margin не входит в размер блока, но влияет на расстояние до других элементов."
        },
        {
          id: "p7",
          type: "heading",
          content: "Типичная ошибка новичков"
        },
        {
          id: "p8",
          type: "text",
          content: "Новички задают width: 300px, добавляют padding: 20px и удивляются, почему блок стал шире 300px. Потому что по умолчанию используется box-sizing: content-box."
        },
        {
          id: "p9",
          type: "heading",
          content: "content-box vs border-box"
        },
        {
          id: "p10",
          type: "code",
          content: `
    .card {
      box-sizing: content-box; /* Значение по умолчанию */
    }
          `
        },
        {
          id: "p11",
          type: "text",
          content: "content-box означает: width учитывает только контент. Padding и border прибавляются сверху."
        },
        {
          id: "p12",
          type: "code",
          content: `
    .card {
      box-sizing: border-box; /* Правильный современный подход */
    }
          `
        },
        {
          id: "p13",
          type: "text",
          content: "border-box означает: width включает в себя padding и border. Это делает расчёты предсказуемыми. Поэтому в реальных проектах почти всегда используют border-box."
        },
        {
          id: "p14",
          type: "heading",
          content: "Базовый reset и селектор *"
        },
        {
          id: "p15",
          type: "code",
          content: `
    * {
      margin: 0;              /* Убираем стандартные внешние отступы браузера */
      padding: 0;             /* Убираем стандартные внутренние отступы */
      box-sizing: border-box; /* Чтобы размеры считались удобно */
    }
          `
        },
        {
          id: "p16",
          type: "text",
          content: "Селектор * выбирает все элементы на странице. Мы убираем дефолтные отступы браузера (они отличаются в Chrome, Firefox и других) и сразу включаем border-box для всей страницы."
        },
        {
          id: "p17",
          type: "heading",
          content: "Сокращённые (shorthand) свойства"
        },
        {
          id: "p18",
          type: "text",
          content: "В CSS можно писать свойства полностью или сокращённо. Например, вместо background-color можно написать background."
        },
        {
          id: "p19",
          type: "code",
          content: `
    .card {
      background-color: #111; /* Только цвет фона */
    }

    .card {
      background: #111; /* Краткая запись */
    }
          `
        },
        {
          id: "p20",
          type: "text",
          content: "background — это обобщённое свойство. Оно может включать цвет, изображение, позицию и другие параметры. Если указать только цвет, всё равно будет работать."
        },
        {
          id: "p21",
          type: "code",
          content: `
    .card {
      border-width: 1px;
      border-style: solid;
      border-color: #2a2a2a;
    }

    .card {
      border: 1px solid #2a2a2a; /* Краткая запись */
    }
          `
        },
        {
          id: "p22",
          type: "text",
          content: "border — тоже shorthand. В одной строке мы задаём толщину, стиль линии и цвет."
        },
        {
          id: "p23",
          type: "heading",
          content: "Box-shadow и визуальная глубина"
        },
        {
          id: "p24",
          type: "code",
          content: `
    .card {
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    }
          `
        },
        {
          id: "p25",
          type: "text",
          content: "Первое значение — смещение по оси X. Второе — по оси Y. Третье — размытие. Цвет — тень. Так создаётся ощущение глубины."
        },
        {
          id: "p26",
          type: "heading",
          content: "Margin collapsing"
        },
        {
          id: "p27",
          type: "text",
          content: "Если два вертикальных margin соприкасаются, они не складываются, а берётся большее значение. Это называется margin collapsing."
        },
        {
          id: "p28",
          type: "code",
          content: `
    h1 {
      margin-bottom: 30px;
    }

    p {
      margin-top: 20px;
    }
          `
        },
        {
          id: "p29",
          type: "text",
          content: "Итоговый отступ будет 30px, а не 50px. Потому что margin схлопывается."
        },
        {
          id: "p30",
          type: "heading",
          content: "Финальный пример — минималистичная карточка"
        },
        {
          id: "p31",
          type: "code",
          content: `
    body {
      background: #0f0f12; /* Тёмный фон страницы */
      font-family: Arial, sans-serif; /* Базовый шрифт */
    }

    .card {
      width: 320px; /* Фиксированная ширина */
      padding: 24px; /* Внутренний воздух */
      background: #18181c; /* Цвет карточки */
      border: 1px solid #2a2a2a; /* Лёгкая рамка */
      border-radius: 12px; /* Скругление углов */
      box-shadow: 0 15px 40px rgba(0,0,0,0.5); /* Мягкая тень */
    }

    .card h2 {
      margin-bottom: 12px; /* Отступ вниз */
      font-size: 20px; /* Размер заголовка */
      color: #ffffff; /* Белый текст */
    }

    .card p {
      font-size: 14px; /* Размер текста */
      color: #b3b3b3; /* Более мягкий цвет */
    }
          `
        },
        {
          id: "p32",
          type: "text",
          content: "Здесь мы управляем геометрией через padding, создаём глубину через box-shadow, используем border-box для корректных расчётов и контролируем внешний воздух через margin."
        }
      ]
    }
  ]
}