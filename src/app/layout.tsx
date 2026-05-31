import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fachry - Full Stack Developer Portfolio',
  description:
    'Portfolio of Fachry, a full-stack developer specializing in modern web development, Laravel, React, and Next.js. Available for opportunities in Indonesia and Europe.',
  keywords: [
    'developer',
    'portfolio',
    'full-stack',
    'Next.js',
    'React',
    'Laravel',
    'freelancer',
  ],
  authors: [{ name: 'Fachry' }],
  creator: 'Fachry',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fachry.dev',
    siteName: 'Fachry Portfolio',
    title: 'Fachry - Full Stack Developer',
    description: 'Premium portfolio showcasing my work and expertise',
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
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}
