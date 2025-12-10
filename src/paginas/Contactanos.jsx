import React, { useState } from 'react'; // useState para manejar los datos del formulario.
import '../css/contactanos.css';

const Contactanos = () => {
    // useState para almacenar los datos que el usuario ingresa.
    const [formData, setFormData] = useState({
        correo: '',
        telefono: '',
        mensaje: ''
    });

    // Función para manejar los cambios en los campos de entrada.
    const handleChange = (e) => {
        setFormData({
            ...formData, // Mantiene los otros campos sin cambios.
            [e.target.name]: e.target.value // Actualiza solo el campo que cambió.
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que la página se recargue.

        console.log("Datos enviados:", formData);
        
        // Aquí iría la lógica para enviar los datos a un servidor.
        alert(`Mensaje enviado por ${formData.correo}. ¡Gracias!`);

        setFormData({ correo: '', telefono: '', mensaje: '' });
    };

    return (
        <div className="contacto-container">
            <h1 className="contacto-title">Contáctanos</h1>
            
            <form onSubmit={handleSubmit} className="contacto-form">
                
                {/* Campo Correo */}
                <div className="form-group">
                    <label htmlFor="correo">Correo:</label>
                    <input
                        type="email"
                        id="correo"
                        name="correo" // Debe coincidir con la clave en formData.
                        value={formData.correo}
                        onChange={handleChange}
                        required
                        placeholder="tu.correo@gmail.com"
                    />
                </div>

                {/* Campo Teléfono */}
                <div className="form-group">
                    <label htmlFor="telefono">Teléfono:</label>
                    <input
                        type="tel"
                        id="telefono"
                        name="telefono" 
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                        placeholder="+57 3XX XXX XXXX"
                    />
                </div>

                {/* Campo Mensaje */}
                <div className="form-group">
                    <label htmlFor="mensaje">Mensaje:</label>
                    <textarea
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                        rows="5"
                        placeholder="Escribe aquí tu consulta o comentario..."
                    ></textarea>
                </div>
                
                {/* Botón de Enviar */}
                <button type="submit" className="submit-button">
                    Enviar Mensaje
                </button>
                
            </form>
        </div>
    );
};

export default Contactanos;