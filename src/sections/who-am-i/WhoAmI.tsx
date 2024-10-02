'use client';

import {motion} from "framer-motion";
import {useState} from "react";
import {Section, SectionProps} from "@/sections";

function WhoAmI({activeSection}: SectionProps) {
    const [activeLogoAnimation, setActiveLogoAnimation] = useState("onscreen");
    const isActive = activeSection === Section.WHO_AM_I;

    const animationVariants = {
        higher: {
            y: "-50dvh",
            transition: {
                duration: 1,
            }
        },
        onscreen: {
            y: 0,
            transition: {
                duration: 1.2,
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
        <div className="flex flex-col h-screen w-full items-center justify-evenly md:flex-row lg:justify-between">
            <motion.div
                className="flex flex-col gap-8 max-w-max"
                initial="higher"
                animate={isActive ? "onscreen" : "higher"}
                variants={animationVariants}
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
                animate={isActive ? activeLogoAnimation: "higher"}
                initial="higher"
                variants={animationVariants}
                onAnimationComplete={animation => {
                    if (animation === "onscreen") {
                        setActiveLogoAnimation("idle");
                    } else if (animation === "higher") {
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

export {WhoAmI};