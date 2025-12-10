import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Importar useNavigate

const FormuTecnico = ({ user }) => {
    // 2. Inicializar useNavigate
    const navigate = useNavigate(); 
    
    // 1. Inicialización del Estado (useState)
    const [formData, setFormData] = useState({
        nombre: user.nombre || '', 
        correo: user.correo || '', 
        telefono: user.telefono || '', 
        especialidad: user.especialidad || '', 
        descripcion: user.descripcion || '', 
        password: '', 
    });

    // Función para Manejar los Cambios
    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Función para Manejar el Envío del Formulario (handleSubmit)
    const handleSubmit = (e) => {
        e.preventDefault(); 
        
        // *** Lógica de Guardado (Simulación en Frontend) ***
        const datosAEnviar = { ...formData };
        if (datosAEnviar.password === '') {
            delete datosAEnviar.password;
        }

        // NOTA: Aquí debería ir la lógica para actualizar el usuario en localStorage
        // y luego actualizar el estado global (AuthContext) con los nuevos datos.

        // --- Simulación de la llamada a la API ---
        
        // 1. Mostrar mensaje de éxito
        alert('¡Perfil de Técnico actualizado exitosamente!');

        // 2. REDIRECCIÓN A LA PÁGINA DE PERFIL
        // Redirige al usuario de vuelta a /profile
        // { replace: true } se usa para que la página actual no quede en el historial
        navigate('/profile', { replace: true }); 
        
        // Limpiar el campo de contraseña después del envío
        setFormData(prevData => ({ ...prevData, password: '' }));
    };

    return (
        <form className="tecnico-form" onSubmit={handleSubmit}>
            {/* ... JSX del formulario ... */}
            {/* Si quieres que se redirija a otro lugar, solo cambia la ruta en navigate() */}
            
            <button type="submit">Guardar Cambios</button>
        </form>
    );
};

export default FormuTecnico;