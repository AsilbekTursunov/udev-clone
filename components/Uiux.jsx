import React from 'react'

const Uiux = () => {
  return (
    <section
      className='bg-contain py-10'
      style={{ backgroundImage: 'url(/images/background-pattern.jpeg)' }}
      id='ui-design'
    >
      <div className='new-container'>
        <h2 className='blog-headers text-[32px] lg:text-[64px]'>UI / UX design</h2>
        <div className='flex flex-col-reverse justify-center md:flex-row lg:justify-between gap-14 mt-14'>
          <div data-aos="fade-up" data-aos-duration="300" className='w-full  md:w-1/2'>
            <p className='text-paragraph-light-dark text-[16px] lg:text-2xl'>
              Our company takes a human-centered approach to design
            </p>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 items-center justify-center mt-5 '>
              {[
                { image: '/images/ui-1.png', label: 'UI' },
                { image: '/images/ui-2.png', label: 'UX' },
                { image: '/images/ui-3.png', label: 'Prototyping' },
                { image: '/images/ui-4.png', label: 'Mobile Design' },
                { image: '/images/ui-5.png', label: 'Web Design' },
                { image: '/images/ui-6.png', label: 'Atomic Design' },
              ].map(item => (
                <div className='flex flex-col items-center gap-3 bg-menu p-5 rounded-[8px] '>
                  <img src={item.image} alt={item.label} className=' w-8 md:w-14' />
                  <p className='  text-[14px] md:text-lg font-semibold'>{item.label}</p>
                </div>
              ))}
            </div>
            <p className='text-3xl text-paragraph-dark-2 mt-10 font-semibold'>Technologies</p>
            <div className='flex gap-5 mt-5 flex-wrap  justify-start '>
              {[
                { image: '/images/figma.png', label: 'Figma' },
                { image: '/images/sketch.png', label: 'Sketch' },
                { image: '/images/lottie.png', label: 'Lottie' },
                { image: '/images/ai.png', label: 'Illustrator' },
              ].map(item => (
                <div className='flex flex-col items-center gap-3  rounded-[8px]  '>
                  <img
                    src={item.image}
                    alt={item.label}
                    className={` ${item.label === 'Lottie' ? 'w-4 md:w-10' : 'w-8 md:w-14'}`}
                  />
                  <p className='text-lg font-semibold'>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-duration="300" className='w-full  md:w-1/2'>
            <img src='/images/phone-pattern.jpeg' alt='phone' className='w-[1200px]' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Uiux