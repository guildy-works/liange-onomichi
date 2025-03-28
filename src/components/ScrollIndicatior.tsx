'use client'

import clsx from "clsx";
import { useWindowsSize } from "../libs/useWindowSize";
import styles from "./ScrollIndicator.module.scss";

export const ScrollIndicator = () => {
    const size = useWindowsSize(500);

    return <div
        style={{
            bottom: `calc(100vh - ${size.innerHeight}px + 24px)`,
        }}
        className={clsx( styles.container ,"mr-1 sm:mr-6 md:mr-8")}
    >
        <div className="font-jost tracking-[0.2rem]">
            SCROLL
        </div>
        <div className={styles.bar}></div>
    </div>;
};
