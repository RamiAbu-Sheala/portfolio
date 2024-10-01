'use client';
import {motion} from "framer-motion";

type ToolSetProps = {
    active: boolean;
};

export function ToolSet({active}: ToolSetProps) {
    return (
        <motion.div id="toolset"
                    className="flex flex-col z-40 h-screen items-center justify-center px-8 md:px-24 lg:px-36 xl:px-52 2xl:px-96 3xl:px-128"
                    animate={active ? "onscreen" : "offscreen"}
                    initial={{
                        display: "none",
                    }}
                    variants={{
                        offscreen: {
                            display: "none",
                        },
                        onscreen: {
                            display: "flex",
                            transition: {
                                delay: 1
                            }
                        }
                    }}
        >
            <motion.div className="flex flex-col gap-6 text-center"
                        initial="offscreen"
                        animate={active ? "onscreen" : "offscreen"}
                        variants={{
                            offscreen: {
                                y: "-100dvh",
                            },
                            onscreen: {
                                y: 0,
                                transition: {
                                    delay: 1,
                                    duration: 1.2,
                                    type: "spring",
                                    bounce: 0.4,
                                }
                            }
                        }}
            >
                <h1 className="text-3xl xl:text-4xl">This is my <span
                    className="font-extrabold title-highlight">Toolset</span></h1>
                <motion.p
                    initial="offscreen"
                    animate={active ? "onscreen" : "offscreen"}
                    variants={{
                        offscreen: {
                            x: "-100dvw",
                            y: "100dvh",
                        },
                        onscreen: {
                            x: 0,
                            y: 0,
                            transition: {
                                delay: 1,
                                duration: 1.2,
                                type: "spring",
                                bounce: 0.4,
                            }
                        }
                    }}
                >These technologies and skills are the tools I use on a regular <br/> basis to design and build amazing software solutions.</motion.p>
            </motion.div>
            <div></div>
        </motion.div>
    );
}