import React from "react";
import { Post } from "@/models/post";
import AddComment from "@/components/AddComment";
import CommentCard from "@/components/CommentCard";
import CommentContainer from "@/components/CommentContainer";

const PostPage = async (urlParams) => {
    const { params } = await urlParams;
    const {slug} = await params
    const myPost = await Post.findOne({ slug: slug });
    return (
        <section className="flex flex-col justify-center items-center">
            <div className="text-white w-full mb-10 bg-zinc-900 h-[40vh] flex flex-col justify-center items-center">
                <h1 className="text-center my-5 text-4xl md:text-5xl font-bold">
                    {myPost.title}
                </h1>
                <p className="text-zinc-400 text-lg font-semibold">
                    Author - @{myPost.user}
                </p>
            </div>
            <div className={"container md:w-[60vw] px-10"}>
                <div
                    className="content my-5"
                    dangerouslySetInnerHTML={{ __html: myPost.desc }}
                ></div>
            </div>
            <div className="w-[75vw] mx-auto">
                <h1 className="text-2xl my-4">Share Your Thoughts</h1>
                <div className="mb-10 mt-4 w-full">
                    <AddComment postId={myPost.id}></AddComment>
                </div>
                <hr />
                <div className="my-10">
                    <h1 className="text-2xl my-4">Comments for {myPost.title}</h1>
                    <CommentContainer postId={myPost.id}></CommentContainer>
                </div>
            </div>
        </section>
    );
};

export default PostPage;
