"use client";

import React from "react";
import clsx from "clsx";
import { US, MX, FR } from "country-flag-icons/react/3x2"; // Asegúrate de instalar esta librería

interface LanguageFlagProps {
  code: string;
  name: string;
  isActive: boolean;
  onClick: () => void;
}

const flagComponents: Record<
  string,
  React.FC<{ title: string; className?: string }>
> = {
  en: US,
  es: MX,
  fr: FR,
};

export const LanguageFlag: React.FC<LanguageFlagProps> = ({
  code,
  name,
  isActive,
  onClick,
}) => {
  const FlagComponent = flagComponents[code];
  return (
    <div
      onClick={onClick}
      className={clsx(
        "flex items-center cursor-pointer px-2 py-1 rounded-md",
        isActive ? "bg-blue-500 text-white" : "hover:bg-gray-200"
      )}
    >
      {FlagComponent && <FlagComponent title={name} className="w-6 h-4" />}
      <span className="ml-2">{name}</span>
    </div>
  );
};
