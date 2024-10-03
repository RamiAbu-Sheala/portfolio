const OFFSCREEN_ANIMATION_VARIANTS = {
    // display higher when the active section is higher
    higher: {
        y: "200dvh",
        transition: {
            duration: 1,
        }
    },
    lower: {
        y: "-200dvh",
        transition: {
            duration: 1,
        }
    },
}

const getAnimationVariants = (onScreenDelay = 0) => {
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

const getFloatingElementVariants = (onScreenDelay = 0) => {
    return {
        ...getAnimationVariants(onScreenDelay),
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

export { OFFSCREEN_ANIMATION_VARIANTS, getAnimationVariants, getFloatingElementVariants };