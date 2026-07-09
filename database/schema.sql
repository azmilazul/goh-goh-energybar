-- Goh-Goh Energy Bars Database Schema
-- Run these SQL commands in Supabase SQL Editor

-- Products table
CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  image_url VARCHAR(500),
  ingredients TEXT[] DEFAULT ARRAY[]::TEXT[],
  category VARCHAR(100) DEFAULT 'energy-bar',
  stock INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Customers table
CREATE TABLE customers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  address TEXT,
  city VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Orders table
CREATE TABLE orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_email VARCHAR(255) NOT NULL,
  items JSONB NOT NULL,
  total_price DECIMAL(12, 2) NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  stripe_payment_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_orders_user_email ON orders(user_email);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_stripe_payment_id ON orders(stripe_payment_id);

-- Insert sample products
INSERT INTO products (name, description, price, ingredients, stock) VALUES
('Goh-Goh™ Classic', 'Bar klasik dengan oat, almond, dan madu alami', 29900, ARRAY['Oat', 'Almond', 'Madu', 'Buah Kering'], 50),
('Goh-Goh™ Protein Plus', 'Diperkaya dengan protein untuk performa maksimal', 34900, ARRAY['Oat', 'Kacang Tanah', 'Protein Isolat', 'Gula Kelapa'], 40),
('Goh-Goh™ Fruity', 'Kombinasi buah-buahan dan biji-bijian pilihan', 29900, ARRAY['Oat', 'Cranberry', 'Blueberry', 'Biji Bunga Matahari'], 45),
('Goh-Goh™ Chocolate', 'Dark chocolate dengan kacang dan granola', 32900, ARRAY['Oat', 'Dark Chocolate', 'Hazelnut', 'Kelapa'], 35),
('Goh-Goh™ Vegan', 'Ramah vegan tanpa produk hewani', 34900, ARRAY['Oat', 'Kacang Pinus', 'Kurma', 'Biji Beras Merah'], 30);
