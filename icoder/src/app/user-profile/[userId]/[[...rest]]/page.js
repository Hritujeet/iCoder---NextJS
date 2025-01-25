import { UserProfile } from "@clerk/nextjs";
import React from "react";

const page = () => {
    return (
        <div className="container h-auto my-10 mx-auto flex justify-center items-center">
            <UserProfile />
        </div>
    );
};

export default page;
export const metadata = {
    title: "User Profile | iCoder",
    description:
        " iCoder is a blog platform built exclusively for programmers to share their knowledge and explore the world of coding. Whether you're learning or teaching, iCoder provides the perfect space to write and read blogs on programming languages, frameworks, tools, and the latest tech trends. Join the ultimate community of coders and turn your passion for coding into insightful content.",
};