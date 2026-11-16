import Image from "next-export-optimize-images/picture";
import { PiInstagramLogoLight, PiPhoneLight } from "react-icons/pi";
import logo from "@/assets/images/logo.png";
import { navItems, site } from "@/data/site";

export const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-sage-800 text-ivory-100">
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-sage-700/50 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-blush-400/10 blur-3xl" />

            <div className="container-x relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.2fr_1fr_1fr]">
                <div>
                    <div className="flex items-center gap-3">
                        <Image src={logo} alt="" className="h-10 w-10 object-contain brightness-0 invert opacity-90" />
                        <div className="leading-none">
                            <p className="font-en text-4xl text-ivory-50">Liange</p>
                            <p className="mt-1.5 text-[11px] tracking-[0.3em] text-ivory-200">リアンジュ</p>
                        </div>
                    </div>
                    <p className="mt-6 max-w-sm text-sm leading-loose text-ivory-200/90">
                        {site.tagline}。<br />
                        大手サロン17年の経験を活かし、リーズナブルな価格で心と身体を癒すコースをご提供いたします。
                    </p>
                    <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-ivory-200/30 px-4 py-1.5 text-xs tracking-widest text-ivory-100">
                        <span className="h-1.5 w-1.5 rounded-full bg-blush-300" />
                        女性専用サロン
                    </p>
                </div>

                <div>
                    <p className="label-en text-base !text-ivory-200">Menu</p>
                    <ul className="mt-5 space-y-3">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a href={item.href} className="link-underline inline-flex items-baseline gap-3 text-ivory-50">
                                    <span className="font-en text-lg tracking-wider">{item.en}</span>
                                    <span className="text-[11px] tracking-[0.2em] text-ivory-200/80">{item.ja}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <p className="label-en text-base !text-ivory-200">Information</p>
                    <address className="mt-5 space-y-3 text-sm not-italic leading-relaxed text-ivory-100">
                        <p>
                            {site.postal}<br />
                            {site.address}<br />
                            {site.building}
                        </p>
                        <p>
                            {site.hours}<br />
                            <span className="text-ivory-200/80">定休日：{site.closed}</span>
                        </p>
                    </address>
                    <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn-instagram mt-6">
                        <PiInstagramLogoLight className="h-4 w-4" />
                        Instagram でご予約・お問い合わせ
                    </a>
                    <a href={site.telHref} className="mt-3 flex items-center gap-2 text-sm tracking-widest text-ivory-200 transition-colors hover:text-ivory-50">
                        <PiPhoneLight className="h-4 w-4" />
                        {site.tel}
                    </a>
                </div>
            </div>

            <div className="relative border-t border-ivory-100/10">
                <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-[11px] tracking-[0.2em] text-ivory-200/70 sm:flex-row">
                    <p>© {new Date().getFullYear()} Liange Onomichi. All rights reserved.</p>
                    <p className="font-en text-sm italic tracking-widest">Beauty &amp; Relaxation in Onomichi</p>
                </div>
            </div>
        </footer>
    );
};
