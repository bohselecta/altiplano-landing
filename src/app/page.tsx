import type { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhatSection from '@/components/WhatSection';
import Features from '@/components/Features';
import DownloadSection from '@/components/DownloadSection';
import Requirements from '@/components/Requirements';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Altiplano - Search Your Knowledge, Not The Web',
  description: 'A local-first parametric search engine powered by advanced AI guardrails. Private, fast, and offline-capable with sophisticated prompt priming.',
  keywords: 'search engine, AI, local-first, privacy, offline, parametric search, guardrails',
  authors: [{ name: 'Altiplano' }],
  openGraph: {
    type: 'website',
    url: 'https://altiplano.vercel.app/',
    title: 'Altiplano - Search Your Knowledge, Not The Web',
    description: 'A local-first parametric search engine powered by advanced AI guardrails. Private, fast, and offline-capable.',
    images: ['/altiplano-branding.png'],
  },
  twitter: {
    card: 'summary_large_image',
    url: 'https://altiplano.vercel.app/',
    title: 'Altiplano - Search Your Knowledge, Not The Web',
    description: 'A local-first parametric search engine powered by advanced AI guardrails. Private, fast, and offline-capable.',
    images: ['/altiplano-branding.png'],
  },
  icons: {
    icon: '/altiplano-graphic-mark-logo.svg',
  },
};

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <WhatSection />
      <Features />
      <DownloadSection />
      <Requirements />
      <Footer />
    </main>
  );
}
