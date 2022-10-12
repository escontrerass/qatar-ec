import React from 'react'

export function Countdown(props) {
  const { counter, title } = props
  return (
    <div className='bg-rose-800 rounded-lg overflow-hidden border-4'>
      <p className='text-white text-6xl px-10 py-5'>{counter}</p>
      <p className='bg-white text-rose-800 font-bold text-center py-2 text-xl'>{title}</p>
    </div>
  )
}
