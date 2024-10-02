'use client';
import {BaseSection, Contact, Experiences, hashFromSection, Section, ToolSet, WhoAmI} from "@/sections";
import {BackgroundLogo} from "@/components/BackgroundLogo";
import {Navbar} from "@/components/Navbar";
import React from "react";
import {useTheme} from "next-themes";
import {useScrollableSections} from "@/app/useScrollableSections";

function Home() {
    const {theme, setTheme} = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    const {activeSection, mainRef, goToSection} = useScrollableSections();

    return (
        <>
            <Navbar goToSection={goToSection} activeSection={activeSection} theme={theme || "dark"}
                    toggleTheme={toggleTheme}/>
            <main ref={mainRef}>
                <BaseSection id={hashFromSection(Section.WHO_AM_I)} active={activeSection === Section.WHO_AM_I}>
                    {(active) => <WhoAmI active={active}/>}
                </BaseSection>

                <BaseSection id={hashFromSection(Section.TOOLSET)} active={activeSection === Section.TOOLSET}>
                    {(active) => <ToolSet active={active}/>}
                </BaseSection>

                <BaseSection id={hashFromSection(Section.EXPERIENCES)} active={activeSection === Section.EXPERIENCES}>
                    {(active) => <Experiences active={active}/>}
                </BaseSection>

                <BaseSection id={hashFromSection(Section.CONTACT)} active={activeSection === Section.CONTACT}>
                    {(active) => <Contact active={active}/>}
                </BaseSection>

                <BackgroundLogo/>
            </main>
        </>
    )
}

export default Home;