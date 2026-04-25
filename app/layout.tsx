import type { Metadata } from 'next'
import { Outfit, Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
  weight: ['400', '500', '700', '900']
})

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
  title: 'Studio Workflow — Studio×クライアントワーク攻略講座',
  description: '案件受注後から納品まで。クライアントワークの全工程を、この1本で完全マスター。',
  icons: {
    icon: '/sw.png',
    apple: '/sw.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`${outfit.variable} ${notoSansJP.variable}`}>
      <body className="font-sans antialiased text-[var(--text-body)] bg-[var(--surface-gray)] selection:bg-[var(--accent-light)] selection:text-[var(--accent-color)]">
        {children}
      </body>
    </html>
  )
}
