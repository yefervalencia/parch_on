"use client";

import { useTranslation } from "react-i18next";
import { Heading, Paragraph, TestimonyCard } from "@/components";
import "./Testimonial.css";

const testimoniesData = [
  {
    user: "Carlos López",
    feedback:
      "La aplicación es excelente. Me ha permitido explorar lugares maravillosos que ni siquiera sabía que existían en mi ciudad. La interfaz es fácil de usar y la información es precisa.",
    location: "Parque Nacional Natural Los Nevados",
  },
  {
    user: "Ana Gómez",
    feedback:
      "Gracias a esta app, he descubierto rincones increíbles para visitar con mi familia. Es como tener un guía turístico personal en el teléfono.",
    location: "Museo de Arte Moderno",
  },
  {
    user: "Jorge Martínez",
    feedback:
      "Esta aplicación cambió mi forma de viajar. Ahora puedo encontrar los mejores sitios sin perderme y planificar mis rutas con anticipación. ¡Altamente recomendada!",
    location: "Catedral de Manizales",
  },
];

export const Testimonial = () => {
  const { t } = useTranslation();
  return (
    <div className="testimonies">
      <div className="testimonies-header">
        <Heading level={2} className="header-title">
          {t("testimonialsFromOurUsers")}
        </Heading>
        <Paragraph className="header-subtitle">
          {t("findOutWhatTheySayAbout")}
        </Paragraph>
      </div>
      <div className="testimonies-container">
        {testimoniesData.map((testimony, index) => (
          <TestimonyCard
            key={index}
            user={testimony.user}
            feedback={testimony.feedback}
            location={testimony.location}
          />
        ))}
      </div>
    </div>
  );
};
