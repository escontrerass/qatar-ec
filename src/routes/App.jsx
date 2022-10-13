import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MenuContextProvider } from '@/context/menuContext'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Home } from '@/pages/Home'
import { Groups } from '../pages/Groups'

function App() {
  return (
    <MenuContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/groups' element={<Groups />} />
          <Route path='*' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MenuContextProvider>
  )
}

export default App
