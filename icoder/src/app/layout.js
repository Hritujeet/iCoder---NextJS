import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastContainer } from "react-toastify";
import QueryProvider from "@/utils/provider";

export const metadata = {
    title: "iCoder - Heaven For Coders",
    description:
        " iCoder is a blog platform built exclusively for programmers to share their knowledge and explore the world of coding. Whether you're learning or teaching, iCoder provides the perfect space to write and read blogs on programming languages, frameworks, tools, and the latest tech trends. Join the ultimate community of coders and turn your passion for coding into insightful content.",
};

export default function RootLayout({ children }) {
    return (
        <QueryProvider>
            <ClerkProvider>
                <html lang="en">
                    <body>
                        <ToastContainer />
                        <NextTopLoader color={"#6D5ACF"} />
                        <Navbar></Navbar>
                        {children}
                        <Footer></Footer>
                    </body>
                </html>
            </ClerkProvider>
        </QueryProvider>
    );
}
