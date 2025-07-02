"use client"
import React, { useState } from 'react';
import { Github, Instagram, Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useMutation } from '@tanstack/react-query';
import { handleContact } from "@/actions/contact.actions";

const ContactComponent = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        msg: ''
    });

    const contactMutation = useMutation({
        mutationFn: async (data) => {
            const formData = new FormData();
            Object.entries(data).forEach(([key, value]) => {
                formData.append(key, value);
            });
            return await handleContact(formData);
        },
        onSuccess: () => {
            setFormData({ name: '', email: '', phone: '', msg: '' });
        }
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        contactMutation.mutate(formData);
    };

    return (
        <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                        Get In Touch
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Have a project in mind? Let's collaborate and bring your ideas to life.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
                    {/* Contact Info Card */}
                    <div className="group">
                        <div className="relative h-full">
                            <div className="bg-gradient-to-br from-indigo-600 via-purple-700 to-blue-800 rounded-3xl p-8 h-full flex flex-col justify-between min-h-[600px] shadow-2xl transform group-hover:scale-[1.02] transition-all duration-300">
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                                
                                <div className="relative z-10">
                                    <h2 className="text-4xl font-bold text-white mb-6">
                                        Let's Start a Conversation
                                    </h2>
                                    <p className="text-blue-100 text-lg mb-12 leading-relaxed">
                                        Ready to transform your ideas into reality? I'm here to help you build something amazing.
                                    </p>
                                </div>

                                <div className="space-y-6 relative z-10">
                                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                                        <div className="flex items-center mb-4">
                                            <div className="p-3 bg-white/20 rounded-full mr-4">
                                                <Mail className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="text-white font-semibold text-lg">Email</h3>
                                        </div>
                                        <p className="text-blue-100 md:ml-16">sharmahritujeet@gmail.com</p>
                                    </div>

                                    <Link 
                                        href="https://www.instagram.com/hritujeet/"
                                        className="block bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:translate-x-2"
                                    >
                                        <div className="flex items-center mb-4">
                                            <div className="p-3 bg-white/20 rounded-full mr-4">
                                                <Instagram className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="text-white font-semibold text-lg">Instagram</h3>
                                        </div>
                                        <p className="text-blue-100 md:ml-16">@hritujeet</p>
                                    </Link>

                                    <Link 
                                        href="https://github.com/Hritujeet"
                                        className="block bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:translate-x-2"
                                    >
                                        <div className="flex items-center mb-4">
                                            <div className="p-3 bg-white/20 rounded-full mr-4">
                                                <Github className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="text-white font-semibold text-lg">GitHub</h3>
                                        </div>
                                        <p className="text-blue-100 md:ml-16">@Hritujeet</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/70 backdrop-blur-xl p-8 lg:p-12 rounded-3xl shadow-2xl border border-white/50">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8">
                            Send Message
                        </h2>

                        {/* Success/Error Messages */}
                        {contactMutation.isSuccess && (
                            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl flex items-center text-green-800">
                                <CheckCircle className="w-5 h-5 mr-3" />
                                <span>Message sent successfully! I'll get back to you soon.</span>
                            </div>
                        )}

                        {contactMutation.isError && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-center text-red-800">
                                <AlertCircle className="w-5 h-5 mr-3" />
                                <span>Failed to send message. Please try again.</span>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-6">
                                <div className="relative group">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Your Name"
                                        required
                                        disabled={contactMutation.isPending}
                                        className="w-full h-14 px-6 text-gray-700 placeholder-gray-400 bg-white/50 backdrop-blur-sm border-2 border-gray-200 rounded-2xl focus:border-indigo-500 focus:bg-white/80 transition-all duration-300 outline-none text-lg disabled:opacity-50"
                                    />
                                </div>

                                <div className="relative group">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Your Email"
                                        required
                                        disabled={contactMutation.isPending}
                                        className="w-full h-14 px-6 text-gray-700 placeholder-gray-400 bg-white/50 backdrop-blur-sm border-2 border-gray-200 rounded-2xl focus:border-indigo-500 focus:bg-white/80 transition-all duration-300 outline-none text-lg disabled:opacity-50"
                                    />
                                </div>

                                <div className="relative group">
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Your Phone"
                                        required
                                        disabled={contactMutation.isPending}
                                        className="w-full h-14 px-6 text-gray-700 placeholder-gray-400 bg-white/50 backdrop-blur-sm border-2 border-gray-200 rounded-2xl focus:border-indigo-500 focus:bg-white/80 transition-all duration-300 outline-none text-lg disabled:opacity-50"
                                    />
                                </div>

                                <div className="relative group">
                                    <textarea
                                        name="msg"
                                        value={formData.msg}
                                        onChange={handleInputChange}
                                        placeholder="Your Message"
                                        rows="5"
                                        required
                                        disabled={contactMutation.isPending}
                                        className="w-full px-6 py-4 text-gray-700 placeholder-gray-400 bg-white/50 backdrop-blur-sm border-2 border-gray-200 rounded-2xl focus:border-indigo-500 focus:bg-white/80 transition-all duration-300 outline-none text-lg resize-none disabled:opacity-50"
                                    ></textarea>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={contactMutation.isPending}
                                className="w-full h-14 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center text-lg"
                            >
                                {contactMutation.isPending ? (
                                    <>
                                        <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5 mr-3" />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactComponent;