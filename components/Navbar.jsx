"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const navLinks = [
        {
            label: "Home",
            url: "/"
        },
        {
            label: "About Us",
            url: "/about"
        },
        {
            label: "Contact",
            url: "/contact"
        },
        {
            label: "Feed",
            url: "/feed"
        },
        {
            label: "Upload",
            url: "/upload"
        }
    ]
    return (
        <main className="flex items-center justify-between md:px-10 md:py-3 p-3 shadow-md">
            <Link href={"/"} className="">
                <Image
                    src={"/logo.png"}
                    alt="logo"
                    width={800}
                    height={800}
                    className="w-10 h-10"
                />
            </Link>

            <div className="flex items-center gap-10">
                {
                    navLinks.map((item) => (
                        <Link href={item.url} className="hover:text-purple-700 transition-colors duration-200">{item.label}</Link>
                    ))
                }
            </div>
        </main>
    )
}