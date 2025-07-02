import React from "react";
import TextEditor from "@/components/Posts/TextEditor";
import {auth} from "@clerk/nextjs/server";
import {SignInButton} from "@clerk/nextjs";
import {buttonVariants} from "@/components/ui/button";
import { Pencil } from "lucide-react";

const Page = async () => {
    const a = await auth();
    return (
        <main className="bg-gray-50 min-h-screen">
            {/* Hero/Intro Section */}
            <section className="w-full bg-gradient-to-br from-indigo-700 via-indigo-500 to-purple-400 h-[32vh] flex flex-col justify-center items-center relative overflow-hidden mb-10">
                <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4">
                    <Pencil className="w-12 h-12 text-white mb-2" />
                    <h1 className="text-center text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-2">Craft a Blog</h1>
                    <p className="text-center text-lg md:text-xl text-indigo-100 max-w-2xl">Share your thoughts, tutorials, and stories with the iCoder community. Use the editor below to create a beautiful blog post!</p>
                </div>
            </section>
            <div className="max-w-3xl mx-auto px-4">
                {a.sessionId && <>
                    <ul className="mx-auto space-y-2 flex justify-center items-start flex-col w-full text-zinc-500 mb-6">
                        <li>The modes like heading, bold, etc. are applicable for the whole line. They cannot be untoggled by re-clicking them. They get untoggled by default on going to a new line.</li>
                        <li>Some features may not be there. They will be rolled out in future updates.</li>
                    </ul>
                    <TextEditor />
                </>}
                {!a.sessionId && <>
                    <div className="flex flex-col gap-4 mx-auto my-10 justify-center items-center px-6 py-10 bg-white rounded-2xl shadow-lg max-w-xl">
                        <span className="text-lg font-semibold text-zinc-700">You need to login to be able to add blog posts</span>
                        <SignInButton className={buttonVariants({variant: "dark"})}></SignInButton>
                    </div>
                </>}
            </div>
        </main>
    );
};

export default Page;
export const metadata = {
    title: "Craft a Blog | iCoder",
    description:
        " iCoder is a blog platform built exclusively for programmers to share their knowledge and explore the world of coding. Whether you're learning or teaching, iCoder provides the perfect space to write and read blogs on programming languages, frameworks, tools, and the latest tech trends. Join the ultimate community of coders and turn your passion for coding into insightful content.",
};
