import { Layout } from '@/template/Layout'
import { TableGroup } from '@/components/TableGroup'
import Position from '../../API/PositionsData.json'

export function Positions() {
  const tablePositions = Object.values(Position.data)

  return (
    <Layout>
      <h2 className='mt-10 text-center font-qatar text-6xl text-white'>Positions</h2>
      <div className='my-5 grid grid-cols-1 gap-5 md:grid-cols-2'>
        {tablePositions.map(table => (
          <TableGroup key={table._id} {...table} />
        ))}
      </div>
    </Layout>
  )
}
