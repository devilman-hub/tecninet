import React from 'react';
import ServicioCard from '../componentes/ServicioCard';
import Fontaneria from '../img/fontaneria.jpg';
import Electricidad from '../img/electricidad.jpg';
import Jardineria from '../img/jardinería.jpg';
import Limpieza from '../img/limpieza.jpg';
import '../css/inicio.css';



const Inicio = () => {

    // Arreglo de datos para los servicios.
    
    const servicios = [
        { title: 'Fontanería', path: '/tecnicos/fontaneria', image: Fontaneria },
        { title: 'Electricidad', path: '/tecnicos/electricidad', image: Electricidad },
        { title: 'Jardinería', path: '/tecnicos/jardineria', image: Jardineria },
        { title: 'Limpieza', path: '/tecnicos/limpieza', image: Limpieza },
    ];
    
    return (

        <div className="home-container">
           
            <h1 className="home-title">Nuestros Servicios</h1>
            
            {/* Contenedor de las Tarjetas de Servicios */}
            <div className="servicios-grid"> 
                    
                {servicios.map((servicio) => ( // Map para iterar servicios.
                    <ServicioCard 
                        key={servicio.title} // Rastrear los elementos.
                        title={servicio.title}
                        imagePath={servicio.image} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Inicio;