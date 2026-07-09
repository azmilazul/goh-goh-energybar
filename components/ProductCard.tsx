'use client'

import { Product, CartItem } from '@/lib/types'
import { ShoppingCart } from 'lucide-react'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
  onAddToCart: (item: CartItem) => void
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    onAddToCart({
      product,
      quantity,
    })
    setQuantity(1)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
      <div className="bg-gradient-to-br from-primary to-secondary h-48 flex items-center justify-center">
        <div className="text-6xl">{product.image_url || '🍫'}</div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
        
        {product.ingredients && (
          <div className="mb-4">
            <p className="text-xs font-semibold text-gray-700 mb-2">Bahan:</p>
            <p className="text-xs text-gray-600">{product.ingredients.join(', ')}</p>
          </div>
        )}
        
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-primary">
            Rp {product.price.toLocaleString('id-ID')}
          </span>
        </div>
        
        <div className="mt-4 flex gap-2">
          <input
            type="number"
            min="1"
            max={product.stock}
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-16 px-2 py-2 border border-gray-300 rounded text-center"
          />
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="flex-1 btn btn-secondary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Keranjang
          </button>
        </div>
      </div>
    </div>
  )
}
