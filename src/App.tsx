import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './components/cart/Cart';
import { mockProducts } from './mocks/mockData';
import { Product, CartItem } from './types';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [products] = useState<Product[]>(mockProducts);

  const addToCart = (product: Product): void => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id: number, quantity: number): void => {
    if (quantity < 1) return;
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const removeFromCart = (id: number): void => {
    setCart(cart.filter(item => item.id !== id));
  };

  const clearCart = (): void => {
    setCart([]);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar cartCount={cartCount} />
        
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/productos" 
              element={<Products products={products} onAddToCart={addToCart} />} 
            />
            <Route 
              path="/carrito" 
              element={
                <Cart 
                  cart={cart} 
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeFromCart}
                  onClearCart={clearCart}
                />
              } 
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;