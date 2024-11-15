"use client";

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { PropsWithChildren, useEffect } from "react";

export function I18nProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    // Asegurarse de que i18n está inicializado solo en el cliente
    if (!i18n.isInitialized) {
      i18n.init();
    }
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
