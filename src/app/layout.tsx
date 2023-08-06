import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import styles from './layout.module.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'next app',
  description: 'first next app for study',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={styles.header}>
          <h1>Demo</h1>
          <nav className={styles.nav}>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
            <Link href="/product">Product</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
