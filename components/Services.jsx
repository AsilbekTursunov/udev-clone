import React from 'react'

 

const Services = () => {
  return (
    <section
      className='bg-contain py-10'
      style={{ backgroundImage: 'url(/images/background-pattern.jpeg)' }}
      id='mobile-development'
    >
      <div className='new-container'>
        <h2 className='blog-headers text-[32px] lg:text-[64px]'>
          Development of mobile <br /> applications
        </h2>
        <div className='flex flex-col-reverse justify-center md:flex-row lg:justify-between gap-32 mt-14'>
          <div data-aos="fade-up" data-aos-duration="300" className='w-full  md:w-1/2'>
            <p className='text-paragraph-light-dark text-[16px] md:text-2xl'>
              In collaboration with startups, we have learned how to create a creative and
              functional user interface for mobile applications.
            </p>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 items-center justify-center mt-5 '>
              {[{ image: '/images/apple.png', label: 'Apple' }, { image: '/images/android.png', label: 'Android' }, { image: '/images/cross-platform.png', label: 'Crossplatform' }].map(item => (
                <div className='flex flex-col items-center gap-3 bg-menu p-5 rounded-[8px]  '>
                  <img src={item.image} alt={item.label} className=' w-8 md:w-14' />
                  <p className='  text-[14px] md:text-lg font-semibold'>{item.label}</p>
                </div>
              ))}
            </div>
            <p className='text-3xl text-paragraph-dark-2 mt-10 font-semibold'>Technologies</p>
            <div className='flex gap-5 mt-5 flex-wrap justify-evenly md:justify-start'>
              {[{ image: '/images/swift.png', label: 'Swift' }, { image: '/images/kotlin.png', label: 'Kotlin' }, { image: '/images/flutter.png', label: 'Flutter' }].map(item => (
                <div className='flex flex-col items-center gap-3  rounded-[8px]  '>
                  <img src={item.image} alt={item.label} className=' w-8 md:w-14' />
                  <p className='text-lg font-semibold'>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='w-full flex  justify-center  items-center md:w-1/2'>
            <img data-aos="zoom-in" data-aos-duration="300" src="/images/phone-pattern.jpeg" alt="phone" className='w-[1200px]' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
