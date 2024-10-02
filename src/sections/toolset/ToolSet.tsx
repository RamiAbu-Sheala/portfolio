'use client';
import {motion} from "framer-motion";
import {SectionProps} from "@/sections";

function ToolSet({active}: SectionProps) {

    const animationVariants = {
        offscreen: {
            y: "100dvh",
            transition: {
                duration: 0.5,
            }
        },
        onscreen: {
            y: 0,
            transition: {
                duration: 1.2,
                type: "spring",
                bounce: 0.4,
                delay: 1.2,
            },
        },
    }

    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <motion.div className="flex flex-col gap-6 text-center"
                        initial="offscreen"
                        animate={active ? "onscreen" : "offscreen"}
                        variants={animationVariants}
            >
                <h1 className="text-3xl xl:text-4xl">This is my <span
                    className="font-extrabold title-highlight">Toolset</span></h1>
                <motion.p
                    initial="offscreen"
                    animate={active ? "onscreen" : "offscreen"}
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