'use client';
import {BaseSection, Contact, Experience, hashFromSection, Section, ToolSet, WhoAmI} from "@/sections";
import {BackgroundLogo} from "@/components";
import {Navbar} from "@/components";
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
                    <WhoAmI activeSection={activeSection}/>
                </BaseSection>

                <BaseSection id={hashFromSection(Section.TOOLSET)} active={activeSection === Section.TOOLSET}>
                    <ToolSet activeSection={activeSection}/>
                </BaseSection>

                <BaseSection id={hashFromSection(Section.EXPERIENCE)} active={activeSection === Section.EXPERIENCE}>
                    <Experience activeSection={activeSection}/>
                </BaseSection>

                <BaseSection id={hashFromSection(Section.CONTACT)} active={activeSection === Section.CONTACT}>
                    <Contact activeSection={activeSection}/>
                </BaseSection>

                <BackgroundLogo activeSection={activeSection}/>
            </main>
        </>
    )
}

export default Home;