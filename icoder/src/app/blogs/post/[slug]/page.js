import React from "react";
import {Post} from "@/models/post";
import AddComment from "@/components/Comments/AddComment";
import CommentContainer from "@/components/Comments/CommentContainer";
import {connectDb} from "@/utils/db";
import Image from "next/image";

const PostPage = async (urlParams) => {
    await connectDb();
    const {params} = await urlParams;
    const {slug} = await params;
    const myPost = await Post.findOne({slug: slug});
    // Use a placeholder cover image if not available
    const coverImg = myPost.coverImg || "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&w=800&q=80";
    return (
        <main className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full h-[38vh] md:h-[48vh] flex items-center justify-center mb-10 overflow-hidden">
                <Image src={coverImg} alt={myPost.title} fill priority className="object-cover w-full h-full absolute inset-0 z-0 scale-105 blur-[1.5px] md:blur-none transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/90 to-zinc-900/60 z-10" />
                <div className="relative z-20 flex flex-col items-center justify-center w-full h-full px-4">
                    <h1 className="text-center text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-2 leading-tight md:leading-snug">
                        {myPost.title}
                    </h1>
                    <p className="text-zinc-200 text-base md:text-lg font-semibold">By @{myPost.user}</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="max-w-3xl mx-auto px-2 sm:px-4 md:px-8">
                <div className="bg-white rounded-2xl shadow-xl border border-zinc-100 p-4 sm:p-8 mb-12 transition-shadow hover:shadow-2xl">
                    <div className="prose prose-lg max-w-none text-gray-800 blog-content" dangerouslySetInnerHTML={{__html: myPost.desc}} />
                </div>
            </section>

            {/* Comments Section */}
            <section className="max-w-3xl mx-auto px-2 sm:px-4 md:px-8 mb-16">
                <div className="bg-white rounded-2xl shadow-md border border-zinc-100 p-4 sm:p-6 mb-8 transition-shadow hover:shadow-lg">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-indigo-700">Share Your Thoughts</h2>
                    <AddComment postId={myPost.id} />
                </div>
                <div className="bg-white rounded-2xl shadow-md border border-zinc-100 p-4 sm:p-6">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-indigo-700">Comments for {myPost.title}</h2>
                    <CommentContainer postId={myPost.id} />
                </div>
            </section>
        </main>
    );
};

export default PostPage;
export const metadata = {
    title: "Read Post | iCoder",
    description:
        " iCoder is a blog platform built exclusively for programmers to share their knowledge and explore the world of coding. Whether you're learning or teaching, iCoder provides the perfect space to write and read blogs on programming languages, frameworks, tools, and the latest tech trends. Join the ultimate community of coders and turn your passion for coding into insightful content.",
};
