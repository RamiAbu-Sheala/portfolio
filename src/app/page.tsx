'use client';
import {WhoAmI} from "@/sections/who-am-i/WhoAmI";
import {BackgroundLogo} from "@/components/BackgroundLogo";
import {ToolSet} from "@/sections/toolset/ToolSet";
import {Experiences} from "@/sections/experiences/Experiences";
import {Contact} from "@/sections/contact/Contact";
import {Navbar} from "@/components/Navbar";
import React from "react";
import {hashFromSection, Section} from "@/types/Section";
import {BaseSection} from "@/sections/BaseSection";
import {useTheme} from "next-themes";
import {useScrollableSections} from "@/app/useScrollableSections";

export default function Home() {
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