import React from 'react'

const Contact = () => {
  return (
    <section>
      <div className='new-container bg-white' id='contact'>
        <h1 className='blog-headers'>Contact</h1>
        <div className='mt-10 shadow-contact   p-10 rounded-xl'>
          <h4 className='text-lg text-paragraph-light-dark font-semibold'>Leave us a message</h4>
          <div className='flex gap-5 mt-5 flex-col lg:flex-row'>
            <div className='flex flex-col gap-8 lg:w-1/2 w-full'>
              <label htmlFor='name' className='relative'>
                <input
                  type='text'
                  required
                  placeholder='Name'
                  className='  w-full h-full border-[1.5px] text-xl border-neutral-300 p-4 rounded-[4px] outline-neutral-400 '
                  id='name'
                />
              </label>
              <label htmlFor='name' className='relative'>
                <input
                  type='email'
                  required
                  placeholder='Email'
                  className='  w-full h-full border-[1.5px] text-xl border-neutral-300 p-4 rounded-[4px] outline-neutral-400 '
                  id='name'
                />
              </label>
              <textarea
                placeholder='Message'
                className=' w-full h-full border-[1.5px] text-xl border-neutral-300 p-4 rounded-[4px] outline-neutral-400 mt-5'
              />
              <button className='hover:scale-105 transition-all text-lg font-bold bg-btn text-white  md:self-start px-14 py-2 rounded-[4px] '>Send</button>
            </div>
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
    </section>
  )
}

export default Contact
