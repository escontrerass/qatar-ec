import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MenuContextProvider } from '@/context/menuContext'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Home } from '@/pages/Home'
import { Groups } from '../pages/Groups'
import { Positions } from '../pages/Positions'

function App() {
  return (
    <MenuContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/groups' element={<Groups />} />
          <Route path='/positions' element={<Positions />} />
          <Route path='*' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MenuContextProvider>
  )
}

export default App
