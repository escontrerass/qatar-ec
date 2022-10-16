import { useContext } from 'react'
import { menuContext } from '@/context/menuContext'
import { Link } from 'react-router-dom'

export function MenuMobile() {
  const { menu, setMenu } = useContext(menuContext)

  const handleMenu = () => {
    setMenu(false)
  }

  return (
    <>
      {menu && (
        <div className='min-h-[80vh] px-10 py-10'>
          <ul className='flex flex-col gap-8 font-qatar text-2xl text-white'>
            <Link to='/' onClick={handleMenu}>
              <li className='hover:text-rose-700'>Home</li>
            </Link>
            <Link to='/groups' onClick={handleMenu}>
              <li className='hover:text-rose-700'>Groups</li>
            </Link>
            <Link to='/positions' onClick={handleMenu}>
              <li className='hover:text-rose-700'>Positions</li>
            </Link>
            <Link to='/matches' onClick={handleMenu}>
              <li className='hover:text-rose-700'>Partidos</li>
            </Link>
          </ul>
        </div>
      )}
    </>
  )
}
