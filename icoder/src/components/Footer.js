import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className="flex flex-col md:flex-row justify-between items-center mx-20 py-10 mt-20 border-t-2">
            <div className="logo font-bold text-xl">
                @iCoder
            </div>
            <div className="navigation text-base md:text-lg">
                <ul className="flex gap-4 list-none justify-center items-center">
                    <li className="hover:text-zinc-800 duration-150 border-b-2 py-1 border-transparent hover:border-zinc-600">
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li className="hover:text-zinc-800 duration-150 border-b-2 py-1 border-transparent hover:border-zinc-600">
                        <Link href={"/blogs"}>Blogs</Link>
                    </li>
                    <li className="hover:text-zinc-800 duration-150 border-b-2 py-1 border-transparent hover:border-zinc-600">
                        <Link href={"/about"}>About</Link>
                    </li>
                    <li className="hover:text-zinc-800 duration-150 border-b-2 py-1 border-transparent hover:border-zinc-600">
                        <Link href={"/contact"}>Contact</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
