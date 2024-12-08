import * as React from "react";

import img13 from "@/assets/images/img13.jpg";
import img16 from "@/assets/images/img16.jpg";
import clover1 from "@/assets/images/clover1.png";
import { TransitionImage } from "@/libs/ScrollTriggerAnimations/TransitionImage";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import Image from 'next-export-optimize-images/picture';
import { MdCalendarMonth, MdCarCrash, MdMap, MdPhone, MdWatch } from "react-icons/md";
import { SectionBar } from "@/components/SectionBar";

export const AccessSection = () => {

    return (
        <div className="max-w-screen-md mx-auto px-8 py-12 flex flex-col mt-24 md:mt-36 ">
            <FadeAndSlideScrollTriggerAnimation className="">
                <SectionBar text="Access"></SectionBar>
            </FadeAndSlideScrollTriggerAnimation>

            <div className="flex flex-wrap mt-12">
                <div className="w-full md:w-2/5 p-8">
                    <h3 className="text-title3 mb-6">店舗情報</h3>
                    <div className="space-y-4 mx-auto">
                        <div className="flex items-center">
                            <MdCalendarMonth className="w-6 h-6 mr-4" />
                            <div>
                                <p>営業日時</p>
                                <p>月曜日～土曜日 09:00～19:00</p>
                                <p className="text-sm text-gray-600">日曜日・祝日 休業</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <MdPhone className="w-6 h-6 mr-4 text-primary-600" />
                            <div>
                                <p>お問い合わせ</p>
                                <a href="tel:08082447899" className="text-green-700 hover:underline">080-8244-7899</a>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <MdMap className="w-6 h-6 mr-4 text-primary-600" />
                            <div>
                                <p >住所</p>
                                <p>〒722-0018</p>
                                <p>広島県尾道市平原 3-21-15</p>
                                <p>グランシャリオ平原301号室</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <MdCarCrash className="w-6 h-6 mr-4 text-primary-600" />
                            <div>
                                <p >駐車場</p>
                                <p>３０１、I、B の番号をご利用ください</p>
                            </div>
                        </div>

                        <div className="flex items-center mt-8">
                            <h3 className="text-title4 text-red-600">＊ 当店は女性専用です</h3>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-3/5 grid md:grid-cols-2 gap-4">
                    <TransitionImage
                        src={img16}
                        parallaxSlideLength={20}
                        alt="入口"
                        className="rounded-lg"
                    />
                    <TransitionImage
                        src={img13}
                        parallaxSlideLength={20}
                        alt="駐車場"
                        className="rounded-lg"
                    />
                </div>
            </div>

            <div className="my-12">
                <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.4909912322055!2d133.17409245108826!3d34.414281480413294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3551002af6fa2997%3A0xacc7f39cc95c5178!2z44CSNzIyLTAwMTgg5bqD5bO255yM5bC-6YGT5biC5bmz5Y6f77yT5LiB55uu77yS77yR4oiS77yR77yVIOOCsOODqeODs-OCt-ODo-ODquOCquW5s-WOnyAzMDE!5e0!3m2!1sja!2sjp!4v1614094794108!5m2!1sja!2sjp"
                    className="w-full h-[400px] rounded-lg"
                    allowFullScreen={undefined}
                    loading="lazy"
                />
            </div>

            <div className="flex justify-center">
                <Image className="w-[200px] h-auto" src={clover1} alt="クローバー" />
            </div>
        </div>
    );
};