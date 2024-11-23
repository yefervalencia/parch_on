"use client";

import "./Footer.css";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation(); // Hook de traducción

  return (
    <div className="cont-footer">
      <footer className="footer-out-session">
        <p>
          © 2024 ParchOn. {t("allrightsreserved")}{" "}
          {/* Traducción del mensaje del footer */}
        </p>
      </footer>
    </div>
  );
};
