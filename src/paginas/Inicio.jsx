import React from 'react';
import ServicioCard from '../componentes/ServicioCard';
import '../css/inicio.css';

// 1. Importamos las imágenes desde la carpeta 'images'. 
//    En proyectos Vite/React, se importan como módulos.
import Fontaneria from '../img/fontaneria.jpg';
import Electricidad from '../img/electricidad.jpg';
import Jardineria from '../img/jardinería.jpg';
import Limpieza from '../img/limpieza.jpg';


const Inicio = () => {
    // 2. Creamos un arreglo de datos para los servicios (esto facilita el manejo)
    const servicios = [
        { title: 'Fontanería', path: '/tecnicos/fontaneria', image: Fontaneria },
        { title: 'Electricidad', path: '/tecnicos/electricidad', image: Electricidad },
        { title: 'Jardinería', path: '/tecnicos/jardineria', image: Jardineria },
        { title: 'Limpieza', path: '/tecnicos/limpieza', image: Limpieza },
    ];
    
    return (
        <div className="home-container">
            {/* Título Principal */}
            <h1 className="home-title">Nuestros Servicios</h1>
            
            {/* Contenedor de las Tarjetas de Servicios */}
            <div className="servicios-grid">
                {/* 3. Usamos la función 'map' para iterar sobre nuestro arreglo de servicios.
                    Esto es una técnica clave en React para renderizar listas dinámicas.
                    La propiedad 'key' es obligatoria para ayudar a React a rastrear los elementos.
                */}
                {servicios.map((servicio) => (
                    <ServicioCard 
                        key={servicio.title} // Usamos el título como key único
                        title={servicio.title}
                        imagePath={servicio.image} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Inicio;