import i18n from "i18next"
import HttpBackend from "i18next-http-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

i18n.use(HttpBackend) // Memuat file json berisi terjemahan
    .use(LanguageDetector) // Mendeteksi bahasa pengguna
    .use(initReactI18next) // Integrasi dengan react
    .init({
        fallbackLng: "en-EN", // bahasa default
        debug: false, // untuk debuging
        interpolation: {
            escapeValue: false // react sudah melindungi dari xss
        },
        backend: {
            loadPath: "/locales/{{lng}}/{{ns}}.json?v=1.0.3"
        }
    })

export default i18n
