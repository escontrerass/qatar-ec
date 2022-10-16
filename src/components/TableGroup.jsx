import React from 'react'
import { createColumnHelper, useReactTable } from '@tanstack/react-table'
import { TeamTableGroup } from './TeamTableGroup'

const columnHelper = createColumnHelper()

const columns = [
  columnHelper.accessor('team_id', {
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
]

export function TableGroup(props) {
  const { group, teams } = props

  console.log(teams)

  return (
    <div className='min-w-[350px]'>
      <h2>{`Group ${group}`}</h2>
      {/* <div className='flex justify-between'>
        <p>#</p>
        <p>Flag</p>
        <p>Team</p>
        <p>P</p>
        <p>W</p>
        <p>L</p>
        <p>MP</p>
        <p>GF</p>
        <p>GA</p>
        <p>GD</p>
        <p>PTS</p>
      </div>
      <TeamTableGroup {...teams[0]} /> */}
    </div>
  )
}
