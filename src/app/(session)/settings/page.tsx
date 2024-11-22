"use client";

import { useTranslation } from "react-i18next";

const SettingsPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{t("settings")}</h1>
      <p>{t("selectAMenuOption")}</p>
    </div>
  );
};

export default SettingsPage;
