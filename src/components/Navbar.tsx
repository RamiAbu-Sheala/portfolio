'use client';
import Image from "next/image";
import {MdDarkMode} from "react-icons/md";
import {ScrollLink} from "@/components/ScrollLink";
import React, {useEffect, useRef, useState} from "react";

export function Navbar() {
    const scrollY = useRef<number>(0);

    const pages: Map<string, string> = new Map([
        ["#who-am-i", "Who am I?"],
        ["#toolset", "Toolset"],
        ["#experiences", "Experiences"],
        ["#contact", "Contact"],
    ]);

    const [activeSection, setActiveSection] = useState("#who-am-i");

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, element: string) => {
        e.preventDefault();
        const target = document.querySelector(element);
        if (target) {
            target.scrollIntoView({behavior: "smooth"});
            history.pushState(null, "", element);
        }
    }

    const goToNextSection = () => {
        const currentSection = document.querySelector(activeSection);
        if (currentSection) {
            const nextSection = currentSection.nextElementSibling;
            if (nextSection) {
                nextSection.scrollIntoView({behavior: "smooth"});
                history.pushState(null, "", `#${nextSection.id}`);
                setActiveSection(`#${nextSection.id}`);
            }
        }
    }

    const handleScroll = (scrollY: number, prevScrollY: number) => {
        if (scrollY > prevScrollY) {
            goToNextSection();
        }
    }
//todo: add debounce
    useEffect(() => {
        const registerScroll = () => {
            const currentScrollY = window.scrollY;
            window.requestAnimationFrame(() => {
                handleScroll(currentScrollY, scrollY.current);
                console.log(currentScrollY);
                console.log(scrollY.current);
                scrollY.current = currentScrollY;
            });
        }

        window.addEventListener('scroll', registerScroll);
        return () => {
            window.removeEventListener('scroll', registerScroll);
        }
    });

    return (
        <div className="fixed w-full z-10 top-0 bg-background-50">
            <div
                className="flex justify-between py-4 align-bottom px-8 md:px-24 lg:px-36 xl:px-52 2xl:px-96 3xl:px-128">
                <Image src="logo.svg" alt="logo" width={50} height={50}/>
                <div className="flex gap-8 align-bottom">
                    {
                        Array.from(pages.entries()).map(([element, text]) => (
                            <ScrollLink
                                key={element}
                                element={element}
                                isActive={activeSection === element}
                                handleClick={(e) => {
                                    setActiveSection(element);
                                    handleClick(e, element);
                                }}
                                text={text}
                            />
                        ))
                    }
                    <button className="flex items-end">
                        <MdDarkMode size={24}/>
                    </button>
                </div>
            </div>
        </div>
    )
}