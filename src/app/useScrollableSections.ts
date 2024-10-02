import {useEffect, useRef, useState} from "react";
import {hashFromSection, nextSection, previousSection, Section, sectionFromHash} from "@/types/Section";

export function useScrollableSections() {
    const blockScroll = useRef<boolean>(false);
    const [activeSection, setActiveSection] = useState<Section>(Section.WHO_AM_I);
    const mainRef = useRef<HTMLElement>(null);
    const touchY = useRef(0);
    
    useEffect(() => {
        setActiveSection(sectionFromHash(window.location.hash));
    }, []);

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

    return {
        activeSection,
        mainRef,
        goToSection,
        handleWheelEvent,
        handleTouchStart,
        handleTouchEnd,
    }
}