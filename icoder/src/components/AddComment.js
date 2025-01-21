"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const AddComment = ({ postId }) => {
    const [comment, setcomment] = useState("");
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (comment) => {
            if (comment !== "") {
                try {
                    const res = await fetch("/api/add-comment", {
                        method: "POST",
                        body: JSON.stringify({ comment, postId }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });
                    const data = await res.json();
                    setcomment("");
                    toast.success("Comment added successfully");
                    return data;
                } catch (error) {
                    toast.error("Failed to add comment");
                    console.error(error);
                }
            } else {
                toast.error("Comment cannot be empty");
            }
        },
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ["comments"] });
        },
    });
    
    return (
        <div className="space-y-4">
            <Input
                value={comment}
                onChange={(event) => {
                    setcomment(event.target.value);
                }}
                placeholder="Comment"
            ></Input>
            <Button
                onClick={() => {
                    mutation.mutate(comment);
                }}
                variant={"dark"}
            >
                Post
            </Button>
        </div>
    );
};

export default AddComment;
