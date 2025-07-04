// app/page.jsx
import Featured from "@/components/Home/Featured";
import Hero from "@/components/Home/Hero";
import {auth} from "@clerk/nextjs/server";

export default async function Home() {
    const a = await auth(); // Server-side authentication

    return (
        <div className="space-y-10">
            <section>
                <Hero user={a.userId}/>
            </section>
            <section>
                <Featured user={a.userId} />
            </section>
        </div>
    );
}

export const metadata = {
    title: "Home | iCoder",
    description:
        " iCoder is a blog platform built exclusively for programmers to share their knowledge and explore the world of coding. Whether you're learning or teaching, iCoder provides the perfect space to write and read blogs on programming languages, frameworks, tools, and the latest tech trends. Join the ultimate community of coders and turn your passion for coding into insightful content.",
};
