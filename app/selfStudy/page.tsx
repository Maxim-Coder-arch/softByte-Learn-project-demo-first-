import React from "react";
import "../scss/pages/roadmap.css";
import "../scss/main/main.css";
import "../scss/corsePageStyle/mainCourse/mainCourse.css";
import Loader from "../components/defaultComponents/loader";
import Link from "next/link";

const blocks = [
  {
    title: "01. Как правильно учить технологии",
    text: "Учёба ≠ просмотр курсов. Технология считается изученной только тогда, когда ты применил её в проекте.",
    points: [
      "Теория → мини-практика → мини-проект",
      "Учись через документацию, не через пересказы",
      "Каждая тема должна заканчиваться кодом",
      "Сразу применяй знания в React/Next проектах"
    ]
  },
  {
    title: "02. Как запоминать быстрее",
    text: "Мозг запоминает через повторение и контекст.",
    points: [
      "Используй spaced repetition",
      "Переписывай код без подсказок",
      "Объясняй тему вслух (эффект Фейнмана)",
      "Веди dev-конспекты"
    ]
  },
  {
    title: "03. Как набираться опыта без работы",
    text: "Опыт — это не годы, а количество решённых задач.",
    points: [
      "Клонируй реальные сервисы",
      "Делай pet-projects с API",
      "Участвуй в open-source",
      "Решай реальные проблемы друзей/бизнеса"
    ]
  },
  {
    title: "04. Pet-projects, которые ценят работодатели",
    text: "Todo-list не считается опытом.",
    points: [
      "Полноценный SaaS (auth + API + база)",
      "Dashboard с графиками и фильтрами",
      "Realtime чат / WebSocket",
      "Интернет-магазин с корзиной"
    ]
  },
  {
    title: "05. Как учить сложные темы",
    text: "Redux, архитектура, тесты — учатся через боль и практику.",
    points: [
      "Разбирай чужие проекты на GitHub",
      "Делай refactoring своих проектов",
      "Повторяй архитектуру популярных сервисов",
      "Пиши код без туториалов"
    ]
  },
  {
    title: "06. GitHub как портфолио",
    text: "GitHub — это твой резюме-сайт.",
    points: [
      "README с описанием проекта",
      "Скриншоты и демо",
      "Чистая история коммитов",
      "Deploy каждого проекта"
    ]
  },
  {
    title: "07. Как стать востребованным разработчиком",
    text: "Компании покупают не код, а решение проблем.",
    points: [
      "Умение думать архитектурно",
      "Чистый и поддерживаемый код",
      "Понимание UX",
      "Самостоятельность"
    ]
  },
  {
    title: "08. Навыки уровня Middle",
    text: "Разница между Junior и Middle — самостоятельность.",
    points: [
      "Проектирование фич",
      "Работа с API и ошибками",
      "Оптимизация и производительность",
      "Тестирование и рефакторинг"
    ]
  },
  {
    title: "09. Как учиться без выгорания",
    text: "Самообучение — марафон, не спринт.",
    points: [
      "Учись 2-4 часа в день, но стабильно",
      "Делай проекты ради интереса",
      "Фиксируй прогресс каждую неделю",
      "Сравнивай себя только с собой"
    ]
  },
];

const SelfStudyPage: React.FC = () => {
  return (
    <>
      <Loader />
      <Link href="../" className="to-home">На главную</Link>

      <div className="self-page">
        <div className="roadmap-blur-sphere roadmap-blur-sphere--top" />
        <div className="roadmap-blur-sphere roadmap-blur-sphere--bottom" />

        <div className="self-container">
          <header className="self-header">
            <h1>самоучка <span>developer</span></h1>
            <p>
              Как учиться без наставника, набирать опыт и выйти на уровень,
              за который платят деньги.
            </p>
            <div className="self-header__line" />
          </header>

          <div className="self-grid">
            {blocks.map((b, i) => (
              <div key={i} className="self-card">
                <h2>{b.title}</h2>
                <p className="self-card__desc">{b.text}</p>
                <ul>
                  {b.points.map((p, idx) => <li key={idx}>{p}</li>)}
                </ul>
                <span className="self-card__number">{i + 1}</span>
              </div>
            ))}
          </div>

          <footer className="self-footer">
            <div className="self-footer__badge">
              <p>самообразование → карьера</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default SelfStudyPage;
