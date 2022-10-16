import React from 'react'

export function TeamGroup(props) {
  const { fifa_code, flag, id, name_en } = props

  return (
    <div className='flex items-center justify-between gap-5 rounded-lg border bg-white p-2 text-rose-700'>
      <h3 className='text-xl'>
        {name_en} - <span>{fifa_code}</span>
      </h3>
      <picture className='h-8 w-10 border'>
        <img src={flag} alt={`Flag of ${name_en}`} loading='lazy' className='h-full w-full' />
      </picture>
    </div>
  )
}
