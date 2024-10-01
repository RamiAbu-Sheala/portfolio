'use client';
import {motion, useAnimation} from "framer-motion";
import {useEffect, useRef} from "react";

export function BackgroundLogo() {
    const y = useRef(0);

    const scrollControls = useAnimation();
    const handleScroll = (e: Event) => {
        e.preventDefault();
        scrollControls.start({
            y: y.current,
            transition: {
                duration: 2,
                ease: "linear"
            }
        }).then();
    }

    useEffect(() => {
        window.addEventListener("wheel", handleScroll, {passive: false});
        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    });

    return (
        <motion.img src="/logo.png"
                    alt="background scrolling logo"
                    style={{
                        position: "fixed",
                        top: "calc(70dvh)",
                        left: 0,
                        right: 0,
                        zIndex: -100,
                        width: "100%",
                        height: "auto",
                    }}
                    animate={scrollControls}
                    initial={{y: 0}}/>
    )
}