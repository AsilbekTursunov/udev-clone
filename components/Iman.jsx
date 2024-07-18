'use client'
import { useTranslation } from 'react-i18next'

const Iman = () => {
  const { t } = useTranslation()
  return (
    <section className='py-10' id='iman'>
      <div className='new-container'>
        <div className='block md:hidden my-4 '>
          <img src='/images/iman.png' alt='iman' className='w-24 lg:w-32' />
          <p className='flex p-2 items-center justify-center gap-2 rounded-[50px] font-medium mt-4 text-teal-500 bg-teal-200 w-fit'>
            <img src='/images/finance.png' alt='truck' className='size-5' />{' '}
            <span>{t('iman-icon')}</span>
          </p>
        </div>
        <div className='flex flex-col justify-center md:flex-row lg:justify-between gap-14 mt-14'>
          <div className='w-full  md:w-1/2'>
            <div className='hidden md:block my-2 '>
              <img src='/images/iman.png' alt='truck' className='w-56   ' />
              <p className='flex p-2 items-center justify-center gap-2 rounded-[50px] font-medium mt-4 text-teal-500 bg-teal-200 w-fit'>
                <img src='/images/finance.png' alt='truck' className='size-5   ' />{' '}
                <span>{t('iman-icon')}</span>
              </p>
            </div>
            <p className='text-paragraph-dark-2 text-[16px] lg:text-2xl font-semibold'>
              {t('iman-info')}
            </p>
            <h3 className='text-paragraph-light-dark text-2xl mt-5 font-bold'>{t('we-did')} </h3>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 items-center justify-center mt-5 '>
              {[
                { image: '/images/web.png', label: 'Website' },
                { image: '/images/admin.png', label: 'Admin panel' },
                { image: '/images/cross-platform.png', label: 'Crossplatform' },
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
          <div className='w-full flex items-center  md:w-1/2'>
            <img src='/images/iman-mobile.png' alt='phone' className='w-[1200px]' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Iman
