import React, { useState } from 'react'
import { auth } from '../config/firebase-config'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export default function LoginRegister() {
  const [login, setLogin] = useState(false)

  const history = useNavigate()
  console.log(auth)

  const handleSubmit = (e, type) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    if (type == 'signup') {
      createUserWithEmailAndPassword(auth, email, password)
        .then((data) => {
          console.log(data, 'authData')
          history('/')
        })
        .catch((err) => {
          alert(err.code)
          setLogin(true)
        })
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((data) => {
          console.log(data, 'authData')
          history('/')
        })
        .catch((err) => {
          alert(err.code)
        })
    }
  }

  const handleReset = () => {
    history('/reset')
  }
  return (
    <div className='flex h-screen m-auto items-center justify-center'>
      <div className='flex flex-col gap-4 bg-slate-200 text-center  items-center w-96 h-fit p-2 border'>
        {/* Registration and login Screen */}
        <div className='flex flex-row gap-8 justify-center items-center '>
          <div
            className={login == false ? 'pt-2 border' : 'cursor-pointer'}
            onClick={() => setLogin(false)}
          >
            Register
          </div>
          <div
            className={login == true ? 'pt-2 border' : 'cursor-pointer'}
            onClick={() => setLogin(true)}
          >
            Login
          </div>
        </div>
        <h1 className='text-3xl'>{login ? 'Login' : 'Register'}</h1>
        <form
          className='flex flex-col gap-3'
          onSubmit={(e) => handleSubmit(e, login ? 'signin' : 'signup')}
        >
          <input name='email' placeholder='Email' />

          <input name='password' type='password' placeholder='Password' />
          <p className='text-sm' onClick={handleReset}>
            Forgot Password?
          </p>

          <button>{login ? 'Login' : 'Register'}</button>
        </form>
      </div>
    </div>
  )
}
