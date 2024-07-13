/* eslint-disable no-unused-vars */
import React from 'react'

const services = [
  {
    image: '/images/service-1.png',
    label: `Team`,
  },
  {
    image: '/images/service-2.png',
    label: `Mobile development Development of mobile applications`,
  },
  { image: '/images/service-3.png', label: `Development and implementation ERP systems` },
  { image: '/images/service-4.png', label: `User interface, User experience design` },
  { image: '/images/service-5.png', label: `Optimization IT consulting infrastructure` },
  { image: '/images/service-6.png', label: `IT consulting` },
]

const Direction = () => {
  return (
    <section>
      <div className='new-container py-10' id='direction'>
        <h2 data-aos="fade-up" className='blog-headers text-center md:text-start '>Our services</h2>
        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-4'>
          {services.map(item => (
            <div data-aos="fade-up" className='flex flex-col items-start justify-start gap-5 bg-menu p-10 rounded-[8px]'>
              <img src={item.image} alt={item.label} className='size-[35px]'/>
              <h3 className='text-xl font-semibold text-gray-800'>{item.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Direction
