import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    user: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    desc: { type: String, required: true },
}, {timestamps:true});
export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);
