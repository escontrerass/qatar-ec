import { Layout } from '@/template/Layout'
import { Counter } from '@/components/Counter'
import titleFifa from '@/assets/fifa-title.svg'
import petQatar from '@/assets/qatar-pet.svg'

export function Home() {
  return (
    <Layout>
      <section className='flex min-h-[80vh] flex-col items-center justify-center gap-5'>
        <picture className='w-52 rounded-lg bg-white p-2'>
          <img src={titleFifa} alt='Fifa world cup qatar 2022 logo' title='Fifa world cup qatar 2022 logo' />
        </picture>
        <picture className='w-40'>
          <img src={petQatar} alt='Fifa world cup qatar 2022 pet' title='Fifa world cup qatar 2022 pet' />
        </picture>
        <Counter />
      </section>
    </Layout>
  )
}
