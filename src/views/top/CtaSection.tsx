'use client'

import Image from "next-export-optimize-images/picture";
import { PiInstagramLogoLight, PiPhoneLight } from "react-icons/pi";
import bed2 from "@/assets/images/bed_2.jpg";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

export const CtaSection = () => {
    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0">
                <Image src={bed2} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-sage-800/70" />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-800/60 via-transparent to-transparent" />
            </div>

            <div className="container-x relative py-24 text-center text-ivory-50 sm:py-32">
                <Reveal>
                    <p className="label-en text-lg !text-blush-100 sm:text-xl">Reservation</p>
                    <h2 className="mt-4 text-2xl/[1.6] text-ivory-50 sm:text-3xl/[1.6] lg:text-[2.4rem]/[1.55]">
                        ご予約・ご質問は、Instagram から。
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-sm leading-loose text-ivory-100/90 sm:text-[15px]">
                        初めての方も、エステが初めての方も大歓迎です。
                        カウンセリングだけのご相談も承っておりますので、Instagram の DM からお気軽にご連絡ください。
                    </p>
                </Reveal>

                <Reveal delay={0.15} className="mt-10 flex flex-col items-center gap-4">
                    <a
                        href={site.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-instagram !px-10 !py-4 text-base"
                    >
                        <PiInstagramLogoLight className="h-6 w-6" />
                        Instagram で予約・質問する
                    </a>
                    <a href={site.telHref} className="inline-flex items-center gap-2 text-sm tracking-wider text-ivory-100 underline-offset-4 hover:underline">
                        <PiPhoneLight className="h-4 w-4" />
                        お電話の方は <span className="font-jost text-base">{site.tel}</span>
                    </a>
                    <p className="text-xs tracking-[0.2em] text-ivory-200">
                        {site.hours} ／ 定休日 {site.closed}
                    </p>
                </Reveal>
            </div>
        </section>
    );
};
