import React from 'react';
import './TestimoniesPage.css';

type Testimony = {
  user: string;
  feedback: string;
  location: string;
};

const testimoniesData: Testimony[] = [
  {
    user: "Carlos López",
    feedback: "La aplicación es excelente. Me ha permitido explorar lugares maravillosos que ni siquiera sabía que existían en mi ciudad. La interfaz es fácil de usar y la información es precisa.",
    location: "Parque Nacional Natural Los Nevados"
  },
  {
    user: "Ana Gómez",
    feedback: "Gracias a esta app, he descubierto rincones increíbles para visitar con mi familia. Es como tener un guía turístico personal en el teléfono.",
    location: "Museo de Arte Moderno"
  },
  {
    user: "Jorge Martínez",
    feedback: "Esta aplicación cambió mi forma de viajar. Ahora puedo encontrar los mejores sitios sin perderme y planificar mis rutas con anticipación. ¡Altamente recomendada!",
    location: "Catedral de Manizales"
  }
];

export default function TestimoniesPage(): JSX.Element {
  return (
    <div className="testimonies">
      <div className="testimonies-header">
        <h2>Testimonios de nuestros usuarios</h2>
        <p>Conoce lo que dicen sobre la app y los lugares que han visitado</p>
      </div>
      <div className="testimonies-container">
        {testimoniesData.map((testimony, index) => (
          <div key={index} className="testimony-card">
            <p className="user">"{testimony.user}"</p>
            <p className="feedback">“{testimony.feedback}”</p>
            <p className="location">Lugares Visitados: {testimony.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
