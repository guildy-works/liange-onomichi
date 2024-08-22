import { css } from "@emotion/react";
import { Box } from "@mui/system";
import { StringUnitLength } from "luxon";
import React, { CSSProperties, ReactNode } from "react";
import { SkewAnimation } from "./Animations/SkewAnimation";
import { ScrollTrigger } from "libs/ScrollTrigger";

interface FadeAndSlideScrollTriggerAnimationProps {
    children: ReactNode;
    delay?: number;
    forceIn?: boolean;
    bgcolor?: string;
    style?: CSSProperties;
    className?: string;
}

export const SkewScrollTriggerAnimation = ({ children, delay, forceIn, bgcolor, style, className }: FadeAndSlideScrollTriggerAnimationProps) => {
    return <ScrollTrigger
        forceIn={forceIn}
        once
        delay={delay}
        style={style}
        className={className}
    >
        {
            state => <SkewAnimation
                bgcolor={bgcolor}
                in={state === "entered"}
                style={style}
                className={className}
            >
                {children}
            </SkewAnimation>
        }
    </ScrollTrigger>;
};
