"use client";

import { useTranslation } from "react-i18next";

export const Settings = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{t("settings")}</h1>
      <p>{t("selectAMenuOption")}</p>
    </div>
  );
};
