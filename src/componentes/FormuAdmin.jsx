import React, { useState } from 'react';

const FormuAdmin = ({ user }) => {
    
    // Inicialización del Estado.
    const [formData, setFormData] = useState({
        nombre: user.nombre || '', 
        correo: user.correo || '',
        telefono: user.telefono || '',
        password: '', 
    });

    // Función para los Cambios.
    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Función para Manejar el Envío del Formulario.
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita la recarga de la página
        
        // Creamos un objeto para enviar, excluyendo la contraseña si no se tocó
        const datosAEnviar = { ...formData };
        if (datosAEnviar.password === '') {
            delete datosAEnviar.password;
        }

        // Aquí iría la llamada a la API.
        
        console.log('Enviando datos del Administrador para actualización:', datosAEnviar);
        
        
        alert('¡Perfil de Administrador actualizado exitosamente!');

        // Limpiar el campo de contraseña después del envío exitoso
        setFormData(prevData => ({ ...prevData, password: '' }));
    };

    return (
        <form className="admin-form" onSubmit={handleSubmit}>
            <h2>Datos del Administrador</h2>
            <p>Aquí puedes actualizar tus datos personales y credenciales.</p>
            
            {/* Campo Nombre */}
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
                value={formData.correo} 
                onChange={handleChange}
                placeholder="ejemplo@dominio.com"
                required
            />
            
            {/* Campo Teléfono */}
            <label htmlFor="telefono">Teléfono:</label>
            <input 
                type="text" 
                id="telefono"
                name="telefono"
                value={formData.telefono} 
                onChange={handleChange}
                placeholder="310..."
            />
            
            {/* Campo Contraseña */}
            <label htmlFor="password">Nueva Contraseña:</label>
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

export default FormuAdmin;