'use client'

import Link from 'next/link'
import { AlertCircle } from 'lucide-react'

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white flex items-center justify-center">
      <div className="container max-w-md text-center">
        <div className="mb-8">
          <AlertCircle className="w-24 h-24 text-red-500 mx-auto" />
        </div>
        
        <h1 className="text-4xl font-bold text-dark mb-4">Pembayaran Dibatalkan</h1>
        <p className="text-lg text-gray-600 mb-8">
          Pembayaran Anda telah dibatalkan. Silakan coba lagi atau hubungi kami jika ada pertanyaan.
        </p>

        <div className="flex flex-col gap-4">
          <Link href="/products" className="btn btn-primary text-center">
            Kembali ke Keranjang
          </Link>
          <Link href="/" className="btn btn-outline text-center">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  )
}
