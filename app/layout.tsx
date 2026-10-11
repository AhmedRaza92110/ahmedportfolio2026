import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ahmed Raza Qadri | Mobile, Full-Stack & DevOps Engineer',
  description: 'Portfolio of Ahmed Raza Qadri — mobile apps, full-stack platforms, cloud engineering, DevOps, and technical education.',
  keywords: ['Ahmed Raza Qadri', 'Flutter', 'Mobile Developer', 'Full Stack Developer', 'DevOps', 'AWS', 'Azure'],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
