'use client';
import {WhoAmI} from "@/sections/who-am-i/WhoAmI";
import {BackgroundLogo} from "@/components/BackgroundLogo";
import {ToolSet} from "@/sections/toolset/ToolSet";
import {Experiences} from "@/sections/experiences/Experiences";
import {Contact} from "@/sections/contact/Contact";
import {Navbar} from "@/components/Navbar";
import React, {useEffect, useRef} from "react";
import {hashFromSection, nextSection, previousSection, Section} from "@/types/Section";
import {BaseSection} from "@/sections/BaseSection";
import {useTheme} from "next-themes";
import {useSections} from "@/app/useSections";

export default function Home() {
    const {theme, setTheme} = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    const {blockScroll, activeSection, goToSection} = useSections();

    const mainRef = useRef<HTMLElement>(null);
    const touchY = useRef(0);

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
    }

    const handleTouchStart = (e: TouchEvent) => {
        e.preventDefault();
        touchY.current = e.changedTouches[0].clientY;
    }

    const handleTouchEnd = (e: TouchEvent) => {
        if (blockScroll.current) {
            return;
        }

        const deltaY = e.changedTouches[0].clientY - touchY.current;
        if (deltaY > 80) {
            blockScroll.current = true;
            goToSection(previousSection(activeSection));
        } else if (deltaY < -80) {
            blockScroll.current = true;
            goToSection(nextSection(activeSection));
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", (e) => e.preventDefault(), {passive: false});
        window.addEventListener('touchmove', (e) => e.preventDefault(), {passive: false});

        window.addEventListener('wheel', handleWheelEvent, {passive: false});

        if (mainRef.current) {
            mainRef.current.addEventListener("touchstart", handleTouchStart);
            mainRef.current.addEventListener("touchend", handleTouchEnd);
        }

        return () => {
            window.removeEventListener("scroll", (e) => e.preventDefault());
            window.removeEventListener('touchmove', (e) => e.preventDefault());
            window.removeEventListener('wheel', handleWheelEvent);

            if (mainRef.current) {
                mainRef.current.removeEventListener("touchstart", handleTouchStart);
                mainRef.current.removeEventListener("touchend", handleTouchEnd);
            }
        }
    });

    return (
        <>
            <Navbar goToSection={goToSection} activeSection={activeSection} theme={theme || "dark"}
                    toggleTheme={toggleTheme}/>
            <main ref={mainRef}>
                <BaseSection id={hashFromSection(Section.WHO_AM_I)}
                             active={activeSection === Section.WHO_AM_I}><WhoAmI/></BaseSection>
                <BaseSection id={hashFromSection(Section.TOOLSET)}
                             active={activeSection === Section.TOOLSET}><ToolSet/></BaseSection>
                <BaseSection id={hashFromSection(Section.EXPERIENCES)}
                             active={activeSection === Section.EXPERIENCES}><Experiences/></BaseSection>
                <BaseSection id={hashFromSection(Section.CONTACT)}
                             active={activeSection === Section.CONTACT}><Contact/></BaseSection>

                <BackgroundLogo/>
            </main>
        </>
    )
}
//