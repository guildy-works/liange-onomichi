'use client'

import clsx from "clsx";
import type { IconType } from "react-icons";
import {
    PiFlowerLotusLight,
    PiGiftLight,
    PiHandHeartLight,
    PiInfoLight,
    PiInstagramLogoLight,
    PiSparkleLight,
    PiSunLight,
    PiWavesLight,
} from "react-icons/pi";
import { menuCategories, site } from "@/data/site";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const icons: Record<string, IconType> = {
    facial: PiFlowerLotusLight,
    "facial-option": PiSparkleLight,
    body: PiHandHeartLight,
    "body-option": PiWavesLight,
    "hair-removal": PiSunLight,
    package: PiGiftLight,
};

export const MenuSection = () => {
    return (
        <section id="menu" className="section-space relative bg-ivory-100">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sage-200 to-transparent" />

            <div className="container-x">
                <SectionHeading
                    en="Menu"
                    ja="メニュー"
                    align="center"
                    lead="フェイシャルからボディ、光脱毛まで。おひとりおひとりのお悩みやご希望に合わせて、最適なコースをご提案いたします。"
                />

                <Stagger className="mt-14 grid gap-5 sm:mt-20 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
                    {menuCategories.map((cat) => {
                        const Icon = icons[cat.id];
                        const highlight = cat.id === "hair-removal" || cat.id === "package";
                        return (
                            <StaggerItem key={cat.id} className="h-full">
                                <article
                                    className={clsx(
                                        "flex h-full flex-col rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft sm:p-8",
                                        highlight ? "bg-sage-700 text-ivory-50" : "bg-ivory-50 shadow-card"
                                    )}
                                >
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <p className={clsx("font-en text-xl italic tracking-[0.15em]", highlight ? "text-sage-200" : "text-sage-500")}>
                                                {cat.en}
                                            </p>
                                            <h3 className={clsx("mt-1 text-lg", highlight ? "text-ivory-50" : "text-ink")}>{cat.ja}</h3>
                                        </div>
                                        <span className={clsx("flex h-12 w-12 shrink-0 items-center justify-center rounded-full", highlight ? "bg-ivory-50/10 text-ivory-100" : "bg-sage-100 text-sage-600")}>
                                            <Icon className="h-6 w-6" />
                                        </span>
                                    </div>

                                    <p className={clsx("mt-4 text-[12.5px] leading-relaxed", highlight ? "text-ivory-200/90" : "text-ink-light")}>
                                        {cat.description}
                                    </p>

                                    <ul className={clsx("mt-6 flex-1 divide-y", highlight ? "divide-ivory-50/10" : "divide-ivory-200")}>
                                        {cat.items.map((item, i) => (
                                            <li key={`${item.name}-${i}`} className="flex items-baseline justify-between gap-4 py-2.5 text-[13.5px]">
                                                <span className="flex items-baseline gap-2.5">
                                                    <span className={clsx("mt-1.5 h-1 w-1 shrink-0 rounded-full", highlight ? "bg-blush-200" : "bg-sage-400")} />
                                                    {item.name}
                                                </span>
                                                {item.time && (
                                                    <span className={clsx("shrink-0 font-jost text-xs tracking-wider", highlight ? "text-ivory-200" : "text-ink-muted")}>
                                                        {item.time}
                                                    </span>
                                                )}
                                            </li>
                                        ))}
                                    </ul>

                                    {cat.note && (
                                        <p className={clsx("mt-5 text-xs tracking-wider", highlight ? "text-blush-100" : "text-ink-muted")}>
                                            ※ {cat.note}
                                        </p>
                                    )}
                                </article>
                            </StaggerItem>
                        );
                    })}
                </Stagger>

                <Reveal delay={0.2} className="mt-12 rounded-3xl border border-blush-200/70 bg-blush-50/70 p-6 sm:mt-16 sm:p-8">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-start gap-3">
                            <PiInfoLight className="mt-0.5 h-5 w-5 shrink-0 text-blush-500" />
                            <div className="space-y-1.5 text-[13px] leading-relaxed text-ink-light">
                                <p>各コースの料金は、お気軽に Instagram の DM からお問い合わせください。</p>
                                <p>
                                    <span className="font-medium text-blush-500">ご自宅用の化粧品をご持参いただくと、500円引き</span>
                                    いたします。
                                </p>
                            </div>
                        </div>
                        <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn-instagram shrink-0">
                            <PiInstagramLogoLight className="h-4 w-4" />
                            料金を問い合わせる
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};