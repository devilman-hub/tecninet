import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUser } from 'react-icons/fa';
import { useAuth } from '../AuthContext'; //Hook de autenticación.
import Logo from '../img/logo.png';

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
            
            {/* Logo y Nav. */}
           <div className="logo">
                <Link to="/">
                    <img src={Logo} alt="Logo" className="header-logo-img"/>
                    <span className="logo-text">TECNINET</span>
                </Link>
            </div>

            <nav className="nav">
                <Link to="/">Inicio</Link>
                <Link to="/tecnicos">Técnicos</Link>
                <Link to="/contactanos">Contáctanos</Link>
                <Link to="/nosotros">Nosotros</Link>
            </nav>

            {/* Iconos de la biblioteca de React. */}
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