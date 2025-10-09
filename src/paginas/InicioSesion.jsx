import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { validateLogin } from '../utiles/validaciones.js';
import '../estilos/Tienda/InicioSesion.css'; 

function InicioSesion() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
        if (errors[name]) setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
        setMessage(''); // Clear message on input change
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // 1. Validate form fields
        const { errors: validationErrors, isValid } = validateLogin(formData);

        if (!isValid) {
            setErrors(validationErrors);
            return;
        }

        // 2. Fetch users from localStorage (simulating DB check)
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        
        // 3. Find user (case-insensitive email check from original JS)
        const user = users.find(u => 
            u.email.toLowerCase() === formData.email.toLowerCase() && u.password === formData.password
        );

        // 4. Handle result and Redirection
        if (user) {
            // Success
            setMessage(`<p class="success">✅ Inicio de sesión exitoso. Bienvenido, ${user.fullname}.</p>`);
            // Store successful login info (e.g., in a Context or more securely)
            
            // Original logic redirects to HomeTienda.html
            setTimeout(() => {
                // In a real React app, you would change the application state to "logged in"
                // For this conversion, we simulate navigation to the next page route.
                navigate('/AdminHome'); // Assuming you create a route for /HomeTienda
            }, 1000); 

        } else {
            // Failure
            setMessage('<p class="error">❌ Correo o contraseña incorrectos.</p>');
        }
    };

    return (
        <div className="card">
            <div className="Logo">
                <img className="PaginaLogo" src="/Agregados/img/2111125.png" alt="Logo" />
            </div>
            <h2>Iniciar Sesión</h2>
            <form id="loginForm" onSubmit={handleSubmit} noValidate>
                
                <div className="field">
                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" id="email" name="email" required placeholder="tu@correo.com"
                           value={formData.email} onChange={handleChange} />
                    {/* Optional: Add error display here */}
                    {errors.email && <div className="error">{errors.email}</div>}
                </div>
                
                <div className="field">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" name="password" required placeholder="Ingresa tu contraseña"
                           value={formData.password} onChange={handleChange} />
                    {errors.password && <div className="error">{errors.password}</div>}
                </div>
                
                <button type="submit">Entrar</button>
                {/* Display dynamic message */}
                <div id="message" dangerouslySetInnerHTML={{ __html: message }}></div>
            </form>
        </div>
    );
}

export default InicioSesion;