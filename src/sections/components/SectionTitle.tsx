import {motion, Variants} from "framer-motion";
import {SCROLL_ANIMATION_VARIANTS} from "@/sections/types";
import React from "react";

type SectionTitleProps = {
    activeAnimation: string;
    variants?: Variants;
    children: React.ReactNode;
}

function SectionTitle({ activeAnimation, variants = SCROLL_ANIMATION_VARIANTS, children }: SectionTitleProps) {
    return (
        <motion.h1
            initial={activeAnimation}
            animate={activeAnimation}
            variants={variants}
            className="text-3xl xl:text-4xl font-NotoSans"
        >
            {children}
        </motion.h1>
    );
}

export {SectionTitle};