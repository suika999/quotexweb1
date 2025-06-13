
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '../polyfills'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quotex Brasil - Plataforma de Trading Digital de Confiança',
  description: 'Negocie com mais de 410 ativos globais na Quotex Brasil. Conta demo gratuita, depósito mínimo R$ 50, suporte 24/7 em português. Comece agora!',
  keywords: 'Quotex, Quotex demo, Crie uma conta Quotex, trading digital, opções digitais, forex, criptomoedas, Brasil',
  authors: [{ name: 'Quotex Brasil' }],
  creator: 'Quotex Brasil',
  publisher: 'Quotex Brasil',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://quotex.ps',
    siteName: 'Quotex Brasil',
    title: 'Quotex Brasil - Plataforma de Trading Digital de Confiança',
    description: 'Negocie com mais de 410 ativos globais na Quotex Brasil. Conta demo gratuita, depósito mínimo R$ 50, suporte 24/7 em português.',
    images: [
      {
        url: 'https://i.ytimg.com/vi/I9PTtuiz_lU/maxresdefault.jpg',
        width: 1200,
        height: 630,
        alt: 'Quotex Brasil - Plataforma de Trading',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quotex Brasil - Plataforma de Trading Digital',
    description: 'Negocie com mais de 410 ativos globais. Conta demo gratuita, suporte 24/7 em português.',
    images: ['https://i.ytimg.com/vi/j3FusFNl5Cs/maxresdefault_live.jpg'],
  },
  alternates: {
    canonical: 'https://i.ytimg.com/vi/yXf-MfH0aho/maxresdefault.jpg',
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a1a1a" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://quotex.ps" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              "name": "Quotex Brasil",
              "description": "Plataforma de trading digital com mais de 410 ativos globais",
              "url": "https://quotex.ps",
              "logo": "https://www.binarias.org/wp-content/uploads/2022/05/quotex-logo-nuevo.png",
              "sameAs": [
                "https://www.facebook.com/quotex",
                "https://www.instagram.com/quotex",
                "https://twitter.com/quotex"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BR"
              },
              "offers": {
                "@type": "Offer",
                "description": "Conta demo gratuita com R$ 50.000 virtuais",
                "price": "0",
                "priceCurrency": "BRL"
              }
            })
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
