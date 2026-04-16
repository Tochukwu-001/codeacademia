"use client";
import { db } from "@/config/firebase.config";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiTrash } from "react-icons/ci";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";


export default function FeedClient({ session }) {
    const [feed, setFeed] = useState([])

    const handleFetch = async () => {
        const info = []
        const querySnapshot = await getDocs(collection(db, "tutorials"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            const tutorialData = {
                id: doc.id,
                ...doc.data()
            }
            info.push(tutorialData)

        });
        setFeed(info)
        // console.log(feed, info);        
    }

    useEffect(() => {
        handleFetch()
    }, [feed])

    if (feed.length == 0) {
        return (
            <div className="flex items-center justify-center h-dvh text-gray-400">Be the first to contribute to the community</div>
        )
    }

    return (
        <main>
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {
                    feed.map((item, i) => (
                        <div key={i} className="p-3 shadow-md rounded-md border border-gray-200 space-y-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <img src={item.authorImg} alt={item.author.slice(0, 1)} className="w-8 h-8 rounded-full" />
                                    <p className="text-sm">{item.author}</p>
                                </div>
                                <button className="bg-red-500 text-white p-2 rounded-full hover:scale-110 transition-all duration-200"><CiTrash /></button>
                            </div>
                            <div className="space-y-2">
                                <h1 className="text-center font-semibold text-xl">{item.title}</h1>
                                <p className="bg-purple-300 w-fit px-3 py-1 rounded-full text-sm">{item.language}</p>
                                <p className="text-lg font-light line-clamp-3">{item.description}</p>
                                <p className="text-lg font-light text-purple-600 italic">{item.snippet}</p>
                                <a href={item.youtube} className="text-blue-600 text-xs underline flex items-center">watch this tutorial on YouTube <MdArrowOutward /></a>
                            </div>
                            <div className="border rounded-md border-gray-300 p-2 flex items-center justify-between">
                                <p className="text-xs text-gray-500">{item.timestamp}</p>
                                <Link className="flex items-center text-sm text-gray-600" href={"#"}>Read More <MdKeyboardDoubleArrowRight className="text-lg" /></Link>
                            </div>
                        </div>
                    ))
                }
            </section>
        </main>
    )
}
