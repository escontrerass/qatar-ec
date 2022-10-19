import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { menuContext } from '@/context/menuContext'
import titleQatar from '@/assets/home-title.png'
import iconMenu from '@/assets/menu-icon.png'

export function Header() {
  const { menu, setMenu } = useContext(menuContext)

  const handleMenu = () => {
    setMenu(!menu)
  }

  const handleLogo = () => {
    setMenu(false)
  }

  return (
    <header className='mx-auto flex h-[10vh] max-w-7xl items-center justify-between bg-gray-500 px-4'>
      <picture className='w-44'>
        <Link to='/' onClick={handleLogo}>
          <img src={titleQatar} alt='Fifa world cup Qatar 2022 title' title='Fifa world cup Qatar 2022 title' />
        </Link>
      </picture>
      <nav>
        <picture onClick={handleMenu} className='md:hidden'>
          <img src={iconMenu} alt='Icon menu' className='w-12' />
        </picture>
        <ul className='hidden gap-5 font-qatar text-lg text-white md:flex'>
          <Link to='/'>
            <li className='hover:text-rose-700'>Home</li>
          </Link>
          <Link to='/groups'>
            <li className='hover:text-rose-700'>Groups</li>
          </Link>
          <Link to='/positions'>
            <li className='hover:text-rose-700'>Positions</li>
          </Link>
          <Link to='/matches'>
            <li className='hover:text-rose-700'>Matches</li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}
