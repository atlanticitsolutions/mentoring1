import '../App.css'
import Dashboard from './Dashboard'
import Authenticate from '../authenticate/Authenticate'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { auth } from '../config/firebase-config'
import { loginUser, setLoading } from '../store/usersSlice'

export const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        )
        dispatch(setLoading(false))
      } else {
        dispatch(setLoading(false))
        console.log('User is not logged in.')
      }
    })
  }, [])

  const user = useSelector((state) => state.data.user.user)
  const isLoading = useSelector((state) => state.data.user.isLoading)
  return (
    <div className='app'>
      {isLoading ? (
        <div className='loader-container'>
          <div className='loader'></div>
        </div>
      ) : (
        <>{user ? <Dashboard /> : <Authenticate />}</>
      )}
    </div>
  )
}
