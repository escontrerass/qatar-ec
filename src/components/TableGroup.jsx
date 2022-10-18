import React from 'react'
import Table from 'rc-table'

const columns = [
  {
    title: '#',
    dataIndex: 'team_id',
    align: 'center',
  },
  {
    title: 'Name',
    dataIndex: 'name_en',
    align: 'center',
  },
  {
    title: 'W',
    dataIndex: 'w',
    align: 'center',
  },
  {
    title: 'MP',
    dataIndex: 'mp',
    align: 'center',
  },
  {
    title: 'L',
    dataIndex: 'l',
    align: 'center',
  },
  {
    title: 'GF',
    dataIndex: 'gf',
    align: 'center',
  },
  {
    title: 'GA',
    dataIndex: 'ga',
    align: 'center',
  },
  {
    title: 'GD',
    dataIndex: 'gd',
    align: 'center',
  },
  {
    title: 'PTS',
    dataIndex: 'pts',
    align: 'center',
  },
]

export function TableGroup(props) {
  const { group, teams } = props

  return (
    <div className='flex min-w-[350px] flex-col gap-5 rounded-xl border-8 bg-rose-800 py-4 px-2 font-qatar'>
      <h2 className='text-center text-4xl text-white'>{`Group ${group}`}</h2>
      <Table
        columns={columns}
        data={teams}
        rowClassName='text-rose-800 bg-white'
        className='overflow-hidden rounded-lg border'
        rowKey={record => record.team_id}
      />
    </div>
  )
}
