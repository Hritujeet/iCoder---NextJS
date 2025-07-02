import Link from "next/link";
import React from "react";
import { Code2, Github, Twitter, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const navigationLinks = [
        { href: "/", label: "Home" },
        { href: "/blogs", label: "Blogs" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    const socialLinks = [
        { icon: Github, href: "#", label: "GitHub" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Mail, href: "#", label: "Email" },
    ];

    return (
        <footer className="relative bg-gradient-to-br from-slate-900 via-zinc-900 to-slate-900 text-white mt-20">
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            
            {/* Main footer content */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-6">
                            <Code2 className="h-10 w-10 text-blue-500" />
                            <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                iCoder
                            </span>
                        </div>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
                            Empowering developers with cutting-edge tutorials, insights, and resources to build the future of technology.
                        </p>
                        
                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    className="group p-3 bg-zinc-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg"
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-white">Navigation</h3>
                        <ul className="space-y-3">
                            {navigationLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-200 flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-200 mr-0 group-hover:mr-3"></span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center space-x-2 text-gray-400">
                            <span>&copy; {currentYear} iCoder. All rights reserved.</span>
                            <span className="sm:inline flex items-center">
                                Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for developers
                            </span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;