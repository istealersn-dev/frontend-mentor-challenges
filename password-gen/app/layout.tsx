import type { Metadata } from 'next'
import './assets/globals.css'

export const metadata: Metadata = {
  title: 'Password Generator - istealersn.dev',
  description: 'This is a custom password generator application built using NextJs 13.5',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
