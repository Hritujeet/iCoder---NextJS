import { connectDb } from "@/utils/db";
import { NextResponse } from "next/server";
import {Post} from "@/models/post";

export async function GET(){
    await connectDb()
    const posts = await Post.find().sort({createdAt: -1})
    return NextResponse.json({message:"It works!", posts});
}
