'use client';

import {Section, SectionProps} from "@/sections";
import {SectionDescription, SectionHeader, SectionTitle, TitleHighlight} from "@/sections/components";

function Experiences({activeSection}: SectionProps) {
    const isActive = activeSection === Section.EXPERIENCES;
    const activeIsHigher = activeSection > Section.EXPERIENCES;
    const activeAnimation = isActive ? "onscreen" : activeIsHigher ? "lower" : "higher";
    const animationDelay = activeIsHigher ? -0.02 : 0.02;

    return (
        <div className="flex flex-col h-screen items-center justify-center gap-12">
            <SectionHeader>
                <SectionTitle activeAnimation={activeAnimation}>
                    <TitleHighlight text={"Experiences"}/> and <TitleHighlight text={"Projects"}/>
                </SectionTitle>
                <SectionDescription activeAnimation={activeAnimation} animationDelay={animationDelay}>
                    that have molded me into the developer I am today.
                </SectionDescription>
            </SectionHeader>
            <div>

            </div>
        </div>
    );
}

export {Experiences};