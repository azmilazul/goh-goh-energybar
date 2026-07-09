'use client'

import { CartItem } from '@/lib/types'
import { X, Trash2 } from 'lucide-react'
import { useState } from 'react'

interface ShoppingCartProps {
  items: CartItem[]
  isOpen: boolean
  onClose: () => void
  onRemoveItem: (productId: string) => void
  onUpdateQuantity: (productId: string, quantity: number) => void
}

export default function ShoppingCart({
  items,
  isOpen,
  onClose,
  onRemoveItem,
  onUpdateQuantity,
}: ShoppingCartProps) {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  const handleCheckout = async () => {
    if (!email) {
      alert('Silakan masukkan email')
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items,
          customerEmail: email,
        }),
      })

      const data = await response.json()

      if (data.url) {
        window.location.href = data.url
      } else {
        alert('Gagal membuat checkout session')
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Terjadi kesalahan')
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full overflow-y-auto">
        <div className="sticky top-0 bg-dark text-white p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Keranjang Belanja</h2>
          <button onClick={onClose} className="hover:bg-gray-700 p-2 rounded">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {items.length === 0 ? (
            <p className="text-gray-600 text-center py-8">Keranjang Anda kosong</p>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.product.id} className="border-b pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold">{item.product.name}</h3>
                        <p className="text-sm text-gray-600">
                          Rp {item.product.price.toLocaleString('id-ID')}
                        </p>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                        className="px-2 py-1 border border-gray-300 rounded"
                      >
                        −
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => onUpdateQuantity(item.product.id, parseInt(e.target.value) || 1)}
                        className="w-12 text-center border border-gray-300 rounded"
                      />
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="px-2 py-1 border border-gray-300 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold">Total:</span>
                  <span className="text-2xl font-bold text-primary">
                    Rp {total.toLocaleString('id-ID')}
                  </span>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2">Email:</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                  />
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={isLoading || items.length === 0}
                  className="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Memproses...' : 'Bayar Sekarang'}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
