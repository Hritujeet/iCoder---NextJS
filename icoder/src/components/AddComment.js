"use client";
import React, {useState} from "react";
import {Input} from "./ui/input";
import {Button, buttonVariants} from "./ui/button";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {toast} from "react-toastify";
import {SignedIn, SignedOut, SignInButton} from "@clerk/nextjs";

const AddComment = ({postId}) => {
    const [comment, setcomment] = useState("");
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (comment) => {
            if (comment !== "") {
                try {
                    const res = await fetch("/api/add-comment", {
                        method: "POST",
                        body: JSON.stringify({comment, postId}),
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
            queryClient.invalidateQueries({queryKey: ["comments"]});
        },
    });

    return (
        <>
            <SignedIn>
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
            </SignedIn>
            <SignedOut>
                <div className="container flex-col flex gap-4 mx-auto my-5 justify-center items-center px-6 text-lg font-semibold">
                    <span>You need to login to be able to Add Comments</span>
                    <SignInButton className={buttonVariants({variant: "dark"})}></SignInButton>
                </div>
            </SignedOut>
        </>
    );
};

export default AddComment;
