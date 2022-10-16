import React from 'react'
import { TeamGroup } from './TeamGroup'

export default function Group(props) {
  const group = Object.values(props)

  return (
    <div className='flex min-w-[350px] flex-col gap-5 rounded-xl border-8 bg-rose-800 p-4 font-qatar'>
      <h3 className='text-center text-4xl text-white'>{`Group ${group[0].groups}`}</h3>
      {group.map(team => (
        <TeamGroup key={team.id} {...team} />
      ))}
    </div>
  )
}
