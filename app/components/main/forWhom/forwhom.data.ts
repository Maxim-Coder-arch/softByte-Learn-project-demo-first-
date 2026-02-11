interface BenefitItem {
  id: number;
  title: string;
  description: string;
  url: string;
  image?: string;
  label: string;
}

export const benefitsData: BenefitItem[] = [
  {
    id: 1,
    title: "Начинающие с нуля",
    description: "Пошаговое руководство с самых основ. Начните свой путь в веб-разработке без предварительных знаний и опыта.",
    url: "/",
    image: "/beginner-path.jpg",
    label: "Roadmap для новичков"
  },
  {
    id: 2,
    title: "Самоучки, желающие систематизировать знания",
    description: "Структурированная программа, которая заполнит пробелы в знаниях и выстроит полную картину.",
    url: "/",
    image: "/systematization.jpg",
    label: "Систематизация знаний"
  },
  {
    id: 3,
    title: "Те, кто считает, что не потянет платные курсы",
    description: "Полностью бесплатное обучение и поддержка сообщества.",
    url: "#coursesSection",
    image: "/affordable-education.jpg",
    label: "Бесплатное обучение"
  }
];