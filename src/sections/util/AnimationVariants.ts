const SCROLL_ANIMATION_VARIANTS = {
    // display higher when the active section is higher
    higher: {
        y: "100dvh",
        transition: {
            duration: 1,
        }
    },
    lower: {
        y: "-100dvh",
        transition: {
            duration: 1,
        }
    },
    onscreen: (delay: number) => ({
        y: 0,
        transition: {
            duration: 1.2,
            type: "spring",
            bounce: 0.4,
            delay: delay,
        },
    }),
    hover: (delay: number) => ({
        y: [0, 15, 0],
        x: [0, -3, 0],
        transition: {
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            delay: delay + 1.2,
        }
    }),
}

export {SCROLL_ANIMATION_VARIANTS};