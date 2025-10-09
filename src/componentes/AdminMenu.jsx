import React from 'react';
import { Link } from 'react-router-dom';

import '../estilos/Administrador/AdminMenu.css'; 

function AdminMenu() {
    return (
        // Sidebar izquierda
        <aside className="sidebar" id="sidebar">
            <div className="brand">
                <div className="dot" aria-hidden="true"></div>
                {/* Link a la página principal del admin */}
                <Link to="/HomeTiendaAdmin"><span>🗿 Nombre de tienda</span></Link>
            </div>

            <div className="search">
                {/* Cambiamos 'for' por 'htmlFor' */}
                <label className="sr-only" htmlFor="q">Buscar</label> 
                <input id="q" type="search" placeholder="Buscar..." />
            </div>

            <nav className="nav">
                <Link to="/HomeTiendaAdmin" aria-current="page">🏠 <span>Bienvenido</span></Link>
                <Link to="/Ventas">🛒 <span>Ventas</span></Link>
                <Link to="/Inventario">📈 <span>Inventario</span></Link> 
                <Link to="/Reportes">📃 <span>Reportes</span></Link>
                <Link to="/Empleados">👤 <span>Empleados</span></Link>
                <Link to="/Clientes">👥 <span>Clientes</span></Link> 
            </nav>

            <div className="sep"></div>

            <div className="nav">
                <Link to="/Configuracion">⚙️ <span>Configuración</span></Link>
                <Link to="/Ayuda">❓ <span>Ayuda</span></Link>
                {/* "Cerrar sesión" redirige a la página pública de inicio (/) */}
                <Link to="/">🔒 <span>Cerrar sesión</span></Link> 
            </div>
        </aside>
    );
}

export default AdminMenu;