import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Home } from '@/pages/Home'

function App() {
  return (
    <div className='mx-auto max-w-7xl bg-zinc-700'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
