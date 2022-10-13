import React from 'react'

export function Countdown(props) {
  const { counter, title } = props
  const finalCounter = counter >= 10 ? counter : `0${counter}`

  return (
    <div className='h-[152px] w-[152px] overflow-hidden rounded-lg border-4 bg-rose-800'>
      <p className='px-10 py-5 text-6xl text-white'>{finalCounter}</p>
      <p className='bg-white py-2 text-center text-xl font-bold text-rose-800'>{title}</p>
    </div>
  )
}
