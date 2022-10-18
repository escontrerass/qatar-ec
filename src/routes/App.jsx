import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { MenuContextProvider } from '@/context/menuContext'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Home } from '@/pages/Home'
import { Groups } from '@/pages/Groups'
import { Positions } from '@/pages/Positions'

function App() {
  return (
    <MenuContextProvider>
      <Header />
      <AnimatePresence mode='wait' initial={false}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/groups' element={<Groups />} />
          <Route path='/positions' element={<Positions />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </MenuContextProvider>
  )
}

export default App
