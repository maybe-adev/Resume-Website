import { Dock } from "@/components/dock/dock";
import { PostGrid } from "@/components/post/post-grid";
import { TextGenerateEffect } from "@/components/post/text-generate-effect";

const words = `Words That Work, Verses That Wander`;

export default function Poeta(){
    return (
        <div>
            <TextGenerateEffect className="text-4xl md:text-4xl lg:text-6xl font-bold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6" words={words} />;
            <PostGrid/>
            <Dock/>
        </div>
    )
}