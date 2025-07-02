import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import Image from "next/image";


const PostCard = (props) => {
    const truncatedDescription = `${props.description.substring(0, 200)}...`
    // Placeholder image if not provided
    const coverImg = props.coverImg || "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&w=800&q=80";
    return (
        <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 overflow-hidden bg-white flex flex-col h-full">
            <div className="relative w-full h-48">
                <Image src={coverImg} alt={props.title} fill className="object-cover w-full h-full"/>
            </div>
            <CardHeader className="flex-1">
                <CardTitle className="text-2xl font-bold text-indigo-700 mb-1">{props.title}</CardTitle>
                <CardDescription className="text-gray-500 mb-2">By @{props.username}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
                <div className="text-gray-700 text-base" dangerouslySetInnerHTML={{ __html: truncatedDescription }} />
            </CardContent>
            <CardFooter className="mt-auto">
                <Link className={buttonVariants({variant: "dark"}) + " w-full text-center"} href={`/blogs/post/${props.slug}`}>Read More</Link>
            </CardFooter>
        </Card>
    );
};

export default PostCard;