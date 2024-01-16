import React, { useState, useEffect } from 'react'
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore'
import { db } from '../config/firebase-config'

export default function Dashboard() {
  const [mentors, setMentors] = useState([])
  const mentorsCollectionRef = collection(db, 'mentors')

  const getMentors = async () => {
    try {
      const data = await getDocs(mentorsCollectionRef)
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
      setMentors(filteredData)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getMentors()
  }, [])

  return (
    <div>
      <h1 className='text-3xl'>Mentors</h1>
      {mentors.map((mentor) => (
        <div>{mentor.firstName}</div>
      ))}
    </div>
  )
}
