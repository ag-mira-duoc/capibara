import React from 'react';
import Header from '../componentes/AdminMenu.jsx';

import AdminMenu from '../componentes/AdminMenu.jsx';

import '../estilos/Administrador/AdminHome.css'; 

function AdminHome() {
    return (
        <div className="AH-admin-dashboard-layout"> 
            <AdminMenu />
            <main className="AH-mainHome">
            <div className="AH-app">
                <h1>Bienvenido al home</h1> 
            </div>
            </main>
        </div>
    );
}

export default AdminHome;