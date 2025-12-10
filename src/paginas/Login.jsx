import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; 
import '../css/login.css';

const Login = () => {
    const navigate = useNavigate();
    // Función login.
    const { login } = useAuth(); 

    const [formData, setFormData] = useState({
        correo: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData, // Mantiene los otros campos.
            [e.target.name]: e.target.value // Actualiza solo el campo cuyo 'name' coincide.
        });
    };

   
    const handleSubmit = (e) => {
        e.preventDefault();
        
        let usuarios = null;

       
        if (formData.correo === 'luis@gmail.com' && formData.password === '12345') {
            // Rol usuario.
            usuarios = { nombre: 'Luis', correo: formData.correo, rol: 'usuario', telefono: '5551234' };


        } else if (formData.correo === 'carlos@gmail.com' && formData.password === '12345') {
            // Rol Técnico.
            usuarios = { nombre: 'Carlos', correo: formData.correo, rol: 'tecnico', especialidad: 'Electricidad' };


        } else if (formData.correo === 'julio@gmail.com' && formData.password === '12345') {
            // Rol Administrador.
            usuarios = { nombre: 'Julio', correo: formData.correo, rol: 'administrador' };
        }
        
        // --------------------------------------------------

        if (usuarios) {
            
            login(usuarios);
            alert(`¡Inicio de sesión exitoso como ${usuarios.rol.toUpperCase()}!`);
            navigate('/profile');
        } else {
            
            alert('Credenciales incorrectas. Intenta las de usuario@app.net, tecnico@app.net o admin@app.net (todas con 1234).');
        }
    };
    // ------------------------------------------------------------------

    return ( 
        <div className="login-container"> 
            <div className="login-form-box"> 
                <h1 className="login-title">Iniciar Sesión</h1> 
                <form onSubmit={handleSubmit}> 
                    
                    {/* Campo Correo */} 
                    <div className="form-group"> 
                        <label htmlFor="correo">Correo:</label> 
                        <input type="email" id="correo" name="correo" value={formData.correo} onChange={handleChange} required />
                    </div> 

                    {/* Campo Contraseña */} 
                    <div className="form-group"> 
                        <label htmlFor="password">Contraseña:</label> 
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                    </div> 

                    <button type="submit" className="login-button"> Entrar </button> 
                </form> 
                
                {/* Página de Registro */} 
                <p className="register-link-text"> 
                    ¿No tienes cuenta? <Link to="/register" className="register-link">¡Regístrate!</Link> 
                </p> 
            </div> 
        </div> 
    );
};

export default Login;