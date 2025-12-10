import React from 'react';
import { useAuth } from '../AuthContext'; 
import FormuUsuario from '../componentes/FormuUsuario';
import FormuTecnico from '../componentes/FormuTecnico';
import FormuAdmin from '../componentes/FormuAdmin';
import '../css/perfil.css'

const Perfil = () => {
    // Obtener el estado de autenticación.
    const { user } = useAuth(); 


    if (!user || !user.rol) {
        return <div className="profile-error">Por favor, inicia sesión para ver tu perfil.</div>;
    }

    let PerfilComponente;

   
    if (user.rol === 'usuario') {
        PerfilComponente = <FormuUsuario user={user} />;
    } else if (user.rol === 'tecnico') {
        PerfilComponente = <FormuTecnico user={user} />;
    } else if (user.rol === 'administrador') {
        PerfilComponente = <FormuAdmin user={user} />;
    } else {
        // Rol desconocido o error.
        return <div className="profile-error">Error: Rol de usuario no reconocido.</div>;
    }

  
    return (
        <div className="profile-container">
            <h1 className="profile-title">Bienvenido, {user.nombre}</h1>
            <p className="profile-subtitle">Modifica tu Perfil ({user.rol.toUpperCase()})</p>
            
            <div className="profile-form-wrapper">
                {PerfilComponente}
            </div>
        </div>
    );
};

export default Perfil;