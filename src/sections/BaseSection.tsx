import React from "react";
import {motion} from "framer-motion";

type BaseSectionProps = {
    children:(active: boolean) => React.ReactNode;
    active: boolean;
    id: string;
}

function BaseSection({children, active, id}: BaseSectionProps) {
    return (
        <motion.div id={id}
                    className="flex flex-col h-screen items-center justify-center px-8 md:px-24 lg:px-36 xl:px-52 2xl:px-96 3xl:px-128 overflow-clip"
                    animate={active ? "onscreen" : "offscreen"}
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
            {active && children(active)}
        </motion.div>
    );
}

export {BaseSection};