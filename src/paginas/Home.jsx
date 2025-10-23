import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../componentes/Header'; 
import Footer from '../componentes/Footer'; 
import CarruselHome from '../componentes/Carrusel'; 

import '../estilos/Tienda/index.css';
import '../estilos/Tienda/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                <CarruselHome />
                
            </main>
            
            <Footer />
        </div>
    );
}

export default Home;