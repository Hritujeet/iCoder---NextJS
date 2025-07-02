import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
    return (
        <section className="flex flex-col justify-center items-center">
            <div className="space-y-4 px-6 w-full mb-10 bg-zinc-900 h-[40vh] flex flex-col justify-center items-center">
                <Skeleton className={"w-2/3 h-10"} />
                <Skeleton className={"w-1/2 h-8"} />
            </div>
            <div className={"container md:w-[60vw] px-10 space-y-4"}>
                <Skeleton className={"w-full h-20"} />
                <Skeleton className={"w-1/2 h-28"} />
                <Skeleton className={"w-1/3 h-8"} />
                <Skeleton className={"w-full h-40"} />
                <Skeleton className={"w-2/3 h-16"} />
            </div>
        </section>
    );
};

export default loading;
