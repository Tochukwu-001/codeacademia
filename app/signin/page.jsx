import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";

export default function Signin () {
    return (
        <main className="min-h-dvh flex items-center justify-center">
            <section className="p-4 rounded-md shadow-md w-1/2 flex flex-col items-center gap-5">
                <h1>Sign in to your Account</h1>
                <form className="flex flex-col gap-3 w-1/2">
                    <input type="text" placeholder="example@gmail.com" className="w-full outline-none border border-purple-600 rounded-md px-4 py-2"/>
                    <button className="w-full bg-purple-600 text-white p-2 rounded-md hover:-translate-y-1 transition-all duration-200">Sign In</button>
                </form>
                
                <div className="w-full flex items-center gap-2 justify-center">
                    <div className="border-t w-full border-gray-400"></div>
                    <p>or</p>
                    <div className="border-t w-full border-gray-400"></div>
                </div>

                <div className="w-full flex items-center justify-center gap-5">
                    <button className="border p-5 text-3xl rounded-md border-gray-400 cursor-pointer"><FcGoogle /></button>
                    <button className="border p-5 text-3xl rounded-md border-gray-400 cursor-pointer"><FaGithub /></button>
                    <button className="border p-5 text-3xl rounded-md border-gray-400 cursor-pointer"><FaApple /></button>
                </div>
            </section>
        </main>
    )
}