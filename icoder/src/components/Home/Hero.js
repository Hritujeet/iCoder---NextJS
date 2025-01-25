"use client"
import React from 'react'
import heroImg from "@/assets/vercel.svg"
import Image from 'next/image'
import {Button, buttonVariants} from '../ui/button'
import Link from 'next/link'
import {useRouter} from "next/navigation";

const Hero = ({user}) => {
    const router = useRouter()
    return (
        <div className='flex justify-center md:justify-evenly items-center w-screen text-white bg-zinc-900 h-[60vh]'>
            <div className="left w-[80vw] space-y-4 md:w-[40vw]">
                <h1 className="text-4xl font-bold md:text-5xl">iCoder - Heaven for coders</h1>
                <p className="md:text-lg text-zinc-400">Unleash your coding passion—write, learn, and connect with a
                    thriving community of programmers. At iCoder, every coder has a story to tell.</p>
                <div className="buttons flex gap-4">
                    <Link href='/blogs'><Button variant={"outline"}>Read Blogs</Button></Link>
                    <button onClick={(e) => {
                        e.target.innerText = "Loading..."
                        if (!user) {
                            router.push("/sign-in")
                        } else {
                            router.push(`/blogs/create/${user}`)
                        }
                    }} className={`font-semibold ${buttonVariants({variant: "default"})}`}>Start Writing
                    </button>
                </div>
            </div>
            <div className="right hidden md:block w-[20vw]">
                <Image src={heroImg} alt='hero-image'/>
            </div>
        </div>
    )
}

export default Hero