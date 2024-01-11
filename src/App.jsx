import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className='relative '>
      <Header />
      <main className='relative max-w-screen-xl mx-auto px-1 lg:px-4'>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default App
