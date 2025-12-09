import React, { useState } from 'react'; // Usaremos useState para manejar los datos del formulario
import '../css/contactanos.css';

const Contactanos = () => {
    // 1. Usamos el Hook 'useState' para almacenar los datos que el usuario ingresa.
    // Esto es fundamental en React para hacer formularios "controlados".
    const [formData, setFormData] = useState({
        correo: '',
        telefono: '',
        mensaje: ''
    });

    // 2. Función para manejar los cambios en los campos de entrada
    const handleChange = (e) => {
        // e.target.name es el atributo 'name' del input (ej: "correo")
        // e.target.value es el valor ingresado por el usuario
        setFormData({
            ...formData, // Mantiene los otros campos sin cambios
            [e.target.name]: e.target.value // Actualiza solo el campo que cambió
        });
    };

    // 3. Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que la página se recargue (comportamiento por defecto del navegador)

        // Por ahora, solo mostraremos los datos en la consola
        console.log("Datos enviados:", formData);
        
        // Aquí iría la lógica real para enviar los datos a un servidor
        alert(`Mensaje enviado por ${formData.correo}. ¡Gracias!`);

        // Opcional: limpiar el formulario después de enviar
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
                        name="correo" // Importante: debe coincidir con la clave en formData
                        value={formData.correo}
                        onChange={handleChange} // Llama a la función al escribir
                        required
                        placeholder="tu.correo@ejemplo.com"
                    />
                </div>

                {/* Campo Teléfono */}
                <div className="form-group">
                    <label htmlFor="telefono">Teléfono:</label>
                    <input
                        type="tel"
                        id="telefono"
                        name="telefono" // Importante: debe coincidir con la clave en formData
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