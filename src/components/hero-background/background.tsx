import React from "react";
import { BackgroundLines } from "./background-lines";
import { FlipWords } from "./flip-words";
import Link from "next/link";

export function Background() {
    const words = ["Ayush Baral", "Web Developer", "Tech Nerd", "Learner"];

    return (
        <>
            <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 relative">
                <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                    Hello World, <br /> I am <FlipWords words={words} />
                </h2>
                <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center pb-4">
                    Front-end Web Developer with 4 years of experience in building beautiful and modern frameworks. Passionate about design, exploring new techniques, and contributing to open-source projects.
                </p>
                <Link
                    href="https://drive.google.com/file/d/1K6eAR9FbJETDyf2_OEFm6IK0t3dVcfUj/view"
                    target="_blank"
                    className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-8 py-4 absolute top-8"
                >
                    Know Me
                </Link>
            </BackgroundLines>
        </>
    );
}