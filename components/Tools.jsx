'use client'
import React, { useState } from 'react'
import Button from './Button'
import { softwares } from '@/constants'
import { useTranslation } from 'react-i18next'

const Tools = () => {
  const [selectedJob, setSelectedJob] = useState('')
  const { t } = useTranslation()
  return (
    <section className='bg-menu mt-20' id='tools'>
      <div className='new-container py-10'>
        <h1 className='blog-headers mb-5'>{t(`tools`)}</h1>
        <ul className='flex gap-4 lg:flex-row flex-col'>
          <li className='flex gap-3 items-center'>
            <Button
              label={'Frontend'}
              className={`${selectedJob == 'frontend' ? 'bg-blue-600' : ''}`}
              onClick={() => setSelectedJob(prev => (prev == 'frontend' ? '' : 'frontend'))}
            />
          </li>
          <li className='flex gap-3 items-center'>
            <Button
              label={'Backend'}
              className={`${selectedJob == 'backend' ? 'bg-blue-600' : ''}`}
              onClick={() => setSelectedJob(prev => (prev == 'backend' ? '' : 'backend'))}
            />
          </li>
          <li className='flex gap-3 items-center'>
            <Button
              label={'Devops'}
              className={`${selectedJob == 'devops' ? 'bg-blue-600' : ''}`}
              onClick={() => setSelectedJob(prev => (prev == 'devops' ? '' : 'devops'))}
            />
          </li>
          <li className='flex gap-3 items-center'>
            <Button
              label={'Testing'}
              className={`${selectedJob == 'test' ? 'bg-blue-600' : ''}`}
              onClick={() => setSelectedJob(prev => (prev == 'test' ? '' : 'test'))}
            />
          </li>
          <li className='flex gap-3 items-center'>
            <Button
              label={'UI/UX'}
              className={`${selectedJob == 'design' ? 'bg-blue-600' : ''}`}
              onClick={() => setSelectedJob(prev => (prev == 'design' ? '' : 'design'))}
            />
          </li>
          <li className='flex gap-3 items-center'>
            <Button
              label={'Infrastructure'}
              className={`${selectedJob == 'infrastructure' ? 'bg-blue-600' : ''}`}
              onClick={() =>
                setSelectedJob(prev => (prev == 'infrastructure' ? '' : 'infrastructure'))
              }
            />
          </li>
          <li className='flex gap-3 items-center'>
            <Button
              label={'Mobile'}
              className={`${selectedJob == 'mobile' ? 'bg-blue-600' : ''}`}
              onClick={() => setSelectedJob(prev => (prev == 'mobile' ? '' : 'mobile'))}
            />
          </li>
        </ul>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 '>
          {softwares.map(item => (
            <ul
              key={item.colums}
              className={`grid grid-cols-4 ${
                item.colums == 'third-column'
                  ? 'md:col-span-2 lg:col-span-1 md:grid-cols-8 lg:grid-cols-4'
                  : 'md:grid-cols-4'
              }  lg:grid-cols-4 gap-2 `}
            >
              {item.skills.map(skill => (
                <li
                  key={skill.label}
                  className={`flex flex-col items-center gap-2 rounded-md h-[90px] ${
                    selectedJob == '' || selectedJob == skill.jobType ? '' : 'opacity-30'
                  }  ${
                    skill.jobType == 'devops'
                      ? 'bg-devops'
                      : skill.jobType == 'frontend'
                      ? ' bg-frontend'
                      : skill.jobType == 'backend'
                      ? ' bg-backend'
                      : skill.jobType == 'test'
                      ? ' bg-test'
                      : skill.jobType == 'infrastructure'
                      ? ' bg-structure'
                      : skill.jobType == 'mobile'
                      ? ' bg-mobile'
                      : 'bg-design'
                  } p-5 rounded-[8px]`}
                >
                  <img src={skill.image} alt={skill.label} className=' size-6 ' />
                  <p className='text-[11px] font-semibold text-gray-800 text-center'>
                    {skill.label}
                  </p>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tools
