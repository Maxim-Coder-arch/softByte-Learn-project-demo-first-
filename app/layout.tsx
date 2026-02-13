import type { Metadata } from 'next';
import Footer from './components/footer/footer';
import mainMetadata from './meta/mainMetadata.meta';
import { ScrollBarRoot } from './generic-components/scrollBarRoot';
import ScrollUp from './generic-components/scrollUp';

export const metadata: Metadata = mainMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <ScrollBarRoot />
        <ScrollUp />
          {children}
        <Footer />
      </body>
    </html>
  );
}
