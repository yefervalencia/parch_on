"use client";

import { useTranslation } from "react-i18next";

const ThemeSettings = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{t("selectTheme")}</h1>
    </div>
  );
};

export default ThemeSettings;
