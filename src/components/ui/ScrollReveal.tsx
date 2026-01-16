"use client";

import { motion, useInView, useAnimation, Variants } from "framer-motion";
import { useEffect, useRef } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    width?: "fit-content" | "100%";
    delay?: number;
    duration?: number;
    threshold?: number;
    animation?: "fade-up" | "fade-in" | "scale-up" | "slide-left" | "slide-right";
    viewportOnce?: boolean;
}

const animations: Record<string, Variants> = {
    "fade-up": {
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
    },
    "fade-in": {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    "scale-up": {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    },
    "slide-left": {
        hidden: { opacity: 0, x: -75 },
        visible: { opacity: 1, x: 0 },
    },
    "slide-right": {
        hidden: { opacity: 0, x: 75 },
        visible: { opacity: 1, x: 0 },
    }
};

const ScrollReveal = ({
    children,
    className = "",
    width = "100%",
    delay = 0,
    duration = 0.6,
    animation = "fade-up",
    viewportOnce = true
}: ScrollRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: viewportOnce, margin: "-50px" });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref} style={{ width }} className={className}>
            <motion.div
                variants={animations[animation]}
                initial="hidden"
                animate={mainControls}
                transition={{ duration, delay, ease: [0.25, 0.25, 0.25, 0.75] }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default ScrollReveal;
