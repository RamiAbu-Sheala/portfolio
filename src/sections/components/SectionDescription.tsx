import React from "react";
import {Variants, motion} from "framer-motion";
import {SCROLL_ANIMATION_VARIANTS} from "../util";

type SectionDescriptionProps = {
    variants?: Variants;
    activeAnimation: string;
    initial?: string;
    animationDelay: number;
    children: React.ReactNode;
}

function SectionDescription({ activeAnimation, animationDelay, children, variants = SCROLL_ANIMATION_VARIANTS, initial = activeAnimation }: SectionDescriptionProps) {
    return (

        <motion.p
            initial={initial}
            animate={activeAnimation}
            variants={variants}
            custom={animationDelay}
        >
            {children}
        </motion.p>
    );
}

export {SectionDescription};