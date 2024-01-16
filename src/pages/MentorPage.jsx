import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../config/firebase-config'

export default function MentorPage() {
  const { id } = useParams()
  const [mentor, setMentor] = useState()
  const [loading, setLoading] = useState(true)

  const getMentor = async () => {
    const docRef = doc(db, 'mentors', id)

    try {
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        console.log(docSnap.data())
        setMentor(docSnap.data())
        setLoading(false)
      } else {
        console.log('Document does not exist')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMentor()
  }, [])

  return (
    <div>
      <div>Mentor ID: {id}</div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>Mentor Name: {mentor.firstName} </div>
      )}
    </div>
  )
}
