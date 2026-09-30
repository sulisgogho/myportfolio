'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface ScrollRevealProps {
    children: React.ReactNode;
    direction?: 'up' | 'down' | 'left' | 'right' | 'zoom' | 'fade';
    delay?: number;
    duration?: number;
    className?: string;
    distance?: number;
    blur?: boolean;
    scale?: boolean;
    once?: boolean;
    amount?: number | "some" | "all";
}

export function ScrollReveal({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.65,
    className = '',
    distance = 45,
    blur = true,
    scale = true,
    once = false, // Set to false so it animates every time you scroll into view!
    amount = 0.15,
}: ScrollRevealProps) {
    const getInitial = () => {
        const initial: Record<string, any> = { opacity: 0 };

        if (blur) initial.filter = 'blur(10px)';
        if (scale) initial.scale = 0.95;

        switch (direction) {
            case 'up':
                initial.y = distance;
                break;
            case 'down':
                initial.y = -distance;
                break;
            case 'left':
                initial.x = distance;
                break;
            case 'right':
                initial.x = -distance;
                break;
            case 'zoom':
                initial.scale = 0.88;
                break;
            case 'fade':
            default:
                break;
        }

        return initial;
    };

    const getAnimate = () => {
        const animate: Record<string, any> = {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
        };

        if (blur) animate.filter = 'blur(0px)';

        return animate;
    };

    return (
        <motion.div
            initial={getInitial()}
            whileInView={getAnimate()}
            viewport={{ once, amount }}
            transition={{
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1], // Smooth Apple-style cubic bezier
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Staggered Child Reveal Container for Lists/Grids of Cards
interface StaggerContainerProps {
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
    once?: boolean;
    amount?: number | "some" | "all";
}

export function StaggerContainer({
    children,
    className = '',
    staggerDelay = 0.1,
    once = false,
    amount = 0.15,
}: StaggerContainerProps) {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
            },
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({
    children,
    className = '',
    distance = 40,
}: {
    children: React.ReactNode;
    className?: string;
    distance?: number;
}) {
    const itemVariants: Variants = {
        hidden: {
            opacity: 0,
            y: distance,
            scale: 0.95,
            filter: 'blur(8px)',
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <motion.div variants={itemVariants} className={className}>
            {children}
        </motion.div>
    );
}

export default ScrollReveal;
