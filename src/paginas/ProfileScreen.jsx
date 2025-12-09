import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle, FaSave, FaSignOutAlt, FaTimes } from 'react-icons/fa';
import '../css/perfil.css';

// Datos simulados de un usuario logeado
const initialProfileData = {
    nombre: "Julio Jaramillo",
    correo: "julio.j@ejemplo.com",
    telefono: "+57 310 123 4567",
    rol: "Usuario",
    ubicacion: "Bogotá, Colombia",
};

const ProfileScreen = () => {
    const navigate = useNavigate();
    const [profile, setProfile] = useState(initialProfileData);
    const [isEditing, setIsEditing] = useState(false); // Estado para saber si estamos editando
    
    // Almacena los datos temporalmente si se cancela la edición
    const [tempProfile, setTempProfile] = useState(initialProfileData); 

    const handleLogout = () => {
        // En una app real, aquí se limpiaría el token de sesión.
        alert("¡Sesión cerrada con éxito!");
        navigate('/login'); // Redirige al login
    };

    const handleSave = (e) => {
        e.preventDefault();
        setProfile(tempProfile); // Guarda los cambios permanentes
        setIsEditing(false); // Sale del modo edición
        alert("¡Perfil actualizado!");
    };

    const handleCancel = () => {
        setTempProfile(profile); // Restaura los datos originales
        setIsEditing(false); // Sale del modo edición
    };

    const handleChange = (e) => {
        // Actualiza solo los datos temporales
        setTempProfile({
            ...tempProfile,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="profile-container">
            <div className="profile-card">
                <FaUserCircle size={80} className="profile-icon" />
                <h1 className="profile-name">{profile.nombre}</h1>
                <p className="profile-role">Rol: **{profile.rol}**</p>
                
                <form onSubmit={handleSave}>
                    
                    {/* Campos de Perfil */}
                    <div className="profile-details">
                        {['nombre', 'correo', 'telefono', 'ubicacion'].map((field) => (
                            <div className="profile-group" key={field}>
                                <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
                                <input
                                    type={field === 'correo' ? 'email' : 'text'}
                                    id={field}
                                    name={field}
                                    value={isEditing ? tempProfile[field] : profile[field]}
                                    onChange={handleChange}
                                    readOnly={!isEditing} // El campo es de solo lectura si no estamos editando
                                    className={isEditing ? 'editable' : 'read-only'}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Botones de Acción */}
                    <div className="profile-actions">
                        
                        {isEditing ? (
                            <>
                                <button type="submit" className="action-button save-button">
                                    <FaSave /> Guardar Cambios
                                </button>
                                <button type="button" onClick={handleCancel} className="action-button cancel-button">
                                    <FaTimes /> Cancelar
                                </button>
                            </>
                        ) : (
                            <button type="button" onClick={() => setIsEditing(true)} className="action-button edit-button">
                                <FaUserCircle /> Editar Perfil
                            </button>
                        )}

                        <button type="button" onClick={handleLogout} className="action-button logout-button">
                            <FaSignOutAlt /> Cerrar Sesión
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileScreen;