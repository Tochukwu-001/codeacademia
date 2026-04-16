"use client";
import { db } from "@/config/firebase.config";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiTrash } from "react-icons/ci";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


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

    return (
        <main>
            <section className="min-h-dvh grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {
                    feed.map((item, i) => (
                        <div key={i} className="p-3 shadow-md rounded-md border border-gray-200">
                            <div>
                                <div>
                                    <img src={item.authorImg} alt={item.author.slice(0,1)} />
                                    <p>{item.author}</p>
                                </div>
                                <button><CiTrash /></button>
                            </div>
                            <div>
                                <h1>{item.title}</h1>
                                <p>{item.language}</p>
                                <p>{item.description}</p>
                                <p>{item.snippet}</p>
                                <a href={item.youtube}>watch this tutorial on YouTube</a>
                            </div>
                            <div>
                                <p>{item.timestamp}</p>
                                <Link href={"#"}>Read More <MdKeyboardDoubleArrowRight /></Link>
                            </div>
                        </div>
                    ))
                }
            </section>
        </main>
    )
}
