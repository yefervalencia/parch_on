"use client";

import { useTranslation } from "react-i18next";
import { Manizales } from "@/components";
import Link from "next/link";
import "./Main.css";
export const Main = () => {
  const { t } = useTranslation();

  return (
    <section className="manizales-section">
      <div className="manizales-text">
        <h1>{t("in")}</h1>
        <h1>Manizales</h1>
        <h1>{t("joyPrevails")}</h1>
        <p>{t("getReadyToLiveUniqueMoments")}</p>
        <div className="cont-btn">
          <Link href="/login">
            <button className="cta-button">{t("letsDoIt")}</button>{" "}
            {/* Botón añadido */}
          </Link>
        </div>
      </div>
      <div className="manizales-image">
        <Manizales />
      </div>
    </section>
  );
};
