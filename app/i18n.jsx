'use client'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next/initReactI18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import enTranslation from '../public/locales/en.json'
import ruTranslation from '../public/locales/ru.json'
 

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: localStorage.getItem('i18nextLng'),
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

{
  /**
  import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import i18nConfig from '@/i18nConfig'

export default async function initTranslations(locale, namespaces, i18nInstance, resources) {
  i18nInstance = i18nInstance || createInstance()

  i18nInstance.use(initReactI18next)

  if (!resources) {
    i18nInstance.use(
      resourcesToBackend((language, namespace) => import(`@/locales/${language}/${namespace}.json`))
    )
  }

  await i18nInstance.init({
    lng: locale,
    resources,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    defaultNS: namespaces[0],
    fallbackNS: namespaces[0],
    ns: namespaces,
    preload: resources ? [] : i18nConfig.locales,
  })

  return {
    i18n: i18nInstance,
    resources: i18nInstance.services.resourceStore.data,
    t: i18nInstance.t,
  }
}

// middleware

 import { i18nRouter } from 'next-i18n-router'; 
 import i18nConfig from './i18nConfig';

 export function middleware(request) {
   return i18nRouter(request, i18nConfig);
 }

  applies this middleware only to files in the app directory
 export const config = {
   matcher: '/((?!api|static|.*\\..*|_next).*)'
 };
  */
}
