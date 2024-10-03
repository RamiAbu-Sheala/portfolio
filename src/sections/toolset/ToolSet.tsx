'use client';
import {motion} from "framer-motion";
import {Section, SectionProps} from "@/sections";
import {TOOLSET} from "@/sections/toolset/Tool";
import {SCROLL_ANIMATION_VARIANTS} from "@/sections/types";

function ToolSet({activeSection}: SectionProps) {
    const isActive = activeSection === Section.TOOLSET;
    const activeIsHigher = activeSection > Section.TOOLSET;
    const activeAnimation = isActive ? "onscreen" : activeIsHigher ? "lower" : "higher";
    const animationDelay = activeIsHigher ? -0.02 : 0.02;

    return (
        <div className="flex flex-col h-screen items-center justify-center gap-12">
            <div className="flex flex-col gap-6 text-center">
                <motion.h1
                    initial={activeAnimation}
                    animate={activeAnimation}
                    variants={SCROLL_ANIMATION_VARIANTS}
                    className="text-3xl xl:text-4xl font-NotoSans"
                >
                    This is my <span className="font-extrabold title-highlight">Toolset</span>
                </motion.h1>
                <motion.p
                    initial={activeAnimation}
                    animate={activeAnimation}
                    variants={SCROLL_ANIMATION_VARIANTS}
                    custom={animationDelay}
                >These technologies and skills are the tools I use on a regular <br/> basis to design and build amazing
                    software solutions.
                </motion.p>
            </div>
            <div className="flex flex-row flex-wrap gap-4 justify-center max-w-screen-lg">
                {TOOLSET.map((tool, index) => (
                    <motion.div
                        key={index}
                        initial={activeAnimation}
                        animate={activeAnimation}
                        variants={SCROLL_ANIMATION_VARIANTS}
                        custom={index * animationDelay + animationDelay}
                        className="text-center flex flex-col items-center justify-start text-wrap w-16 pb-2 md:w-20 lg:w-24 lg:text-xl"
                    >
                        <tool.Logo className="w-full h-fit"/>
                        <p>{tool.name}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export {ToolSet};