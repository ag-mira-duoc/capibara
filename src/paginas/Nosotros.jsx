
import React from 'react';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer'; 

import '../estilos/Tienda/Nosotros.css';
import '../estilos/Tienda/index.css';

function Nosotros() {
    return (
        <>
            <Header />
            <main>
                <h1>Página de Nosotros</h1>
                Informacion de nosotros
            </main>
            <Footer />
        </>
    );
}
export default Nosotros;