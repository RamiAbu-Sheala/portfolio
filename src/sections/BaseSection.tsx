import React from "react";
import {motion} from "framer-motion";

type BaseSectionProps = {
    children: React.ReactNode;
    active: boolean;
    id: string;
}

function BaseSection({children, active, id}: BaseSectionProps) {
    return (
        <motion.div id={id}
                    className="flex flex-col h-screen items-center justify-center px-8 md:px-24 lg:px-36 xl:px-52 2xl:px-96 3xl:px-128 overflow-clip"
                    animate={active ? "onscreen" : "offscreen"}
                    initial={"offscreen"}
                    variants={{
                        offscreen: {
                            height: 0,
                        },
                        onscreen: {
                            height: "100vh",
                        }
                    }}
        >
            {children}
        </motion.div>
    );
}

export {BaseSection};