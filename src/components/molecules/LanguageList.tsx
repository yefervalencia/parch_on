"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/app/i18n"; // Ajusta el path según tu estructura
import { LanguageFlag } from "@/components";

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
];

export const LanguageList: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const { t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
  };

  return (
    <div className="language-list flex flex-col space-y-2 p-4">
      {languages.map(({ code, name }) => (
        <LanguageFlag
          key={code}
          code={code}
          name={name}
          isActive={selectedLanguage === code}
          onClick={() => changeLanguage(code)}
        />
      ))}
    </div>
  );
};
