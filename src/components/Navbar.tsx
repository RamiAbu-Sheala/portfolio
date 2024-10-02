import Image from "next/image";
import {MdDarkMode} from "react-icons/md";
import {ScrollLink} from "@/components/ScrollLink";
import React from "react";
import {hashFromSection, Section, sectionStrings} from "@/types/Section";
import {useTheme} from "next-themes";

type NavbarProps = {
    activeSection: Section;
    goToSection: (section: Section | null) => void;
};

export function Navbar({activeSection, goToSection}: NavbarProps) {
    const {theme, setTheme} = useTheme();

    return (
        <nav className="fixed w-full z-10 top-0">
            <div
                className="flex justify-between py-4 align-bottom px-8 md:px-24 lg:px-36 xl:px-52 2xl:px-96 3xl:px-128">
                <Image src="logo.svg" alt="logo" width={50} height={50}/>
                <div className="flex gap-8 align-bottom">
                    {
                        sectionStrings.entries().toArray().map(([section, text]) => (
                            <ScrollLink
                                key={section}
                                element={hashFromSection(section)}
                                isActive={activeSection === section}
                                handleClick={(e) => {
                                    e.preventDefault();
                                    goToSection(section);
                                }}
                                text={text}
                            />
                        ))
                    }
                    <button className="flex items-end" onClick={(e) => {
                        e.preventDefault();
                        setTheme(theme === "dark" ? "light" : "dark");
                    }}>
                        <MdDarkMode size={24}/>
                    </button>
                </div>
            </div>
        </nav>
    )
}