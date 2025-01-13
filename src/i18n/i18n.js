import i18n from 'i18next';
import {initReactI18next} from "react-i18next";

import en from './locales/en/translation.json';
import fr from './locales/fr/translation.json';

import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {translation: en},
            fr: {translation: fr},
        },
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;