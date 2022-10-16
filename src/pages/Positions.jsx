import { Layout } from '@/template/Layout'
import Position from '../../API/PositionsData.json'
import { TableGroup } from '../components/TableGroup'

export function Positions() {
  const tablePositions = Object.values(Position.data)

  return (
    <Layout>
      <div>
        <TableGroup {...tablePositions[0]} />
      </div>
    </Layout>
  )
}
