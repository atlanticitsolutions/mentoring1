import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
// import { UserAuth } from '../context/AuthContext'
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase-config'
import Header from '../components/Header'

function Signin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  // const { signIn } = UserAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        // Success...
        console.log(user)
        navigate('/')
        //...
      })
      .catch((error) => {
        // Error
        console.log(error)
      })
    // e.preventDefault()
    // setError('')
    // try {
    //   await signIn(email, password)
    //   navigate('/account')
    // } catch (e) {
    //   setError(e.message)
    //   console.log(e.message)
    // }
  }

  return (
    <>
      {/* <Header /> */}
      <div className='max-w-[700px] mx-auto my-16 p-4'>
        <div>
          <h1 className='text-2xl font-bold py-2'>Sign in to your account</h1>
          <p className='py-2'>
            Don't have an account yet?{' '}
            <Link to='/signup' className='underline'>
              Sign up.
            </Link>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Email Address</label>
            <input
              name='email'
              onChange={(e) => setEmail(e.target.value)}
              className='border p-3'
              type='email'
            />
          </div>
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Password</label>
            <input
              name='password'
              onChange={(e) => setPassword(e.target.value)}
              className='border p-3'
              type='password'
            />
          </div>
          <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>
            Sign In
          </button>
        </form>
      </div>
    </>
  )
}

export default Signin
