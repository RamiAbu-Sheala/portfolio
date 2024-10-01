'use client';
import {WhoAmI} from "@/pages/who-am-i/WhoAmI";
import {BackgroundLogo} from "@/components/BackgroundLogo";
import {ToolSet} from "@/pages/toolset/ToolSet";
import {Experiences} from "@/pages/experiences/Experiences";
import {Contact} from "@/pages/contact/Contact";
import {Navbar} from "@/components/Navbar";
import React, {useEffect, useRef, useState} from "react";

export default function Home() {
    const blockScroll = useRef<boolean>(false);

    const pages: Map<string, string> = new Map([
        ["#who-am-i", "Who am I?"],
        ["#toolset", "Toolset"],
        ["#experiences", "Experiences"],
        ["#contact", "Contact"],
    ]);
    const initialSection = window.location.hash || "#who-am-i";

    const [activeSection, setActiveSection] = useState(initialSection);

    const goToSection = (element: string) => {
        const target = document.querySelector(element);
        if (target) {
            history.pushState(null, "", element);
            setActiveSection(element);
        }
    }

    const goToNextSection = () => {
        const sections = Array.from(pages.keys());
        const currentSectionIndex = sections.indexOf(activeSection);
        const nextSection = sections[currentSectionIndex + 1];
        if (nextSection) {
            goToSection(nextSection);
        }
    }

    const goToPreviousSection = () => {
        const sections = Array.from(pages.keys());
        const currentSectionIndex = sections.indexOf(activeSection);
        const previousSection = sections[currentSectionIndex - 1];
        if (previousSection) {
            goToSection(previousSection);
        }
    }

    const handleScroll = (up: boolean) => {
        if (blockScroll.current) {
            return;
        }

        blockScroll.current = true;

        if (up) {
            goToNextSection();
        } else {
            goToPreviousSection();
        }

        const timeout = setTimeout(() => {
            blockScroll.current = false;
            clearTimeout(timeout);
        }, 2000);
    }


    useEffect(() => {
        const registerScroll = (e: WheelEvent) => {
            e.preventDefault();
            handleScroll(e.deltaY > 0);
        }

        window.addEventListener('wheel', registerScroll, {passive: false});
        return () => {
            window.removeEventListener('wheel', registerScroll);
        }
    });

    useEffect(() => {
        window.addEventListener("scroll", (e) => e.preventDefault(), {passive: false});
    });

    return (
        <div>
            <Navbar pages={pages} goToSection={goToSection} activeSection={activeSection}/>
            <WhoAmI active={activeSection === "#who-am-i"}/>
            <ToolSet active={activeSection === "#toolset"}/>
            <Experiences/>
            <Contact/>
            <BackgroundLogo/>
        </div>
    )
}
//