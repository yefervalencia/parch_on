import React from 'react';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="about-page-container">
      {/* Primera Sección: Sobre Nosotros */}
      <section className="about-section">
        <h1>Sobre Nosotros</h1>
        <div className="about-content">
          <div className="about-image" /> 
          <div className="about-text">
            <p>
              Parch On es una plataforma dedicada a conectar a los habitantes y visitantes de la ciudad con los mejores lugares
              y eventos urbanos. Nuestro objetivo es facilitar el acceso a actividades interesantes, desde conciertos y exposiciones
              hasta eventos deportivos, culturales y recreativos, para que todos puedan disfrutar de lo mejor de la ciudad.
            </p>
          </div>
        </div>
      </section>

      {/* Segunda Sección: Nuestro Equipo */}
      <section className="team-section">
        <h2>Conoce a Nuestro Equipo</h2>
        <div className="team-members">
          <div className="team-member">
            <div className="team-member-image" /> 
            <h3>Fabian Hernandez Castaño</h3>
            <p>Ingeniero en Sistemas</p>
          </div>
          <div className="team-member">
            <div className="team-member-image" />
            <h3>Yeferson Aristizabal Valencia</h3>
            <p>Ingeniero en Sistemas</p>
          </div>
          <div className="team-member">
            <div className="team-member-image" />
            <p>Ingeniero en Sistemas</p>
          </div>
        </div>
      </section>
    </div>
  );
}
