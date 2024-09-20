import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-section">
        <h2 className="contact-title">Contáctanos</h2>
        <p className="subtitle">
          Estamos aquí para ayudarte, envíanos un mensaje.
        </p>

        <form className="contact-form">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit" className="send-button">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
