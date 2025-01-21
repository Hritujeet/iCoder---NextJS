"use client"
import React from 'react';
import {Github, Instagram, Mail} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { handleContact } from '@/actions/contact.actions';
import { toast } from 'react-toastify';

const Contact = () => {
    return (
        <section className={"py-24"}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 grid-cols-1">
                    <div className="lg:mb-0 mb-10">
                        <div className="group w-full h-full">
                            <div className="relative h-full">
                                <Image
                                    src="https://pagedone.io/asset/uploads/1696488602.png"
                                    alt="ContactUs section"
                                    className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply object-cover"
                                    width={200}
                                    height={200}
                                />
                                <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">
                                    Contact us
                                </h1>
                                <div className="absolute bottom-0 w-full lg:p-11 p-5">
                                    <div className="bg-white rounded-lg p-6 block">
                                        <span className="flex items-center mb-6">
                                        <Mail></Mail>
                                            <h5 className="text-black text-base font-normal leading-6 ml-5">
                                                sharmahritujeet@gmail.com
                                            </h5>
                                        </span>
                                        <Link href={"https://www.instagram.com/hritujeet/"}
                                              className="flex items-center mb-6">
                                            <Instagram/>
                                            <h5 className="text-black text-base font-normal leading-6 ml-5">
                                                @hritujeet - Instagram
                                            </h5>
                                        </Link>
                                        <Link href={"https://github.com/Hritujeet"} className="flex items-center mb-6">
                                            <Github/>
                                            <h5 className="text-black text-base font-normal leading-6 ml-5">
                                                @Hritujeet - Github
                                            </h5>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={()=>{
                        toast.success("We have recieved your message!")
                    }} action={handleContact} className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
                        <h2 className="text-indigo-600 font-manrope text-4xl font-semibold leading-10 mb-11">
                            Send Us A Message
                        </h2>
                        <input
                            type="text"
                            className="focus:border-indigo-500 duration-150 outline-none w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none pl-4 mb-10"
                            placeholder="Name"
                            name='name'
                            required
                        />
                        <input
                            type="email"
                            className="focus:border-indigo-500 duration-150 outline-none w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none pl-4 mb-10"
                            placeholder="Email"
                            name='email'
                            required
                        />
                        <input
                            type="tel"
                            className="focus:border-indigo-500 duration-150 outline-none w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none pl-4 mb-10"
                            placeholder="Phone"
                            name='phone'
                            required
                        />
                        <textarea
                            className="focus:border-indigo-500 duration-150 outline-none w-full h-28 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none pl-4 mb-10"
                            placeholder="Message"
                            name='msg'
                            required
                        ></textarea>
                        <button
                        type='submit'
                            className="w-full h-12 text-white text-base font-semibold leading-6 rounded-lg transition-all duration-200 hover:bg-indigo-700 bg-indigo-600 shadow-sm"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
