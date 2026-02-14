import type { Metadata } from 'next';
import Footer from './components/footer/footer';
import mainMetadata from './meta/mainMetadata.meta';
import { ScrollBarRoot } from './generic-components/scrollBarRoot';
import ScrollUp from './generic-components/scrollUp';
import NavigationComponents from './components/defaultComponents/navigationComponents';
import GenericNavigation from './components/defaultComponents/genericNavigation';

export const metadata: Metadata = mainMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <GenericNavigation />
          {children}
        <Footer />
      </body>
    </html>
  );
}
