import window from "@/assets//images/window.jpg";
import nature from "@/assets//images/nature.jpg";
import room2 from "@/assets//images/room2.jpg";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import { TransitionImage } from "@/libs/ScrollTriggerAnimations/TransitionImage";

export default function AboutSection() {

    return (
        <div className="max-w-screen-md w-full flex flex-wrap  px-8 sm:px-16 relative">
           
           <div className="bg-color2 h-[800px] -top-[30%] -left-0 w-svw pb-10 -z-10 absolute"></div>

            <div className="w-full md:w-1/2">
                <div className="flex flex-col justify-center h-full">
                    <div className="mt-2 sm:mt-3 md:mt-4">
                        <FadeAndSlideScrollTriggerAnimation>
                            <h2 className="text-title1 font-jost">- <span className="text-color3">C</span>oncept</h2>
                        </FadeAndSlideScrollTriggerAnimation>
                    </div>

                    <div className="mt-2 sm:mt-3 md:mt-4">
                        <FadeAndSlideScrollTriggerAnimation>
                            <h3 className="text-title4">
                                美しくありたいと願う女性の<br />
                                心とカラダを癒す<br />
                                オアシスでありたい<br />
                            </h3>
                        </FadeAndSlideScrollTriggerAnimation>
                    </div>

                    <div className="mt-2 sm:mt-3 md:mt-4">
                        <FadeAndSlideScrollTriggerAnimation>
                            <p className="text-p">
                                私たちが目指す「美しさ」は表面的なものではありません。<br />
                                コースを受けて頂き、<br />
                                心も身体もリラックスしていただく事で身体の内側から美しさを引き出し、<br />
                                日々の暮らしをより輝かせる事が出来たらと考えてます。
                            </p>
                        </FadeAndSlideScrollTriggerAnimation>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2 mt-6">
                <div className="flex flex-wrap">
                    <div className="w-full sm:w-1/3 md:w-full p-1">
                        <TransitionImage
                            className="w-full h-full object-cover rounded-sm"
                            imageData={room2}
                            alt="test"
                        />
                    </div>
                    <div className="w-1/2 md:w-1/2 p-1">
                        <TransitionImage
                            className="w-full h-full object-cove rounded-sm"
                            imageData={nature}
                            alt="test"
                        />
                    </div>
                    <div className="w-1/2 md:w-1/2 p-1">
                        <TransitionImage
                            className="w-full h-full object-cover rounded-sm"
                            imageData={window}
                            alt="test"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
