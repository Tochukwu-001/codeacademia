import { db } from '@/config/firebase.config'
import { doc, getDoc } from 'firebase/firestore'
import React from 'react'

const singlePost = async (id) => {
    try {
        const docRef = doc(db, "tutorials", id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            return {id, ...doc.data()}
        } else{
            console.log("Document not found");
        }
    } catch (error) {
        console.error("Error>>>>>>", error)
        alert("Something went wrong")
    }
}

const page = () => {
  return (
    <div>
      Dynamic page
    </div>
  )
}

export default page
