'use client';
import {motion} from "framer-motion";
import {Section, SectionProps} from "@/sections";
import {TOOLSET} from "@/sections/toolset/Tool";
import {SCROLL_ANIMATION_VARIANTS} from "../util";
import {SectionDescription, SectionHeader, SectionTitle, TitleHighlight} from "@/sections/components";

function ToolSet({activeSection}: SectionProps) {
    const isActive = activeSection === Section.TOOLSET;
    const activeIsHigher = activeSection > Section.TOOLSET;
    const activeAnimation = isActive ? "onscreen" : activeIsHigher ? "lower" : "higher";
    const animationDelay = activeIsHigher ? -0.02 : 0.02;

    return (
        <div className="flex flex-col h-screen items-center justify-center gap-12">
            <SectionHeader>
                <SectionTitle activeAnimation={activeAnimation}>
                    This is my <TitleHighlight text={"Toolset"}/>
                </SectionTitle>
                <SectionDescription activeAnimation={activeAnimation} animationDelay={animationDelay}>
                    These technologies and skills are the tools I use on a regular <br/>
                    basis to design and build amazing software solutions.
                </SectionDescription>
            </SectionHeader>
            <div className="flex flex-row flex-wrap gap-4 justify-center max-w-screen-lg">
                {TOOLSET.map((tool, index) => (
                    <motion.div
                        key={index}
                        initial={activeAnimation}
                        animate={activeAnimation}
                        variants={SCROLL_ANIMATION_VARIANTS}
                        whileHover={{
                            scale: 1.05,
                            transition: {
                                duration: 0.2,
                                ease: "easeOut"
                            }
                        }}
                        custom={index * animationDelay + animationDelay}
                    >
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                                transition: {
                                    duration: 0.4,
                                    repeat: Infinity,
                                    delay: index * animationDelay * 2,
                                    repeatDelay: 10,
                                }
                            }}
                            className="text-center flex flex-col items-center justify-start text-wrap w-12 pb-2 md:w-16 lg:w-20 lg:text-xl"
                        >
                            <tool.Logo className="w-full h-fit"/>
                            <p>{tool.name}</p>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export {ToolSet};