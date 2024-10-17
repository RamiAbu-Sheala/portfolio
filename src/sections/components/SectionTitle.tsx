import {motion, Variants} from "framer-motion";
import {SCROLL_ANIMATION_VARIANTS} from "../util";
import React from "react";

type SectionTitleProps = {
    activeAnimation: string;
    initial?: string;
    variants?: Variants;
    children: React.ReactNode;
}

function SectionTitle({ activeAnimation, variants = SCROLL_ANIMATION_VARIANTS, children, initial = activeAnimation }: SectionTitleProps) {
    return (
        <motion.h1
            initial={initial}
            animate={activeAnimation}
            variants={variants}
            className="text-3xl xl:text-4xl font-NotoSans"
        >
            {children}
        </motion.h1>
    );
}

export {SectionTitle};