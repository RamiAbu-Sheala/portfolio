const OFFSCREEN_ANIMATION_VARIANTS = {
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
}

const animationVariants = (onScreenDelay = 0) => {
    return {
        ...OFFSCREEN_ANIMATION_VARIANTS,
        onscreen: {
            y: 0,
            transition: {
                duration: 1.2,
                type: "spring",
                bounce: 0.4,
                delay: onScreenDelay,
            },
        },
    }
}

const floatingElementVariants = (onScreenDelay = 0) => {
    return {
        ...animationVariants(onScreenDelay),
        idle: {
            y: [0, 15, 0],
            x: [0, -3, 0],
            transition: {
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
            }
        },
    }
}

export { OFFSCREEN_ANIMATION_VARIANTS, animationVariants, floatingElementVariants };