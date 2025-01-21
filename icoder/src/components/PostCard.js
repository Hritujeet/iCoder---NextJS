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


const PostCard = (props) => {
    const truncatedDescription = `${props.description.substring(0, 200)}...`
    return (
        <Card>
            <CardHeader>
                <CardTitle>{props.title}</CardTitle>
                <CardDescription>Author - @{props.username}</CardDescription>
            </CardHeader>
            <CardContent dangerouslySetInnerHTML={{ __html: truncatedDescription }} >
            </CardContent>
            <CardFooter>
                <Link className={buttonVariants({variant: "dark"})} href={`/blogs/post/${props.slug}`}>Read More</Link>
            </CardFooter>
        </Card>

    );
};

export default PostCard;