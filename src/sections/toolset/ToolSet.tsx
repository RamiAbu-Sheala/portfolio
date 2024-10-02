'use client';
import {motion} from "framer-motion";

export function ToolSet() {
    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <motion.div className="flex flex-col gap-6 text-center"
                        initial="offscreen"
                        animate={"onscreen"}
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
                    animate={"onscreen"}
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
                >These technologies and skills are the tools I use on a regular <br/> basis to design and build amazing
                    software solutions.
                </motion.p>
            </motion.div>
            <div></div>
        </div>
    );
}