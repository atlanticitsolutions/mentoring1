import { Route, Routes } from 'react-router-dom'
// import { AuthContextProvider } from './context/AuthContext'
// import Signin from './authenticate/Signin'
// import Signup from './authenticate/Signup'
import { Home } from './pages/Home'

function App() {
  return (
    <div>
      <h1 className='text-center text-3xl font-bold'>
        Firebase Auth & Context
      </h1>
      {/* <AuthContextProvider> */}
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/signup' element={<Signup />} /> */}
        {/* <Route path='/signup' element={<Signup />} /> */}
      </Routes>
      {/* </AuthContextProvider> */}
    </div>
  )
}

export default App
