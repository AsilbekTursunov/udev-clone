/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Hero = () => {
  return (
    <section className='  bg-contain' style={{backgroundImage:'url(/images/background-pattern.jpeg)'}}>
      <div className='new-container'>
        <div className='flex gap-1 flex-col lg:flex-row py-44'>
          <div className='flex flex-col items-center lg:items-start justify-center lg:justify-start mb-10 lg:mb-0'>
            <img data-aos="fade-up" src='/images/logo-udev.png' alt='udev-log' className=' w-32 lg:w-72 mb-10 lg:mb-0' />
             
            <h1 data-aos="fade-up" className='text-btn text-[24px] lg:text-[40px] font-bold text-center lg:text-start'>
              IT-Outsourcing Company Optimization IT consulting infrastructure
            </h1>
            <li className='hover:scale-105 transition-all hidden lg:block mt-12'>
                  <a
                    href='#'
                    class='text-[20px] font-bold bg-btn text-white leading-6  px-16 py-3 rounded-[8px] '
                  >
                    Contact
                  </a>
                </li>
          </div>
          <div className='flex items-center justify-center lg:justify-start'>
            <img src='/images/hero.svg' alt='udev-log' className='w-[300px] lg:w-[950px]' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
