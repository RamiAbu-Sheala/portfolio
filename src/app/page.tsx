'use client';
import {WhoAmI} from "@/sections/who-am-i/WhoAmI";
import {BackgroundLogo} from "@/components/BackgroundLogo";
import {ToolSet} from "@/sections/toolset/ToolSet";
import {Experiences} from "@/sections/experiences/Experiences";
import {Contact} from "@/sections/contact/Contact";
import {Navbar} from "@/components/Navbar";
import React, {useEffect, useRef, useState} from "react";
import {hashFromSection, nextSection, previousSection, Section, sectionFromHash} from "@/types/Section";

export default function Home() {
    const blockScroll = useRef<boolean>(false);
    const [activeSection, setActiveSection] = useState<Section>(Section.WHO_AM_I);

    const goToSection = (section: Section | null) => {
        if (section === null) return;

        const sectionHash = hashFromSection(section);
        const target = document.querySelector(sectionHash);

        if (target) {
            history.pushState(null, "", sectionHash);
            setActiveSection(section);
        }
    }

    const handleWheelEvent = (e: WheelEvent) => {
        e.preventDefault();
        if (blockScroll.current) {
            return;
        }

        blockScroll.current = true;

        if (e.deltaY > 0) {
            goToSection(nextSection(activeSection));
        } else {
            goToSection(previousSection(activeSection));
        }

        const timeout = setTimeout(() => {
            blockScroll.current = false;
            clearTimeout(timeout);
        }, 2000);
    }
    
    useEffect(() => {
        window.addEventListener('wheel', handleWheelEvent, {passive: false});
        return () => {
            window.removeEventListener('wheel', handleWheelEvent);
        }
    });

    useEffect(() => {
        window.addEventListener("scroll", (e) => e.preventDefault(), {passive: false});
        setActiveSection(sectionFromHash(window.location.hash));
    }, []);

    return (
        <div>
            <Navbar goToSection={goToSection} activeSection={activeSection}/>
            <WhoAmI active={activeSection === Section.WHO_AM_I}/>
            <ToolSet active={activeSection === Section.TOOLSET}/>
            <Experiences/>
            <Contact/>
            <BackgroundLogo/>
        </div>
    )
}
//