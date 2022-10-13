import titleQatar from '@/assets/home-title.png'
import iconMenu from '@/assets/menu-icon.png'

export function Header() {
  return (
    <header className='flex h-[10vh] items-center justify-between bg-gray-500 px-4'>
      <picture className='w-44'>
        <img src={titleQatar} alt='Fifa world cup Qatar 2022 title' title='Fifa world cup Qatar 2022 title' />
      </picture>
      <nav>
        <picture>
          <img src={iconMenu} alt='Icon menu' className='w-12' />
        </picture>
        {/* <ul className='flex gap-5 font-qatar text-lg text-white'>
          <li className='hover:text-rose-700'>Home</li>
          <li className='hover:text-rose-700'>Groups</li>
          <li className='hover:text-rose-700'>Positions</li>
          <li className='hover:text-rose-700'>Stadiums</li>
          <li className='hover:text-rose-700'>Qatar</li>
        </ul> */}
      </nav>
    </header>
  )
}
