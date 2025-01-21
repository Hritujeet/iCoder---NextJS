"use server"
import { ContactModel } from '@/models/contact';
import { connectDb } from '@/utils/db';

export const handleContact = async (formData) => {
    await connectDb()
    const name = formData.get("name")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const msg = formData.get("msg")

    const myContact = new ContactModel({name, email, phone, msg})
    await myContact.save()
}
