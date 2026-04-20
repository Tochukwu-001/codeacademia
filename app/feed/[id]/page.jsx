import { db } from '@/config/firebase.config'
import { doc, getDoc } from 'firebase/firestore'
import React from 'react'

const singleReview = async (id) => {
  if (!id) return null;

  try {
    const docRef = doc(db, "tutorials", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      return { id, ...docSnap.data() };
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  } catch (error) {
    console.error("An error occurred", error);
    alert("Oops, somthing went wrong");
  }
};

const page = async ({params}) => {
    const sortedParams = await params
    const singleDoc = await singleReview(sortedParams.id)
    console.log(singleDoc);
    // console.log(params);
    
    
  return (
    <div>
      Dynamic page
    </div>
  )
}

export default page
