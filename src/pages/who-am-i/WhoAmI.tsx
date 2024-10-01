'use client';

import {motion} from "framer-motion";
import {useState} from "react";

type WhoAmIProps = {
    active: boolean;
};

export function WhoAmI({active}: WhoAmIProps) {
    const [activeLogoAnimation, setActiveLogoAnimation] = useState("onscreen");

    const logoVariants = {
        offscreen: {
            x: "100vw",
            y: 0,
            transition: {
                duration: 0.5,
            }
        },
        onscreen: {
            y: 0,
            x: 0,
            transition: {
                duration: 1.5,
                type: "spring",
                bounce: 0.4,
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
        <motion.div id="who-am-i"
                    className="flex flex-col z-50 h-screen items-center justify-evenly md:flex-row lg:justify-between px-8 md:px-24 lg:px-36 xl:px-52 2xl:px-96 3xl:px-128 overflow-clip"
                    animate={active ? "onscreen" : "offscreen"}
                    variants={{
                        offscreen: {
                            display: "none",
                        },
                        onscreen: {
                            display: "flex",
                        }
                    }}
        >
            <motion.div
                className="flex flex-col gap-8 max-w-max"
                initial="offscreen"
                animate={active ? "onscreen" : "offscreen"}
                variants={{
                    offscreen: {
                        x: "-100vw",
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
                animate={active ? activeLogoAnimation : "offscreen"}
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
        </motion.div>
    );
}