'use client'

import { PiCoinsLight, PiHouseLineLight, PiMedalLight } from "react-icons/pi";
import este from "@/assets/images/este.jpg";
import nature from "@/assets/images/nature.jpg";
import onomichi from "@/assets/images/onomichi.jpg";
import { TransitionImage } from "@/libs/ScrollTriggerAnimations/TransitionImage";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const reasons = [
    {
        icon: PiMedalLight,
        title: "大手サロン17年の経験",
        text: "1997年から大手エステサロンでフェイシャル・ボディ・脱毛を担当。上級認定エステティシャンの確かな技術で、おひとりおひとりに合わせた施術を行います。",
    },
    {
        icon: PiCoinsLight,
        title: "続けやすい安心価格",
        text: "「エステは高いから」と諦めていた方にこそ来ていただきたい。高品質なメニューを、通いやすいリーズナブルな価格でご用意しています。",
    },
    {
        icon: PiHouseLineLight,
        title: "女性専用のプライベート空間",
        text: "完全予約制・女性専用のアットホームなサロンです。誰にも気兼ねなく、ご自身のためだけの時間を心ゆくまでお過ごしください。",
    },
];

export default function AboutSection() {
    return (
        <section id="concept" className="section-space relative overflow-hidden">
            <div className="pointer-events-none absolute right-[-12rem] top-32 -z-10 h-[34rem] w-[34rem] animate-blob bg-sage-100/60 blur-2xl" />

            <div className="container-x">
                <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
                    {/* images */}
                    <div className="relative order-2 mx-auto w-full max-w-md lg:order-1 lg:max-w-none">
                        <div className="grid grid-cols-[1.25fr_1fr] gap-4 sm:gap-5">
                            <TransitionImage
                                imageData={este}
                                alt="フェイシャル・ボディの施術"
                                parallaxSlideLength={30}
                                className="arch aspect-[3/4] shadow-soft"
                            />
                            <div className="flex flex-col gap-4 pt-12 sm:gap-5 sm:pt-16">
                                <TransitionImage
                                    imageData={nature}
                                    alt="やさしい自然"
                                    parallaxSlideLength={20}
                                    className="aspect-square rounded-2xl shadow-card"
                                />
                                <TransitionImage
                                    imageData={onomichi}
                                    alt="尾道の街並み"
                                    parallaxSlideLength={20}
                                    className="aspect-[4/3] rounded-2xl shadow-card"
                                />
                            </div>
                        </div>
                        <Reveal delay={0.3} className="absolute -left-3 bottom-6 sm:-left-6">
                            <p className="text-vertical font-en text-xl italic tracking-[0.3em] text-sage-500/80">Concept</p>
                        </Reveal>
                    </div>

                    {/* text */}
                    <div className="order-1 lg:order-2">
                        <SectionHeading
                            en="Concept"
                            size="md"
                            ja={<>美しくありたいと願う女性の、<br />心とカラダを癒すオアシスでありたい。</>}
                        />

                        <Reveal delay={0.15} className="mt-8 space-y-5 text-sm leading-[2.1] text-ink-light sm:text-[15px]">
                            <p>
                                私たちが目指す「美しさ」は、表面的なものではありません。
                                コースを受けていただき、心も身体もゆるやかにリラックスしていただくことで、
                                身体の内側から美しさを引き出し、日々の暮らしをより輝かせるお手伝いができたらと考えています。
                            </p>
                            <p>
                                エステが高いと諦めていた方、日頃の疲れを癒したい方、もっと綺麗になりたい方。
                                そんなお気持ちに寄り添ったコースを、アットホームな空間でご提供いたします。
                            </p>
                        </Reveal>
                    </div>
                </div>

                {/* reasons */}
                <div className="mt-24 sm:mt-32">
                    <SectionHeading en="Reason" ja="Liange が選ばれる3つの理由" align="center" />
                    <Stagger className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-3" stagger={0.12}>
                        {reasons.map((r, i) => (
                            <StaggerItem key={r.title}>
                                <div className="group relative h-full rounded-3xl border border-ivory-200 bg-ivory-50/80 p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft">
                                    <span className="font-en text-4xl italic text-sage-300">0{i + 1}</span>
                                    <div className="mt-4 flex h-14 w-14 items-center justify-center rounded-full bg-sage-100 text-sage-600 transition-colors group-hover:bg-sage-500 group-hover:text-ivory-50">
                                        <r.icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="mt-6 text-lg text-ink">{r.title}</h3>
                                    <p className="mt-3 text-[13px] leading-[2] text-ink-light">{r.text}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </Stagger>
                </div>
            </div>
        </section>
    );
}
