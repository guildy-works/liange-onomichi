import React, { useEffect } from "react";

const delay = (i: number) => new Promise<number>(r => setTimeout(r, i));

interface CurtainProps {
    colors?: string[];
    styles?: any;
    open?: boolean;
    children?: React.ReactNode;
}

export function CurtainContainer(props: CurtainProps) {
    const ref = React.useRef<HTMLDivElement | null>(null);
    const curtain = React.useRef<CurtainCore | null>(null);

    const [isInit, setIsInit] = React.useState(false);

    useEffect(() => {
        if (ref.current) {
            const c = new CurtainCore(ref.current, props.colors?? CurtainCore.defaultColors, true);
            curtain.current = c;
            c.init();
        }
        setIsInit(true);

        return () => {
            curtain.current?.dispose()
            curtain.current = null;
        }
    }, []);

    useEffect(() => {
        if (props.open) {
            open();
        }
        else {
            close();
        }
    }, [props.open]);

    const open = async (durationMs = 2500) => {
        await delay(1);
        await curtain?.current?.play("2.5px", durationMs);
    }

    const close = async (durationMs = 1200) => {
        await delay(1);
        await curtain?.current?.play("100vh", durationMs);
    }

    return <>
        {isInit && props.children}
        <div className="curtain" ref={ref} style={{
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            position: "fixed",
            width: "100vw",
        }} />
    </>;
}


export enum CurtainDeleyType {
    Shuffle,
    Order
}

export class CurtainCore {
    static defaultColors = [
        "#e91e63",
        "#f44336",
        "#ff5722",
        "#ff9800",
        "#ffc107",
        "#ffeb3b",
        "#cddc39",
        "#4caf50",
        "#009688",
        "#00bcd4",
        "#2196f3",
        "#3f51b5",
        "#9c27b0"
    ]

    /**
     * parent element
     */
    private parent: HTMLElement;

    /**
     * appended children
     */
    private children: HTMLElement[] = [];

    /**
     * curtain count
     */
    public get curtainCount(): number {
        return this.colors.length;
    }

    /**
     * コンストラクタ. colorsの要素数だけカーテンを生成します.
     * @param element
     * @param colors
     * @param timeSeconds
     * @param radius
     */
    public constructor(
        readonly element: HTMLElement,
        readonly colors: string[],
        readonly shadow = false,
        readonly radius = 0
    ) {
        if (!element) {
            throw new Error("HTMLElement is undefined.");
        }
        this.parent = element;
        this.colors = colors;
        this.radius = radius;
    }

    /**
     * Initialize the parent element and append the curtain item to children.
     */
    public init(curtainHeight = "100vh", curtainOneItemWidth = 100, shadow = false) {
        // one curtain item width
        const itemWidth = 100 / this.colors.length;
        this.parent.style.display = "flex";
        for (const item of this.colors) {
            const div = document.createElement("div");
            // apply styles
            div.style.background = item;
            div.style.width = itemWidth + "%";
            div.style.height = curtainHeight;
            div.style.borderRadius = `0 0 ${this.radius}px ${this.radius}px`;

            this.children.push(div);
            this.parent.appendChild(div);
        }
    }

    /**
     * Set and Play curtain animation.
     * @param curtainHeight css curtain height
     */
    public async play(
        curtainHeight = "0px",
        timeMs = 1500,
        curtainDelayType = CurtainDeleyType.Shuffle
    ): Promise<void> {
        await delay(1);
        const itemDelays: number[] = [];
        let duration = 0;
        if (curtainDelayType === CurtainDeleyType.Shuffle) {
            // eslint-disable-next-line @typescript-eslint/prefer-for-of
            for (let i = 0; i < this.colors.length; i++) {
                const time = Math.random() * timeMs * 0.5;
                duration = Math.max(duration, time);
                itemDelays.push(time);
            }
        }
        else {
            const itemDelay = timeMs / this.colors.length;
            // eslint-disable-next-line @typescript-eslint/prefer-for-of
            for (let i = 0; i < this.colors.length; i++) {
                const time = itemDelay * 1;
                duration = Math.max(duration, time);
                itemDelays.push(time);
            }
        }

        for (const item of this.children) {
            item.style.transition = `all ${timeMs * 0.5}ms  cubic-bezier(0.860, 0.205, 0.330, 0.910)`;
            item.style.transitionDelay = `${itemDelays.shift()}ms`;
            item.style.height = curtainHeight;
        }

        await delay(timeMs + duration);
    }

    dispose(){
        this.children.forEach((c) => {
            this.parent.removeChild(c);
        });
    }
}
