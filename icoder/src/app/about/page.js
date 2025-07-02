import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Play } from "lucide-react";
import {auth} from "@clerk/nextjs/server";

const features = [
    {
        title: "Write & Share",
        desc: "Publish articles, tutorials, and insights on programming, frameworks, and tech trends. Empower others with your knowledge.",
        icon: "📝",
    },
    {
        title: "Connect & Discuss",
        desc: "Engage with a vibrant community through comments, discussions, and collaborations. Grow your network and learn together.",
        icon: "💬",
    },
    {
        title: "Grow & Learn",
        desc: "Discover new ideas, stay ahead of trends, and build your personal brand as a developer. iCoder is your space to thrive.",
        icon: "🚀",
    },
];

const About = async () => {
    const a = await auth();
    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-zinc-900 text-white py-20 px-4">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 flex flex-col gap-6">
                        <h1 className="text-5xl font-bold leading-tight mb-2">
                            Empowering Coders, Inspiring Innovation
                        </h1>
                        <p className="text-lg text-zinc-300 mb-4">
                            iCoder is a modern platform where programmers share,
                            learn, and connect. Join a thriving tech community
                            and shape the future of coding content.
                        </p>
                        <Link
                            href="/blogs"
                            className="w-fit px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition font-semibold text-lg"
                        >
                            Explore Blogs
                        </Link>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <Image
                            width={400}
                            height={400}
                            className="rounded-3xl object-cover border border-gray-200 shadow-lg"
                            src="https://pagedone.io/asset/uploads/1717742431.png"
                            alt="About iCoder Hero"
                        />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">
                        Why Choose iCoder?
                    </h2>
                    <div className="flex flex-col md:flex-row gap-8 justify-center">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="flex-1 bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-lg transition"
                            >
                                <div className="text-5xl mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="mt-32 w-[80vw] mx-auto text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-3xl"></div>
                    <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-20 -translate-y-20"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-16 translate-y-16"></div>

                    <div className="relative z-10 space-y-6">
                        <h3 className="text-3xl md:text-4xl font-bold">
                            Ready to Start Your Coding Journey?
                        </h3>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                            Join thousands of developers who are already
                            creating amazing content on iCoder
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button
                                asChild
                                size="lg"
                                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            >
                                <Link
                                    href="/blogs"
                                    className="flex items-center space-x-2"
                                >
                                    <BookOpen className="h-5 w-5" />
                                    <span>Explore Blogs</span>
                                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="group border-2 border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 text-white px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105"
                            >
                                <Link
                                    href={
                                        a.userId
                                            ? `/blogs/create/${a.userId}`
                                            : "/sign-in"
                                    }
                                    className="flex items-center space-x-2"
                                >
                                    <Play className="h-5 w-5" />
                                    <span>Start Writing</span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default About;
export const metadata = {
    title: "About Us | iCoder",
    description:
        "Learn about iCoder, a blog platform built for programmers to share knowledge, connect, and grow together. Discover our mission and join the community!",
};
