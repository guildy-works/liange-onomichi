'use client'

import { PiArrowUpRightLight, PiCalendarBlankLight, PiCarLight, PiClockLight, PiInstagramLogoLight, PiMapPinLight, PiPhoneLight } from "react-icons/pi";
import img13 from "@/assets/images/img13.jpg";
import img16 from "@/assets/images/img16.jpg";
import { TransitionImage } from "@/libs/ScrollTriggerAnimations/TransitionImage";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";

const info = [
    {
        icon: PiMapPinLight,
        label: "住所",
        value: (
            <>
                {site.postal}<br />
                {site.address}<br />
                {site.building}
            </>
        ),
    },
    {
        icon: PiClockLight,
        label: "営業時間",
        value: <>{site.hours}</>,
    },
    {
        icon: PiCalendarBlankLight,
        label: "定休日",
        value: <>{site.closed}</>,
    },
    {
        icon: PiCarLight,
        label: "駐車場",
        value: <>{site.parking}</>,
    },
];

const mapsLink = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(`${site.address} ${site.building}`);

export const AccessSection = () => {
    return (
        <section id="access" className="section-space relative overflow-hidden">
            <div className="container-x">
                <SectionHeading en="Access" ja="アクセス・店舗情報" align="center" lead="尾道市平原、マンション「グランシャリオ平原」の 3階にある、完全予約制のプライベートサロンです。" />

                <div className="mt-14 grid gap-10 sm:mt-20 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
                    {/* info */}
                    <div>
                        <Stagger className="divide-y divide-ivory-200 rounded-3xl bg-ivory-50 px-7 shadow-card sm:px-9" stagger={0.08}>
                            {info.map((row) => (
                                <StaggerItem key={row.label} className="flex gap-5 py-5">
                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-600">
                                        <row.icon className="h-5.5 w-5.5" />
                                    </span>
                                    <div>
                                        <p className="text-[11px] tracking-[0.25em] text-ink-muted">{row.label}</p>
                                        <p className="mt-1 text-[14px] leading-relaxed text-ink">{row.value}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </Stagger>

                        <Reveal delay={0.15} className="mt-6">
                            <a
                                href={site.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative block overflow-hidden rounded-3xl bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] p-[2px] shadow-soft transition-transform duration-300 hover:-translate-y-1"
                            >
                                <div className="flex items-center gap-5 rounded-[calc(1.5rem-2px)] bg-ivory-50 px-6 py-5 sm:px-8 sm:py-6">
                                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white shadow-card">
                                        <PiInstagramLogoLight className="h-8 w-8" />
                                    </span>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-[11px] tracking-[0.25em] text-[#dd2a7b]">ご予約・お問い合わせ</p>
                                        <p className="mt-1 text-[15px] font-medium leading-snug text-ink sm:text-base">
                                            Instagram の DM から<br className="sm:hidden" />お気軽にどうぞ
                                        </p>
                                        <p className="mt-1 font-jost text-[13px] tracking-wider text-ink-muted">{site.instagramId}</p>
                                    </div>
                                    <PiArrowUpRightLight className="h-5 w-5 shrink-0 text-ink-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </div>
                            </a>
                        </Reveal>

                        <Reveal delay={0.2} className="mt-4 flex flex-col gap-3 sm:flex-row">
                            <a href={site.telHref} className="btn-outline flex-1">
                                <PiPhoneLight className="h-4 w-4" />
                                {site.tel}
                            </a>
                            <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="btn-outline flex-1">
                                Google マップで開く
                                <PiArrowUpRightLight className="h-4 w-4" />
                            </a>
                        </Reveal>

                        <Reveal delay={0.25} className="mt-6 flex items-center gap-3 rounded-2xl border border-blush-200 bg-blush-50 px-5 py-3.5 text-[13px] text-blush-500">
                            <span className="h-2 w-2 shrink-0 rounded-full bg-blush-400" />
                            当店は女性専用です。
                        </Reveal>
                    </div>

                    {/* photos + map */}
                    <div className="flex flex-col gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <TransitionImage imageData={img16} alt="サロン入口" parallaxSlideLength={18} className="aspect-[4/3] rounded-2xl shadow-card" />
                            <TransitionImage imageData={img13} alt="駐車場" parallaxSlideLength={18} className="aspect-[4/3] rounded-2xl shadow-card" />
                        </div>
                        <Reveal delay={0.1} className="overflow-hidden rounded-3xl shadow-card">
                            <iframe
                                title="Liange の地図"
                                src={site.mapSrc}
                                className="h-[320px] w-full grayscale-[0.35] transition-all duration-700 hover:grayscale-0 sm:h-[380px]"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
};