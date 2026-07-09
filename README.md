# Goh-Goh™ Energy Bars - Toko Online & Website Perusahaan

![Project Status](https://img.shields.io/badge/status-in%20development-blue)
![License](https://img.shields.io/badge/license-MIT-green)

Website toko online dan perusahaan untuk Goh-Goh™ Energy Bars - Energy bars premium dengan bahan-bahan alami berkualitas tinggi.

## 🎯 Fitur Utama

- ✅ Website Perusahaan dengan informasi produk
- ✅ Toko Online dengan katalog produk dinamis
- ✅ Shopping Cart dengan penyimpanan lokal
- ✅ Integrasi Pembayaran Stripe
- ✅ Database Supabase untuk manajemen produk & orders
- ✅ Responsive Design untuk semua devices
- ✅ Admin API untuk manajemen produk

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework modern
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

### Backend & Database
- **Supabase** - PostgreSQL database + Auth
- **Stripe** - Payment processing
- **Next.js API Routes** - Backend API

### Hosting
- **Vercel** - Deployment platform

## 📋 Prerequisites

Sebelum memulai, pastikan Anda memiliki:

- Node.js 18+ dan npm/yarn
- Account Supabase (gratis di https://supabase.com)
- Account Stripe (gratis di https://stripe.com)
- Account Vercel (gratis di https://vercel.com)

## 🚀 Quick Start

### 1. Clone Repository

```bash
git clone https://github.com/azmilazul/goh-goh-energybar.git
cd goh-goh-energybar
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Supabase Database

1. Buat project baru di [Supabase](https://supabase.com)
2. Buka SQL Editor di dashboard Supabase
3. Copy & paste semua kode dari file `database/schema.sql`
4. Jalankan SQL queries

### 4. Setup Environment Variables

Buat file `.env.local` di root project:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**Cara mendapatkan API keys:**

#### Supabase Keys
1. Buka project Supabase Anda
2. Settings → API → Copy URL dan Anon Key

#### Stripe Keys
1. Login ke Stripe Dashboard
2. Developers → API Keys
3. Copy Publishable Key dan Secret Key
4. Webhooks → Add endpoint
   - URL: `https://yourdomain.com/api/webhooks/stripe`
   - Events: `checkout.session.completed`, `checkout.session.async_payment_failed`
   - Copy Signing Secret

### 5. Jalankan Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## 📁 Project Structure

```
goh-goh-energybar/
├── app/
│   ├── api/                    # API routes
│   │   ├── products/           # Product CRUD
│   │   ├── checkout/           # Stripe checkout
│   │   ├── orders/             # Order management
│   │   └── webhooks/stripe/    # Stripe webhooks
│   ├── products/               # Products page
│   ├── success/                # Payment success page
│   ├── cancel/                 # Payment cancel page
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Homepage
│   └── globals.css             # Global styles
├── components/
│   ├── ProductCard.tsx         # Product card component
│   └── ShoppingCart.tsx        # Shopping cart component
├── lib/
│   ├── supabase.ts             # Supabase client
│   ├── stripe.ts               # Stripe client
│   └── types.ts                # TypeScript types
├── database/
│   └── schema.sql              # Database schema
├── public/                     # Static assets
├── .env.local.example          # Environment variables template
├── next.config.js              # Next.js config
├── tailwind.config.ts          # Tailwind config
├── tsconfig.json               # TypeScript config
└── package.json                # Dependencies
```

## 🔌 API Endpoints

### Products
- `GET /api/products` - Ambil semua produk
- `POST /api/products` - Buat produk baru
- `GET /api/products/[id]` - Ambil produk spesifik
- `PUT /api/products/[id]` - Update produk

### Orders
- `GET /api/orders?email=user@email.com` - Ambil orders user

### Checkout
- `POST /api/checkout` - Buat Stripe checkout session

### Webhooks
- `POST /api/webhooks/stripe` - Stripe payment webhooks

## 📱 Pages

- `/` - Homepage dengan informasi perusahaan
- `/products` - Katalog produk dengan shopping cart
- `/success` - Halaman sukses pembayaran
- `/cancel` - Halaman pembatalan pembayaran

## 🚀 Deployment ke Vercel

### 1. Push ke GitHub

```bash
git add .
git commit -m "Initial project setup"
git push origin main
```

### 2. Deploy ke Vercel

1. Buka [Vercel](https://vercel.com)
2. Click "New Project"
3. Import GitHub repository
4. Add environment variables dari `.env.local`
5. Deploy!

## 📚 Dokumentasi Penting

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Stripe Documentation](https://stripe.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Kontribusi

Contribusi sangat diterima! Silakan:

1. Fork repository ini
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📝 License

Project ini dilisensikan di bawah MIT License - lihat file LICENSE untuk detail.

## 📧 Kontak

**Goh-Goh™ Energy Bars**
- Email: info@gohgoh.id
- Website: https://goh-goh-energybar.vercel.app
- GitHub: [azmilazul](https://github.com/azmilazul)

## 🎉 Credits

Proyek ini dibuat dengan ❤️ menggunakan:
- Next.js & React
- Supabase
- Stripe
- Tailwind CSS
- Vercel

---

**Status**: 🚀 Ready for Development & Deployment
