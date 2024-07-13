'use client'
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Aos from 'aos'
import 'aos/dist/aos.css'

import { ChevronDown } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { FaYoutube } from 'react-icons/fa'
import { IoLogoInstagram, IoLogoTwitter } from 'react-icons/io'

const menuItems = [
  { label: 'Direction', href: '#direction' },
  { label: 'Commond', href: '#commond' },
  {
    label: 'Services',
    href: '#services',
    header: 'Services',
    values: [
      {
        image: '/images/services-1.svg',
        label: `Mobile development Development of mobile applications`,
        href: '#mobile-development',
      },
      {
        image: '/images/services-2.svg',
        label: `Development and implementation ERP systems`,
        href: '#erp',
      },
      {
        image: '/images/services-3.svg',
        label: `User interface, User experience design`,
        href: '#ui-design',
      },
      { image: '/images/services-4.svg', label: `IT consulting`, href: '#consulting' },
      {
        image: '/images/services-5.svg',
        label: `Optimization IT consulting infrastructure`,
        href: '#optimise',
      },
    ],
  },
  { label: 'Tools', href: '#tools' },
  { label: 'Clients', href: '#clients' },
  {
    label: 'Portfolio',
    href: '#portfolio',
    header: 'Portfolio',
    values: [
      { image: '/images/portfolio-1.svg', label: `Delever`, href: '#delever' },
      { image: '/images/portfolio-2.svg', label: `Sms.uz`, href: '#sms' },
      { image: '/images/portfolio-3.svg', label: `Goodzone`, href: '#goodzone' },
      { image: '/images/portfolio-4.svg', label: `Iman`, href: '#iman' },
    ],
  },
  {
    label: 'Languages',
    href: 'languages',
    values: [
      { image: '/images/flag-ru.svg', label: `Rus` },
      { image: '/images/flag-eng.svg', label: `Eng` },
    ],
  },
]

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  useEffect(() => {
    Aos.init({ duration: 500, disable:'mobile' })
  })
  return (
    <>
      <header
        data-aos='fade-down'
        class='fixed inset-x-0 top-0 z-50  shadow-header-shadow bg-white'
        id='#home'
      >
        <div>
          <div className='new-container'>
            <nav class='flex items-center justify-between  h-[72px]  ' aria-label='Global'>
              <div class='flex lg:flex-1'>
                <a href='#home' class='-m-1.5 p-1.5'>
                  <span class='sr-only'>Your Company</span>
                  <img class='h-[44px]   w-[105px]' src='/images/logo-udev.png' alt='' />
                </a>
              </div>
              <div class='flex lg:hidden'>
                <button
                  type='button'
                  class='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
                  onClick={() => setOpenMenu(true)}
                >
                  <span class='sr-only'>Open main menu</span>
                  <svg
                    class='h-6 w-6'
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
              <ul class='hidden lg:flex gap-2 items-center'>
                {menuItems.map(item => (
                  <li className={`p-2 mr-2 relative flex justify-center ${item.label}`}>
                    <a
                      href={item.href}
                      class='text-sm font-bold leading-6 text-paragraph-light-dark flex items-center gap-2'
                    >
                      {item.label} {item.values && <ChevronDown size={10} />}
                    </a>
                    {item.values && (
                      <span
                        className={`absolute  hidden ${
                          item.header ? 'py-6' : 'py-2'
                        }  rounded-[8px] shadow-md top-10 bg-white ${
                          item.header === 'Services' || item.header === 'Portfolio'
                            ? '-left-24'
                            : '-left-2'
                        } ${item.label}-popup`}
                      >
                        {item.header && (
                          <h3 className='text-neutral-200 font-normal text-md pb-4 pl-3'>
                            {item.header}
                          </h3>
                        )}
                        {item.values?.map(popup => {
                          return (
                            <a
                              href={popup.href}
                              className={`flex items-center bg-white px-6 py-2 justify-start gap-2 hover:bg-blue-600 hover:text-white cursor-pointer ${
                                item.header === 'Services'
                                  ? ' w-[350px]'
                                  : item.header === 'Portfolio'
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
                              <span className='text-[13px]  '>{popup.label}</span>
                            </a>
                          )
                        })}
                      </span>
                    )}
                  </li>
                ))}
                <li className='hover:scale-105 transition-all'>
                  <a
                    href='#contact'
                    class='text-sm font-bold bg-btn text-white leading-6  px-6 py-3 rounded-[8px] '
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <div class='lg:hidden fixed  h-screen top-0 z-50  ' role='dialog' aria-modal='true'>
        <div
          class={`fixed inset-y-0 right-0 ${
            openMenu ? 'translate-x-0' : 'translate-x-full'
          } transition-all duration-[0.5s] z-50 w-full overflow-y-auto bg-menu px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}
        >
          <div class='flex items-center justify-between'>
            <a href='#' class='-m-1.5 p-1.5'>
              <span class='sr-only'>Your Company</span>
              <img class='h-[44px]   w-[105px]' src='/images/logo-udev.png' alt='' />
            </a>
            <button
              type='button'
              class='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setOpenMenu(false)}
            >
              <span class='sr-only'>Close menu</span>
              <svg
                class='h-6 w-6'
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
          <div class='mt-6 flow-root'>
            <div class='-my-6 divide-y divide-gray-500/10'>
              <ul class='space-y-2 py-6 flex flex-col text-center'>
                <li>
                  <a
                    href={'#'}
                    class='text-sm font-bold  justify-center leading-6 text-paragraph-light-dark flex items-center gap-2'
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href={'#'}
                    class='text-sm font-bold justify-center  leading-6 text-paragraph-light-dark flex items-center gap-2'
                  >
                    Clients
                  </a>
                </li>
                <li>
                  <a
                    href={'#'}
                    class='text-sm font-bold justify-center  leading-6 text-paragraph-light-dark flex items-center gap-2'
                  >
                    Commond
                  </a>
                </li>
                <li className='hover:scale-105 transition-all flex flex-col'>
                  <a
                    href='#contact'
                    class='text-sm font-bold  bg-btn text-white leading-6  px-6 py-3 rounded-[8px] '
                  >
                    Contact
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
