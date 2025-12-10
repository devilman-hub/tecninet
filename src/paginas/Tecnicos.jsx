import React from 'react';
import TecnicoCard from '../componentes/TecnicoCard';
import Carlos from '../img/carlos.jpg';
import Manuel from '../img/manuel.jpg';
import Luis from '../img/luis.jpg';
import Julián from '../img/julián.jpg';
import '../css/tecnicocard.css';
import '../css/tecnicos.css';

const Tecnicos = () => {
    
    const tecnicosData = [
        {
            id: 1,
            name: "Carlos Ortiz.",
            specialty: "Fontanería",
            description: "Soy un técnico de fontanería certificado con 10 años de experiencia. Especializado en detección de fugas y reparación de tuberías complejas. ¡Soluciones rápidas garantizadas!",
            contact: "+57 123 4567890",
            location: "Bogotá, Tunjuelito.",
            image: Carlos,
        },
        {
            id: 2,
            name: "Manuel Pasquillita.",
            specialty: "Electricidad",
            description: "Experto en instalaciones eléctricas residenciales y comerciales. Soluciono cortocircuitos, actualizo paneles y monto todo tipo de iluminación LED.",
            contact: "+57 300 9876543",
            location: "Bogotá, Chapinero.",
            image: Manuel,
        },
        {
            id: 3,
            name: "Luis Ovelo.",
            specialty: "Jardinería",
            description: "Apasionado por el paisajismo y el mantenimiento de zonas verdes. Ofrezco servicios de poda, siembra y diseño de jardines sostenibles.",
            contact: "+57 315 1112233",
            location: "Bogotá, Usme.",
            image: Luis,
        },
        {
            id: 4,
            name: "Julián Torrado.",
            specialty: "Limpieza",
            description: "Servicios de limpieza profunda para hogares y oficinas. Utilizamos productos ecológicos y garantizamos un ambiente impecable y seguro.",
            contact: "+57 320 4445566",
            location: "Bogotá, La Candelaria.",
            image: Julián,
        },
    ];

    return (
        <div className="tecnicos-container">
            <h1 className="tecnicos-title">Nuestros Técnicos Certificados</h1>

            
            <div className="tecnicos-list">
                {tecnicosData.map((tecnico) => (
                    <TecnicoCard 
                        key={tecnico.id}
                        name={tecnico.name}
                        specialty={tecnico.specialty}
                        description={tecnico.description}
                        contact={tecnico.contact}
                        location={tecnico.location}
                        imagePath={tecnico.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Tecnicos;