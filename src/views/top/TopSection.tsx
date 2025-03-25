import React from "react";
import clover from "@/assets/images/clover.png";
import bed1 from "@/assets/images/bed1.jpg";
import onomichi from "@/assets/images/onomichi.jpg";
import liangePanel from "@/assets/images/liange_panel.jpg";
import img5 from "@/assets/images/img5.jpg";
import img11 from "@/assets/images/img11.jpg";
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation";
import { TransitionImage } from "@/libs/ScrollTriggerAnimations/TransitionImage";
import Image from 'next-export-optimize-images/picture';

export const TopSection = () => {
    return (
        <div className="flex w-full max-w-screen-xl">
            <div className=" my-auto md:px-8">
                <p className="[writing-mode:vertical-rl] w-6 border-l-2 border-current font-jost">
                    ONOMICHI.
                </p>
            </div>

            {/* Content */}
            <div className="flex-grow">
                <div className="h-full flex flex-col">
                    {/* description */}

                    <div className="mt-1 sm:mt-2 md:mt-3">
                        <div className="flex fitems-center gap-3 mt-16">
                            <div>
                                <h2 className="ml-2 sm:ml-3 md:ml-6 select-none text-size3">女性専用 脱毛・エステティックサロン</h2>
                                <h1 className="ml-2 sm:ml-3 md:ml-6 select-none mt-3 text-[2rem] font-asterdam">
                                    <span className="text-color3">L</span>
                                    <span className="ml-2">iange</span>
                                </h1>
                            </div>
                            <Image className="w-[100px] md:w-[120px] filter hue-rotate-[27deg] grayscale-[0.28]" src={clover} alt="clover" />
                        </div>

                        <div className="max-w-[680px] w-full mt-8 md:mt-32">
                            <SkewScrollTriggerAnimation delay={2}>
                                <h2 className="text-size3">脱毛・エステティックサロン</h2>
                            </SkewScrollTriggerAnimation>
                            <SkewScrollTriggerAnimation delay={2} className="mt-2">
                                <span className="text-title2 font-jost py-1">Liange</span>
                                <span className="text-title4 py-1 ml-3">- リアンジュ -</span>
                            </SkewScrollTriggerAnimation>
                        </div>

                        <div className="mt-4 sm:mt-8 md:mt-6 max-w-[680px] w-full">
                            <SkewScrollTriggerAnimation delay={2.1} className="w-full" tag="p">
                                大手サロンで17年間施術した実績と経験を活かし、<br />
                                かつリーズナブルな価格でメニューを提供するエステサロンを目指しました。<br />
                            </SkewScrollTriggerAnimation>
                        </div>

                        <div className="mt-2 md:mt-4 max-w-[680px] w-full">
                            <SkewScrollTriggerAnimation delay={2.2} className="w-full" tag="p">
                                エステが高いと諦めていた方、<br />
                                日頃の疲れを癒したい方、<br />
                                綺麗になりたい方に寄り添ったコースを提供いたします。<br />
                            </SkewScrollTriggerAnimation>
                        </div>

                        <div className="mt-2 md:mt-4 max-w-[680px] w-full">
                            <SkewScrollTriggerAnimation delay={2.3} className="w-full" tag="p">
                                アットホームな空間でリラックスしながら、美と健康を追求するサロン作りを目指してます。<br />
                                是非一度ご来店ください。
                            </SkewScrollTriggerAnimation>
                        </div>

                    </div>

                    {/* images */}
                    <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-3 md:gap-12 mx-auto mt-16">
                        {[onomichi, img5, liangePanel, img11].map((img, index) => (
                            <TransitionImage key={index}
                                className=" rounded-sm"
                                imageData={img}
                                alt={`Image ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Vertical Line */}
            <div className="pl-4 md:pl-12 pt-8 flex flex-col z-10">
                <div className="flex-grow border-l-2 border-current flex items-start">
                    <h6 className="ml-1 my-auto [writing-mode:vertical-rl] w-6">Liange</h6>
                </div>
            </div>
        </div>
    )
}