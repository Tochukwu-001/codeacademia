import { db } from '@/config/firebase.config'
import { doc, getDoc } from 'firebase/firestore'
import Link from 'next/link';
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

const page = async ({ params }) => {
  const sortedParams = await params
  const singleDoc = await singleReview(sortedParams.id)
  console.log(singleDoc);
  // console.log(params);


  return (
    <main className='min-h-dvh p-4 flex flex-col gap-7 items-center max-w-1/2 mx-auto shadow-sm my-10'>
      <h1 className='text-3xl text-center'>{singleDoc.title}</h1>
      <p className='text-sm text-gray-700'>by {singleDoc.author}</p>
      <img src={singleDoc.authorImg} alt={singleDoc.author} className='w-20 h-20 rounded-full' />
      <p>Language: {singleDoc.language}</p>
      <p className='font-thin text-lg'>{singleDoc.description}</p>
      <div>
        <p className='text-xs text-gray-700'>Code Snippet:</p>
        <p className='italic font-thin text-base'>{singleDoc.snippet}</p>
      </div>
      {
        singleDoc.youtube &&
        <Link href={singleDoc.youtube}>Watch on Youtube</Link>
      }
      <p className='ml-auto text-xs text-gray-700'>Posted on {singleDoc.timestamp}</p>
    </main>
  )
}

export default page
