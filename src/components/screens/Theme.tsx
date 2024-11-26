"use client";

import { useTranslation } from "react-i18next";

export const Theme = () => {
  const { t } = useTranslation();
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{t("selectTheme")}</h1>
    </div>
  );
};
