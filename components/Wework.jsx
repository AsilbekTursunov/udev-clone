import React from 'react'
//w-full sm:w-1/2 md:w-1/3
const Wework = () => {
  return (
    <section className='py-10'>
      <div className='new-container'>
        <div className='py-4'>
          <h1 className='blog-headers'>How we work!</h1>
        </div>
        <div className='mt-14 flex max-lg:justify-start flex-col lg:flex-row relative gap-2'>
          <div className='hidden lg:block border-b-[4px] border-dotted border-blue-200 w-full lg:top-10 z-0 absolute bord' />
          {[
            {
              image: '/images/work-1.svg',
              header: 'Contact',
              label: 'Send us your project request or project idea.',
            },
            {
              image: '/images/work-2.svg',
              header: 'Analysis',
              label: 'We will contact you to clarify your project requirements.',
            },
            {
              image: '/images/work-3.svg',
              header: 'Offer',
              label: 'We will provide you with our free, non-binding application.',
            },
            {
              image: '/images/work-4.svg',
              header: 'Team',
              label: 'We provide a team for your requirements.',
            },
            {
              image: '/images/work-5.svg',
              header: 'Start',
              label: `You will get to know the team and we'll get started.`,
            },
          ].map(item => (
            <div className='flex flex-row lg:flex-col items-center lg:justify-center gap-5 p-4 z-20'>
              <img className='w-14 h-14 object-cover' src={item.image} alt={item.header} />
              <div className='lg:mt-4 flex flex-row items-center gap-5 lg:flex-col justify-center'>
                <h2 className='text-2xl font-semibold '>{item.header}</h2>
                <p className='text-sm text-gray-600 lg:text-center'>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Wework
