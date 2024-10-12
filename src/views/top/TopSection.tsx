import React from "react";
import clover from "@/assets/images/clover.jpg";
import bed1 from "@/assets/images/bed1.jpg";
import onomichi from "@/assets/images/onomichi.jpg";
import liangePanel from "@/assets/images/liange_panel.jpg";
import img5 from "@/assets/images/img5.jpg";
import img11 from "@/assets/images/img11.jpg";
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation";
import { TransitionImage } from "@/libs/ScrollTriggerAnimations/TransitionImage";
import Image from "next/image";

export const TopSection = () => {
    return (
        <div className="flex min-h-[100svh] w-full max-w-screen-lg">
            {/* Content */}
            <div className="flex-grow">
                <div className="h-full flex flex-col justify-around">
                    {/* description */}
                    <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 min-h-[160px] mt-2 sm:mt-8 md:mt-12 ml-1 sm:ml-12 md:ml-18 p-2 sm:p-2 md:p-3">
                        <div>
                            <h2 className="ml-2 sm:ml-3 md:ml-6 select-none text-size3">女性専用 脱毛・エステティックサロン</h2>
                            <h1 className="ml-2 sm:ml-3 md:ml-6 select-none mt-3 text-title1 font-asterdam">
                                <span className="text-color3">L</span>
                                <span className="ml-2">iange</span>
                            </h1>
                        </div>
                        <Image className="h-[120px] w-[120px] filter hue-rotate-[27deg] grayscale-[0.28]" src={clover} alt="clover" />
                    </div>

                    <div className="mt-1 sm:mt-2 md:mt-3 flex flex-row">
                        <div className="ml-1 sm:ml-3 md:ml-6 z-10">
                            <p className="[writing-mode:vertical-rl] w-6 border-l-2 border-current font-jost">
                                ONOMICHI.
                            </p>
                        </div>

                        <div className="ml-0 sm:ml-8 md:ml-12 lg:ml-24 xl:ml-32 mt-2 md:mt-5 px-2 sm:px-3">
                            <div className="max-w-[680px] w-full">
                                <SkewScrollTriggerAnimation delay={2000}>
                                    <h2 className="text-size3">脱毛・</h2>
                                </SkewScrollTriggerAnimation>
                                <SkewScrollTriggerAnimation delay={2000} className="mt-2">
                                    <span className="text-title2 font-jost py-1">Liange</span>
                                    <span className="text-title4 py-1 ml-3">- リアンジュ -</span>
                                </SkewScrollTriggerAnimation>
                            </div>

                            <div className="mt-4 sm:mt-8 md:mt-6 max-w-[680px] w-full">
                                <SkewScrollTriggerAnimation delay={2100} className="w-full" tag="p">
                                    大手サロンで17年間施術した実績と経験を活かし、<br />
                                    かつリーズナブルな価格でメニューを提供するエステサロンを目指しました。<br />
                                </SkewScrollTriggerAnimation>
                            </div>

                            <div className="mt-2 md:mt-4 max-w-[680px] w-full">
                                <SkewScrollTriggerAnimation delay={2200} className="w-full" tag="p">
                                    エステが高いと諦めていた方、<br />
                                    日頃の疲れを癒したい方、<br />
                                    綺麗になりたい方に寄り添ったコースを提供いたします。<br />
                                </SkewScrollTriggerAnimation>
                            </div>

                            <div className="mt-2 md:mt-4 max-w-[680px] w-full">
                                <SkewScrollTriggerAnimation delay={2300} className="w-full" tag="p">
                                    アットホームな空間でリラックスしながら、美と健康を追求するサロン作りを目指してます。<br />
                                    是非一度ご来店ください。
                                </SkewScrollTriggerAnimation>
                            </div>
                        </div>
                    </div>

                    {/* images */}
                    <div className="flex flex-wrap items-center justify-center mt-8 md:mt-0 p-2 sm:p-8 w-full">
                        {[onomichi, img5, liangePanel, img11].map((img, index) => (
                            <div key={index} className=" w-1/2 md:w-auto p-1 sm:p-2 md:p-3">
                                <TransitionImage
                                    className="h-full object-fill  md:w-72"
                                    src={img}
                                    alt={`Image ${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Vertical Line */}
            <div className="w-1/12 h-[calc(100vh-40px)] py-2 md:py-4 flex flex-col z-10">
                <div className="flex-grow border-l-2 border-current flex items-start">
                    <h6 className="ml-1 my-auto [writing-mode:vertical-rl] w-6">Liange</h6>
                </div>
            </div>
        </div>
    )
}