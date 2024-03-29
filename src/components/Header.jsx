import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { Context } from '../context/AuthContext'
import { signOut, getAuth } from 'firebase/auth'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigate = useNavigate()

  const items = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Dashboard',
      url: '/dashboard',
    },
  ]

  const UserAuth = useContext(Context)

  const auth = getAuth()
  async function handleSignOut() {
    try {
      await signOut(auth)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <header className='sticky top-0 bg-gray-900 z-30 m-0'>
      <nav className='flex items-center justify-between px-1 lg:px-8 py-1 mx-auto max-w-full lg:max-w-screen-xl'>
        <Link
          to='/'
          aria-label='Brand'
          title='Brand'
          className='inline-flex items-center'
        >
          <div className='flex px-1 py-0 items-center bg-gradient-to-r from-amber-100 to-amber-300 rounded-md '>
            <span className='mx-2 text-sm sm:text-base md:text-2xl font-extrabold text-amber-950 hover:text-amber-900'>
              Brand
            </span>
          </div>
        </Link>
        <ul className='hidden xs:flex items-center space-x-4 md:space-x-8 text-sm md:text-lg'>
          {items.map((item) => (
            <li key={item.url}>
              <a
                href={item.url}
                className='font-medium tracking-wide text-amber-300 transition-colors duration-200 hover:text-amber-50 hover:underline active:text-amber-200'
              >
                {item.title}
              </a>
            </li>
          ))}
          <li>
            {UserAuth.user ? (
              <span className='font-medium tracking-wide text-amber-300'>
                Welcome {UserAuth.user && UserAuth.user.email}
                <button
                  className='bg-red-900 rounded-md p-1 transition-opacity duration-200 hover:opacity-85'
                  onClick={() => {
                    handleSignOut()
                  }}
                >
                  Sign Out
                </button>
              </span>
            ) : (
              <Link
                to='/signin'
                title='Signin'
                className='font-medium tracking-wide text-amber-300 transition-colors duration-200 hover:text-amber-50 hover:underline active:text-amber-200'
              >
                Signin
              </Link>
            )}
          </li>
        </ul>
        <div className='xs:hidden'>
          <button
            aria-label='Open Menu'
            title='Open Menu'
            className='bg-amber-300 text-amber-950 hover:text-amber-700 border px-1 py-0 mr-1 font-semibold transition duration-200 rounded focus:outline-none focus:shadow-outline z-30'
            onClick={() => setIsMenuOpen(true)}
          >
            Menu
          </button>
          {isMenuOpen && (
            <div className='z-50 absolute top-0 left-[2vw] w-[96%]'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className='w-6 text-gray-900' viewBox='0 0 24 24'>
                        <path
                          fill='currentColor'
                          d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className='space-y-4'>
                    {items.map((item) => (
                      <li>
                        <a
                          onClick={() => setIsMenuOpen(false)}
                          href={item.url}
                          className='font-medium tracking-wide text-amber-800 transition-colors duration-200 hover:text-amber-300'
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
