'use client'

import { useEffect, useState } from 'react'
import ProductCard from '@/components/ProductCard'
import ShoppingCart from '@/components/ShoppingCart'
import type { Product, CartItem } from '@/lib/types'
import { ShoppingCart as ShoppingCartIcon } from 'lucide-react'

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [cart, setCart] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const response = await fetch('/api/products')
      
      if (!response.ok) {
        throw new Error('Failed to fetch products')
      }
      
      const data = await response.json()
      setProducts(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error('Error fetching products:', error)
      setError('Gagal memuat produk. Silakan coba lagi.')
      setProducts([
        {
          id: '1',
          name: 'Goh-Goh™ Classic',
          description: 'Bar klasik dengan oat, almond, dan madu alami',
          price: 29900,
          ingredients: ['Oat', 'Almond', 'Madu', 'Buah Kering'],
          category: 'energy-bar',
          stock: 50,
        },
        {
          id: '2',
          name: 'Goh-Goh™ Protein Plus',
          description: 'Diperkaya dengan protein untuk performa maksimal',
          price: 34900,
          ingredients: ['Oat', 'Kacang Tanah', 'Protein Isolat', 'Gula Kelapa'],
          category: 'energy-bar',
          stock: 40,
        },
        {
          id: '3',
          name: 'Goh-Goh™ Fruity',
          description: 'Kombinasi buah-buahan dan biji-bijian pilihan',
          price: 29900,
          ingredients: ['Oat', 'Cranberry', 'Blueberry', 'Biji Bunga Matahari'],
          category: 'energy-bar',
          stock: 45,
        },
      ])
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

          {error && (
            <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded mb-8">
              <p className="font-semibold">⚠️ {error}</p>
              <p className="text-sm mt-1">Menampilkan produk sample. Silakan setup Supabase untuk produk real.</p>
            </div>
          )}

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
