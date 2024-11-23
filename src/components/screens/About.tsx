"use client";

import { useTranslation } from "react-i18next";
import "./About.css";

export const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-page-container">
      {/* Primera Sección: Sobre Nosotros */}
      <section className="about-section">
        <h1>{t("aboutUs")}</h1>
        <div className="about-content">
          <div className="about-image" />
          <div className="about-text">
            <p>{t("parchonIsAPlatform")}</p>
          </div>
        </div>
      </section>

      {/* Segunda Sección: Nuestro Equipo */}
      <section className="team-section">
        <h2>{t("meetOurTeam")}</h2>
        <div className="team-members">
          <div className="team-member">
            <div className="team-member-image" />
            <h3>Fabian Hernandez Castaño</h3>
            <p>{t("systemsEngineer")}</p>
          </div>
          <div className="team-member">
            <div className="team-member-image" />
            <h3>Yeferson Aristizabal Valencia</h3>
            <p>{t("systemsEngineer")}</p>
          </div>
          <div className="team-member">
            <div className="team-member-image" />
            <h3>Jonathan Isay Bernal Arriaga</h3>
            <p>{t("systemsEngineer")}</p>
          </div>
        </div>
      </section>
    </div>
  );
};
