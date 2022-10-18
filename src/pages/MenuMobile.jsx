import { useContext } from 'react'
import { menuContext } from '@/context/menuContext'
import { Link } from 'react-router-dom'
import { IconHome } from '@/components/IconHome'
import { IconGroup } from '@/components/IconGroup'
import { IconPositions } from '@/components/IconPositions'
import { IconMatch } from '../components/IconMatch'

export function MenuMobile() {
  const { menu, setMenu } = useContext(menuContext)

  const handleMenu = () => {
    setMenu(false)
  }

  return (
    <>
      {menu && (
        <div className='min-h-[80vh] w-full self-start px-10 py-10'>
          <ul className='flex flex-col gap-8 font-qatar text-4xl text-white'>
            <Link to='/' onClick={handleMenu}>
              <li className='flex gap-2 fill-white hover:fill-rose-700 hover:text-rose-700'>
                <i className='h-8'>
                  <IconHome still='w-full h-full' />
                </i>
                <p>Home</p>
              </li>
            </Link>
            <Link to='/groups' onClick={handleMenu}>
              <li className='flex gap-2 fill-white hover:fill-rose-700 hover:text-rose-700'>
                <i className='h-8'>
                  <IconGroup still='w-full h-full' />
                </i>
                <p>Groups</p>
              </li>
            </Link>
            <Link to='/positions' onClick={handleMenu}>
              <li className='flex gap-2 fill-white hover:fill-rose-700 hover:text-rose-700'>
                <i className='h-8'>
                  <IconPositions still='w-full h-full' />
                </i>
                <p>Positions</p>
              </li>
            </Link>
            <Link to='/matches' onClick={handleMenu}>
              <li className='flex gap-2 fill-white hover:fill-rose-700 hover:text-rose-700'>
                <i className='h-8'>
                  <IconMatch still='w-full h-full' />
                </i>
                <p>Matches</p>
              </li>
            </Link>
          </ul>
        </div>
      )}
    </>
  )
}
