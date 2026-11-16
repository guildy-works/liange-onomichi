'use client'

import { PiCertificateLight } from "react-icons/pi";
import img1 from "@/assets/images/img1.jpg";
import img3 from "@/assets/images/img3.jpg";
import { TransitionImage } from "@/libs/ScrollTriggerAnimations/TransitionImage";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const history = [
    { year: "1997", text: "大手エステサロン TBC に入社。フェイシャル・ボディ・脱毛の施術を担当。" },
    { year: "", text: "EA 上級認定エステティシャン／美容脱毛エステティシャンの資格を取得。" },
    { year: "2014", text: "17年間勤めた TBC を退社。" },
    { year: "2015", text: "尾道に「Liange 〜リアンジュ〜」をオープン。" },
];

const qualifications = ["EA 上級認定エステティシャン", "美容脱毛エステティシャン"];

export const ProfileSection = () => {
    return (
        <section id="profile" className="section-space relative overflow-hidden bg-sage-50">
            <div className="pointer-events-none absolute -right-24 top-10 -z-0 h-[26rem] w-[26rem] animate-blob bg-ivory-50/80 blur-2xl" />

            <div className="container-x relative">
                <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
                    {/* portrait */}
                    <div className="relative mx-auto w-full max-w-sm lg:sticky lg:top-28 lg:max-w-none">
                        <TransitionImage
                            imageData={img3}
                            alt="店長"
                            parallaxSlideLength={26}
                            className="arch aspect-[4/5] shadow-soft"
                        />
                        <Reveal delay={0.25} className="absolute -bottom-6 -right-3 w-[46%] sm:-right-6">
                            <div className="overflow-hidden rounded-2xl border-4 border-ivory-50 shadow-card">
                                <TransitionImage
                                    imageData={img1}
                                    alt="受賞歴"
                                    parallaxSlideLength={14}
                                    className="aspect-[4/3]"
                                />
                            </div>
                        </Reveal>
                    </div>

                    {/* text */}
                    <div>
                        <SectionHeading en="Profile" ja="店長ごあいさつ" />

                        <Reveal delay={0.1} className="mt-8 space-y-5 text-sm leading-[2.1] text-ink-light sm:text-[15px]">
                            <p>
                                1997年に TBC に入社し、フェイシャル・ボディ・脱毛などの施術を17年間担当してまいりました。
                                2014年に退社後、2015年に尾道で「Liange 〜リアンジュ〜」をオープンいたしました。
                            </p>
                            <p>
                                お客様おひとりおひとりに合った施術で、安心価格で高品質なエステメニューをご提供します。
                                皆様の日々のお悩みやコンプレックス、ぜひ私に教えてください。
                            </p>
                            <p>
                                お客様のお気持ちに寄り添い、気軽にコースを受けていただける空間を日々考え、
                                ご提供していくことをお約束いたします。ぜひ一度、Liange で美と癒しのひとときをお過ごしください。
                            </p>
                        </Reveal>

                        <Reveal delay={0.2} className="mt-8 flex flex-wrap gap-2">
                            {qualifications.map((q) => (
                                <span key={q} className="inline-flex items-center gap-1.5 rounded-full bg-ivory-50 px-4 py-1.5 text-[11.5px] tracking-wider text-sage-700 shadow-card">
                                    <PiCertificateLight className="h-4 w-4 text-sage-500" />
                                    {q}
                                </span>
                            ))}
                        </Reveal>

                        <div className="mt-12">
                            <p className="label-en text-base">History</p>
                            <Stagger className="mt-5 border-l border-sage-200" stagger={0.1}>
                                {history.map((h, i) => (
                                    <StaggerItem key={i} className="relative pb-6 pl-8 last:pb-0">
                                        <span className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full border-2 border-sage-400 bg-ivory" />
                                        {h.year && <span className="font-en text-xl italic tracking-wider text-sage-600">{h.year}</span>}
                                        <p className={`text-[13.5px] leading-relaxed text-ink-light ${h.year ? "mt-0.5" : ""}`}>{h.text}</p>
                                    </StaggerItem>
                                ))}
                            </Stagger>
                        </div>

                        <Reveal delay={0.15} className="mt-10 rounded-2xl bg-ivory-50/80 p-5 text-[12.5px] leading-relaxed text-ink-light">
                            <p className="label-en text-sm">Personal</p>
                            <p className="mt-2">
                                1967年9月19日生まれ ／ O型 ／ 乙女座<br />
                                福山市立大門高等学校卒業後、さまざまな仕事を経験し、1997年 TBC 入社。
                            </p>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
};