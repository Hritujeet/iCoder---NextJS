"use server";
import slugify from "slugify";
import { Post } from "@/models/post";
import { connectDb } from "@/utils/db";

export async function createPost(title, desc, user) {
    if (title && desc && user) {
        await connectDb();
        const slug = slugify(title);
        const post = await Post.create({
            user: user,
            title: title,
            desc: desc,
            slug: slug,
        });

        console.log(post);
    } else {
        throw new Error("Invalid Entries");
    }
}

