import React from "react";
import { SettingsMenu } from "@/components";

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      {/* Menú de opciones de configuración */}
      <SettingsMenu />

      {/* Contenido dinámico que cambia según la opción seleccionada */}
      <div className="w-3/4 p-6 bg-black/90 h-screen overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default SettingsLayout;
