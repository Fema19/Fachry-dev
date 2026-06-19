import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://fachry.dev'),
  title: {
    default: 'Fachry - Full-Stack Web Developer',
    template: '%s | Fachry',
  },
  description:
    'Portfolio of Fachry, a full-stack web developer building practical applications with Laravel, Next.js, MySQL, Java, and clean user interfaces.',
  keywords: [
    'Fachry',
    'full-stack developer',
    'web developer',
    'Laravel',
    'Next.js',
    'MySQL',
    'Java',
    'Minecraft plugin developer',
    'Indonesia developer',
  ],
  authors: [{ name: 'Fachry' }],
  creator: 'Fachry',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fachry.dev',
    siteName: 'Fachry Portfolio',
    title: 'Fachry - Full-Stack Web Developer',
    description:
      'Laravel, Next.js, MySQL, and Java projects focused on real workflows, maintainable backends, and clean UI.',
    images: [
      {
        url: '/profile/hero-profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Fachry full-stack web developer portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fachry - Full-Stack Web Developer',
    description:
      'Portfolio of Laravel, Next.js, MySQL, and Java projects by Fachry.',
    images: ['/profile/hero-profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
