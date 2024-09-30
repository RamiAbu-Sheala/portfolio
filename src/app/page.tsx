'use client';
import {motion, useAnimation, Variants} from "framer-motion";
import {useEffect} from "react";
import {BackgroundLogo} from "@/components/BackgroundLogo";

export default function Home() {
    const controls = useAnimation();
    const startAnimation = () => {
        controls.start({
            y: [0, (Math.random() * 2 - 1) * 20, 0],
            x: [0, (Math.random() * 2 - 1) * 20, 0],
            transition: {
                duration: 3,
                ease: "linear"
            }
        }).then();
    }

    const rightSideVariants: Variants = {
        offscreen: {
            x: "-20vw",
        },
        onscreen: {
            x: 0,
            transition: {
                duration: 1,
                type: "spring",
                bounce: 0.5,
            }
        }
    }

    useEffect(() => {
        startAnimation();
    });

    return (
        <>
            <div id="about"
                 className="flex flex-col h-screen items-center justify-evenly md:flex-row lg:justify-between px-8 md:px-24 lg:px-36 xl:px-52 2xl:px-96 3xl:px-128">
                <div className="flex flex-col gap-8 max-w-max">
                    <div className="text-3xl xl:text-4xl">
                        <h1>Hello There!</h1>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <h1>I'm <span className="font-extrabold title-highlight">Rami Abu-sheala</span></h1>
                    </div>
                    <p>I’m a full-stack developer.<br/>I love creating front-end apps and websites,<br/>but also enjoy
                        developing Java back-ends.</p>
                </div>
                <motion.div
                    animate={controls}
                    initial={{y: 0, x: 0}}
                    onAnimationComplete={() => {
                        startAnimation();
                    }}
                >
                    <img src="/logo.svg" alt="Floating logo" className="md:size-64 lg:size-72 xl:size-80 3xl:size-96"/>
                </motion.div>
            </div>
            <div id="experience"
                 className="flex flex-col h-screen items-center justify-evenly md:flex-row lg:justify-between px-8 md:px-24 lg:px-36 xl:px-52 2xl:px-96 3xl:px-128">
                <motion.div className="flex flex-col gap-8 max-w-max" initial="offscreen" whileInView="onscreen"
                            viewport={{once: true, amount: "some"}} variants={rightSideVariants}>
                    <div className="text-3xl xl:text-4xl">
                        <h1>Hello There!</h1>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <h1>I'm <span className="font-extrabold title-highlight">Rami Abu-sheala</span></h1>
                    </div>
                    <p>I’m a full-stack developer.<br/>I love creating front-end apps and websites,<br/>but also enjoy
                        developing Java back-ends.</p>
                </motion.div>
                <motion.div
                    animate={controls}
                    initial={{y: 0, x: 0}}
                    onAnimationComplete={() => {
                        startAnimation();
                    }}
                >
                    <img src="/logo.svg" alt="Floating logo" className="md:size-64 lg:size-72 xl:size-80 3xl:size-96"/>
                </motion.div>
            </div>
            <BackgroundLogo/>
        </>
    );
}
//