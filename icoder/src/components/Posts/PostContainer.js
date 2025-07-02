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
            return allPosts;
        },
    });

    return (
        <div className="w-full px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {!isLoading &&
                    data?.posts?.map((post) => (
                        <PostCard
                            key={post.slug}
                            title={post.title}
                            username={post.user}
                            slug={post.slug}
                            coverImg={post.coverImg}
                        />
                    ))}

                {isLoading && (
                    Array.from({length: 6}).map((_, idx) => (
                        <div key={idx} className="flex flex-col rounded-2xl shadow-lg border border-gray-100 overflow-hidden bg-white">
                            <Skeleton className="h-48 w-full rounded-none"/>
                            <div className="p-4 space-y-3">
                                <Skeleton className="h-6 w-3/4"/>
                                <Skeleton className="h-4 w-1/2"/>
                                <Skeleton className="h-4 w-full"/>
                                <Skeleton className="h-4 w-5/6"/>
                                <Skeleton className="h-10 w-full rounded-lg mt-4"/>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default PostContainer;
