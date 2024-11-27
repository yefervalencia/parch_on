"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/app/i18n"; // Importa la configuración de i18next
import { US, MX, FR } from "country-flag-icons/react/3x2";
import clsx from "clsx";

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
];

const flagComponents: Record<
  string,
  React.FC<{ title?: string; className?: string }>
> = {
  en: US,
  es: MX,
  fr: FR,
};

export const Language = () => {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">{t("selectLanguage")}</h1>
      <ul className="space-y-2">
        {languages.map((lang) => {
          const FlagComponent = flagComponents[lang.code]; // Obtén la bandera correspondiente

          return (
            <li
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={clsx(
                "cursor-pointer flex items-center px-4 py-2 rounded-md text-gray-300 hover:bg-gray-500",
                selectedLanguage === lang.code ? "bg-blue-500 text-white" : ""
              )}
            >
              {FlagComponent && (
                <FlagComponent className="w-6 h-4 mr-2" title={lang.name} />
              )}
              {lang.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
