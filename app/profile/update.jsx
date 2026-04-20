"use client";
import { useState } from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/config/firebase.config";


export default function Update({ session }) {

    const name = session?.user?.name
    const uid = session?.user?.id
    const [currentName, setCurrentName] = useState(name)

    const handleUpdate = async (id) => {
        try {
            const docRef = doc(db, "users", id);
            await updateDoc(docRef, {
                name: currentName
            });
            alert("Profile update sucessful")
        } catch (error) {
            console.error("Error>>>>>>", error)
            alert("Oops, something went wrong")
        }
    }

    return (
        <main>
            <blockquote className="flex flex-col items-center gap-5">
                <h2 className="text-xl font-semibold text-gray-800">Update your profile</h2>
                <div className="flex flex-col items-center justify-center gap-3 w-full lg:px-16">
                    <input onChange={(e)=> setCurrentName(e.target.value)} value={currentName} type="text" placeholder="Enter a new name..." className="w-full outline-none border border-gray-300 px-3 py-2 rounded-md " />
                    <button onClick={()=> handleUpdate(uid)} className="flex items-center justify-center gap-2 bg-purple-600 text-white py-2.5 w-full rounded-md hover:bg-purple-500 transition-all duration-200">Update <FaRegPaperPlane /></button>
                </div>
            </blockquote>
        </main>
    )
}