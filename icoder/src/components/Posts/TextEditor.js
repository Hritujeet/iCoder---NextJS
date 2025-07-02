"use client";
import React, { useRef, useState } from "react";
import { Button } from "../ui/button";
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
    Image as ImageIcon,
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
import { Input } from "../ui/input";
import LoadingSpinner from "@/components/main/LoadingSpinner";

const RichTextEditor = () => {
    const editorRef = useRef();
    const [title, settitle] = useState("");
    const [coverImg, setCoverImg] = useState("");
    const [loading, setLoading] = useState(false);
    const { user } = useUser();

    const execCommand = (command, value = null) => {
        document.execCommand(command, false, value);
    };
    const handleCreate = async () => {
        setLoading(true);
        if (editorRef.current.innerHTML && title !== "") {
            await createPost(title, editorRef.current.innerHTML, user.username, coverImg);
            toast.success("Post has been added Successfully");
            settitle("");
            setCoverImg("");
            editorRef.current.innerHTML = "";
        } else {
            toast.error("Content and Title Cannot be Empty");
        }
        setLoading(false);
    };

    // Handle cover image input
    const handleCoverImgChange = (e) => {
        setCoverImg(e.target.value);
    };

    return (
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-6">
            <div className="w-full space-y-2">
                <label htmlFor="title" className="font-semibold text-lg cursor-pointer">
                    What Should We Call Your Blog?
                </label>
                <Input
                    value={title}
                    onChange={(e) => settitle(e.target.value)}
                    id="title"
                    type="text"
                    placeholder="Blog Title"
                />
            </div>
            <div className="w-full space-y-2">
                <label htmlFor="coverImg" className="font-semibold text-lg cursor-pointer">
                    Cover Image URL (optional)
                </label>
                <div className="flex gap-2 items-center">
                    <Input
                        value={coverImg}
                        onChange={handleCoverImgChange}
                        id="coverImg"
                        type="text"
                        placeholder="Paste an image URL for your blog cover"
                    />
                    <ImageIcon className="h-5 w-5 text-zinc-400" />
                </div>
            </div>
            <div className="mb-4 bg-zinc-100 border border-gray-200 rounded-lg p-3 flex flex-wrap gap-2 items-center shadow-sm">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant={"dark"} size="sm" title="Headings">
                            <Heading className="mr-1" /> Headings
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>
                            <Button
                                variant={"dark"}
                                size={"sm"}
                                onClick={() => execCommand("formatBlock", "h1")}
                                title="Heading 1"
                            >
                                <Heading1 className="h-4 w-4 mr-1" />
                                <span>Heading 1</span>
                            </Button>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Button
                                variant={"dark"}
                                size={"sm"}
                                onClick={() => execCommand("formatBlock", "h2")}
                                title="Heading 2"
                            >
                                <Heading2 className="h-4 w-4 mr-1" />
                                <span>Heading 2</span>
                            </Button>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Button
                                variant={"dark"}
                                size={"sm"}
                                onClick={() => execCommand("formatBlock", "h3")}
                                title="Heading 3"
                            >
                                <Heading3 className="h-4 w-4 mr-1" />
                                <span>Heading 3</span>
                            </Button>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Button variant={"dark"} size="sm" onClick={() => execCommand("bold")}
                        title="Bold"><Bold className="h-4 w-4" /></Button>
                <Button variant={"dark"} size="sm" onClick={() => execCommand("italic")}
                        title="Italic"><Italic className="h-4 w-4" /></Button>
                <Button variant={"dark"} size="sm" onClick={() => execCommand("underline")}
                        title="Underline"><Underline className="h-4 w-4" /></Button>
                <Button variant={"dark"} size="sm" onClick={() => execCommand("insertOrderedList")}
                        title="Numbered List"><ListOrdered className="h-4 w-4" /></Button>
                <Button variant={"dark"} size="sm" onClick={() => execCommand("insertUnorderedList")}
                        title="Bullet List"><ListIcon className="h-4 w-4" /></Button>
            </div>
            <div
                ref={editorRef}
                contentEditable
                className="min-h-[300px] border border-gray-300 rounded-lg bg-zinc-50 p-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-shadow placeholder:text-gray-400"
                data-placeholder="Write your blog content here..."
                aria-label="Blog Content Editor"
            ></div>
            <Button
                onClick={handleCreate}
                variant={"dark"}
                className="my-5 font-semibold w-full py-3 text-lg"
                disabled={loading}
            >
                {loading ? <LoadingSpinner /> : "Create Post"}
            </Button>
        </div>
    );
};

export default RichTextEditor;
