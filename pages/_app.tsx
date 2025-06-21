import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>COI Calculator - Captain of Industry Factory Planner</title>
        <meta name="title" content="COI Calculator - Captain of Industry Factory Planner" />
        <meta name="description" content="Free online production chain calculator for Captain of Industry. Plan factories, optimize supply chains, and share designs with drag-and-drop interface. 220+ resources, all recipes included." />
        <meta name="keywords" content="captain of industry, coi calculator, factory planner, production calculator, supply chain, factory builder, resource calculator, game tool, manufacturing, logistics" />
        <meta name="author" content="Fred PPM" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fredppm.github.io/coi-calc/" />
        <meta property="og:title" content="COI Calculator - Captain of Industry Factory Planner" />
        <meta property="og:description" content="Free online production chain calculator for Captain of Industry. Plan factories, optimize supply chains, and share designs with drag-and-drop interface." />
        <meta property="og:image" content="https://fredppm.github.io/coi-calc/images/og-preview.png" />
        <meta property="og:site_name" content="COI Calculator" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://fredppm.github.io/coi-calc/" />
        <meta property="twitter:title" content="COI Calculator - Captain of Industry Factory Planner" />
        <meta property="twitter:description" content="Free online production chain calculator for Captain of Industry. Plan factories, optimize supply chains, and share designs." />
        <meta property="twitter:image" content="https://fredppm.github.io/coi-calc/images/og-preview.png" />
        
        {/* Favicon */}
        <link rel="icon" href="/coi-calc/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/coi-calc/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/coi-calc/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/coi-calc/favicon-16x16.png" />
        <link rel="manifest" href="/coi-calc/site.webmanifest" />
        
        {/* Additional SEO */}
        <link rel="canonical" href="https://fredppm.github.io/coi-calc/" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
} 