'use client'
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Aos from 'aos'
import 'aos/dist/aos.css'

import { ChevronDown } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { FaYoutube } from 'react-icons/fa'
import { IoLogoInstagram, IoLogoTwitter } from 'react-icons/io'
import LanguageChanger from './LanguageChanger'
import { useTranslation } from 'react-i18next'

const menuItems = [
  { label: 'direction', href: '#direction' },
  { label: 'commond', href: '#commond' },
  {
    label: 'services',
    href: '#services',
    header: 'services',
    values: [
      {
        image: '/images/services-1.svg',
        label: `nav-mobile-dev`,
        href: '#mobile-development',
      },
      {
        image: '/images/services-2.svg',
        label: `mobile-dev-headline`,
        href: '#erp',
      },
      {
        image: '/images/services-3.svg',
        label: `nav-ui`,
        href: '#ui-design',
      },
      { image: '/images/services-4.svg', label: `nav-it`, href: '#consulting' },
      {
        image: '/images/services-5.svg',
        label: `nav-optimise`,
        href: '#optimise',
      },
    ],
  },
  { label: 'tools', href: '#tools' },
  { label: 'clients', href: '#clients' },
  {
    label: 'portfolio',
    href: '#portfolio',
    header: 'portfolio',
    values: [
      { image: '/images/portfolio-1.svg', label: `Delever`, href: '#delever' },
      { image: '/images/portfolio-2.svg', label: `Sms.uz`, href: '#sms' },
      { image: '/images/portfolio-3.svg', label: `Goodzone`, href: '#goodzone' },
      { image: '/images/portfolio-4.svg', label: `Iman`, href: '#iman' },
    ],
  },
]

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const { t, i18n } = useTranslation()

  useEffect(() => {
    Aos.init({ duration: 500, disable: window.innerWidth < 1070 })
  })
  const handleChange = language => {
    i18n.changeLanguage(language)
  }
  return (
    <>
      <section
        data-aos='fade-down'
        className='fixed inset-x-0 top-0 z-50  shadow-header-shadow bg-white'
        id='#home'
      >
        <section>
          <section className='new-container'>
            <nav className='flex items-center justify-between  h-[72px]  ' aria-label='Global'>
              <div className='flex lg:flex-1'>
                <a href='#home' className='-m-1.5 p-1.5'>
                  <img className='h-[44px]   w-[105px]' src='/images/logo-udev.png' alt='' />
                </a>
              </div>
              <div className='flex gap-4 lg:hidden'>
                <div className='flex items-center gap-4'>
                  <img
                    src={'/images/flag-eng.svg'}
                    alt=''
                    className={`w-[20px] h-[20px] cursor-pointer `}
                    onClick={() => handleChange('en')}
                  />
                  <img
                    src={'/images/flag-ru.svg'}
                    alt=''
                    className={`w-[20px] h-[20px] cursor-pointer `}
                    onClick={() => handleChange('ru')}
                  />
                </div>
                <button
                  type='button'
                  className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
                  onClick={() => setOpenMenu(true)}
                >
                  <span className='sr-only'>Open main menu</span>
                  <svg
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                    />
                  </svg>
                </button>
              </div>
              <ul className='hidden lg:flex gap-2 items-center'>
                {menuItems.map(item => (
                  <li
                    key={item.label}
                    className={`p-2 mr-2 relative flex justify-center ${item.label}`}
                  >
                    <a
                      href={item.href}
                      className='text-sm font-bold leading-6 text-paragraph-light-dark flex items-center gap-2'
                    >
                      {t(`${item.label}`)} {item.values && <ChevronDown size={10} />}
                    </a>
                    {item.values && (
                      <span
                        className={`absolute  hidden ${
                          item.header ? 'py-6' : 'py-2'
                        }  rounded-[8px] shadow-lg border top-10 bg-white ${
                          item.header === 'services' || item.header === 'portfolio'
                            ? '-left-24'
                            : '-left-2'
                        } ${item.label}-popup`}
                      >
                        {item.header && (
                          <h3 className='text-neutral-200  font-normal text-md pb-4 pl-3 capitalize'>
                            {item.header}
                          </h3>
                        )}
                        {item.values?.map(popup => {
                          return (
                            <a
                              href={popup.href}
                              className={`flex items-center bg-white px-6 py-2 justify-start gap-2 hover:bg-blue-600 hover:text-white cursor-pointer ${
                                item.header === 'services'
                                  ? ' w-[320px]'
                                  : item.header === 'portfolio'
                                  ? 'w-72'
                                  : 'w-32'
                              }`}
                            >
                              <img
                                src={popup.image}
                                alt=''
                                className={`${
                                  item.header ? 'w-[48px] h-[48px]' : 'w-[28px] h-[28px]'
                                } mr-2`}
                              />
                              <span className='text-[13px]  '>{t(`${popup.label}`)}</span>
                            </a>
                          )
                        })}
                      </span>
                    )}
                  </li>
                ))}
                <li className='p-2 mr-2 relative flex justify-center languages'>
                  <span className='text-sm font-bold leading-6 text-paragraph-light-dark flex items-center gap-2'>
                    {t('languages')} &nbsp; <ChevronDown size={10} />
                  </span>
                  <LanguageChanger />
                </li>
                <li className='hover:scale-105 transition-all'>
                  <a
                    href='#contact'
                    className='text-sm font-bold bg-btn text-white leading-6  px-6 py-3 rounded-[8px] '
                  >
                    {t('contact')}
                  </a>
                </li>
              </ul>
            </nav>
          </section>
        </section>
      </section>
      <div className='lg:hidden fixed  h-screen top-0 z-50  ' role='dialog' aria-modal='true'>
        <div
          className={`fixed inset-y-0 right-0 ${
            openMenu ? 'translate-x-0' : 'translate-x-full'
          } transition-all duration-[0.5s] z-50 w-full overflow-y-auto bg-menu px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}
        >
          <div className='flex items-center justify-between'>
            <a href='#' className='-m-1.5 p-1.5'>
              <img className='h-[44px]   w-[105px]' src='/images/logo-udev.png' alt='' />
            </a>
            <div className='flex items-center justify-between gap-5'>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
                onClick={() => setOpenMenu(false)}
              >
                <svg
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path stroke-linecap='round' stroke-linejoin='round' d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
            </div>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <ul className='space-y-2 py-6 flex flex-col text-center'>
                <li>
                  <a
                    href={'#'}
                    className='text-sm font-bold  justify-center leading-6 text-paragraph-light-dark flex items-center gap-2'
                  >
                    {t('services')}
                  </a>
                </li>
                <li>
                  <a
                    href={'#'}
                    className='text-sm font-bold justify-center  leading-6 text-paragraph-light-dark flex items-center gap-2'
                  >
                    {t('clients')}
                  </a>
                </li>
                <li>
                  <a
                    href={'#'}
                    className='text-sm font-bold justify-center  leading-6 text-paragraph-light-dark flex items-center gap-2'
                  >
                    {t('commond')}
                  </a>
                </li>
                <li className='hover:scale-105 transition-all flex flex-col'>
                  <a
                    href='#contact'
                    className='text-sm font-bold  bg-btn text-white leading-6  px-6 py-3 rounded-[8px] '
                  >
                    {t('contact')}
                  </a>
                </li>
                <li className='flex justify-center gap-5 pt-5'>
                  <a href='#' className='social-link'>
                    <IoLogoInstagram size={24} />
                  </a>
                  <a href='#' className='social-link'>
                    <IoLogoTwitter size={24} />
                  </a>
                  <a href='#' className='social-link'>
                    <FaYoutube size={24} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
