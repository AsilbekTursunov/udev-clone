'use client'
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  const { t } = useTranslation()
   
  return (
    <section
      className='  bg-contain'
      style={{ backgroundImage: 'url(/images/background-pattern.jpeg)' }}
    >
      <div className='new-container'>
        <div className='flex gap-1 flex-col lg:flex-row py-44'>
          <div className='flex w-full lg:w-1/2 flex-col items-center lg:items-start justify-center lg:justify-start mb-10 lg:mb-0'>
            <img
              data-aos='fade-up'
              src='/images/logo-udev.png'
              alt='udev-log'
              className=' w-32 lg:w-72 mb-10 lg:mb-0'
            />

            <h1 className='text-paragraph-light-dark text-[24px] lg:text-[40px] font-bold text-center lg:text-start'>
              {t('hero-main-headline')}
            </h1>
            <h1
              data-aos='fade-up'
              className='text-btn text-[24px] lg:text-[40px] font-bold text-center lg:text-start'
            >
              <Typewriter
                words={[t(`nav-mobile-dev`), t(`nav-erp`), t(`nav-ui`), t(`nav-optimise`), t(`nav-it`)]}
                loop={Infinity}
                cursor
                cursorStyle='|'
                typeSpeed={150}
                deleteSpeed={150}
                delaySpeed={1000}
              />
            </h1>
            <li className='hover:scale-105 transition-all hidden lg:block mt-12'>
              <a
                href='#'
                className='text-[20px] font-bold bg-btn text-white leading-6  px-16 py-3 rounded-[8px] '
              >
                {t('contact')}
              </a>
            </li>
          </div>
          <div className='flex w-full lg:w-1/2 items-center justify-center lg:justify-start'>
            <img src='/images/hero.svg' alt='udev-log' className='w-[300px] lg:w-[950px]' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
