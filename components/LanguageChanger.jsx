'use client'

import { useTranslation } from 'react-i18next'

export default function LanguageChanger() {
  const { i18n } = useTranslation()

  const handleChange = language => {
    i18n.changeLanguage(language)
  }
   
  return (
    <span className='absolute   border hidden py-2 rounded-[8px] shadow-md top-10 bg-white -left-2 languages-popup'>
      <span
        className={`flex items-center bg-white px-6 py-2 justify-start gap-2 hover:bg-blue-600 hover:text-white cursor-pointer w-32`}
        onClick={() => handleChange('en')}
      >
        <img src={'/images/flag-eng.svg'} alt='' className={`w-[28px] h-[28px] mr-2`} />
        <span className='text-[13px]  '>Eng</span>
      </span>
      <span
        className={`flex items-center bg-white px-6 py-2 justify-start gap-2 hover:bg-blue-600 hover:text-white cursor-pointer w-32`}
        onClick={() => handleChange('ru')}
      >
        <img src={'/images/flag-ru.svg'} alt='' className={`w-[28px] h-[28px] mr-2`} />
        <span className='text-[13px]  '>Rus</span>
      </span>
    </span>
  )
}
