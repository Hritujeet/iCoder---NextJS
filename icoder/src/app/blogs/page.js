import React from 'react'
import PostCard from "@/components/PostCard";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {fetchPosts} from "@/actions/post.actions";
import {auth} from "@clerk/nextjs/server";

const Blogs = async () => {
    const posts = await fetchPosts()
    const a = await auth()
    return (
        <section className="flex flex-col justify-center items-center">
            <div className="text-white px-10 w-full mb-10 bg-zinc-900 h-[40vh] flex flex-col justify-center items-center">
                <h1 className="text-center my-5 texttext-3xl md:text-5xl font-bold">Read Programming Blogs</h1>
                {a.sessionId && <Link href={`/blogs/create/${a.sessionId}`}><Button size={"lg"} className={"font-semibold text-lg"}>Craft a
                    Blog</Button></Link>}
            </div>
            <div className="w-[90vw] md:w-[60vw] px-4 py-2 flex flex-col gap-4">
                {posts.map(post => {
                    return (
                        <PostCard key={post.id} title={post.title} description={post.desc} username={post.user} slug={post.slug}></PostCard>)
                })}
            </div>
        </section>
    )
}

export default Blogs