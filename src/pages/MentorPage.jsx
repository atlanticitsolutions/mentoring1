import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, collection, addDoc } from 'firebase/firestore'
import { db } from '../config/firebase-config'

export default function MentorPage() {
  const { id } = useParams()
  const [mentor, setMentor] = useState()
  const [loading, setLoading] = useState(true)
  const docRef = doc(db, 'mentors', id)
  const [mentees, setMentees] = useState([])
  const [first, setFirst] = useState('')
  const menteesCollectionRef = collection(db, `mentors/${id}/mentees`)

  const addMentee = async (e) => {
    e.preventDefault()
    try {
      await addDoc(menteesCollectionRef, {
        fName: first,
      })
      //   getMentors()
    } catch (error) {
      console.log(error)
    }
  }

  const getMentor = async () => {
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
    <>
      <div>
        <div>Mentor ID: {id}</div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>Mentor Name: {mentor.firstName} </div>
        )}
      </div>

      <h1 className='text-3xl'>Add Mentees</h1>
      <form>
        <input
          type='text'
          name='first'
          placeholder='Mentee First Name...'
          onChange={(e) => setFirst(e.target.value)}
        />
        <button onClick={(e) => addMentee(e)}>Add Mentee</button>
      </form>
      <h1 className='text-3xl'>Mentees</h1>
    </>
  )
}
