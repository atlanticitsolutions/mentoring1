import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBnkJW4FW2jZNc9YBd8JMWceQCafoBgdTY',
  authDomain: 'mentoring1-f3a94.firebaseapp.com',
  projectId: 'mentoring1-f3a94',
  storageBucket: 'mentoring1-f3a94.appspot.com',
  messagingSenderId: '824165065390',
  appId: '1:824165065390:web:e375af53c8e5de1dd2c33f',
  measurementId: 'G-Q8Z6XFQYY7',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
export const auth = getAuth(app)
