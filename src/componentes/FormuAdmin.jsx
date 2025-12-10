import React, { useState } from 'react';

const FormuAdmin = ({ user }) => {
    
    // 1. Inicialización del Estado (useState)
    const [formData, setFormData] = useState({
        nombre: user.nombre || '', 
        correo: user.correo || '',
        telefono: user.telefono || '',
        password: '', // Campo para la nueva contraseña
    });

    // 2. Función para Manejar los Cambios (handleChange)
    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // 3. Función para Manejar el Envío del Formulario (handleSubmit)
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita la recarga de la página
        
        // Creamos un objeto para enviar, excluyendo la contraseña si no se tocó
        const datosAEnviar = { ...formData };
        if (datosAEnviar.password === '') {
            delete datosAEnviar.password;
        }

        // Aquí iría la llamada a la API (fetch o Axios) para actualizar el perfil del administrador
        
        console.log('Enviando datos del Administrador para actualización:', datosAEnviar);
        
        // --- Simulación de la llamada a la API ---
        alert('¡Perfil de Administrador actualizado exitosamente!');

        // Limpiar el campo de contraseña después del envío exitoso
        setFormData(prevData => ({ ...prevData, password: '' }));
    };

    return (
        <form className="admin-form" onSubmit={handleSubmit}>
            <h2>Datos del Administrador</h2>
            <p>Aquí puedes actualizar tus datos personales y credenciales.</p>
            
            {/* Campo Nombre (Solo Lectura) */}
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
                type="text" // 'text' es más flexible para números de teléfono
                id="telefono"
                name="telefono"
                value={formData.telefono} 
                onChange={handleChange}
                placeholder="310..."
            />
            
            {/* Campo Contraseña (solo se llena para cambiarla) */}
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