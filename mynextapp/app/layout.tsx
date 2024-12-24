import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import './globals.css';
import ClientLayout from './ClientLayout';
import StarsCanvas from '@/components/main/StarBackground';
import SessionProviderWrapper from './SessionProviderWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: "SPLURGE'24 TECHFEST",
    template: "%s - SPLURGE'24 TECHFEST"
  },
  description: "SPLURGE is an eagerly anticipated event that brings together students from diverse colleges to showcase their technical prowess and artistic flair. Come let's be a part of PGI family's symphony of innovation that defines who we are.",
  twitter: {
    card: "summary_large_image"
  },
  openGraph:{
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/Splurge.png?alt=media&token=aedb4b66-7877-4fa7-b3e8-b217eea7842d'
      }
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preload Fonts */}
        <meta name="google-site-verification" content="tdnT-0RufNV2LB25YbOJFNglh1f2dZgmYJwea5a6NM0" />
        <link
          rel="preload"
          href="/fonts/Michroma-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/ethnocentric rg.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />

        {/* Preload Images */}
        <link rel="preload" href="/LockMain.png" as="image" type="image/png" />
        <link rel="preload" href="/LockTop.png" as="image" type="image/png" />

        {/* Preload Videos */}
        <link
          rel="preload"
          href="https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/encryption.webm?alt=media&token=8c98ed59-df95-4bd3-8305-53796f9e3649"
          as="video"
          type="video/webm"
        />
        <link
          rel="preload"
          href="https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/blackhole.webm?alt=media&token=df679335-98b7-42a4-a2d0-6ae0f55de4c3"
          as="video"
          type="video/webm"
        />
      </head>
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        {/* Background animation */}
        <StarsCanvas />
        {/* Client-side redirect logic */}
        <SessionProviderWrapper>
          <ClientLayout>
            {children}
          </ClientLayout>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}