import React from 'react'

const Footer = () => {
  return (
    <section className='bg-menu py-5'>
      <div className='new-container'>
        <div className='flex justify-center py-5'>
          <img class='h-[44px]   w-[105px]' src='/images/logo-udev.png' alt='' />
        </div>
        <div className='flex flex-col lg:flex-row gap-5 justify-between py-5'>
          <div className='flex flex-col gap-4'>
            <h3 className='text-paragraph-light-dark text-lg font-semibold'>About</h3>
            <a href='#direction' className='text-blue-600 text-lg font-medium hover:underline '>
              Direction
            </a>
            <a href='#commond' className='text-blue-600 text-lg font-medium hover:underline '>
              Commond
            </a>
            <a href='#tools' className='text-blue-600 text-lg font-medium hover:underline '>
              Tools
            </a>
            <a href='#clients' className='text-blue-600 text-lg font-medium hover:underline '>
              Clients
            </a>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-paragraph-light-dark text-lg font-semibold'>Services</h3>
            <a
              href='#mobile-development'
              className='text-blue-600 text-lg font-medium hover:underline '
            >
              Development of mobile applications
            </a>
            <a href='#erp' className='text-blue-600 text-lg font-medium hover:underline '>
              Development and implementation ERP systems
            </a>
            <a href='#ui-design' className='text-blue-600 text-lg font-medium hover:underline '>
              User interface, User experience design
            </a>
            <a href='#consulting' className='text-blue-600 text-lg font-medium hover:underline '>
              IT consulting
            </a>
            <a href='#optimise' className='text-blue-600 text-lg font-medium hover:underline '>
              Optimization IT consulting infrastructure
            </a>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-paragraph-light-dark text-lg font-semibold'>About</h3>
            <a href='#delever' className='text-blue-600 text-lg font-medium hover:underline '>
              Delever
            </a>
            <a href='#sms' className='text-blue-600 text-lg font-medium hover:underline '>
              Sms.uz
            </a>
            <a href='#goodzone' className='text-blue-600 text-lg font-medium hover:underline '>
              Goodzone
            </a>
            <a href='#iman' className='text-blue-600 text-lg font-medium hover:underline '>
              Iman
            </a>
          </div>
        </div>
        <div className='flex   items-center justify-between border-t border-blue-300 pt-5'>
          <p className='text-center text-blue-400 text-sm'>
            &copy; {new Date().getFullYear()} Udevs-Clone. All rights reserved.
          </p>
          <div className='flex justify-center items-center gap-4'>
            <a href='#' className='size-10 rounded-full bg-card-1 flex items-center justify-center'>
              <img src='/images/instagram.png' alt='instagram' className='w-6 h-6' />
            </a>
            <a href='#' className='size-10 rounded-full bg-card-1 flex items-center justify-center'>
              <img src='/images/twitter.png' alt='twitter' className='w-6 h-6' />
            </a>
            <a href='#' className='size-10 rounded-full bg-card-1 flex items-center justify-center'>
              <img src='/images/youtube.png' alt='youtube' className='w-6 h-6' />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
