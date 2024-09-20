import React from 'react';
import './FAQ.css';

export default function FAQ() {
  const faqs = [
    {
      question: '¿Cómo puedo registrarme en la plataforma?',
      answer: 'Puedes registrarte haciendo clic en el botón "Sign up" en la esquina superior derecha y completando el formulario de registro.',
    },
    {
      question: '¿Puedo cambiar mi contraseña?',
      answer: 'Sí, puedes cambiar tu contraseña desde tu perfil en la sección de ajustes.',
    },
    {
      question: '¿Cómo contacto con soporte?',
      answer: 'Puedes contactar con soporte enviando un mensaje a nuestro correo electrónico o a través del formulario en la página de contacto.',
    },
    {
      question: '¿Hay una versión móvil de la aplicación?',
      answer: 'Sí, nuestra plataforma está completamente optimizada para dispositivos móviles.',
    },
  ];

  return (
    <div className="faq-page">
      <h1 className="faq-title">Preguntas Frecuentes</h1>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h2 className="faq-question">{faq.question}</h2>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

