'use client';

import {motion} from "framer-motion";
import {useState} from "react";

export function WhoAmI() {
    const [animationVariant, setAnimationVariant] = useState("onscreen");

    return (
        <>
            <div id="who-am-i"
                 className="flex flex-col h-screen items-center justify-evenly md:flex-row lg:justify-between px-8 md:px-24 lg:px-36 xl:px-52 2xl:px-96 3xl:px-128">
                <motion.div
                    className="flex flex-col gap-8 max-w-max"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{amount: 0.01}}
                    variants={{
                        offscreen: {
                            x: "-20vw",
                            opacity: 0,
                        },
                        onscreen: {
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: 1,
                                type: "spring",
                                bounce: 0.5,
                            }
                        }
                    }}
                >
                    <div className="text-3xl xl:text-4xl">
                        <h1>Hello There!</h1>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <h1>I'm <span className="font-extrabold title-highlight">Rami Abu-sheala</span></h1>
                    </div>
                    <p>I’m a full-stack developer.<br/>I love creating front-end apps and websites,<br/>but also enjoy
                        developing Java back-ends.</p>
                </motion.div>
                <motion.div
                    viewport={{amount: 0.01}}
                    initial="offscreen"
                    whileInView="onscreen"
                    animate={animationVariant}
                    onAnimationComplete={() => setAnimationVariant("idle")}
                    variants={{
                        offscreen: {
                            x: "10vw",
                            opacity: 0,
                        },
                        onscreen: {
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: 1,
                                type: "spring",
                                bounce: 0.5,
                            }
                        },
                        idle: {
                            y: [0, 15, 0],
                            x: [0, -3, 0],
                            transition: {
                                duration: 3,
                                ease: "easeInOut",
                                repeat: Infinity,
                            }
                        }
                    }}
                >
                    <img src="/logo.svg" alt="Floating logo" className="md:size-64 lg:size-72 xl:size-80 3xl:size-96"/>
                </motion.div>
            </div>
        </>
    );
}