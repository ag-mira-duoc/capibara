import React from 'react';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';

import '../estilos/Tienda/Productos.css';
import '../estilos/Tienda/index.css';

function Productos() {
    return (
        <div className="body-productos"> 
            <Header />

            <main>
                <h1>Página de Productos</h1>
                <p>Aquí se listarán todos los productos.</p>
            </main>
            
            <Footer />
        </div>
    );
}

export default Productos;