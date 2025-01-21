import { Comment } from "@/models/comment";
import { connectDb } from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request, {params}){
    const postId = (await params).postId
    console.log(postId);
    
    await connectDb()
    const comments = await Comment.find({postId})
    return NextResponse.json({message:"It works!", comments});
}
