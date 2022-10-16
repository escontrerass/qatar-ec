import { Layout } from '@/template/Layout'
import Group from '@/components/Group'
import Teams from '../../API/TeamsData.json'

export function Groups() {
  const { data } = Teams
  const groupA = data.filter(team => team.groups === 'A')
  const groupB = data.filter(team => team.groups === 'B')
  const groupC = data.filter(team => team.groups === 'C')
  const groupD = data.filter(team => team.groups === 'D')
  const groupE = data.filter(team => team.groups === 'E')
  const groupF = data.filter(team => team.groups === 'F')
  const groupG = data.filter(team => team.groups === 'G')
  const groupH = data.filter(team => team.groups === 'H')

  return (
    <Layout>
      <h2 className='mt-10 font-qatar text-6xl text-white'>Groups</h2>
      <div className='my-10 grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2'>
        <Group {...groupA} />
        <Group {...groupB} />
        <Group {...groupC} />
        <Group {...groupD} />
        <Group {...groupE} />
        <Group {...groupF} />
        <Group {...groupG} />
        <Group {...groupH} />
      </div>
    </Layout>
  )
}
