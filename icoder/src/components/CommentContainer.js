"use client";
import React from "react";
import CommentCard from "./CommentCard";
import { useQuery } from "@tanstack/react-query";

const CommentContainer = ({postId}) => {
    const { isLoading, error, data } = useQuery({
        queryKey: ["comments"],
        queryFn: async () => {
            const res = await fetch(`/api/fetch-comment/${postId}`);
            let data;
            data = await res.json();
            return data;
        },
    });
    
    if (isLoading) {
        return (
            <p className="text-lg font-semibold text-zinc-400">
                Loading...
            </p>
        );
    }

    if (error) {
        return (
            <p className="text-lg font-semibold text-red-400">
                Error loading comments: {error.message}
            </p>
        );
    }

    return (
        <div className="grid md:grid-cols-2 gap-3">
            {data.comments.length === 0 ? (
                <p key={23} className="text-lg font-semibold text-zinc-400">
                    No Comments yet
                </p>
            ) : (
                data.comments.map(comment => (
                    <CommentCard key={data.comments.indexOf(comment)} comment={comment} />
                ))
            )}
        </div>
    );
};

export default CommentContainer;
