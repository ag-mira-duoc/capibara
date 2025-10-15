import React from 'react';
import { Link } from 'react-router-dom';

import '../estilos/Administrador/AdminMenu.css'; 

function AdminMenu() {
    return (
        // Sidebar izquierda
        <aside className="AM-sidebar" id="sidebar">
            <div className="AM-brand">
                <div className="AM-dot" aria-hidden="true"></div>
                {/* Link a la página principal del admin */}
                <Link to="/AdminHome"><span>🌎 TechStore</span></Link>
            </div>

            <div className="AM-search">
                {/* Cambiamos 'for' por 'htmlFor' */}
                <label className="AM-sr-only" htmlFor="q">Buscar</label> 
                <input id="q" type="search" placeholder="Buscar..." />
            </div>

            <nav className="AM-nav">
                <Link to="/AdminHome" aria-current="page">🏠 <span>Bienvenido</span></Link>
                <Link to="/Ventas">🛒 <span>Ventas</span></Link>
                <Link to="/Inventario">📈 <span>Inventario</span></Link> 
            </nav>

            <div className="AM-sep"></div>

            <div className="AM-nav">
                <Link to="/Configuracion">⚙️ <span>Configuración</span></Link>
                <Link to="/Ayuda">❓ <span>Ayuda</span></Link>
                {/* "Cerrar sesión" redirige a la página pública de inicio (/) */}
                <Link to="/Home">🔒 <span>Cerrar sesión</span></Link> 
            </div>
        </aside>
    );
}

export default AdminMenu;