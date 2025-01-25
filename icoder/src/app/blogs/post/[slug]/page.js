import React from "react";
import {Post} from "@/models/post";
import AddComment from "@/components/Comments/AddComment";
import CommentContainer from "@/components/Comments/CommentContainer";

const PostPage = async (urlParams) => {
    const {params} = await urlParams;
    const {slug} = await params
    const myPost = await Post.findOne({slug: slug});
    return (
        <section className="flex flex-col justify-center items-center">
            <div className="text-white px-6 w-full mb-10 bg-zinc-900 h-[40vh] flex flex-col justify-center items-center">
                <h1 className="text-center my-5 text-3xl md:text-5xl font-bold">
                    {myPost.title}
                </h1>
                <p className="text-zinc-400 text-lg font-semibold">
                    Author - @{myPost.user}
                </p>
            </div>
            <div className={"container md:w-[60vw] px-10"}>
                <div
                    className="content my-5"
                    dangerouslySetInnerHTML={{__html: myPost.desc}}
                ></div>
            </div>
            <div className="w-[75vw] mx-auto">
                <h1 className="text-2xl my-4">Share Your Thoughts</h1>
                <div className="mb-10 mt-4 w-full">
                    <AddComment postId={myPost.id}></AddComment>
                </div>
                <hr/>
                <div className="my-10">
                    <h1 className="text-2xl my-4">Comments for {myPost.title}</h1>
                    <CommentContainer postId={myPost.id}></CommentContainer>
                </div>
            </div>
        </section>
    );
};

export default PostPage;
export const metadata = {
    title: "Read Post | iCoder",
    description:
        " iCoder is a blog platform built exclusively for programmers to share their knowledge and explore the world of coding. Whether you're learning or teaching, iCoder provides the perfect space to write and read blogs on programming languages, frameworks, tools, and the latest tech trends. Join the ultimate community of coders and turn your passion for coding into insightful content.",
};
