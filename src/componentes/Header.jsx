import React from 'react';
import CartOffcanvas from './CartOffcanvas.tsx';
import CartButton from './CartButton.tsx';

import '../estilos/Tienda/header.css';
import '../estilos/Tienda/index.css';

function Header() {
    return (
        <header>
            <div className="logo-container">
                <a href="/Home">
                    <img className="PaginaLogo" src="../public/img/2111125.png" alt="TechStore Logo" />
                    <span className="site-name">TechStore</span>
                </a>
            </div>

            <nav className="main-nav">
                <ul>
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/Productos">Productos</a></li>
                    <li><a href="/Nosotros">Nosotros</a></li>
                    <li><a href="/Contacto">Contacto</a></li>
                    <li><a href="/Blog">Blog</a></li>
                </ul>
            </nav>

            <div className="cart-container">
                <CartButton
                    data-bs-toggle="offcanvas"
                    data-bs-target="#cartOffcanvas"
                />
            </div>

            <CartOffcanvas />
        </header>
    );
}

export default Header;
