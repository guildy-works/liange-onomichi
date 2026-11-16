'use client'

import { motion } from "motion/react";
import Image from "next-export-optimize-images/picture";
import { PiArrowDownLight, PiInstagramLogoLight } from "react-icons/pi";
import room2 from "@/assets/images/room2.jpg";
import hurb from "@/assets/images/hurb.jpg";
import logo from "@/assets/images/logo.png";
import { site } from "@/data/site";

const ease = [0.22, 1, 0.36, 1] as const;
const base = 1.2;

const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay: base + delay, ease },
});

const features = ["女性専用", "大手サロン17年の実績", "リーズナブル価格"];

export const TopSection = () => {
    return (
        <section className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-0">
            {/* soft background */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -left-32 top-24 h-[28rem] w-[28rem] rounded-full bg-blush-100/70 blur-3xl" />
                <div className="absolute right-[-10%] top-[-10%] h-[32rem] w-[32rem] rounded-full bg-sage-100/80 blur-3xl" />
            </div>

            <div className="container-x grid items-center gap-10 pb-16 sm:gap-12 lg:min-h-svh lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pb-0 lg:pt-24">
                {/* copy */}
                <div className="relative order-2 lg:order-1">
                    <motion.p {...fadeUp(0)} className="flex items-center gap-3 text-[10.5px] tracking-[0.22em] text-sage-600 sm:text-xs sm:tracking-[0.35em]">
                        <span className="h-px w-6 shrink-0 bg-sage-400 sm:w-8" />
                        {site.tagline}
                    </motion.p>

                    <motion.h1 {...fadeUp(0.12)} className="mt-6 text-[1.9rem]/[1.55] text-ink sm:text-[2.5rem]/[1.5] lg:text-[2.9rem]/[1.5]">
                        がんばる毎日に、<br />
                        <span className="relative inline-block">
                            ごほうび
                            <span className="absolute bottom-1 left-0 -z-10 h-3 w-full bg-blush-100 sm:h-4" />
                        </span>
                        の<br />
                        ひとときを。
                    </motion.h1>

                    <motion.p {...fadeUp(0.24)} className="mt-7 max-w-md text-sm leading-[2.1] text-ink-light sm:text-[15px]">
                        大手サロンで17年間培った経験と技術を、リーズナブルな価格で。
                        尾道の小さなプライベートサロンで、心と身体をゆっくりほどく時間をお過ごしください。
                    </motion.p>

                    <motion.ul {...fadeUp(0.34)} className="mt-7 flex flex-wrap gap-2">
                        {features.map((f) => (
                            <li key={f} className="rounded-full border border-sage-200 bg-ivory-50/70 px-4 py-1.5 text-[11px] tracking-[0.15em] text-sage-700 backdrop-blur">
                                {f}
                            </li>
                        ))}
                    </motion.ul>

                    <motion.div {...fadeUp(0.46)} className="mt-9 flex flex-wrap items-center gap-4">
                        <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn-instagram">
                            <PiInstagramLogoLight className="h-4 w-4" />
                            ご予約・お問い合わせ
                        </a>
                        <a href="#menu" className="btn-outline">
                            メニューを見る
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: base + 1, duration: 1 }}
                        className="mt-14 hidden items-center gap-4 text-[10px] tracking-[0.35em] text-ink-muted lg:flex"
                    >
                        <span>SCROLL</span>
                        <span className="relative h-px w-16 overflow-hidden bg-ink/10">
                            <span className="absolute inset-0 origin-left animate-scrollLine bg-sage-400" />
                        </span>
                        <PiArrowDownLight className="h-3.5 w-3.5 animate-float" />
                    </motion.div>
                </div>

                {/* visual */}
                <div className="relative order-1 mx-auto w-full max-w-[440px] sm:max-w-[520px] lg:order-2 lg:max-w-none">
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1.2, delay: base - 0.1, ease }}
                        className="arch relative ml-auto aspect-[4/5] w-[78%] overflow-hidden shadow-soft sm:w-[72%] lg:w-[80%]"
                    >
                        <Image src={room2} alt="Liange の施術ルーム" className="h-full w-full object-cover" loading="eager" />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/10 via-transparent to-transparent" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.1, delay: base + 0.35, ease }}
                        className="absolute -bottom-6 left-0 w-[44%] overflow-hidden rounded-2xl shadow-card sm:-bottom-8 lg:left-4 lg:w-[40%]"
                    >
                        <Image src={hurb} alt="ハーブ" className="aspect-square h-full w-full object-cover" loading="eager" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, delay: base + 0.6, ease }}
                        className="absolute -top-4 right-2 h-16 w-16 animate-float sm:h-20 sm:w-20 lg:right-6"
                    >
                        <Image src={logo} alt="" className="h-full w-full object-contain drop-shadow-sm" loading="eager" />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: base + 0.8 }}
                        className="text-vertical absolute top-1/2 hidden -translate-y-1/2 whitespace-nowrap font-en text-sm italic tracking-[0.35em] text-ink-muted lg:-right-10 lg:block xl:-right-14"
                    >
                        Beauty &amp; Relaxation — Onomichi
                    </motion.p>
                </div>
            </div>
        </section>
    );
};