"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GlobeIcon, SunIcon } from "@primer/octicons-react";
import { useTranslation, UseTranslation } from "next-i18next";

const menuItems = [
  {
    name: "language",
    path: "/settings/language",
    icon: <GlobeIcon className="w-5 h-5" />,
  },
  {
    name: "theme",
    path: "/settings/theme",
    icon: <SunIcon className="w-5 h-5" />,
  },
  // Agrega más opciones de configuración según sea necesario
];

export const SettingsMenu: React.FC = () => {
  const { t } = useTranslation();
  const pathname = usePathname();

  return (
    <div className="w-1/4 bg-gray-700 h-screen p-4">
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className={`flex items-center px-4 py-2 rounded-md text-gray-300 hover:bg-gray-500 ${
                pathname === item.path ? "bg-blue-500 text-black" : ""
              }`}
            >
              {item.icon}
              <span className="ml-3">{t(item.name)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
