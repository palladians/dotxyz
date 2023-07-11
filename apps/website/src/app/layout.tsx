import './globals.css'
import type { Metadata } from 'next'
import * as fonts from './fonts'

export const metadata: Metadata = {
  title: 'Palladians',
  description:
    'Passionate software development collective delivering future-proof Web3 solutions.',
  icons: {
    icon: '/favicon.svg'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fonts.body.className}>{children}</body>
    </html>
  )
}
