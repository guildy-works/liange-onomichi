'use client'

import Image from "next-export-optimize-images/picture";
import bed1 from "@/assets/images/bed1.jpg";
import window from "@/assets/images/window.jpg";
import liangePanel from "@/assets/images/liange_panel.jpg";
import img5 from "@/assets/images/img5.jpg";
import img11 from "@/assets/images/img11.jpg";
import stillLife from "@/assets/images/still-life.jpg";
import cloverPicture from "@/assets/images/clover_picture.jpg";
import door from "@/assets/images/door.jpg";
import { Reveal } from "@/components/Reveal";

const photos = [
    { src: bed1, alt: "施術ベッド" },
    { src: window, alt: "窓辺" },
    { src: liangePanel, alt: "Liange の看板" },
    { src: img5, alt: "サロンの様子" },
    { src: stillLife, alt: "インテリア" },
    { src: img11, alt: "サロンの様子" },
    { src: cloverPicture, alt: "クローバー" },
    { src: door, alt: "入口" },
];

export const GallerySection = () => {
    const loop = [...photos, ...photos];
    return (
        <section className="relative overflow-hidden py-16 sm:py-20">
            <Reveal className="container-x mb-8 flex items-end justify-between sm:mb-10">
                <div>
                    <p className="label-en text-lg sm:text-xl">Salon</p>
                    <h2 className="mt-1 text-xl/[1.6] sm:text-2xl/[1.6]">やさしい光に包まれる、プライベートな空間</h2>
                </div>
                <p className="hidden text-[11px] tracking-[0.3em] text-ink-muted sm:block">ONOMICHI, HIROSHIMA</p>
            </Reveal>

            <div className="group relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ivory to-transparent sm:w-32" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ivory to-transparent sm:w-32" />
                <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused] sm:gap-6">
                    {loop.map((p, i) => (
                        <div
                            key={i}
                            className={`relative shrink-0 overflow-hidden shadow-card ${i % 3 === 1 ? "mt-8 h-44 w-44 rounded-2xl sm:h-56 sm:w-56" : "arch h-60 w-44 sm:h-72 sm:w-56"}`}
                        >
                            <Image src={p.src} alt={p.alt} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
