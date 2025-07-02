import React from 'react'
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {auth} from "@clerk/nextjs/server";
import PostContainer from "@/components/Posts/PostContainer";

const Blogs = async () => {
    const a = await auth()
    return (
        <main className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="w-full mb-12 bg-gradient-to-br from-indigo-700 via-indigo-500 to-purple-400 h-[38vh] flex flex-col justify-center items-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&w=800&q=80')] bg-cover bg-center" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4">
                    <h1 className="text-center my-3 text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">Read Programming Blogs</h1>
                    <p className="text-center text-lg md:text-xl text-indigo-100 mb-6 max-w-2xl">Explore insightful articles, tutorials, and stories from the coding community. Learn, share, and grow with iCoder.</p>
                    {a.sessionId &&
                        <Link href={`/blogs/create/${a.sessionId}`}><Button size={"lg"} className={"font-semibold text-lg bg-white text-indigo-700 hover:bg-indigo-100 shadow"}>Craft a Blog</Button></Link>}
                </div>
            </section>
            <PostContainer />
        </main>
    )
}

export default Blogs
export const metadata = {
    title: "Blog Posts | iCoder",
    description:
        " iCoder is a blog platform built exclusively for programmers to share their knowledge and explore the world of coding. Whether you're learning or teaching, iCoder provides the perfect space to write and read blogs on programming languages, frameworks, tools, and the latest tech trends. Join the ultimate community of coders and turn your passion for coding into insightful content.",
};
