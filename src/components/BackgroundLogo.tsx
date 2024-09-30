'use client';
import {motion, useAnimation} from "framer-motion";
import {useEffect} from "react";

export function BackgroundLogo() {

    const scrollControls = useAnimation();
    const handleScroll = () => {
        const scrollY = window.scrollY;
        scrollControls.start({
            y: scrollY/1.333,
            transition: {
                duration: 0,
                ease: "linear"
            }
        }).then();
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return (
        <motion.img src="/logo.png"
                    alt="background scrolling logo"
                    style={{
                        position: "absolute",
                        top: "calc(70dvh)",
                        left: 0,
                        right: 0,
                        zIndex: -10,
                        width: "100%",
                        height: "auto",
                    }}
                    animate={scrollControls}
                    initial={{y: 0}}/>
    )
}