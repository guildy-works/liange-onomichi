import { TitleType3 } from "@/components/Titles";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import { ElementType } from "react";

export const MenuSection = () => {
    return (
        <div className="w-full max-w-[920px] mt-12 sm:mt-24 md:mt-36 bg-color2 p-8 sm:p-16 md:p-24">
            <TitleWithCircles title="MENU" tag="h2" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {
                    menuItems.map((item, index) => (
                        <div className="w-full mt-8" key={item.title}>
                            <TitleType3 title={item.title} />
                            <div className="mt-4">
                                {
                                    item.items.map((item, index) => (
                                        <FadeAndSlideScrollTriggerAnimation key={index} className="text-font1 mt-2">
                                            {item}
                                        </FadeAndSlideScrollTriggerAnimation>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>

            <p className="text-size2 text-gray-600 mt-4 sm:mt-8 md:mt-24 flex">
                <span>
                    ＊
                </span>
                <span>
                    自宅用の化粧品を持参していただくと、500円引き致します。価格はサロンにお問い合わせ下さい。
                </span>

            </p>
        </div>
    )
}

export const TitleWithCircles = ({ title, tag }: { title: string, tag?: ElementType }) => {
    const Tag = tag ?? "div";
    return (
        <FadeAndSlideScrollTriggerAnimation className="flex items-center justify-center mb-6">
            <div className="w-4 h-4 rounded-full border-2 border-black"></div>
            <Tag className="text-title1 text-center mx-4 font-jost">{title}</Tag>
            <div className="w-4 h-4 rounded-full border-2 border-black"></div>
        </FadeAndSlideScrollTriggerAnimation>
    );
};

const menuItems = [
    {
        title: "FACIAL",
        items: [
            "Wクレンジングコース 50分",
            "クレンジング+保湿コース 60分",
            "保湿ケアーコース 60分",
            "美白ケアーコース 70分",
            "保湿ケアコース60分",
            "保湿 + 美白Wケアコース85分",
            "スペシャルケアコース90分"
        ]
    },
    {
        title: "FACIAL OPTIONS",
        items: [
            "ショルダーマッサージ 15分",
            "ハンドマッサージ 15分",
            "フットマッサージ15分",
            "イオン導入",
            "Q10マッサージ",
            "オゾンマッサージ",
            "クリオネマッサージ"
        ]
    },
    {
        title: "光脱毛",
        items: ["全身", "お問い合わせください"]
    },
    {
        title: "BODY",
        items: [
            "リンパマッサージ上半身 or 下半身 60分",
            "リンパマッサージ全身 60分",
            "リンパマッサージ全身 90分",
            "デトックスマッサージ上半身 or 下半身 60分",
            "デトックスマッサージ全身 60分",
            "デトックスマッサージ全身 90分"
        ]
    },
    {
        title: "BODY OPTIONS",
        items: [
            "空気圧マッサージ10分",
            "超音波マッサージ10分",
            "キャビテーションマッサージ10分"
        ]
    },
    {
        title: "PACKAGES",
        items: [
            "フェイシャル得！得！パッケージ、集中パッケージ",
            "ボディ集中月4パッケージ",
            "ボディ集中月3パッケージ",
            "光フェイシャル3回パッケージ",
            "光フェイシャル6回パッケージ",
            "光スペシャルフェイシャル3回パッケージ",
            "光スペシャルフェイシャル6回パッケージ"
        ]
    }
];