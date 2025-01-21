import { UserProfile } from "@clerk/nextjs";
import React from "react";

const page = () => {
    return (
        <div className="container h-auto my-10 mx-auto flex justify-center items-center">
            <UserProfile />
        </div>
    );
};

export default page;
