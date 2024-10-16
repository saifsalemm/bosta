import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import ar_locals from "./ar.json";
import en_locals from "./en.json";

export enum Languages {
  EN = "en",
  AR = "ar",
}

export const savedLanguageKey = "interfaceLanguage";

const savedLanguage = localStorage.getItem(savedLanguageKey);

i18next.use(initReactI18next).init({
  lng: savedLanguage ?? Languages.EN,
  fallbackLng: Languages.EN,
  debug: false,
  resources: {
    en: {
      translation: {
        ...en_locals,
      },
    },
    ar: {
      translation: {
        ...ar_locals,
      },
    },
  },
});

export default i18next;
