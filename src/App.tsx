import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <BrowserRouter>
      <Routes>

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

export default App;
