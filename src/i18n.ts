import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import he from "./translations/he.json"
import en from "./translations/en.json"

const resources = {
  he: { translation: he },
  en: { translation: en },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'he',
    fallbackLng: 'he',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;