import { Product, Order } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    price: 79.99,
    image: 'https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'High-quality wireless headphones with noise cancellation and premium sound quality.',
    category: 'Electronics',
    stock: 50,
    featured: true
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 199.99,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Advanced fitness tracking with heart rate monitor and GPS functionality.',
    category: 'Electronics',
    stock: 30,
    featured: true
  },
  {
    id: '3',
    name: 'Organic Cotton T-Shirt',
    price: 29.99,
    image: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Comfortable and sustainable organic cotton t-shirt in various colors.',
    category: 'Clothing',
    stock: 100,
    featured: false
  },
  {
    id: '4',
    name: 'Leather Laptop Bag',
    price: 89.99,
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Premium leather laptop bag with multiple compartments and professional design.',
    category: 'Accessories',
    stock: 25,
    featured: true
  },
  {
    id: '5',
    name: 'Wireless Phone Charger',
    price: 39.99,
    image: 'https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices.',
    category: 'Electronics',
    stock: 75,
    featured: false
  },
  {
    id: '6',
    name: 'Running Sneakers',
    price: 129.99,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Lightweight running shoes with advanced cushioning and breathable design.',
    category: 'Footwear',
    stock: 60,
    featured: true
  }
];

export const mockOrders: Order[] = [
  {
    id: '1',
    userId: '2',
    items: [
      { id: '1', product: mockProducts[0], quantity: 1 },
      { id: '2', product: mockProducts[1], quantity: 1 }
    ],
    total: 279.98,
    status: 'delivered',
    createdAt: '2024-01-15',
    shippingAddress: {
      name: 'John Customer',
      address: '123 Main St',
      city: 'New York',
      postalCode: '10001',
      phone: '+1-555-0123'
    }
  },
  {
    id: '2',
    userId: '2',
    items: [
      { id: '3', product: mockProducts[2], quantity: 2 }
    ],
    total: 59.98,
    status: 'processing',
    createdAt: '2024-01-20',
    shippingAddress: {
      name: 'John Customer',
      address: '123 Main St',
      city: 'New York',
      postalCode: '10001',
      phone: '+1-555-0123'
    }
  }
];