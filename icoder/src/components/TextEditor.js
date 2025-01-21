"use client";
import React, { useRef, useState } from "react";
import { Button } from "./ui/button";
import {
    Bold,
    Heading,
    Heading1,
    Heading2,
    Heading3,
    Italic,
    ListIcon,
    ListOrdered,
    Underline,
} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "react-toastify";
import { createPost } from "@/actions/post.actions";
import { useUser } from "@clerk/nextjs";
import { Input } from "./ui/input";

const RichTextEditor = () => {
    const editorRef = useRef();
    const [title, settitle] = useState("")
    const {user} = useUser();

    const execCommand = (command, value = null) => {
        document.execCommand(command, false, value);
    };
    const handleCreate = async () => {
        if (editorRef.current.innerHTML && title !== "") {
            await createPost(title, editorRef.current.innerHTML, user.username)
            toast.success("Post has been added Successfully")
            settitle("")
            editorRef.current.innerHTML = ""
        }
        else{
            toast.error("Content and Title Cannot be Empty")
        }
    };

    return (
        <div className="p-6 max-w-3xl mx-auto space-y-4">
            <div className="w-full space-y-2">
                <label
                    htmlFor="title"
                    className="font-sembold text-lg cursor-pointer"
                >
                    What Should We Call Your Blog?
                </label>
                <Input
                    value={title}
                    onChange={(e)=>{
                        settitle(e.target.value)
                    }}
                    id="title"
                    type="text"
                    placeholder="Blog Title"
                />
            </div>
            <div className="mb-4 bg-zinc-100 border border-gray-300 rounded-md p-2 flex justify-center items-center flex-wrap gap-2">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant={"dark"}>
                            <Heading></Heading> Headings
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>
                            <Button
                                variant={"dark"}
                                size={"sm"}
                                onClick={() => execCommand("formatBlock", "h1")}
                                aria-label="Toggle italic"
                            >
                                <Heading1 className="h-4 w-4" />
                                <span>Heading 1</span>
                            </Button>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Button
                                variant={"dark"}
                                size={"sm"}
                                onClick={() => execCommand("formatBlock", "h2")}
                                aria-label="Toggle italic"
                            >
                                <Heading2 className="h-4 w-4" />
                                <span>Heading 2</span>
                            </Button>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Button
                                variant={"dark"}
                                size={"sm"}
                                onClick={() => execCommand("formatBlock", "h3")}
                                aria-label="Toggle italic"
                            >
                                <Heading3 className="h-4 w-4" />
                                <span>Heading 3</span>
                            </Button>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Button
                    variant={"dark"}
                    size={"sm"}
                    onClick={() => execCommand("bold")}
                    aria-label="Toggle italic"
                >
                    <Bold className="h-4 w-4" />
                </Button>
                <Button
                    variant={"dark"}
                    size={"sm"}
                    onClick={() => execCommand("italics")}
                    aria-label="Toggle italic"
                >
                    <Italic className="h-4 w-4" />
                </Button>
                <Button
                    variant={"dark"}
                    size={"sm"}
                    onClick={() => execCommand("underline")}
                    aria-label="Toggle italic"
                >
                    <Underline className="h-4 w-4" />
                </Button>
                <Button
                    variant={"dark"}
                    size={"sm"}
                    onClick={() => execCommand("insertOrderedList")}
                    aria-label="Toggle italic"
                >
                    <ListOrdered className="h-4 w-4" />
                </Button>
                <Button
                    variant={"dark"}
                    size={"sm"}
                    onClick={() => execCommand("insertUnorderedList")}
                    aria-label="Toggle italic"
                >
                    <ListIcon className="h-4 w-4" />
                </Button>
            </div>

            <div
                ref={editorRef}
                contentEditable
                className="min-h-[300px] border border-gray-300 rounded-md bg-white p-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 overflow-auto"
            ></div>

            <Button
                onClick={handleCreate}
                variant={"dark"}
                className="my-5 font-semibold mr-1"
            >
                Create
            </Button>
        </div>
    );
};

export default RichTextEditor;
