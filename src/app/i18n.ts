import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend) // Para cargar archivos de traducción
  .use(LanguageDetector) // Detectar el idioma del navegador
  .use(initReactI18next) // Enlazar con React
  .init({
    fallbackLng: 'es', // Idioma por defecto si no se detecta otro
    supportedLngs: ['en', 'es', 'fr'], // Idiomas soportados
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Ruta de los archivos de traducción
    },
    interpolation: {
      escapeValue: false, // React ya protege contra XSS
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['cookie'],
    },
    load: 'languageOnly',
    preload: ['es', 'en', 'fr'],
    react: {
      useSuspense: true,
    },
  });

export default i18n;
