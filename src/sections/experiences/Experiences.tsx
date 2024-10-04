'use client';

import {Section, SectionProps} from "@/sections";
import {motion} from "framer-motion";
import {SectionTitle, TitleHighlight} from "@/sections/components";
import {SCROLL_ANIMATION_VARIANTS} from "@/sections/types";

function Experiences({activeSection}: SectionProps) {
    const isActive = activeSection === Section.EXPERIENCES;
    const activeIsHigher = activeSection > Section.EXPERIENCES;
    const activeAnimation = isActive ? "onscreen" : activeIsHigher ? "lower" : "higher";
    const animationDelay = activeIsHigher ? -0.02 : 0.02;

    return (
        <div className="flex flex-col h-screen items-center justify-center gap-12">
            <div className="flex flex-col gap-4 text-center">
                <SectionTitle activeAnimation={activeAnimation}>
                    <TitleHighlight text={"Experiences"}/> and <TitleHighlight text={"Projects"}/>
                </SectionTitle>
                <motion.p
                    initial={activeAnimation}
                    animate={activeAnimation}
                    variants={SCROLL_ANIMATION_VARIANTS}
                    custom={animationDelay}
                >
                    that have molded me into the developer I am today.
                </motion.p>
            </div>
            <div>

            </div>
        </div>
    );
}

export {Experiences};