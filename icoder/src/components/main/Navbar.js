"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    SignedIn,
    SignedOut,
    SignInButton,
    SignOutButton,
} from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { Menu, X, User, Code2 } from "lucide-react";

function Navbar() {
    const { user } = useUser();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/blogs", label: "Blogs" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-zinc-900 to-slate-900 backdrop-blur-md border-b border-zinc-800 shadow-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link 
                            href="/" 
                            className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors duration-300"
                        >
                            <Code2 className="h-8 w-8 text-blue-500" />
                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                iCoder
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-gray-300 hover:text-white hover:bg-zinc-800 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg relative group"
                                >
                                    {item.label}
                                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-3">
                        <SignedOut>
                            <SignInButton>
                                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg">
                                    Sign In
                                </button>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <Link
                                href={`/user-profile/${user?.id}`}
                                className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-zinc-800 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105"
                            >
                                <User className="h-4 w-4" />
                                <span className="text-sm font-medium">Profile</span>
                            </Link>
                            <SignOutButton>
                                <button className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg">
                                    Sign Out
                                </button>
                            </SignOutButton>
                        </SignedIn>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-gray-400 hover:text-white hover:bg-zinc-800 p-2 rounded-lg transition-colors duration-200"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div 
                className={`md:hidden transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0 overflow-hidden'
                }`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 bg-zinc-900/95 backdrop-blur-lg border-t border-zinc-800">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-gray-300 hover:text-white hover:bg-zinc-800 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    
                    {/* Mobile Auth Section */}
                    <div className="pt-4 pb-2 border-t border-zinc-700 mt-4">
                        <SignedOut>
                            <SignInButton>
                                <button 
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-200"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Sign In
                                </button>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <div className="space-y-2">
                                <Link
                                    href={`/user-profile/${user?.id}`}
                                    className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-zinc-800 px-4 py-3 rounded-lg transition-all duration-200 w-full"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <User className="h-5 w-5" />
                                    <span>My Profile</span>
                                </Link>
                                <SignOutButton>
                                    <button 
                                        className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-200"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Sign Out
                                    </button>
                                </SignOutButton>
                            </div>
                        </SignedIn>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;