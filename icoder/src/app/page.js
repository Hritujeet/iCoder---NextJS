// app/page.jsx
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import {auth} from "@clerk/nextjs/server";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
    const a = await auth(); // Server-side authentication

    return (
        <div className="space-y-10">
            <section>
                <Hero user={a.userId}/>
            </section>
            <section>
                <Featured/>
            </section>
            <section className="flex flex-col justify-center space-y-10 items-center">
                <Link className="my-4 w-[80vw]" href={"/blogs"}>
                    <Button className="w-full text-lg font-semibold" variant="dark">
                        Discover Blogs
                    </Button>
                </Link>
            </section>
        </div>
    );
}
