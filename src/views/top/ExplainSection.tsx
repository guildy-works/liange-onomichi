'use client'

import { PiChatCircleDotsLight, PiDropLight, PiHeartStraightLight, PiInstagramLogoLight, PiShieldCheckLight, PiSparkleLight } from "react-icons/pi";
import img6 from "@/assets/images/img6.jpg";
import img9 from "@/assets/images/img9.jpg";
import { TransitionImage } from "@/libs/ScrollTriggerAnimations/TransitionImage";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";

const points = [
    { icon: PiHeartStraightLight, title: "痛みを感じにくい", text: "肌への負担が少なく、痛みを感じにくいやさしい方法です。" },
    { icon: PiShieldCheckLight, title: "肌トラブルが起こりにくい", text: "肌へのダメージが少なく、敏感肌の方もご相談いただけます。" },
    { icon: PiSparkleLight, title: "数回で実感", text: "数回の施術でムダ毛の減少を実感いただけることが一般的です。" },
    { icon: PiDropLight, title: "毛穴を引き締め美肌へ", text: "光の作用で毛穴を引き締め、なめらかな美肌へ導きます。" },
];

const flow = [
    { step: "01", title: "Instagram でご予約", text: "Instagram の DM からお気軽にご連絡ください。ご希望の日時をお伺いします。" },
    { step: "02", title: "カウンセリング", text: "肌質・毛質を丁寧に確認し、あなたに合った施術プランをご提案します。" },
    { step: "03", title: "施術", text: "リラックスできる個室で、やさしく丁寧に施術いたします。" },
    { step: "04", title: "アフターケア", text: "施術後の注意点やホームケアもしっかりお伝えします。" },
];

export const ExplainSection = () => {
    return (
        <section id="hair-removal" className="section-space relative overflow-hidden">
            <div className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-blush-100/60 blur-3xl" />

            <div className="container-x">
                <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
                    <div>
                        <SectionHeading en="Hair Removal" size="md" ja="お肌にやさしい、光脱毛。" />
                        <Reveal delay={0.15} className="mt-8 space-y-5 text-sm leading-[2.1] text-ink-light sm:text-[15px]">
                            <p>
                                光脱毛は、お肌にやさしく効果的にムダ毛を処理する美容施術です。
                                Liange では、自己処理の手間やお肌への負担を減らし、
                                つるんとなめらかな素肌へ導く光脱毛メニューをご用意しています。
                            </p>
                            <p>
                                施術回数や期間には個人差がございます。初めての方は事前カウンセリングで、
                                お客様の肌質・毛質を確認しながら最適なプランをご提案いたします。
                            </p>
                        </Reveal>

                        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2" stagger={0.1}>
                            {points.map((p) => (
                                <StaggerItem key={p.title}>
                                    <div className="flex h-full gap-4 rounded-2xl bg-ivory-50 p-5 shadow-card">
                                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blush-100 text-blush-500">
                                            <p.icon className="h-5.5 w-5.5" />
                                        </span>
                                        <div>
                                            <h4 className="text-[15px] text-ink">{p.title}</h4>
                                            <p className="mt-1 text-[12.5px] leading-relaxed text-ink-light">{p.text}</p>
                                        </div>
                                    </div>
                                </StaggerItem>
                            ))}
                        </Stagger>
                    </div>

                    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                        <TransitionImage
                            imageData={img6}
                            alt="光脱毛の施術"
                            parallaxSlideLength={30}
                            className="arch aspect-[4/5] w-[82%] shadow-soft lg:ml-auto"
                        />
                        <TransitionImage
                            imageData={img9}
                            alt="丁寧なカウンセリングと施術"
                            parallaxSlideLength={20}
                            className="absolute -bottom-8 right-0 aspect-[4/3] w-[52%] rounded-2xl shadow-card lg:left-0 lg:right-auto"
                        />
                    </div>
                </div>

                {/* flow */}
                <div className="mt-28 sm:mt-36">
                    <SectionHeading en="Flow" ja="ご来店からの流れ" align="center" lead="初めての方も安心してお越しいただけるよう、丁寧にご案内いたします。" />

                    <Stagger className="relative mt-14 grid gap-8 sm:mt-16 md:grid-cols-4 md:gap-6" stagger={0.12}>
                        <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-sage-200 to-transparent md:block" />
                        {flow.map((f) => (
                            <StaggerItem key={f.step} className="relative">
                                <div className="flex flex-col items-center text-center">
                                    <div className="relative flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-sage-200 bg-ivory">
                                        <span className="font-en text-2xl italic text-sage-600">{f.step}</span>
                                    </div>
                                    <h4 className="mt-5 text-base text-ink">{f.title}</h4>
                                    <p className="mt-2 max-w-[16rem] text-[12.5px] leading-relaxed text-ink-light">{f.text}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </Stagger>

                    <Reveal delay={0.2} className="mt-14 flex flex-col items-center gap-4 text-center">
                        <p className="flex items-center gap-2 text-sm text-ink-light">
                            <PiChatCircleDotsLight className="h-5 w-5 text-sage-500" />
                            ご不安なこと、気になることはお気軽にご相談ください。
                        </p>
                        <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn-instagram">
                            <PiInstagramLogoLight className="h-4 w-4" />
                            カウンセリングを予約する
                        </a>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
