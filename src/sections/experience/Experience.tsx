'use client';

import {Section, SectionProps} from "@/sections";
import {SectionDescription, SectionHeader, SectionTitle, TitleHighlight} from "@/sections/components";
import {EVENTS} from "@/sections/experience/Event";
import {PROJECTS} from "@/sections/experience/Project";
import {motion} from "framer-motion";

function Experience({activeSection}: SectionProps) {
    const isActive = activeSection === Section.EXPERIENCE;
    const activeIsHigher = activeSection > Section.EXPERIENCE;
    const activeAnimation = isActive ? "onscreen" : activeIsHigher ? "lower" : "higher";
    const animationDelay = activeIsHigher ? -0.02 : 0.02;

    return (
        <div className="flex flex-col h-screen items-center justify-center gap-12">
            <SectionHeader>
                <SectionTitle activeAnimation={activeAnimation}>
                    <TitleHighlight text={"Experiences"}/> and <TitleHighlight text={"Projects"}/>
                </SectionTitle>
                <SectionDescription activeAnimation={activeAnimation} animationDelay={animationDelay}>
                    that made me the developer I am today.
                </SectionDescription>
            </SectionHeader>
            <div className="grid grid-cols-3">
                {EVENTS.map((event) => (
                    <div key={event.id}>
                        <h1>{event.title}</h1>
                        <p>{event.description}</p>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-3 gap-8">
                {PROJECTS.map((project) => (
                    <motion.div
                        key={project.id}
                        className={"flex flex-col items-center font-NotoSans"}
                    >
                        <motion.img
                            src={project.image}
                            alt={project.title + " image"}

                        />
                        <h1>{project.title}</h1>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export {Experience};