import React from 'react'
import { useTranslation } from 'react-i18next'

const Button = ({ className, onClick, label }) => {
  const { t } = useTranslation()
  return (
    <button type='button' className={`flex gap-5 items-center text-lg font-bold`} onClick={onClick}>
      <span className='border-[2px] rounded-full size-6 border-blue-600 bg-white p-2 relative flex items-center justify-center'>
        <span className={`border-[2px] border-white rounded-full size-2 ${className} p-2 `}>
          &nbsp;
        </span>
      </span>
      {label}{' '}
    </button>
  )
}

export default Button
