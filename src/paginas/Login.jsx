import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Importamos el hook
import { useAuth } from '../AuthContext'; 
import '../css/login.css';

const Login = () => {
    const navigate = useNavigate();
    // 1. Obtenemos la función login del contexto
    const { login } = useAuth(); 

    const [formData, setFormData] = useState({
        correo: '',
        password: ''
    });

    // ... (handleChange no cambia) ...

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // **SIMULACIÓN DE AUTENTICACIÓN**
        // En una app real, harías una llamada API aquí.
        if (formData.correo === 'test@tec.net' && formData.password === '1234') {
            
            // 2. Llamamos a la función de login del contexto
            login({ 
                nombre: 'Ares.', // Datos simulados para el Header/Perfil
                correo: formData.correo,
                rol: 'Usuario'
            }); 
            
            alert('¡Inicio de sesión exitoso!');
            navigate('/perfil'); // Redirige al perfil
        } else {
            alert('Credenciales incorrectas. Usa test@tec.net y 1234.');
        }
    };

    return (
        // ... (el formulario no cambia, solo la lógica de handleSubmit) ...
        // ... (código del formulario) ...
    )

    }

export default Login;