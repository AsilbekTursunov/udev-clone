'use client'
import { useTranslation } from 'react-i18next'

const Consulting = () => {
  const { t } = useTranslation()
  return (
    <section
      className='bg-contain py-10'
      style={{ backgroundImage: 'url(/images/background-pattern.jpeg)' }}
      id='consulting'
    >
      <div className='new-container'>
        <h2 className='blog-headers text-[32px] lg:text-[64px]'>{t('nav-it')}</h2>
        <div className='flex flex-col-reverse justify-center md:flex-row lg:justify-between gap-14 mt-14'>
          <div className='w-full  md:w-1/2'>
            <p className='text-paragraph-light-dark text-[16px] lg:text-2xl'>{t('it-con-desc')}</p>
            <div
               
               
              className='grid grid-cols-2 lg:grid-cols-3 gap-2 items-center justify-center mt-5 '
            >
              {[
                { image: '/images/it-1.png', label: 'Frontend' },
                { image: '/images/it-2.png', label: 'Backend' },
                { image: '/images/it-3.png', label: 'Architecture' },
                { image: '/images/it-4.png', label: 'DevOps' },
                { image: '/images/it-5.png', label: 'UX/UI' },
                { image: '/images/it-6.png', label: 'QA' },
              ].map((item, index) => (
                <div
                  key={index}
                  className='flex flex-col items-center gap-3 bg-menu p-5 rounded-[8px] '
                >
                  <img src={item.image} alt={item.label} className=' w-8 md:w-14' />
                  <p className='  text-[14px] md:text-lg font-semibold'>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='w-full  md:w-1/2'>
            <img
               
              src='/images/it-pattern.png'
              alt='phone'
              className='w-[1200px]'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Consulting
