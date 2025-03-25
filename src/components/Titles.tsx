import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation"
import clsx from "clsx"
import { ElementType } from "react"

export const TitleType = ({ title, subTitle, className }: { title: string, subTitle: string, className?: string }) => {
    return (
        <FadeAndSlideScrollTriggerAnimation className={className}>
            <h2 className="text-[2rem] text-color3/20 font-asterdam" >
                {subTitle}
            </h2>
            <h2 className="text-[1.5rem] text-title2 text-color3 font-Jost mt-2" >
                {title}
            </h2>
        </FadeAndSlideScrollTriggerAnimation>
    )
}

export const TitleType2 = ({ title, subTitle }: { title: string, subTitle: string, }) => {
    return (
        <FadeAndSlideScrollTriggerAnimation >
            <h2 className="flex gap-2 items-center" >
                <span className="text-title1 font-bold">
                    {subTitle}
                </span>
                <span className="text-title2">
                    {title}
                </span>
            </h2>

        </FadeAndSlideScrollTriggerAnimation>
    )
}

export const TitleType3 = ({ title, tag, className }: { title: string, tag?: ElementType, className?: string }) => {
    return (
        <FadeAndSlideScrollTriggerAnimation
            className={clsx(className,"text-title3 relative pb-1")}>
            {title}
            <span className="absolute h-[1.5px] bottom-0 left-0 w-7 bg-font1" />
        </FadeAndSlideScrollTriggerAnimation>
    )
}