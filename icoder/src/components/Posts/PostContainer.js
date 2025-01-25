"use client";
import React from "react";
import {useQuery} from "@tanstack/react-query";
import {Skeleton} from "@/components/ui/skeleton";
import PostCard from "@/components/Posts/PostCard";

const PostContainer = () => {
    const {data, isLoading} = useQuery({
        queryKey: ["post"],
        queryFn: async () => {
            const response = await fetch("/api/posts/");
            const allPosts = await response.json();
            console.log(allPosts);
            return allPosts;
        },
    });

    return (
        <div>
            <div className="w-[90vw] md:w-[60vw] px-4 py-2 flex flex-col gap-4">
                {!isLoading &&
                    data?.posts?.map((post) => (
                        <PostCard
                            key={post.slug}
                            title={post.title}
                            description={post.desc}
                            username={post.user}
                            slug={post.slug}
                        />
                    ))}

                {isLoading && (
                <div className={"space-y-10"}>
                    <div className="flex flex-col space-y-3">
                        <Skeleton className="h-20 w-full rounded-xl"/>
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-full"/>
                            <Skeleton className="h-4 w-full"/>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-3">
                        <Skeleton className="h-20 w-full rounded-xl"/>
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-full"/>
                            <Skeleton className="h-4 w-full"/>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
};

export default PostContainer;
