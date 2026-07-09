export interface Product {
  id: string
  name: string
  description: string
  price: number
  image_url?: string
  ingredients: string[]
  category: string
  stock: number
  created_at?: string
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface Order {
  id: string
  user_email: string
  items: CartItem[]
  total_price: number
  status: 'pending' | 'completed' | 'failed'
  stripe_payment_id?: string
  created_at?: string
}

export interface Customer {
  id: string
  email: string
  name: string
  phone?: string
  address?: string
  city?: string
  created_at?: string
}
