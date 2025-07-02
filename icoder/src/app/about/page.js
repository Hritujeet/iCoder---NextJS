import React from 'react'
import Link from "next/link";
import Image from "next/image"

const features = [
    {
        title: 'Write & Share',
        desc: 'Publish articles, tutorials, and insights on programming, frameworks, and tech trends. Empower others with your knowledge.',
        icon: '📝',
    },
    {
        title: 'Connect & Discuss',
        desc: 'Engage with a vibrant community through comments, discussions, and collaborations. Grow your network and learn together.',
        icon: '💬',
    },
    {
        title: 'Grow & Learn',
        desc: 'Discover new ideas, stay ahead of trends, and build your personal brand as a developer. iCoder is your space to thrive.',
        icon: '🚀',
    },
];

const About = () => {
    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-zinc-900 text-white py-20 px-4">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 flex flex-col gap-6">
                        <h1 className="text-5xl font-bold leading-tight mb-2">Empowering Coders, Inspiring Innovation</h1>
                        <p className="text-lg text-zinc-300 mb-4">iCoder is a modern platform where programmers share, learn, and connect. Join a thriving tech community and shape the future of coding content.</p>
                        <Link href="/blogs" className="w-fit px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition font-semibold text-lg">
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
                    <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">Why Choose iCoder?</h2>
                    <div className="flex flex-col md:flex-row gap-8 justify-center">
                        {features.map((feature, idx) => (
                            <div key={idx} className="flex-1 bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-lg transition">
                                <div className="text-5xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-2 text-indigo-700">{feature.title}</h3>
                                <p className="text-gray-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Community Invitation Section */}
            <section className="py-16 px-4">
                <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
                    <blockquote className="italic text-lg text-gray-700 border-l-4 border-indigo-600 pl-4">
                        "iCoder has transformed the way I share and learn about programming. The community is welcoming, and the platform is a joy to use!"
                    </blockquote>
                    <span className="text-gray-500">— A Happy iCoder User</span>
                    <Link href="/sign-up" className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition font-semibold text-lg">
                        Join the Community
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default About;
export const metadata = {
    title: "About Us | iCoder",
    description:
        "Learn about iCoder, a blog platform built for programmers to share knowledge, connect, and grow together. Discover our mission and join the community!",
};