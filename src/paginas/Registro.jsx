import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para redirigir al Login después del registro
import '../css/registro.css'; // Debes crear este archivo CSS

const Registro = () => {
    const navigate = useNavigate(); // Hook para navegar programáticamente
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        telefono: '',
        password: '',
        rol: 'Usuario' // Valor inicial
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos de Registro:", formData);
        
        alert(`¡Registro exitoso para ${formData.nombre}! Ahora serás redirigido al Login.`);
        
        // Simulación de registro exitoso, redirigimos al Login
        navigate('/login'); 
    };

    return (
        <div className="register-container">
            <div className="register-form-box">
                <h1 className="register-title">Crear Cuenta</h1>
                
                <form onSubmit={handleSubmit}>
                    
                    {/* Campo Nombre */}
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
                    </div>

                    {/* Campo Correo */}
                    <div className="form-group">
                        <label htmlFor="correo">Correo:</label>
                        <input type="email" id="correo" name="correo" value={formData.correo} onChange={handleChange} required />
                    </div>

                    {/* Campo Teléfono */}
                    <div className="form-group">
                        <label htmlFor="telefono">Teléfono:</label>
                        <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} required />
                    </div>

                    {/* Campo Contraseña */}
                    <div className="form-group">
                        <label htmlFor="password">Contraseña:</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                    </div>
                    
                    {/* Campo Rol (Lista de opción) */}
                    <div className="form-group">
                        <label htmlFor="rol">Rol:</label>
                        <select id="rol" name="rol" value={formData.rol} onChange={handleChange} required>
                            <option value="Usuario">Usuario (Busco servicios)</option>
                            <option value="Tecnico">Técnico (Ofrezco servicios)</option>
                            <option value="Administrador">Administrador</option>
                        </select>
                    </div>

                    <button type="submit" className="register-button">
                        Registrarse
                    </button>
                    
                </form>
            </div>
        </div>
    );
};

export default Registro;