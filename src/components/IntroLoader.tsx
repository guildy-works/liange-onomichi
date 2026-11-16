'use client'

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next-export-optimize-images/picture";
import logo from "@/assets/images/logo.png";

export const IntroLoader = () => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const id = window.setTimeout(() => setShow(false), 1400);
        return () => window.clearTimeout(id);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    key="intro"
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-ivory"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                >
                    <motion.div
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Image src={logo} alt="" className="h-12 w-12 object-contain" />
                        <p className="mt-4 font-en text-4xl tracking-[0.2em] text-ink">Liange</p>
                        <p className="mt-2 text-[10px] tracking-[0.4em] text-ink-muted">ONOMICHI</p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
