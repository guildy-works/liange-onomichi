import Image from 'next-export-optimize-images/picture';
import SectionImg from "@/assets/section_bar.svg"
import clsx from "clsx";

export const SectionBar = ({ text, className }: { text: string, className?: string }) => {

    return (
        <div className="relative max-w-[424px]">
            <Image src={SectionImg}
                className="object-cover"
                width={424}
                height={95}
                alt="sectionbar" />
            <h2 className={clsx("absolute inset-0 m-auto font-asterdam flex justify-center items-center mt-4", className)}
                style={{ fontSize: "2rem", letterSpacing: "0.3rem" }}>
                <span className="text-color3">{text?.length > 1 ? text[0] : ""}</span>
                <span >{text?.substring(1)}</span>
            </h2>
        </div>
    )
}
