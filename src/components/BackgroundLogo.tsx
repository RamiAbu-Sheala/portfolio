'use client';
import {motion} from "framer-motion";
import {Section, SectionProps} from "@/sections";
import {useEffect, useState} from "react";

function BackgroundLogo({activeSection}: SectionProps) {
    const [scrollY, setScrollY] = useState<string>("calc(100dvh)");

    useEffect(() => {
        switch (activeSection) {
            case Section.WHO_AM_I:
                setScrollY("calc(60dvh)");
                break;
            case Section.TOOLSET:
                setScrollY("calc(20dvh)");
                break;
            case Section.EXPERIENCES:
                setScrollY("calc(-20dvh)");
                break;
            case Section.CONTACT:
                setScrollY("calc(-60dvh)");
                break;
            default:
                setScrollY("calc(60dvh)");
        }
    }, [activeSection]);

    return (
        <motion.img src="/logo.png"
                    alt="background scrolling logo"
                    style={{
                        position: "fixed",
                        left: 0,
                        right: 0,
                        zIndex: -100,
                        width: "100%",
                        height: "auto",
                    }}
                    initial={{top: scrollY}}
                    animate={{
                        top: scrollY,
                        transition: {
                            type: "spring",
                            damping: 15,
                            stiffness: 80,
                        }
        }}
        />
    )
}

export {BackgroundLogo};