import React from "react";
import PostCard from "./PostCard";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { fetchPosts } from "@/actions/post.actions";

const PostCrousel = async () => {
    const allPosts = await fetchPosts();
    const carousalPosts = allPosts.slice(0, 5);

    return (
        <Carousel opts={{
          loop: true,
        }} className="w-[80vw]">
            <h1 className="my-10">Latest Posts</h1>
            <CarouselContent>
                {carousalPosts.map((post) => {
                    return (
                        <CarouselItem key={post.id}>
                            <PostCard
                                key={post.id}
                                title={post.title}
                                description={post.desc}
                                username={post.user}
                                slug={post.slug}
                            ></PostCard>
                        </CarouselItem>
                    );
                })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};

export default PostCrousel;
