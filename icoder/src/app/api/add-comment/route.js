import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { Comment } from "@/models/comment";
import { connectDb } from "@/utils/db";

export async function POST(request) {
    await connectDb()
    const user = await currentUser()
    const {comment, postId} = await request.json(); // Parse the request body
    

    const newComment = await Comment.create({
        user: user.username,
        postId,
        desc:comment
    })
    
    return NextResponse.json({ message: "It works!", newComment});
}
