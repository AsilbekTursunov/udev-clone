import React from 'react'

const Goodzone = () => {
  return (
    <section className='py-10' id='goodzone'>
      <div className='new-container mt-32'>
        <div className='block md:hidden my-4 '>
          <img src='/images/goodzone-logo.png' alt='truck' className='w-72   ' />
          <p className='flex p-2 items-center justify-center gap-2 rounded-[50px] font-medium text-delever bg-red-200 w-fit'>
            <img src='/images/good-store.png' alt='truck' className='size-5 text-red-600 ' />{' '}
            <span>E-Commerce</span>
          </p>
        </div>
        <div className='flex flex-col justify-center md:flex-row lg:justify-between gap-14 '>
          <div data-aos="zoom-in" data-aos-duration="300"  className='w-full flex items-center  md:w-1/2'>
            <img src='/images/goodzone.png' alt='store' className='w-[1200px]' />
          </div>
          <div data-aos="fade-right" data-aos-duration="300"  className='w-full  md:w-1/2'>
            <div className='hidden md:block my-2 '>
              <img src='/images/goodzone-logo.png' alt='truck' className='w-72   ' />
              <p className='flex p-2 items-center justify-center gap-2 rounded-[50px] font-medium text-red-600 bg-red-200 w-fit'>
                <img src='/images/good-store.png' alt='truck' className='size-5 text-delever ' />{' '}
                <span>E-Commerce</span>
              </p>
            </div>
            <p className='text-paragraph-dark-2 text-[16px] lg:text-2xl font-semibold'>
              Goodzone - Internet shop of household appliances in Uzbekistan.
            </p>
            <h3 className='text-paragraph-light-dark text-2xl mt-5 font-bold'>What we did?</h3>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 items-center justify-center mt-5 '>
              {[
                { image: '/images/web.png', label: 'Website' },
                { image: '/images/admin.png', label: 'Admin panel' },
                { image: '/images/cross-platform.png', label: 'Crossplatform' },
                { image: '/images/ui-5.png', label: 'Web Design' },
                { image: '/images/ui-4.png', label: 'Mobile Design' },
              ].map(item => (
                <div className='flex flex-col items-center gap-3 bg-menu p-5 rounded-[8px] '>
                  <img src={item.image} alt={item.label} className=' w-8 md:w-14' />
                  <p className='  text-[14px] md:text-lg font-semibold'>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Goodzone
