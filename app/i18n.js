'use client'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next/initReactI18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import enTranslation from '@/public/locales/en.json'
import ruTranslation from '@/public/locales/ru.json' 

const language = localStorage.getItem('i18nextLng') || 'en'
 
i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: language,
    debug: true,
    resources: {
      en: {
        translation: enTranslation,
      },
      ru: {
        translation: ruTranslation,
      },
    },
  })
export default i18next
