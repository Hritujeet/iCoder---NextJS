import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {auth} from "@clerk/nextjs/server";
import PostCrousel from "@/components/PostCrousel";

export default async function Home() {
    const a = await auth()
    
    return (
        <div className="space-y-10">
            <section>
                <Hero user={a.userId}/>
            </section>
            <section>
                <Featured></Featured>
            </section>
            <section className="flex flex-col justify-center space-y-10 items-center">
                <PostCrousel></PostCrousel>
                <Link className="my-4 w-[80vw]" href={"/blogs"}><Button className="w-full text-lg font-semibold" variant="dark">Discover Blogs</Button></Link>
            </section>
        </div>
    );
}

