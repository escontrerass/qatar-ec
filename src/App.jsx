import { Counter } from './components/Counter'
import titleQatar from './assets/title-qatar.svg'
import logoQatar from './assets/logo-qatar.svg'
import petQatar from './assets/pet-qatar.svg'

function App() {
  return (
    <div className='bg-zinc-700 max-w-5xl mx-auto'>
      <header className='flex h-[12vh] justify-between bg-gray-500 items-center px-10'>
        <div className='w-1/5'>
          <img
            width='w-full'
            src={titleQatar}
            alt='Fifa world cup Qatar 2022 title'
            title='Fifa world cup Qatar 2022 title'
          />
        </div>
        <nav>
          <ul className='flex gap-5'>
            <li>Home</li>
            <li>Groups</li>
            <li>Positions</li>
            <li>Stadiums</li>
            <li>Qatar</li>
          </ul>
        </nav>
      </header>
      <section className='min-h-[78vh] justify-center items-center flex flex-col gap-5'>
        <picture>
          <img src={logoQatar} alt='Fifa world cup qatar 2022 logo' title='Fifa world cup qatar 2022 logo' />
        </picture>
        <Counter />
        <picture>
          <img src={petQatar} alt='Fifa world cup qatar 2022 pet' title='Fifa world cup qatar 2022 pet' />
        </picture>
      </section>
      <footer className='h-[10vh] flex justify-between p-10 bg-gray-500 items-center'>
        <div>
          <p>Tech</p>
        </div>
        <div>
          <p>Power by</p>
        </div>
        <div>
          <p>Git</p>
        </div>
      </footer>
    </div>
  )
}

export default App
