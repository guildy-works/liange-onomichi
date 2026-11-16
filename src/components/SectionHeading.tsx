import clsx from "clsx";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
    en: string;
    ja: ReactNode;
    lead?: string;
    align?: "left" | "center";
    size?: "lg" | "md";
    className?: string;
    light?: boolean;
}

export const SectionHeading = ({ en, ja, lead, align = "left", size = "lg", className, light }: SectionHeadingProps) => {
    return (
        <Reveal className={clsx(align === "center" && "text-center", className)}>
            <p className={clsx("label-en text-lg sm:text-xl", light && "text-ivory-200")}>{en}</p>
            <h2
                className={clsx(
                    "mt-2",
                    size === "lg" ? "text-2xl/[1.6] sm:text-3xl/[1.6] lg:text-[2.4rem]/[1.55]" : "text-xl/[1.65] sm:text-2xl/[1.65] lg:text-[1.9rem]/[1.65]",
                    light ? "text-ivory-50" : "text-ink"
                )}
            >
                {ja}
            </h2>
            <span
                className={clsx(
                    "mt-5 block h-px w-10 bg-sage-400",
                    align === "center" && "mx-auto"
                )}
            />
            {lead && (
                <p className={clsx("mt-6 max-w-2xl text-sm sm:text-[15px] leading-loose", light ? "text-ivory-100/90" : "text-ink-light", align === "center" && "mx-auto")}>
                    {lead}
                </p>
            )}
        </Reveal>
    );
};
