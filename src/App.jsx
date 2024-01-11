import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className='relative'>
      <Header />
      <main className='relative'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
