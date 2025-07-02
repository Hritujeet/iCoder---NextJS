"use client";
import React, { useEffect, useState } from "react";
import heroImg from "@/assets/vercel.svg";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Code2, Users, BookOpen, Sparkles, ArrowRight, Play } from "lucide-react";

const Hero = ({ user }) => {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const stats = [
        { icon: Users, label: "Active Coders", value: "10K+" },
        { icon: BookOpen, label: "Blog Posts", value: "500+" },
        { icon: Code2, label: "Languages", value: "20+" },
    ];

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-zinc-900 to-slate-900">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Floating Code Snippets */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 text-blue-400/30 font-mono text-sm animate-float">
                    &lt;/&gt; console.log("Hello World");
                </div>
                <div className="absolute top-32 right-20 text-purple-400/30 font-mono text-sm animate-float delay-1000">
                    {`function code() { return "awesome"; }`}
                </div>
                <div className="absolute bottom-32 left-20 text-green-400/30 font-mono text-sm animate-float delay-500">
                    {`const coder = "passionate";`}
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        {/* Badge */}
                        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 text-sm">
                            <Sparkles className="h-4 w-4 text-blue-400" />
                            <span className="text-blue-300">Welcome to the future of coding</span>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                                <span className="block">iCoder</span>
                                <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                    Heaven for Coders
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                                Unleash your coding passion—write, learn, and connect with a 
                                <span className="text-blue-400 font-semibold"> thriving community </span>
                                of programmers. At iCoder, every coder has a story to tell.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button 
                                asChild 
                                size="lg" 
                                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            >
                                <Link href="/blogs" className="flex items-center space-x-2">
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
                                    href={user ? `/blogs/create/${user}` : "/sign-in"}
                                    className="flex items-center space-x-2"
                                >
                                    <Play className="h-5 w-5" />
                                    <span>Start Writing</span>
                                </Link>
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 pt-8">
                            {stats.map((stat, index) => (
                                <div 
                                    key={index} 
                                    className={`text-center transition-all duration-1000 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                >
                                    <div className="flex justify-center mb-2">
                                        <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30">
                                            <stat.icon className="h-6 w-6 text-blue-400" />
                                        </div>
                                    </div>
                                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                                    <div className="text-sm text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Enhanced Image Section */}
                    <div className={`hidden lg:flex justify-center items-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <div className="relative">
                            {/* Glowing background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl scale-150 animate-pulse"></div>
                            
                            {/* Image container */}
                            <div className="relative bg-gradient-to-br from-zinc-800/50 to-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-zinc-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                                <div className="relative">
                                    <Image
                                        src={heroImg}
                                        height={400}
                                        width={400}
                                        className="w-full h-auto filter brightness-110 hover:brightness-125 transition-all duration-300"
                                        alt="iCoder Hero"
                                        priority
                                    />
                                    
                                    {/* Floating elements around image */}
                                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce"></div>
                                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce delay-500"></div>
                                    <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-bounce delay-1000"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 text-gray-400">
                    <span className="text-sm">Scroll to explore</span>
                    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-gray-400 rounded-full animate-bounce mt-2"></div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .delay-500 {
                    animation-delay: 0.5s;
                }
                .delay-1000 {
                    animation-delay: 1s;
                }
            `}</style>
        </div>
    );
};

export default Hero;