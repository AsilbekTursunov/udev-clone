import React from 'react'

const Team = () => {
  return (
    <section className='bg-menu py-10' id='commond'>
      <div className='new-container py-10'>
        <h2 className='blog-headers text-start '>Team</h2>
        <div className='mt-10 flex flex-col-reverse md:flex-row gap-4'>
          <div data-aos="fade-up" className='flex flex-col'>
            <p className='text-paragraph-dark-2 lg:text-xl text-md  lg:leading-10 font-medium'>
              For each project, we form a team that includes a project manager, business analyst, UI
              / UX designer, DevOps, QA engineer, backend and front-end developers.
            </p>
            <p className='text-btn text-[80px] lg:text-[120px] font-semibold'>100+</p>
            <p className='text-paragraph-dark-2 text-[24px] lg:text-[40px] font-extrabold'>Dedicated team</p>
          </div>
          <div className='max-lg:flex max-lg:justify-center'>
            <img
              data-aos="fade-left"
              src='/images/team-bg.png'
              alt='team-image'
              className='w-[320px] md:w-[920px] lg:w-[1400px]'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
