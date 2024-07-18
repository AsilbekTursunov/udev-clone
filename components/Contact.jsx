'use client'
import axios from 'axios'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation()
  const [action, setAction] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const sendMessage = e => {
    e.preventDefault()
    const token = '7123362946:AAFSr-g4W-yNQE7TZLAGrPh1WFqmZrJymJ8'
    const chat_id = 942734553

    axios({
      method: 'POST',
      url: `https://api.telegram.org/bot${token}/sendMessage`,
      data: {
        chat_id,
        parse_mode: 'HTML',
        text: `
        Sizga habar yuborildi 
        Ismi ${name}
        Email: ${email}
        Izoh: ${message}
        `,
      },
    })
      .then(res => {
        setAction('success')
      })
      .catch(error => {
        setAction('error')
      })
      .finally(() => {
        setName('')
        setEmail('')
        setMessage('')
      })
  }
  setTimeout(() => {
    setAction('')
  }, 5000)
  return (
    <section>
      <div className='new-container bg-white' id='contact'>
        <h1 className='blog-headers'>{t('contact')}</h1>
        <div className='mt-10 shadow-contact   p-10 rounded-xl'>
          <h4 className='text-lg text-paragraph-light-dark font-semibold'>
            {t('message-headline')}
          </h4>
          <div className='flex gap-5 mt-5 flex-col lg:flex-row'>
            <form
              method='POST'
              className='flex flex-col gap-8 lg:w-1/2 w-full'
              onSubmit={sendMessage}
            >
              <label htmlFor='name' className='relative'>
                <input
                  type='text'
                  required
                  name='name'
                  placeholder={t('message-name')}
                  className='  w-full h-full border-[1.5px] text-xl border-neutral-300 p-4 rounded-[4px] outline-neutral-400 '
                  id='name'
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </label>
              <label htmlFor='name' className='relative'>
                <input
                  type='email'
                  required
                  name='email'
                  placeholder={t('message-email')}
                  className='  w-full h-full border-[1.5px] text-xl border-neutral-300 p-4 rounded-[4px] outline-neutral-400 '
                  id='name'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </label>
              <textarea
                name='message'
                placeholder={t('message-info')}
                onChange={e => setMessage(e.target.value)}
                value={message}
                className=' w-full h-full border-[1.5px] text-xl border-neutral-300 p-4 rounded-[4px] outline-neutral-400 mt-5'
              />
              <button className='hover:scale-105 transition-all text-lg font-bold bg-btn text-white  md:self-start px-14 py-2 rounded-[4px] '>
                {t('send')}
              </button>
            </form>
            <div className='lg:w-1/2 w-full'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.855844052292!2d-73.98550528470103!3d40.74844097907221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sCentral%20Park%20West%2C%20New%20York%2C%20NY%2010002%2C%20USA!5e0!3m2!1sen!2sbd!4v1660578983547!5m2!1sen!2sbd'
                width='100%'
                height='450'
                style={{ border: 0 }}
                allowFullScreen=''
                loading='lazy'
                defaultValue={'US'}
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed w-screen h-screen bg-slate-800/70 shadow-slate-800  filter-none blur-lg left-0 top-0 ${
          action.length > 0 ? 'flex' : 'hidden'
        } items-center justify-center z-50`}
      >
        <div className='flex flex-col p-10 rounded-md bg-white items-center justify-center gap-5'>
          <img
            src={action == 'success' ? '/images/correct.gif' : '/images/error.gif'}
            alt='succecc'
            className='w-64'
          />
          <h1 className='text-xl text-paragraph-dark-2 font-semibold'>
            {t(`${action == 'success' ? 'message-sent' : 'message-delete'}`)}
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Contact
