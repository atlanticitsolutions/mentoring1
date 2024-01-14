// import { Route, Routes } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// import { AuthContextProvider } from './context/AuthContext'
// import Signin from './authenticate/Signin'
// import Signup from './authenticate/Signup'
import { Home } from './pages/Home'
import { AuthContext } from './context/AuthContext'
import Signin from './authenticate/Signin'
import Signup from './authenticate/Signup'
// import Signup from './authenticate/Signup'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/home',
      element: <Home />,
    },
    {
      path: '/signin',
      element: <Signin />,
    },
    {
      path: '/signup',
      element: <Signup />,
    },
  ])

  return (
    <AuthContext>
      <RouterProvider router={router}></RouterProvider>
    </AuthContext>
  )
}

export default App
