import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    msg: { type: String, required: true },
}, {timestamps:true});

export const ContactModel = mongoose.models?.Contact || mongoose.model("Contact", ContactSchema);
