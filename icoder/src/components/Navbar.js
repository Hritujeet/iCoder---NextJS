"use client";
import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
    SignedIn,
    SignedOut,
    SignInButton,
    SignOutButton,
} from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

function Navbar() {
    const { user } = useUser();

    return (
        <div
            className="flex flex-col md:flex-row gap-4 justify-evenly items-center px-6 py-3 md:py-4 h-auto bg-zinc-900 text-white relative md:font-semibold"
            role="navigation"
        >
            <div className="left text-3xl font-bold">
                <Link href={"/"}>iCoder</Link>
            </div>
            <div className="navigation text-base md:text-lg">
                <ul className="flex list-none gap-4 justify-center items-center">
                    <li className="hover:text-zinc-300 duration-150 border-b-2 py-1 border-transparent hover:border-zinc-600">
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li className="hover:text-zinc-300 duration-150 border-b-2 py-1 border-transparent hover:border-zinc-600">
                        <Link href={"/blogs"}>Blogs</Link>
                    </li>
                    <li className="hover:text-zinc-300 duration-150 border-b-2 py-1 border-transparent hover:border-zinc-600">
                        <Link href={"/about"}>About</Link>
                    </li>
                    <li className="hover:text-zinc-300 duration-150 border-b-2 py-1 border-transparent hover:border-zinc-600">
                        <Link href={"/contact"}>Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="right">
                <ul className="flex justify-center items-center gap-4 p-1 list-none">
                    <SignedOut>
                        <li>
                            <SignInButton
                                className={`${buttonVariants({
                                    variant: "default",
                                    size: "sm",
                                })}`}
                            ></SignInButton>
                        </li>
                    </SignedOut>
                    <SignedIn>
                        <li>
                            <SignOutButton
                                className={buttonVariants({
                                    variant: "destructive",
                                    size: "sm",
                                })}
                            ></SignOutButton>
                        </li>
                        {user && (
                            <li>
                                <Link
                                    className={buttonVariants({
                                        variant: "default",
                                        size: "sm",
                                    })}
                                    href={`/user-profile/${user.id}`}
                                >
                                    MyProfile
                                </Link>
                            </li>
                        )}
                    </SignedIn>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
