import React from "react";
import TextEditor from "@/components/TextEditor";
import {auth} from "@clerk/nextjs/server";
import {SignInButton} from "@clerk/nextjs";
import {buttonVariants} from "@/components/ui/button";

const Page = async () => {
    const a = await auth()
    return (
        <div className="w-[80vw] mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold my-10 text-center">
                iCoder - Share Your Thoughts with the World
            </h1>
            {a.sessionId && <>
                <ul
                    className={
                        "mx-auto space-y-2 flex justify-center items-start flex-col w-[80vw] md:w-[50vw] text-zinc-500"
                    }
                >
                    <li>The modes likheading, bold, etc. are applicable for the whole line. They cannot be untoggled by
                        re-clicking them. They get untoggled by defualt on going to a new line.
                    </li>
                    <li>Some Features may not be there. They will rolled out in future.</li>
                </ul>
                <div className="w-[60vw] mx-auto my-5 space-y-4">
                    <TextEditor></TextEditor>
                </div>
            </>}
            {!a.sessionId && <>
                <div
                    className="container flex-col flex gap-4 mx-auto my-5 justify-center items-center px-6 text-lg font-semibold">
                    <span>You need to login to be able to Add Blog Posts</span>
                    <SignInButton className={buttonVariants({variant: "dark"})}></SignInButton>
                </div>
            </>}
        </div>
    );
};

export default Page;
