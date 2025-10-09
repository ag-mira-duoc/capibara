import React from 'react';
import Header from '../componentes/AdminMenu.jsx';

import AdminMenu from '../componentes/AdminMenu.jsx';

import '../estilos/Administrador/AdminHome.css'; 

function AdminHome() {
    return (
        <div className="admin-dashboard-layout"> 
            <AdminMenu />
            <main>
            <div className="app">
                <h1>Bienvenido al home</h1> 
            </div>
            </main>
        </div>
    );
}

export default AdminHome;