import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en_locals from "./en.json";
import ar_locals from "./ar.json";

export enum Languages {
  EN = "en",
  AR = "ar",
}

export const toggleLanguage = (lang: Languages) => {
  i18next.changeLanguage(lang);
  document.documentElement.setAttribute(
    "dir",
    lang === Languages.AR ? "rtl" : "ltr"
  );
};

const savedLanguage = localStorage.getItem("interfaceLanguage");

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
