import React from 'react'

export function TeamTableGroup(props) {
  const { team_id, flag, name_en, w, mp, l, gf, ga, gd, pts } = props

  const p = Number(w) + Number(l) + Number(mp)

  return (
    <div className='flex justify-between'>
      <p>{team_id}.</p>
      <picture className='h-4 w-6'>
        <img src={flag} alt={`Flag of ${name_en}`} className='h-full w-full' />
      </picture>
      <p>{name_en}</p>
      <p>{p}</p>
      <p>{w}</p>
      <p>{mp}</p>
      <p>{l}</p>
      <p>{gf}</p>
      <p>{ga}</p>
      <p>{gd}</p>
      <p>{pts}</p>
    </div>
  )
}
