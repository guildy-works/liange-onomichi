import { LinkButton } from "@/components/LinkButton";
import { SectionBar } from "@/components/SectionBar"
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation";
import { TransitionImage } from "@/libs/ScrollTriggerAnimations/TransitionImage";
import img1 from "@/assets/images/img1.jpg";
import img3 from "@/assets/images/img3.jpg";
import { TitleType } from "@/components/Titles";

export const ProfileSection = () => {

    return (
        <div className="w-full relative mt-12 sm:mt-24 md:mt-36 flex flex-col">

            {/* 背景パネル */}
            <div className="w-svw sm:w-[70vw] absolute inset-0 bg-color2 -z-10" />

            <div className="w-full max-w-screen-md mx-auto pt-12">
                <SectionBar text="Profile" />

                <div className="grid md:grid-cols-2 py-12 mx-auto gap-2">
                    <div className="flex flex-col gap-4 sm:gap-8 p-8">
                        <TitleType title="店長プロフィール" subTitle="Onomichi Liange" />

                        <SkewScrollTriggerAnimation delay={0.1} tag="p" skewPanelClass="!bg-color2">
                            1997年TBCに入社。<br />
                            フェイシャル、ボディ、脱毛等の施術を行い、<br />
                            EA上級認定エステティシャン<br />
                            美容脱毛エステティシャンの資格を取得<br />
                            2014年退社後2015年Liange〜リアンジュオープン致しました。
                        </SkewScrollTriggerAnimation>

                        <SkewScrollTriggerAnimation delay={0.2} tag="p" skewPanelClass="!bg-color2">
                            2014年に退社後、
                            2015年に「Liange〜リアンジュ」をオープン致しました。
                        </SkewScrollTriggerAnimation>

                        <SkewScrollTriggerAnimation delay={0.3} tag="p" skewPanelClass="!bg-color2">
                            お客様1人1人に合った施術を行い安心価格で高品質なエステメニューを提供します。<br />
                            皆様の日々の悩み、コンプレックスを教えてください…
                        </SkewScrollTriggerAnimation>

                        <SkewScrollTriggerAnimation delay={0.4} tag="p" skewPanelClass="!bg-color2">
                            お客様の気持ちに寄り添い気軽にコースを受けて頂ける空間を<br />
                            日々考え提供していく事をお約束いたします。
                        </SkewScrollTriggerAnimation>

                        <SkewScrollTriggerAnimation delay={0.5} tag="p" skewPanelClass="!bg-color2">
                            是非一度Liangeで美と癒しのひと時をお過ごしください。<br />
                            お待ちしております。
                        </SkewScrollTriggerAnimation>

                        <SkewScrollTriggerAnimation delay={0.6} tag="p" skewPanelClass="!bg-color2">
                            1967年9月19日生まれ<br />
                            O型<br />
                            乙女座
                        </SkewScrollTriggerAnimation>

                        <SkewScrollTriggerAnimation delay={0.7} tag="p" skewPanelClass="!bg-color2">
                            福山市立大門高等学校卒業後色々なお仕事を経験し…<br />
                            1997年TBC入社<br />
                            2015年 Liengeオープン
                        </SkewScrollTriggerAnimation>
                    </div>
                    <div className="px-8 my-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 sm:gap-8">
                        <TransitionImage alt="プロフィール" imageData={img3} className="rounded-lg" />

                        <TransitionImage alt="受賞歴" imageData={img1} className="rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    )
}