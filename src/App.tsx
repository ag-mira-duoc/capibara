import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
        <Route path="/Blog" element={<Blog />} />
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

export default App;
