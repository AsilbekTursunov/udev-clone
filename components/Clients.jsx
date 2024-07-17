'use client'
import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
const Clients = () => {
  return (
    <section className='   py-10 clients-slider ' id='clients'>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        loop={true}
        speed={400}
        autoplay={{
          delay: 1000,

          // disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 5,
          },
          1080: {
            slidesPerView: 6,
          },
          1280: {
            slidesPerView: 8,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper space-x-2'
      >
        <SwiperSlide className='px-4'>
          <img src='/images/client-1.svg' alt='clients' className='w-full' />
        </SwiperSlide>
        <SwiperSlide className='px-4'>
          <img src='/images/client-2.svg' alt='clients' className='w-full' />
        </SwiperSlide>
        <SwiperSlide className='px-4'>
          <img src='/images/client-3.svg' alt='clients' className='w-full' />
        </SwiperSlide>
        <SwiperSlide className='px-4'>
          <img src='/images/client-4.svg' alt='clients' className='w-full' />
        </SwiperSlide>
        <SwiperSlide className='px-4'>
          <img src='/images/client-5.svg' alt='clients' className='w-full' />
        </SwiperSlide>
        <SwiperSlide className='px-4'>
          <img src='/images/client-6.svg' alt='clients' className='w-full' />
        </SwiperSlide>
        <SwiperSlide className='px-4'>
          <img src='/images/client-7.svg' alt='clients' className='w-full' />
        </SwiperSlide>
        <SwiperSlide className='px-4'>
          <img src='/images/client-8.svg' alt='clients' className='w-full' />
        </SwiperSlide>
        <SwiperSlide className='px-4'>
          <img src='/images/client-9.svg' alt='clients' className='w-full' />
        </SwiperSlide>
        <SwiperSlide className='px-4'>
          <img src='/images/client-10.svg' alt='clients' className='w-full' />
        </SwiperSlide>
        <SwiperSlide className='px-4'>
          <img src='/images/client-11.svg' alt='clients' className='w-full' />
        </SwiperSlide>
        <SwiperSlide className='px-4'>
          <img src='/images/client-12.svg' alt='clients' className='w-full' />
        </SwiperSlide>
        <SwiperSlide className='px-4'>
          <img src='/images/client-13.svg' alt='clients' className='w-full' />
        </SwiperSlide>
        <SwiperSlide className='px-4'>
          <img src='/images/client-14.svg' alt='clients' className='w-full' />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Clients
