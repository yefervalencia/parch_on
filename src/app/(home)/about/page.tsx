import React from 'react';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="about-page-container">
      {/* Primera Sección */}
      <section className="about-section">
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
      </section>

      {/* Segunda Sección: Nuestro Equipo */}
      <section className="team-section">
        <h2>Conoce a Nuestro Equipo</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="https://via.placeholder.com/100" alt="Miembro del equipo" />
            <h3>Juan Pérez</h3>
            <p>CEO & Fundador</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/100" alt="Miembro del equipo" />
            <h3>Ana García</h3>
            <p>CTO</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/100" alt="Miembro del equipo" />
            <h3>Carlos López</h3>
            <p>Gerente de Marketing</p>
          </div>
        </div>
      </section>
    </div>
  );
}
