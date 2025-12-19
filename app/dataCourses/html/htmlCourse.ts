import { Course } from "../dataCourse"


export const htmlcourse: Course = {
  id: 1,
  slug: "html",
  title: "Курс по HTML",
  subTitle: "Гипертекстовая разметка",
  description: "Полный курс по HTML5 с нуля. Изучите все аспекты современного HTML.",
  level: "Начинающий",
  lessons: [
    {
      id: "html-1",
      slug: "html1",
      title: "Введение в html.",
      description: "Знакомство с понятием html. Виды тегов в html. Синтаксис html. Базовые теги html на практике",
      duration: "Длительность 9:17",
      videoId: "2DeBURKcU_Y?list=PLeLdJcnxYFThC2nAtBRPsrX8ClU_TYQNi",
      order: 1,
      paragraphs: [
        {
          id: "p1",
          type: "heading",
          content: "Введение в HTML"
        },
        {
          id: "p2",
          type: "text",
          content: "HTML (HyperText Markup Language) — это язык разметки, который используется для создания структуры веб-страниц. Браузер читает HTML-документ и на его основе понимает, что именно должно быть на странице и в каком порядке: текст, заголовки, изображения, списки и другие элементы. HTML не является языком программирования. Он не выполняет вычисления и не содержит логики. Его задача — описание структуры и содержания страницы."
        },
        {
          id: "p3",
          type: "heading",
          content: "Из чего состоит HTML-документ"
        },
        {
          id: "p4",
          type: "text",
          content: "HTML-документ состоит из тегов. Теги — это специальные слова в угловых скобках, которые сообщают браузеру, что именно описывается."
        },
        {
          id: "p5",
          type: "code",
          content: "<h1>Заголовок первого уровня</h1>"
        },
        {
          id: "p6",
          type: "note",
          content: "Большинство тегов имеют открывающую и закрывающую часть."
        },
        {
          id: "p7",
          type: "heading",
          content: "Парные и непарные теги"
        },
        {
          id: "p8",
          type: "quote",
          content: "Парные теги"
        },
        {
          id: "p9",
          type: "text",
          content: "Состоят из открывающего и закрывающего тега и содержат внутри себя контент."
        },
        {
          id: "p9",
          type: "list",
          content: "",
          listItems: [
            "<html>...</html>",
            "<head>...</head>",
            "<body>...</body>",
            "<title>...</title>"
          ]
        },
        {
          id: "p10",
          type: "quote",
          content: "Непарные теги"
        },
        {
          id: "p11",
          type: "text",
          content: "Не имеют закрывающего тега и используются самостоятельно."
        },
        {
          id: "p12",
          type: "list",
          content: "",
          listItems: [
            "<meta>",
            "<br>",
            "<img>",
          ]
        },
        {
          id: "p13",
          type: "heading",
          content: "Базовая структура HTML-документа"
        },
        {
          id: "p14",
          type: "quote",
          content: "Каждая HTML-страница имеет стандартную структуру."
        },
        {
          id: "p15",
          type: "code",
          content: `
<!DOCTYPE html>
<html>
  <head>
    <title>Название страницы</title>
  </head>
  <body>
    Текст на странице
  </body>
</html>
                    `
        },
        {
          id: "p16",
          type: "heading",
          content: "DOCTYPE"
        },
        {
          id: "p17",
          type: "code",
          content: "<!DOCTYPE html>"
        },
        {
          id: "p18",
          type: "text",
          content: "Эта строка всегда находится в самом начале документа. Она сообщает браузеру, что используется современный стандарт HTML. Без DOCTYPE браузер может отображать страницу некорректно."
        },
        {
          id: "p19",
          type: "heading",
          content: "Тег <html>"
        },
        {
          id: "p20",
          type: "text",
          content: "Тег <html> — это корневой элемент документа. Внутри него находится всё содержимое страницы, включая служебную информацию и видимую часть."
        },
        {
          id: "p21",
          type: "heading",
          content: "Тег <head>"
        },
        {
          id: "p22",
          type: "text",
          content: "<head> содержит служебную информацию о странице, которая не отображается напрямую в браузере."
        },
        {
          id: "p23",
          type: "list",
          content: "Внутри <head> обычно находятся:",
          listItems: [
            "<title> — название страницы во вкладке браузера",
            "<meta> — служебные мета-данные"
          ]
        },
        {
          id: "p24",
          type: "heading",
          content: "Тег <title>"
        },
        {
          id: "p25",
          type: "code",
          content: 
`<title>Моя первая страница</title>`
        },
        {
          id: "p26",
          type: "list",
          content: "Задаёт название страницы, которое:",
          listItems: [
            "отображается во вкладке браузера",
            "используется поисковыми системами"
          ]
        },
        {
          id: "p27",
          type: "heading",
          content: "Мета-теги"
        },
        {
          id: "p28",
          type: "text",
          content: "Мета-теги используются для передачи браузеру важной технической информации."
        },
        {
          id: "p29",
          type: "quote",
          content: "Кодировка страницы"
        },
        {
          id: "p30",
          type: "code",
          content: `<meta charset="UTF-8">`
        },
        {
          id: "p31",
          type: "text",
          content: "Указывает кодировку текста. UTF-8 поддерживает большинство языков."
        },
        {
          id: "p32",
          type: "quote",
          content: "Адаптация под устройства"
        },
        {
          id: "p33",
          type: "code",
          content: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
        },
        {
          id: "p34",
          type: "text",
          content: "Позволяет странице корректно отображаться на мобильных устройствах."
        },
        {
          id: "p35",
          type: "note",
          content: "Мета-теги не отображаются на странице, но без них сайт может работать неправильно."
        },
        {
          id: "p36",
          type: "heading",
          content: "Тег <body>"
        },
        {
          id: "p37",
          type: "quote",
          content: "<body> — это видимая часть страницы. Всё, что находится внутри этого тега, отображается пользователю в браузере: текст, заголовки, кнопки, изображения и другие элементы."
        },
        {
          id: "p38",
          type: "code",
          content: 
`<body>
  Привет, это моя первая HTML-страница
</body>`
        },
        {
          id: "p39",
          type: "heading",
          content: "Итог"
        },
        {
          id: "p40",
          type: "text",
          content: "HTML — это основа любой веб-страницы. Он отвечает за структуру документа и порядок элементов.",
        }
      ]
    },
  ]
}