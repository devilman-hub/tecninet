import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUser } from 'react-icons/fa';
// Importamos nuestro hook de autenticación
import { useAuth } from '../AuthContext'; 

import '../css/header.css'; 

const Header = () => {
    // 1. Obtenemos el estado de autenticación
    const { isLogged, user } = useAuth();

    // 2. Definimos la ruta y el texto del enlace de usuario
    // Si está logueado, va a /profile y muestra el nombre
    // Si NO está logueado, va a /login y muestra 'Usuario'
    const userLinkTo = isLogged ? '/profile' : '/login';
    const userLinkText = isLogged ? (user ? user.nombre : 'Perfil') : 'Usuario';

    return (
        <header className="header">
            
            {/* ... Logo y Nav (sin cambios) ... */}
            <div className="logo">
                <Link to="/">TECNINET</Link>
            </div>

            <nav className="nav">
                <Link to="/">Inicio</Link>
                <Link to="/tecnicos">Técnicos</Link>
                <Link to="/contactanos">Contáctanos</Link>
                <Link to="/nosotros">Nosotros</Link>
            </nav>

            {/* 3. Iconos de Acción (Cambiamos el enlace condicionalmente) */}
            <div className="icons">
                <span className="icon"><FaSearch size={20} /></span> 
                
                <Link to={userLinkTo} className="icon-link" title={userLinkText}>
                    <FaUser size={20} />
                    {/* Opcional: mostrar el nombre del usuario junto al icono */}
                    {isLogged && <span className="user-name">{user.nombre.split(' ')[0]}</span>} 
                </Link>
            </div>
        </header>
    );
};

export default Header;

// Nota: Tendrías que añadir estilos para .user-name en Header.css si usas esa línea.