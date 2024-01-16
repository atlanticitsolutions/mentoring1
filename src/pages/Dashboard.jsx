import React, { useState, useEffect } from 'react'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { db } from '../config/firebase-config'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  const [mentors, setMentors] = useState([])
  const [fname, setFname] = useState('')
  const mentorsCollectionRef = collection(db, 'mentors')

  const getMentors = async () => {
    try {
      const data = await getDocs(mentorsCollectionRef)
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
      setMentors(filteredData)
      // console.log(mentors)
    } catch (err) {
      console.error(err)
    }
  }

  const addMentor = async (e) => {
    e.preventDefault()
    try {
      await addDoc(mentorsCollectionRef, {
        firstName: fname,
      })
      getMentors()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMentors()
  }, [])

  return (
    <div>
      <h1 className='text-3xl'>Add Mentor</h1>
      <form>
        <input
          type='text'
          name='firstName'
          placeholder='First Name...'
          onChange={(e) => setFname(e.target.value)}
        />
        <button onClick={(e) => addMentor(e)}>Add</button>
      </form>

      <h1 className='text-3xl'>Mentors</h1>
      {mentors.map((mentor) => (
        <Link to={`/mentor/${mentor.id}`} key={mentor.id}>
          <div>{mentor.firstName}</div>
        </Link>
      ))}
    </div>
  )
}
