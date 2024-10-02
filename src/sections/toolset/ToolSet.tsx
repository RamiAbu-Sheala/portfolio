'use client';
import {motion} from "framer-motion";
import {Section, SectionProps} from "@/sections";

function ToolSet({activeSection}: SectionProps) {
    const isActive = activeSection === Section.TOOLSET;
    const activeIsHigher = activeSection > Section.TOOLSET;

    const animationVariants = {
        // display higher when the active section is higher
        higher: {
            y: "50dvh",
            transition: {
                duration: 1,
            }
        },
        lower: {
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
    }

    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <motion.div className="flex flex-col gap-6 text-center"
                        initial={activeIsHigher ? "lower" : "higher"}
                        animate={isActive ? "onscreen" : (activeIsHigher ? "lower" : "higher")}
                        variants={animationVariants}
            >
                <h1 className="text-3xl xl:text-4xl">This is my <span
                    className="font-extrabold title-highlight">Toolset</span></h1>
                <motion.p
                    initial={activeIsHigher ? "lower" : "higher"}
                    animate={isActive ? "onscreen" : (activeIsHigher ? "lower" : "higher")}
                    variants={animationVariants}
                >These technologies and skills are the tools I use on a regular <br/> basis to design and build amazing
                    software solutions.
                </motion.p>
            </motion.div>
            <div></div>
        </div>
    );
}

export {ToolSet};