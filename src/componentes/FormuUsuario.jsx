import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormuUsuario = ({ user }) => {
    
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
       
        nombre: user.nombre || '', 
        correo: user.correo || '',
        telefono: user.telefono || '',
        password: '', 
    });

    // Función para Manejar los Cambios.
    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Función para Manejar el Envío del Formulario.
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita la recarga de la página.
        
        // Objeto para enviar.
        const datosAActualizar = { ...formData };
        if (datosAActualizar.password === '') {
            delete datosAActualizar.password;
        }
        
        alert('¡Cambios guardados exitosamente!');

        setFormData(prevData => ({ ...prevData, password: '' }));

        // Redirige al perfil para confirmar la actualización.
        navigate('/profile', { replace: true });
    };

    return (
        <form className="usuario-form" onSubmit={handleSubmit}>
            <h2>Datos del Usuario</h2>
            <p>Aquí puedes actualizar tus datos personales.</p>
            
            {/* Campo Nombre (General y Deshabilitado) */}
            <label htmlFor="nombre">Nombre:</label>
            <input 
                type="text" 
                id="nombre"
                name="nombre"
                value={formData.nombre} 
                disabled 
            />

            {/* Campo Correo */}
            <label htmlFor="correo">Correo:</label>
            <input 
                type="email" 
                id="correo"
                name="correo"
                placeholder="ejemplo@gmail.com" 
                value={formData.correo}
                onChange={handleChange}
                required
            />
            
            {/* Campo Teléfono */}
            <label htmlFor="telefono">Teléfono:</label>
            <input 
                type="text" 
                id="telefono"
                name="telefono"
                placeholder="310..."
                value={formData.telefono}
                onChange={handleChange}
            />

            {/* Campo Contraseña */}
            <label htmlFor="password">Contraseña:</label>
            <input 
                type="password"
                id="password"
                name="password"
                placeholder="Deja vacío si no quieres cambiarla"
                value={formData.password}
                onChange={handleChange}
            />
            
            <button type="submit">Guardar Cambios</button>
        </form>
    );
};

export default FormuUsuario;