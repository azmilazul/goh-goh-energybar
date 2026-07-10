'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center">
      <div className="container max-w-md text-center">
        <div className="mb-8">
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto" />
        </div>
        
        <h1 className="text-4xl font-bold text-dark mb-4">Pembayaran Berhasil!</h1>
        <p className="text-lg text-gray-600 mb-8">
          Terima kasih telah berbelanja di Goh-Goh™. Pesanan Anda sedang diproses.
        </p>

        {sessionId && (
          <div className="bg-gray-100 p-4 rounded-lg mb-8">
            <p className="text-sm text-gray-600">ID Transaksi:</p>
            <p className="text-sm font-mono break-all">{sessionId}</p>
          </div>
        )}

        <p className="text-gray-600 mb-8">
          Email konfirmasi telah dikirim ke alamat email Anda. Silakan cek inbox atau folder spam.
        </p>

        <div className="flex flex-col gap-4">
          <Link href="/products" className="btn btn-primary text-center">
            Lanjut Belanja
          </Link>
          <Link href="/" className="btn btn-outline text-center">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  )
}
