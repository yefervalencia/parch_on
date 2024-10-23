import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
    .use(HttpBackend) // Carga archivos de traducción desde el servidor
    .use(LanguageDetector) // Detecta el idioma del navegador
    .use(initReactI18next)
    .init({
        fallbackLng: 'es', // Idioma por defecto
        supportedLngs: ['en', 'es', 'fr'], // Idiomas soportados
        backend: {
            loadPath: '/locales/{{lng}}/translation.json', // Ruta de archivos de traducción
        },
        interpolation: {
            escapeValue: false, // React ya protege contra XSS
        },
    });

export default i18n;
