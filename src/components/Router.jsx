import Header from './Header'
import { Home } from '../pages/Home'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Signin from '../authenticate/Signin'
import Signup from '../authenticate/Signup'
import Dashboard from '../pages/Dashboard'
//import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

export default function Router() {
  const Layout = () => {
    return (
      <>
        <Header />
        <div className='content'>
          <Outlet />
        </div>
      </>
    )
  }

  const BrowserRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/home' element={<Home />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='signin' element={<Signin />} />
            <Route path='signup' element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }

  // this code shows how to program out the router using createBrowserRouter
  // const BrowserRoutes = createBrowserRouter([
  //     {
  //         path: "/",
  //         element: <Layout />,
  //         children: [
  //             {
  //                 path: "/",
  //                 element: <Home />
  //             },
  //             {
  //                 path: "/contact-us",
  //                 element: <Contact />
  //             }
  //         ]
  //     }
  // ])

  // add this RouterProvider in the return statement if you plan on using the createBrowserRouter
  // <RouterProvider router={BrowserRoutes} />

  return <BrowserRoutes />
}
