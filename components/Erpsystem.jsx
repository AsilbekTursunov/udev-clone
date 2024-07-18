'use client'

import { useTranslation } from 'react-i18next'

const Erpsystem = () => {
  const { t } = useTranslation()
  return (
    <section className='bg-menu py-10' id='erp'>
      <div className='new-container py-10'>
        <h2 className='blog-headers text-start '>{t('erp-headline')}</h2>
        <div className='mt-10 flex flex-col md:flex-row gap-10'>
          <div
             
            className=' flex  justify-center  items-center md:w-1/2'
          >
            <img src='/images/erp-system.jpeg' alt='team-image' className=' w-[1000px]' />
          </div>
          <div  className='flex flex-col md:w-1/2'>
            <p className='text-paragraph-light-dark text-[16px] md:text-2xl'>
            {t('erp-desc')}
            </p>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 items-center justify-center mt-5 '>
              {[
                { image: '/images/erp-1.png', label: 'CRM' },
                { image: '/images/erp-2.png', label: 'eLearing' },
                { image: '/images/erp-3.png', label: 'E-Commerce' },
                { image: '/images/erp-4.png', label: 'POS' },
                { image: '/images/erp-5.png', label: 'Sms / Email' },
                { image: '/images/erp-6.png', label: 'Warehouse' },
              ].map(item => (
                <div
                  key={item.label}
                  className='flex flex-col items-center gap-3 bg-card-1 p-5 rounded-[8px] h-full'
                >
                  <img src={item.image} alt={item.label} className=' w-8 md:w-14' />
                  <p className='  text-[14px] md:text-lg font-semibold'>{item.label}</p>
                </div>
              ))}
            </div>
            <p className='text-3xl text-paragraph-dark-2 mt-10 font-semibold'>{t('tech')}</p>
            <div className='flex gap-5 mt-5 flex-wrap justify-evenly md:justify-start'>
              {[
                { image: '/images/swift.png', label: 'Swift' },
                { image: '/images/kotlin.png', label: 'Kotlin' },
                { image: '/images/flutter.png', label: 'Flutter' },
              ].map(item => (
                <div key={item.label} className='flex flex-col items-center gap-3  rounded-[8px]  '>
                  <img src={item.image} alt={item.label} className=' w-8 md:w-14' />
                  <p className='text-lg font-semibold'>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Erpsystem
