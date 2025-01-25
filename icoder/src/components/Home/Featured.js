import React from 'react'
import Image from 'next/image'

const Featured = () => {
  return (
    <>
    <div className='container mx-auto flex justify-evenly items-center py-10 border-b my-10'>
        <div className="left hidden md:block w-[20vw]">
            <Image height={800} width={400} className='rounded-xl shadow-lg' src={"https://images.pexels.com/photos/839443/pexels-photo-839443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt='feature-img'></Image>
        </div>
        <div className="right w-[80vw] md:w-[40vw] text-end space-y-4">
            <h1 className="text-4xl font-bold">Write blogs like never Before...</h1>
            <p>Write blogs like never before with iCoder! Our platform is designed to elevate your blogging experience, offering an intuitive editor that makes creating content a breeze. Enjoy seamless formatting tools and customizable templates that let you focus on sharing your knowledge without the hassle of design. Highlight code snippets, embed media, and structure your content with ease to engage your readers. Whether you are writing tutorials, sharing insights, or exploring the latest tech trends, iCoder provides everything you need to craft professional, impactful blogs. Inspire, connect, and grow with a global community of coders who are as passionate as you are!</p>
        </div>
    </div>
    <div className='container mx-auto flex flex-row-reverse items-center justify-evenly py-10 border-b my-10'>
        <div className="hidden md:block left w-[20vw]">
            <Image height={1260} width={750} className='rounded-xl shadow-lg' src={"https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt='feature-img'></Image>
        </div>
        <div className="right w-[80vw] md:w-[40vw] text-start space-y-4">
            <h1 className="text-4xl font-bold">Heaven for Coders!</h1>
            <p>Heaven for Coders is more than a tagline—it’s our mission. iCoder is a space where programmers of all levels come together to learn, share, and grow. From insightful blogs on programming languages and frameworks to tips, tricks, and tutorials, we provide the tools to turn your coding expertise into impactful content. Connect with like-minded developers, discover fresh ideas, and stay ahead of tech trends. Whether you’re solving problems, teaching others, or simply exploring, iCoder is your ultimate destination—a true paradise for coders looking to make their mark in the programming world!</p>
        </div>
    </div>
    </>
  )
}

export default Featured