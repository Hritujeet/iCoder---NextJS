import React from 'react'
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {auth} from "@clerk/nextjs/server";
import PostContainer from "@/components/Posts/PostContainer";

const Blogs = async () => {
    const a = await auth()
    return (
        <section className="flex flex-col justify-center items-center">
            <div
                className="text-white px-10 w-full mb-10 bg-zinc-900 h-[40vh] flex flex-col justify-center items-center">
                <h1 className="text-center my-5 texttext-3xl md:text-5xl font-bold">Read Programming Blogs</h1>
                {a.sessionId &&
                    <Link href={`/blogs/create/${a.sessionId}`}><Button size={"lg"} className={"font-semibold text-lg"}>Craft
                        a
                        Blog</Button></Link>}
            </div>
            <PostContainer></PostContainer>
        </section>
    )
}

export default Blogs
export const metadata = {
    title: "Blog Posts | iCoder",
    description:
        " iCoder is a blog platform built exclusively for programmers to share their knowledge and explore the world of coding. Whether you're learning or teaching, iCoder provides the perfect space to write and read blogs on programming languages, frameworks, tools, and the latest tech trends. Join the ultimate community of coders and turn your passion for coding into insightful content.",
};
