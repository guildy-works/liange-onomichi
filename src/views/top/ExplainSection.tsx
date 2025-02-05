import img6 from "@/assets//images/img6.jpg";
import img7 from "@/assets//images/img7.jpg";
import img8 from "@/assets//images/img8.jpg";
import img9 from "@/assets//images/img9.jpg";
import img10 from "@/assets//images/img10.jpg";
import img11 from "@/assets//images/img11.jpg";
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation";
import { TitleType, TitleType2, TitleType3 } from "@/components/Titles";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import { SectionBar } from "@/components/SectionBar";
import { TransitionImage } from "@/libs/ScrollTriggerAnimations/TransitionImage";

export const ExplainSection = () => {
    return (
        <div className="max-w-screen-md w-full flex flex-wrap justify-center mt-12 sm:mt-24 md:mt-36 relative">

            <div className="bg-color2 h-full w-full pb-10 -z-10 absolute mt-28 sm:ml-[120px]"></div>

            <div className="w-full flex justify-center mb-8 sm:mb-12 md:mb-12">
                <SectionBar text="Detail" className="font-normal" />
            </div>

            <div className="w-full md:w-5/12 flex flex-wrap px-8 mt-4">
                <div className="w-1/2 sm:w-1/3 md:w-full p-1">
                    <TransitionImage
                        className="w-full h-full object-cover"
                        src={img6}
                        parallaxSlideLength={25}
                        alt="test"
                    />
                </div>

                <div className="w-1/2 sm:w-1/3 md:w-2/6 p-1">
                    <TransitionImage
                        className="w-full h-full object-cover"
                        src={img9}
                        parallaxSlideLength={25}
                        alt="test"
                    />
                </div>
                <div className="w-1/2 sm:w-1/3 md:w-4/6 mr-auto p-1">
                    <TransitionImage
                        className="w-full h-full object-cover"
                        src={img10}
                        parallaxSlideLength={25}
                        alt="test"
                    />
                </div>
                <div className="w-1/2 sm:w-1/3 md:w-1/3 p-1">
                    <TransitionImage
                        className="w-full h-full object-cover"
                        src={img11}
                        parallaxSlideLength={25}
                        alt="test"
                    />
                </div>

                <div className="w-1/2 sm:w-1/3 md:w-1/2 p-1">
                    <TransitionImage
                        className="w-full h-full object-cover"
                        src={img7}
                        parallaxSlideLength={25}
                        alt="test"
                    />
                </div>
                <div className="w-1/2 sm:w-1/3 md:w-1/2 p-1">
                    <TransitionImage
                        className="w-full h-full object-cover"
                        src={img8}
                        parallaxSlideLength={25}
                        alt="test"
                    />
                </div>
            </div>

            <div className="w-full md:w-7/12 px-8 mt-4">
                <div className="flex flex-col justify-center h-full max-w-[620px] mx-auto">

                    <FadeAndSlideScrollTriggerAnimation delay={100} tag="h3" innerClassName="text-title3">
                        光脱毛について
                    </FadeAndSlideScrollTriggerAnimation>

                    <FadeAndSlideScrollTriggerAnimation delay={0} className="mt-4 sm:mt-8">

                        光脱毛は、最新の脱毛技術を用いた美容施術で、<br />
                        お肌に優しく、効果的にムダ毛を処理する方法です。<br />
                        エステサロン Liange（リアンジュ）では、一般的な光脱毛メニューを提供しております。

                    </FadeAndSlideScrollTriggerAnimation>

                    <FadeAndSlideScrollTriggerAnimation delay={100} className="mt-4 md:mt-8">
                        光脱毛の特徴
                    </FadeAndSlideScrollTriggerAnimation>

                    <FadeAndSlideScrollTriggerAnimation delay={200} tag="p" className="mt-1 sm:mt-2">
                        光脱毛は、肌への負担が少なく、痛みを感じにくい方法です。<br />
                        数回の施術でムダ毛の減少が実感できることが一般的です。<br />
                        肌へのダメージが少なく、肌トラブルが起こりにくいとされています。<br />
                        また、光脱毛は毛穴を引き締める効果があり、美肌に導きます。<br />
                    </FadeAndSlideScrollTriggerAnimation>

                    <FadeAndSlideScrollTriggerAnimation delay={300} className="mt-4 sm:mt-8" tag="h3">
                        カウンセリング
                    </FadeAndSlideScrollTriggerAnimation>

                    <FadeAndSlideScrollTriggerAnimation delay={400} className="mt-1 sm:mt-2" tag="p">
                        初めて光脱毛を受けられる方は、事前のカウンセリングが必要です。<br />
                        カウンセリングでは、お客様の肌質や毛質を確認し、<br />
                        適切な施術プランをご提案いたします。<br />
                    </FadeAndSlideScrollTriggerAnimation>
                    <FadeAndSlideScrollTriggerAnimation delay={400} className="mt-1 sm:mt-2" tag="p">
                        また、施術に関する注意事項やアフターケアについても詳しく説明いたします。<br />
                        施術回数や期間は個人差がありますので、カウンセリングでご相談ください。
                    </FadeAndSlideScrollTriggerAnimation>

                </div>
            </div>
        </div>
    )
}
