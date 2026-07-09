'use client'

import { ShoppingCart, Zap, Leaf, Heart } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="bg-dark text-white sticky top-0 z-50">
        <div className="container flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-primary">Goh-Goh™</div>
          <div className="flex gap-8 items-center">
            <a href="#products" className="hover:text-primary transition">Produk</a>
            <a href="#about" className="hover:text-primary transition">Tentang Kami</a>
            <a href="#contact" className="hover:text-primary transition">Kontak</a>
            <button className="btn btn-secondary">🛒 Keranjang</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary via-secondary to-primary py-20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold text-dark mb-4">Energi Berkelanjutan Untuk Gaya Hidup Aktif</h1>
          <p className="text-xl text-dark mb-8 max-w-2xl mx-auto">
            Goh-Goh™ Energy Bars - Nutrisi Berkualitas Tinggi dengan Bahan-Bahan Alami
          </p>
          <button className="btn btn-primary text-lg">Belanja Sekarang</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12 text-dark">Mengapa Pilih Goh-Goh™?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Zap className="w-16 h-16 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Energi Cepat</h3>
              <p className="text-gray-600">Memberikan energi instan untuk aktivitas Anda</p>
            </div>
            <div className="text-center">
              <Leaf className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Bahan Alami</h3>
              <p className="text-gray-600">Oat, kacang, biji, dan pemanis alami tanpa aditif</p>
            </div>
            <div className="text-center">
              <Heart className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Sehat</h3>
              <p className="text-gray-600">Formula transparan untuk kesehatan optimal</p>
            </div>
            <div className="text-center">
              <ShoppingCart className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Portabel</h3>
              <p className="text-gray-600">Sempurna untuk dibawa kemana saja</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12 text-dark">Produk Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="bg-gradient-to-br from-primary to-secondary h-48 flex items-center justify-center">
                  <div className="text-6xl font-bold text-dark opacity-50">🍫</div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Energy Bar {i}</h3>
                  <p className="text-gray-600 mb-4">Kombinasi sempurna dari nutrisi dan rasa yang lezat</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">Rp 29.900</span>
                    <button className="btn btn-secondary text-sm">+ Keranjang</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-dark">Tentang Goh-Goh™</h2>
            <p className="text-lg text-gray-700 mb-6">
              Goh-Goh™ Energy Bars didirikan dengan visi untuk mendefinisikan ulang nutrisi on-the-go untuk gaya hidup aktif. Dibuat dengan bahan-bahan berkualitas tinggi seperti oat, kacang, biji, buah kering, dan pemanis alami, bar kami memberikan bahan bakar bersih yang berkelanjutan.
            </p>
            <p className="text-lg text-gray-700">
              Setiap bar dirancang dengan cermat – apakah Anda adalah atlet, profesional sibuk, pelajar, atau penggemar outdoor – untuk memberikan energi penting tanpa aditif yang tidak diinginkan. Kami bangga dengan formula sederhana dan transparan serta kemasan yang dapat dibawa ke mana pun kehidupan membawa Anda.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-dark to-gray-800 text-white py-16">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">Siap untuk Energi Berkualitas?</h2>
          <p className="text-lg mb-8">Dapatkan diskon 10% untuk pembelian pertama Anda</p>
          <button className="btn btn-primary text-lg">Belanja Sekarang</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-gray-400 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">Goh-Goh™</h3>
              <p>Nutrisi berkualitas untuk gaya hidup aktif</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Produk</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-primary">Energy Bars</a></li>
                <li><a href="#" className="hover:text-primary">Bundle Deals</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Perusahaan</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-primary">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-primary">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Hubungi Kami</h3>
              <ul className="space-y-2">
                <li>Email: info@gohgoh.id</li>
                <li>WhatsApp: +62 xxx xxxx xxxx</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p>&copy; 2024 Goh-Goh™ Energy Bars. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}