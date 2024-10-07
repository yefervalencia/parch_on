import React from 'react';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="about-page-container">
      <h1>Sobre Nosotros</h1>
      <div className="about-content">
        <img 
          src="https://via.placeholder.com/150" 
          alt="Nuestra imagen" 
          className="about-image" 
        />
        <div className="about-text">
          <p>
            Somos una empresa comprometida con ofrecer los mejores servicios
            para mejorar la movilidad urbana. Nuestro equipo está formado por
            expertos apasionados por la tecnología y el transporte.
          </p>
          <p>
            Desde nuestro inicio, hemos trabajado para facilitar la vida de 
            las personas mediante soluciones innovadoras.
          </p>
        </div>
      </div>
    </div>
  );
}
