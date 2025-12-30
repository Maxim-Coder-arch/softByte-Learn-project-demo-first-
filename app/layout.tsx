import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: "SoftByte Learn - Образовательная платформа",
  description: "Бесплатные текстовые и видеоуроки по программированию. Изучайте JavaScript, typescript, html, css, scss, c++, React и другие технологии с нуля.",
  keywords: ["программирование", "обучение", "курсы", "JavaScript", "html", "React", "css", "c++", "фронтенд", "программирование с нуля", "typescript", "IT", "образование"],
  authors: [{ name: 'SoftByte'}],
  creator: 'SoftByte',
  publisher: 'SoftByte Learn',
  openGraph: {
    title: 'SoftByte Learn',
    description: 'Образовательная платформа SoftByte Learn. Текстовые и видеоуроки по программированию.',
    type: 'website',
    images: ['/softByte.png'],     
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  }
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}
