import React from 'react'
import { Countdown } from './Countdown'
import { useCountdown } from '../hooks/useCountdown'

export function Counter() {
  const startQatar = new Date('2022/11/20 12:00:00 PM').getTime()
  const [days, hours, minutes, seconds] = useCountdown(startQatar)

  return (
    <div className='flex gap-5 items-center'>
      <Countdown counter={days} title='Days' />
      <Countdown counter={hours} title='Hours' />
      <Countdown counter={minutes} title='Minutes' />
      <Countdown counter={seconds} title='Seconds' />
    </div>
  )
}
