"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"; // Importa el hook para traducción

export default function HomePage() {
  const { t } = useTranslation(); // Hook de traducción
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  const [isVisible, setIsVisible] = useState(false);

  // Efecto para activar la animación
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 500); // Delay antes de que aparezcan las letras
  }, []);

  return (
    <div className="relative h-screen bg-cover bg-center">
      <div className="flex flex-col items-center justify-center h-[50vh] bg-black bg-opacity-50 w-full">
        <h1
          className={`text-5xl font-bold text-white mb-4 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {t("welcome", { name })} {/* Traducción del mensaje de bienvenida */}
        </h1>
        <p
          className={`text-xl text-gray-200 transition-opacity duration-1000 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {t("weAreGlad")} {/* Traducción del mensaje de agrado */}
        </p>
      </div>
    </div>
  );
}
