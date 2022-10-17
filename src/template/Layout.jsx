import { useContext } from 'react'
import { menuContext } from '@/context/menuContext'
import { MenuMobile } from '../pages/MenuMobile'

export function Layout({ children }) {
  const { menu } = useContext(menuContext)
  return (
    <div className='mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center bg-zinc-700'>
      {menu ? <MenuMobile /> : children}
    </div>
  )
}
