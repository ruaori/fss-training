import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./resouces";

i18n.use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'vi',
        interpolation: {
            escapeValue: false
        }
    })

export default i18n


