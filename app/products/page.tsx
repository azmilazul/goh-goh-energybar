'use client'

import { useEffect, useState } from 'react'
import ProductCard from '@/components/ProductCard'
import ShoppingCart from '@/components/ShoppingCart'
import { Product, CartItem } from '@/lib/types'
import { ShoppingCart as ShoppingCartIcon } from 'lucide-react'

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [cart, setCart] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products')
      const data = await response.json()
      setProducts(data || [])
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleAddToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.product.id === item.product.id)
      if (existingItem) {
        return prevCart.map((i) =>
          i.product.id === item.product.id
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        )
      }
      return [...prevCart, item]
    })
    alert('Produk ditambahkan ke keranjang!')
  }

  const handleRemoveItem = (productId: string) => {
    setCart((prevCart) => prevCart.filter((i) => i.product.id !== productId))
  }

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId)
      return
    }
    setCart((prevCart) =>
      prevCart.map((i) =>
        i.product.id === productId ? { ...i, quantity } : i
      )
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-dark text-white sticky top-0 z-40">
        <div className="container flex justify-between items-center py-4">
          <a href="/" className="text-2xl font-bold text-primary">
            Goh-Goh™
          </a>
          <div className="flex gap-8 items-center">
            <a href="/" className="hover:text-primary transition">
              Beranda
            </a>
            <a href="/products" className="hover:text-primary transition">
              Produk
            </a>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative btn btn-secondary flex items-center gap-2"
            >
              <ShoppingCartIcon className="w-5 h-5" />
              Keranjang
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Products Section */}
      <section className="py-16">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4 text-dark">Koleksi Produk Kami</h1>
          <p className="text-xl text-gray-600 mb-12">
            Pilihan energy bars berkualitas premium untuk gaya hidup aktif Anda
          </p>

          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Memuat produk...</p>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">Belum ada produk yang tersedia</p>
              <p className="text-sm text-gray-500">
                Silakan setup database Supabase terlebih dahulu
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Shopping Cart Sidebar */}
      <ShoppingCart
        items={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onRemoveItem={handleRemoveItem}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </main>
  )
}
