'use client'

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { PiInstagramLogoLight } from "react-icons/pi";
import { site } from "@/data/site";

export const FloatingCta = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 24 }}
                    transition={{ duration: 0.4 }}
                    className="fixed inset-x-4 bottom-4 z-40 lg:hidden"
                >
                    <a
                        href={site.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-full bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] px-5 py-3.5 text-white shadow-soft"
                    >
                        <span className="flex items-center gap-3">
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                                <PiInstagramLogoLight className="h-5 w-5" />
                            </span>
                            <span className="leading-tight">
                                <span className="block text-[10px] tracking-[0.25em] text-white/85">ご予約・お問い合わせ</span>
                                <span className="block font-jost text-lg tracking-wider">{site.instagramId}</span>
                            </span>
                        </span>
                        <span className="text-[10px] tracking-widest text-white/85">DM で予約</span>
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
