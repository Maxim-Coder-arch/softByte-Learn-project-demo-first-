import type { Metadata } from "next";

const mainMetadata: Metadata = {
  title: "SoftByte Learn - Образовательная платформа",
  description: "Бесплатные текстовые и видеоуроки по программированию. Изучайте JavaScript, typescript, html, css, scss, c++, React и другие технологии с нуля.",
  keywords: ["программирование", "обучение", "курсы", "JavaScript", "html", "React", "css", "c++", "фронтенд", "программирование с нуля", "typescript", "IT", "образование"],
  authors: [{ name: 'SoftByte'}],
  creator: 'SoftByte',
  publisher: 'SoftByte Learn',
  verification: {
    google: "yZ7mobjVmC0SAY0BBIJ2r55AR8rmO2MZUu9dpaAx8r0"
  },
  openGraph: {
    title: 'SoftByte Learn',
    description: 'Образовательная платформа SoftByte Learn. Текстовые и видеоуроки по программированию.',
    type: 'website',
    images: ['/metaImages/softByte.png'],     
  },
  icons: {
    icon: '/metaImages/icon.png',
    apple: '/metaImages/icon.png',
  }
};

export default mainMetadata;