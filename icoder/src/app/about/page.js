import React from 'react'
import Link from "next/link";
import Image from "next/image"

const About = () => {
    return (
        <section className="relative py-24">
            <div className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                        <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full flex-col justify-center items-start gap-8 flex">
                                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                                    <h6 className="text-gray-400 text-lg font-bold leading-relaxed">About Us</h6>
                                    <div
                                        className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                        <h2
                                            className="text-indigo-600 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                            The Tale of Our Achievement Story</h2>
                                        <p
                                            className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                            Every great journey begins with an idea, and ours was to create a haven for
                                            coders—a platform where creativity, knowledge, and passion for programming
                                            converge. This idea gave birth to iCoder, a space built exclusively for
                                            programmers and tech enthusiasts to share, learn, and grow together.
                                            <br/><br/>
                                            At iCoder, we’ve designed a platform that empowers coders to publish their
                                            insights, showcase their expertise, and explore the ever-evolving world of
                                            technology. Whether it’s coding tutorials, industry trends, or
                                            groundbreaking ideas, our community thrives on sharing valuable content that
                                            inspires and educates.
                                            <br/>
                                            Join us as we continue to redefine the way coders connect and collaborate.
                                            Welcome to iCoder—where your ideas shape the future of tech!

                                        </p>
                                    </div>
                                </div>
                                <div className="w-full flex-col justify-center items-start gap-6 flex">
                                    <div
                                        className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                        <div
                                            className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">Symbol
                                                of Excellence</h4>
                                            <p className="text-gray-500 text-base font-normal leading-relaxed">User
                                                friendly minimalistic UI and Rich text editor</p>
                                        </div>
                                        <div
                                            className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">Read
                                                the best
                                            </h4>
                                            <p className="text-gray-500 text-base font-normal leading-relaxed">Leading
                                                Project ideas and latest information shaindigo</p>
                                        </div>
                                    </div>
                                    <div
                                        className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                        <div
                                            className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">26+
                                                Awards</h4>
                                            <p className="text-gray-500 text-base font-normal leading-relaxed">Our
                                                Dedication to
                                                Innovation Wins Understanding</p>
                                        </div>
                                        <div
                                            className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">99%
                                                Happy
                                                Clients</h4>
                                            <p className="text-gray-500 text-base font-normal leading-relaxed">Mirrors
                                                our
                                                Focus on
                                                Client Satisfaction.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link href={"/blogs"}
                                  className="sm:w-fit w-full group px-3.5 py-2 bg-zinc-50 hover:bg-zinc-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
                        <span
                            className="px-1.5 text-zinc-600 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">Read Blogs</span>
                                <svg className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                                     xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                     fill="none">
                                    <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="#4F46E5"
                                          strokeWidth="1.6"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Link>
                        </div>
                        <div className="w-full hidden md:block lg:justify-start justify-center items-start flex">
                            <div
                                className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                                <Image width={400} height={400} className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                                     src="https://pagedone.io/asset/uploads/1717742431.png" alt="about Us image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default About;
export const metadata = {
    title: "About Us | iCoder",
    description:
        " iCoder is a blog platform built exclusively for programmers to share their knowledge and explore the world of coding. Whether you're learning or teaching, iCoder provides the perfect space to write and read blogs on programming languages, frameworks, tools, and the latest tech trends. Join the ultimate community of coders and turn your passion for coding into insightful content.",
};