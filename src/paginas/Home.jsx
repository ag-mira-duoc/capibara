import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../componentes/Header'; 
import Footer from '../componentes/Footer'; 

import '../estilos/Tienda/index.css';
import '../estilos/Tienda/Home.css';

function Home() {
    
    // 1. INICIALIZA EL HOOK useNavigate
    const navigate = useNavigate();

    // 2. ACTUALIZA LA FUNCIÓN: Usamos 'navigate' en lugar de console.log o window.location
    const handleNavigation = (path) => {
        // Esto le dice a React Router que cambie la ruta sin recargar
        navigate(path);
    };

    return (
        // 3. Eliminamos <head>, <body> y el código de importación de HTML/JS
        <div className="body-home"> 
            
            {/* Reemplaza <div id="header"></div> */}
            <Header />

            <div className="container-home-btn">
                <h1>Bienvenido a la Página Principal
                    <button 
                        className="btn1-home" 
                        onClick={() => handleNavigation('/RegistroUsuario')}
                    >
                        Registro Usuario
                    </button>
                    <button 
                        className="btn2-home" 
                        onClick={() => handleNavigation('/InicioSesion')}
                    >
                        Iniciar Sesión
                    </button>
                </h1>
            </div>

            <main className="main-body">
                {/* 4. Cambiamos 'class' por 'className' y ajustamos paths de imagen */}
                <div className="card-home">
                    <img src="/Agregados/img/9d580bf9-472e-44ce-816c-8fc07c62707f.87587bfc22905c8b07036d3e4e8298b7.avif" alt="Producto 1" />
                    <div className="card-content">
                        <h3>Producto 1</h3>
                        <p>Descripción breve del producto número 1.</p>
                        <div className="price">$12.990</div>
                        <button onClick={() => console.log('Producto 1 añadido al carrito')}>Comprar</button>
                    </div>
                </div>

                {/* Repetir para los otros productos... */}
                
            </main>
            
            <Footer />
        </div>
    );
}

export default Home;