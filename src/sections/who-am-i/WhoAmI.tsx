'use client';

import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import {Section, SectionProps} from "@/sections";
import {animationVariants, floatingElementVariants} from "@/sections/types";

function WhoAmI({activeSection}: SectionProps) {
    const isActive = activeSection === Section.WHO_AM_I;
    const activeAnimation = isActive ? "onscreen" : "lower";
    const [activeLogoAnimation, setActiveLogoAnimation] = useState(activeAnimation);

    useEffect(() => {
        setActiveLogoAnimation(activeAnimation);
    }, [activeAnimation]);


    return (
        <div className="flex flex-col h-screen w-full items-center justify-evenly md:flex-row lg:justify-between">
            <motion.div
                className="flex flex-col gap-8 max-w-max"
                initial="lower"
                animate={activeAnimation}
                variants={animationVariants()}
            >
                <div className="text-3xl xl:text-4xl font-NotoSans">
                    <h1>Hello There!</h1>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <h1>I'm <span className="font-extrabold title-highlight">Rami Abu-sheala</span></h1>
                </div>
                <p>I’m a full-stack developer.<br/>I love creating front-end apps and websites,<br/>but also
                    enjoy
                    developing Java back-ends.</p>
            </motion.div>
            <motion.div
                initial="lower"
                animate={activeLogoAnimation}
                variants={floatingElementVariants(0.2)}
                onAnimationComplete={animation => {
                    if (animation === "onscreen") {
                        setActiveLogoAnimation("idle");
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