import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    user: { type: String, required: true },
    postId: { type: String, required: true },
    desc: { type: String, required: true },
}, {timestamps:true});

export const Comment = mongoose.models?.Comment || mongoose.model("Comment", commentSchema);
