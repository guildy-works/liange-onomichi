'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import Image from "next-export-optimize-images/picture";
import { PiInstagramLogoLight, PiListLight, PiPhoneLight, PiXLight } from "react-icons/pi";
import logo from "@/assets/images/logo.png";
import { navItems, site } from "@/data/site";

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <>
            <header
                className={clsx(
                    "fixed inset-x-0 top-0 z-50 transition-all duration-500",
                    scrolled ? "bg-ivory/85 backdrop-blur-md shadow-[0_1px_0_0_rgba(58,56,53,0.06)]" : "bg-transparent"
                )}
            >
                <div className={clsx("container-x flex items-center justify-between transition-all duration-500", scrolled ? "h-16" : "h-20 sm:h-24")}>
                    <Link href="#top" className="flex items-center gap-2.5" aria-label="Liange トップへ">
                        <Image src={logo} alt="" className="h-8 w-8 sm:h-9 sm:w-9 object-contain" />
                        <span className="flex flex-col leading-none">
                            <span className="font-en text-[1.6rem] sm:text-3xl tracking-wide text-ink">Liange</span>
                            <span className="mt-1 text-[10px] tracking-[0.3em] text-ink-light">リアンジュ</span>
                        </span>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-9">
                        {navItems.map((item) => (
                            <a key={item.href} href={item.href} className="group flex flex-col items-center text-ink">
                                <span className="font-en text-[15px] tracking-[0.15em]">{item.en}</span>
                                <span className="mt-0.5 text-[10px] tracking-[0.2em] text-ink-muted transition-colors group-hover:text-sage-500">{item.ja}</span>
                            </a>
                        ))}
                        <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn-instagram !py-2.5 !px-5 text-[13px]">
                            <PiInstagramLogoLight className="h-4 w-4" />
                            ご予約・お問い合わせ
                        </a>
                    </nav>

                    <button
                        type="button"
                        onClick={() => setOpen(true)}
                        className="lg:hidden flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-ivory/70 text-ink backdrop-blur"
                        aria-label="メニューを開く"
                    >
                        <PiListLight className="h-6 w-6" />
                    </button>
                </div>
            </header>

            <AnimatePresence>
                {open && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="fixed inset-0 z-[60] flex flex-col bg-ivory lg:hidden"
                    >
                        <div className="container-x flex h-20 items-center justify-between">
                            <span className="font-en text-3xl text-ink">Liange</span>
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink"
                                aria-label="メニューを閉じる"
                            >
                                <PiXLight className="h-6 w-6" />
                            </button>
                        </div>

                        <div className="container-x flex flex-1 flex-col justify-center gap-2 pb-16">
                            {navItems.map((item, i) => (
                                <motion.a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
                                    className="flex items-baseline gap-4 border-b border-ink/10 py-4"
                                >
                                    <span className="font-en text-3xl text-ink">{item.en}</span>
                                    <span className="text-xs tracking-[0.25em] text-ink-muted">{item.ja}</span>
                                </motion.a>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="mt-8"
                            >
                                <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn-instagram w-full">
                                    <PiInstagramLogoLight className="h-5 w-5" />
                                    Instagram でご予約・お問い合わせ
                                </a>
                                <a href={site.telHref} className="btn-outline mt-3 w-full">
                                    <PiPhoneLight className="h-5 w-5" />
                                    {site.tel}
                                </a>
                                <p className="mt-3 text-center text-xs tracking-widest text-ink-muted">{site.hours}</p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

