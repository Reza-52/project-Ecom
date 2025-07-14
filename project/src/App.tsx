import React, { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { ProductGrid } from './components/ProductGrid';
import { ProductDetail } from './components/ProductDetail';
import { Cart } from './components/Cart';
import { AuthModal } from './components/AuthModal';
import { Checkout } from './components/Checkout';
import { Footer } from './components/Footer';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { ProductManagement } from './components/admin/ProductManagement';
import { OrderManagement } from './components/admin/OrderManagement';
import { UserManagement } from './components/admin/UserManagement';
import { mockProducts } from './data/mockData';
import { Product } from './types';

type View = 'home' | 'products' | 'about' | 'contact' | 'admin' | 'admin-products' | 'admin-orders' | 'admin-users';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleBackToProducts = () => {
    setSelectedProduct(null);
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setShowCheckout(true);
  };

  const handleOrderSuccess = () => {
    setShowCheckout(false);
    setShowOrderSuccess(true);
    setTimeout(() => {
      setShowOrderSuccess(false);
      setCurrentView('home');
    }, 3000);
  };

  const renderContent = () => {
    if (showOrderSuccess) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-green-50">
          <div className="text-center p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Successful!</h2>
            <p className="text-gray-600">Thank you for your purchase. You will receive a confirmation email shortly.</p>
          </div>
        </div>
      );
    }

    if (showCheckout) {
      return (
        <Checkout
          onBack={() => setShowCheckout(false)}
          onSuccess={handleOrderSuccess}
        />
      );
    }

    if (selectedProduct) {
      return (
        <ProductDetail
          product={selectedProduct}
          onBack={handleBackToProducts}
        />
      );
    }

    switch (currentView) {
      case 'home':
        return (
          <div>
            <Hero onShopNow={() => setCurrentView('products')} />
            <FeaturedProducts
              products={mockProducts}
              onProductClick={handleProductClick}
              onViewAll={() => setCurrentView('products')}
            />
          </div>
        );
      
      case 'products':
        return (
          <ProductGrid
            products={mockProducts}
            onProductClick={handleProductClick}
          />
        );
      
      case 'about':
        return (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About ShopHub</h1>
            <div className="prose prose-lg mx-auto">
              <p className="text-xl text-gray-600 mb-6">
                Welcome to ShopHub, your premier destination for high-quality products and exceptional shopping experiences.
              </p>
              <p className="text-gray-700 mb-4">
                Founded with a vision to revolutionize online shopping, ShopHub combines cutting-edge technology with 
                personalized service to bring you the best products at competitive prices.
              </p>
              <p className="text-gray-700">
                Our team is dedicated to curating a diverse selection of products that meet the highest standards of 
                quality and value. From electronics to fashion, we've got everything you need.
              </p>
            </div>
          </div>
        );
      
      case 'contact':
        return (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Contact Us</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <p className="flex items-center text-gray-700">
                    <span className="font-medium">Address:</span>
                    <span className="ml-2">123 Shopping St, City, State 12345</span>
                  </p>
                  <p className="flex items-center text-gray-700">
                    <span className="font-medium">Phone:</span>
                    <span className="ml-2">+1 (555) 123-4567</span>
                  </p>
                  <p className="flex items-center text-gray-700">
                    <span className="font-medium">Email:</span>
                    <span className="ml-2">support@shophub.com</span>
                  </p>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        );
      
      case 'admin':
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <AdminDashboard
              onViewProducts={() => setCurrentView('admin-products')}
              onViewOrders={() => setCurrentView('admin-orders')}
              onViewUsers={() => setCurrentView('admin-users')}
            />
          </div>
        );
      
      case 'admin-products':
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <ProductManagement onBack={() => setCurrentView('admin')} />
          </div>
        );
      
      case 'admin-orders':
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <OrderManagement onBack={() => setCurrentView('admin')} />
          </div>
        );
      
      case 'admin-users':
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <UserManagement onBack={() => setCurrentView('admin')} />
          </div>
        );
      
      default:
        return (
          <div>
            <Hero onShopNow={() => setCurrentView('products')} />
            <FeaturedProducts
              products={mockProducts}
              onProductClick={handleProductClick}
              onViewAll={() => setCurrentView('products')}
            />
          </div>
        );
    }
  };

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header
            onCartClick={handleCartClick}
            onAuthClick={() => setIsAuthModalOpen(true)}
            currentView={currentView}
            onViewChange={setCurrentView}
          />
          
          <main className="flex-1">
            {renderContent()}
          </main>
          
          <Footer />
          
          <Cart
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            onCheckout={handleCheckout}
          />
          
          <AuthModal
            isOpen={isAuthModalOpen}
            onClose={() => setIsAuthModalOpen(false)}
          />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;