import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Goh-Goh™ Energy Bars - Nutrisi Berkualitas Untuk Gaya Hidup Aktif',
  description: 'Energy bars premium dengan bahan-bahan alami berkualitas tinggi untuk atlet, profesional, dan penggemar outdoor.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}