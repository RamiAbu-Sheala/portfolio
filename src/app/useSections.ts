import {useEffect, useRef, useState} from "react";
import {hashFromSection, Section, sectionFromHash} from "@/types/Section";

export function useSections() {
    const blockScroll = useRef<boolean>(false);
    const [activeSection, setActiveSection] = useState<Section>(Section.WHO_AM_I);
    
    useEffect(() => {
        setActiveSection(sectionFromHash(window.location.hash));
    }, []);

    const goToSection = (section: Section | null) => {
        const timeout = setTimeout(() => {
            blockScroll.current = false;
            clearTimeout(timeout);
        }, 2000);

        if (section === null) return;

        const sectionHash = hashFromSection(section);
        const target = document.getElementById(sectionHash);

        if (target) {
            history.pushState(null, "", sectionHash);
            setActiveSection(section);
        }
    }

    return {
        blockScroll,
        activeSection,
        goToSection,
    }
}