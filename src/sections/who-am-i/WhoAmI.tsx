'use client';

import {motion} from "framer-motion";
import {Section, SectionProps} from "@/sections";
import {SCROLL_ANIMATION_VARIANTS} from "@/sections/types";
import {SectionDescription, SectionHeader, SectionTitle, TitleHighlight} from "@/sections/components";

function WhoAmI({activeSection}: SectionProps) {
    const isActive = activeSection === Section.WHO_AM_I;
    const activeAnimation = isActive ? "onscreen" : "lower";

    return (
        <div className="flex flex-col h-screen w-full items-center justify-evenly md:flex-row lg:justify-between">
            <SectionHeader>
                <SectionTitle activeAnimation={activeAnimation} initial="lower">
                    Hello There! <br/>
                    I am <TitleHighlight text={"Rami Abu-sheala"}/>
                </SectionTitle>
                <SectionDescription activeAnimation={activeAnimation} animationDelay={0.2} initial="lower">
                    I’m a full-stack developer.<br/>
                    I love creating front-end apps and websites,<br/>
                    but also enjoy developing Java back-ends.
                </SectionDescription>
            </SectionHeader>
            <motion.div
                initial="lower"
                animate={activeAnimation}
                variants={SCROLL_ANIMATION_VARIANTS}
                custom={0.2}
            >
                <motion.img
                    src="/logo.svg" alt="Floating logo"
                    className="md:size-64 lg:size-72 xl:size-80 3xl:size-96"
                    animate={"hover"}
                    variants={SCROLL_ANIMATION_VARIANTS}
                    custom={0.2}
                />
            </motion.div>
        </div>
    );
}

export {WhoAmI};