'use client';

import React from "react";

import Image from "next/image";
import {Section, SectionProps} from "@/sections";
import {SectionDescription, SectionHeader, SectionTitle, TitleHighlight} from "@/sections/components";
import {EVENTS} from "@/sections/experience/Event";
import {PROJECTS} from "@/sections/experience/Project";
import {CardBody, CardContainer, CardItem} from "@/components/ui/3d-card";

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

                    <CardContainer className="inter-var" key={project.id}>
                        <CardBody className="bg-gray-50 relative dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-medium font-NotoSans text-neutral-600 dark:text-white"
                            >
                                {project.title}
                            </CardItem>
                            <CardItem
                                translateZ="100"
                                rotateX={20}
                                rotateY={-4}
                                className="w-full pt-4"
                            >
                                <Image
                                    src={project.image}
                                    height="1000"
                                    width="1000"
                                    className="object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                        </CardBody>
                    </CardContainer>

                ))}
            </div>
        </div>
    );
}

export {Experience};