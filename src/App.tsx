<<<<<<< HEAD
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import Home from '../src/paginas/Home.jsx';
import Productos from '../src/paginas/Productos.jsx'; 
import Nosotros from '../src/paginas/Nosotros.jsx'; 
import Contacto from '../src/paginas/Contacto.jsx'; 
import DetallesProducto from '../src/paginas/DetallesProducto.jsx'; 
import RegistroUsuario from '../src/paginas/RegistroUsuario.jsx'; 
import InicioSesion from '../src/paginas/InicioSesion.jsx'; 
import AdminHome from '../src/paginas/AdminHome.jsx'; 
import AdminVentas from '../src/paginas/AdminVentas.jsx'; 
import AdminInventario from '../src/paginas/AdminInventario.jsx'; 
=======
import Carrito from './paginas/Carrito.jsx';
import Home from './paginas/Home.jsx';
import Productos from './paginas/Productos.jsx';
import Nosotros from './paginas/Nosotros.jsx';
import Contacto from './paginas/Contacto.jsx';
import Blog from './paginas/Blog.jsx';
import DetallesProducto from './paginas/DetallesProducto.jsx';
import RegistroUsuario from './paginas/RegistroUsuario.jsx';
import InicioSesion from './paginas/InicioSesion.jsx';
import AdminHome from './paginas/AdminHome.jsx';
import AdminVentas from './paginas/AdminVentas.jsx';
import AdminInventario from './paginas/AdminInventario.jsx';
>>>>>>> b0b3575678c17c62f928a1b22ef6e112b4d495a7

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Carrito" element={<Carrito />} />
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Productos" element={<Productos />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/DetallesProducto" element={<DetallesProducto />} />
        <Route path="/RegistroUsuario" element={<RegistroUsuario />} />
        <Route path="/InicioSesion" element={<InicioSesion />} />
        <Route path="/AdminHome" element={<AdminHome />} />
        <Route path="/AdminVentas" element={<AdminVentas />} />
        <Route path="/AdminInventario" element={<AdminInventario />} />
      </Routes>
    </BrowserRouter>
  );
}
=======
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/navbar/Navbar';
import Checkout from './pages/Checkout';
import Footer from './components/footer/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './components/cart/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import About from './pages/About';
import Admin from './pages/Admin';
import { mockProducts } from './mocks/mockData';
import { Product, CartItem } from './types';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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
        <AuthProvider>
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
                            <Route path="/login" element={<Login />} />
                            <Route path="/registro" element={<Register />} />
                            <Route path="/contacto" element={<Contact />} />
                            <Route path="/nosotros" element={<About />} />
                            <Route
                                path="/admin"
                                element={
                                    <ProtectedRoute requireAdmin>
                                        <Admin />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/checkout"
                                element={
                                    <Checkout
                                        cart={cart}
                                        onClearCart={clearCart}
                                    />
                                }
                            />
                        </Routes>
                    </main>

                    <Footer />
                </div>
            </Router>
        </AuthProvider>
    );
};
>>>>>>> rama_agu

export default App;
