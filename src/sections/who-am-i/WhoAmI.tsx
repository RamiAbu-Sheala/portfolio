'use client';

import {motion} from "framer-motion";
import {useState} from "react";

export function WhoAmI() {
    const [activeLogoAnimation, setActiveLogoAnimation] = useState("onscreen");

    const logoVariants = {
        offscreen: {
            x: "100dvw",
            y: 0,
            transition: {
                duration: 0.5,
            }
        },
        onscreen: {
            y: 0,
            x: 0,
            transition: {
                duration: 1.2,
                type: "spring",
                bounce: 0.4,
                delay: 1.2,
            },
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
    }

    return (
        <div className="flex flex-col h-screen w-full items-center justify-evenly md:flex-row lg:justify-between">
            <motion.div
                className="flex flex-col gap-8 max-w-max"
                initial="offscreen"
                animate={"onscreen"}
                variants={{
                    offscreen: {
                        x: "-100dvw",
                        transition: {
                            duration: 0.5,
                        }
                    },
                    onscreen: {
                        x: 0,
                        transition: {
                            duration: 1.2,
                            type: "spring",
                            bounce: 0.4,
                            delay: 1,
                        }
                    }
                }}
            >
                <div className="text-3xl xl:text-4xl">
                    <h1>Hello There!</h1>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <h1>I'm <span className="font-extrabold title-highlight">Rami Abu-sheala</span></h1>
                </div>
                <p>I’m a full-stack developer.<br/>I love creating front-end apps and websites,<br/>but also
                    enjoy
                    developing Java back-ends.</p>
            </motion.div>
            <motion.div
                animate={activeLogoAnimation}
                initial="offscreen"
                variants={logoVariants}
                onAnimationComplete={animation => {
                    if (animation === "onscreen") {
                        setActiveLogoAnimation("idle");
                    } else if (animation === "offscreen") {
                        setActiveLogoAnimation("onscreen");
                    }
                }}
            >
                <img src="/logo.svg" alt="Floating logo"
                     className="md:size-64 lg:size-72 xl:size-80 3xl:size-96"/>
            </motion.div>
        </div>
    );
}