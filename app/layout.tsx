import type { Metadata } from 'next';
import Footer from './components/footer/footer';
import mainMetadata from './meta/mainMetadata.meta';

export const metadata: Metadata = mainMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
