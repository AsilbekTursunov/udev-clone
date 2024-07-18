'use client'
import { useTranslation } from 'react-i18next'

const Smsuz = () => {
  const { t } = useTranslation()

  return (
    <section className='py-10' id='sms'>
      <div className='new-container'>
        <div className='block md:hidden my-4 '>
          <h2 className='font-extrabold  text-btn text-[64px] '>Smsuz.uz</h2>
          <p className='flex p-2 items-center justify-center gap-2 rounded-[50px] font-medium text-btn bg-blue-300 w-fit'>
            <img src='/images/erp-5.png' alt='truck' className='size-5' />{' '}
            <span>{t('sms-icon')}</span>
          </p>
        </div>
        <div className='flex flex-col justify-center md:flex-row lg:justify-between gap-14 mt-14'>
          <div   className='w-full  md:w-1/2'>
            <div className='hidden md:block my-2 '>
              <h2 className='font-extrabold  text-[32px] text-btn lg:text-[64px] '>Smsuz.uz</h2>
              <p className='flex p-2 items-center justify-center gap-2 rounded-[50px] font-medium text-btn bg-blue-300 w-fit'>
                <img src='/images/erp-5.png' alt='truck' className='size-5   ' />{' '}
                <span>{t('sms-icon')}</span>
              </p>
            </div>
            <p className='text-paragraph-dark-2 text-[16px] lg:text-2xl font-semibold'>
            {t('sms-info')}
            </p>
            <h3 className='text-paragraph-light-dark text-2xl mt-5 font-bold'>{t('we-did')}</h3>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 items-center justify-center mt-5 '>
              {[
                { image: '/images/web.png', label: 'Website' },
                { image: '/images/admin.png', label: 'Admin panel' },
                { image: '/images/cross-platform.png', label: 'Crossplatform' },
              ].map(item => (
                <div
                  key={item.label}
                  className='flex flex-col items-center gap-3 bg-menu p-5 rounded-[8px] '
                >
                  <img src={item.image} alt={item.label} className=' w-8 md:w-14' />
                  <p className='  text-[14px] md:text-lg font-semibold'>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            
            className='w-full flex items-center  md:w-1/2'
          >
            <img src='/images/sms.png' alt='phone' className='w-[1200px]' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Smsuz
