'use client'
import { useTranslation } from 'react-i18next'

const Optimization = () => {
  const { t } = useTranslation()
  return (
    <section className='bg-menu py-10' id='optimise'>
      <div className='new-container py-10'>
        <h2 className='blog-headers text-start '>{t(`structure`)}</h2>
        <div className='mt-10 flex flex-col md:flex-row gap-10'>
          <div  className=' flex  justify-center  items-center md:w-1/2'>
            <img src='/images/erp-system.jpeg' alt='team-image' className=' w-[1000px]' />
          </div>
          <div   className='flex flex-col md:w-1/2'>
            <p className='text-paragraph-light-dark text-[16px] md:text-2xl'>
            {t(`optimise-desc`)}
            </p>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 items-center justify-center mt-5 '>
              {[
                { image: '/images/optimization-1.png', label: 'Architecture' },
                { image: '/images/optimization-2.png', label: 'Auto testing' },
                { image: '/images/optimization-3.png', label: 'Stress testing' },
                { image: '/images/optimization-4.png', label: 'Load testing' },
                { image: '/images/optimization-5.png', label: 'Devops' },
                { image: '/images/optimization-6.png', label: 'Cloud' },
                { image: '/images/optimization-6.png', label: 'CI / CD' },
              ].map(item => (
                <div key={item.label} className='flex flex-col items-center gap-3 bg-card-1 p-5 rounded-[8px] h-full'>
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

export default Optimization
