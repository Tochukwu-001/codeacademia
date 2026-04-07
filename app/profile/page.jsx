import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function Profile (){
    const session = await auth()
    if (!session) {
        redirect("/signin")
    }
    return (
        <main className="min-h-dvh grid lg:grid-cols-2 gap-8">
            <blockquote>
                
            </blockquote>

            <blockquote>

            </blockquote>
        </main>
    )
}