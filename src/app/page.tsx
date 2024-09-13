import React from 'react';

export default function HomePage() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      color: '#fff',
      backgroundImage: 'url("path-to-your-background-image.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      textAlign: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <header style={{ padding: '50px' }}>
        <h1 style={{ fontSize: '3.5rem', margin: 0 }}>¡Bienvenido a ParchOn!</h1>
        <p style={{ fontSize: '1.5rem', margin: '20px 0' }}>La mejor plataforma para conectar con la comunidad y compartir experiencias.</p>
        <button style={{
          backgroundColor: '#f06',
          color: 'white',
          padding: '15px 30px',
          border: 'none',
          fontSize: '1.2rem',
          cursor: 'pointer',
          borderRadius: '5px',
          transition: 'background-color 0.3s',
        }}>Comenzar Ahora</button>
      </header>

      <section style={{ padding: '50px', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
        <h2>Nuestras Características</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', gap: '20px' }}>
          <div style={{
            backgroundColor: '#fff',
            color: '#333',
            padding: '20px',
            borderRadius: '10px',
            maxWidth: '300px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}>
            <i className="fas fa-users" style={{ fontSize: '2rem', marginBottom: '10px' }}></i>
            <h3>Conecta con personas</h3>
            <p>Únete a una comunidad vibrante y activa.</p>
          </div>
          <div style={{
            backgroundColor: '#fff',
            color: '#333',
            padding: '20px',
            borderRadius: '10px',
            maxWidth: '300px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}>
            <i className="fas fa-calendar-alt" style={{ fontSize: '2rem', marginBottom: '10px' }}></i>
            <h3>Eventos en vivo</h3>
            <p>Participa en eventos y actividades en tiempo real.</p>
          </div>
          <div style={{
            backgroundColor: '#fff',
            color: '#333',
            padding: '20px',
            borderRadius: '10px',
            maxWidth: '300px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}>
            <i className="fas fa-comments" style={{ fontSize: '2rem', marginBottom: '10px' }}></i>
            <h3>Comparte tus ideas</h3>
            <p>Interactúa con otros miembros y comparte experiencias.</p>
          </div>
        </div>
      </section>

      <footer style={{ padding: '20px', backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
        <p>© 2024 ParchOn. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
