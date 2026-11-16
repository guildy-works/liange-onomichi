'use client'

import { motion } from "motion/react";
import type { CSSProperties, ElementType, ReactNode } from "react";

interface RevealProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    y?: number;
    once?: boolean;
    className?: string;
    style?: CSSProperties;
    as?: ElementType;
}

export const Reveal = ({
    children,
    delay = 0,
    duration = 0.8,
    y = 24,
    once = true,
    className,
    style,
    as = "div",
}: RevealProps) => {
    const Tag = (motion as any)[as as string] ?? motion.div;
    return (
        <Tag
            className={className}
            style={style}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once, margin: "-10% 0px" }}
            transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </Tag>
    );
};

interface StaggerProps {
    children: ReactNode;
    className?: string;
    stagger?: number;
    delay?: number;
}

export const Stagger = ({ children, className, stagger = 0.08, delay = 0 }: StaggerProps) => (
    <motion.div
        className={className}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0px" }}
        variants={{
            hidden: {},
            show: { transition: { staggerChildren: stagger, delayChildren: delay } },
        }}
    >
        {children}
    </motion.div>
);

export const StaggerItem = ({ children, className }: { children: ReactNode; className?: string }) => (
    <motion.div
        className={className}
        variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
        }}
    >
        {children}
    </motion.div>
);
