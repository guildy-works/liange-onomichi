import React, { ReactElement, useEffect, useRef, useState } from "react";
import { Curtain, useCurtain } from "../contexts/Routes";
import { Theme, ThemeProvider, createTheme } from "@mui/material";
import { GlobalStyle } from "StaticPages/Styles";
import { ScrollContainer } from "libs/ScrollTrigger";

/**
 * delay
 * @param msec milliseconds
 */
export function delay(msec: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, msec));
}

/**
 * animate element
 * @param element animate element
 * @param property animate style propery
 * @param value style value
 * @param duration animation time (ms)
 * @param deleyTime animation delay time (ms)
 */
export async function animate(element: HTMLElement, property: string, value: string, duration: number, deleyTime = 0): Promise<void> {
    const tmp = element.style.transition;
    element.style.transition = "all " + duration + "ms";
    await delay(deleyTime);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (element.style as any)[property] = value;
    await delay(duration);
    element.style.transition = tmp;
}


const theme = createTheme({
    typography: {
        fontFamily: "Noto Sans JP, sans-serif",
        fontWeightRegular: 500,
        fontWeightLight: 300,
        fontWeightBold: 700,
        fontWeightMedium: 500,

        body1: {
            fontSize: "min(2.8vw, 0.82rem)",
            letterSpacing: "0.15rem",
            lineHeight: "1.5rem",
            fontWeight: 500
        },
        body2: {
            fontSize: "min(2.8vw, 0.82rem)",
            letterSpacing: "0.08rem",
            lineHeight: "1.2rem",
            fontWeight: 500
        },
        h6: {
            fontSize: "min(3.2vw, 1rem)",
            letterSpacing: "0.24rem",
            lineHeight: "1.8rem",
            fontWeight: 400
        },
        h5: {
            fontSize: "min(3.2vw, 1rem)",
            letterSpacing: "0.24rem",
            lineHeight: "1.8rem",
            fontWeight: 400
        },
        h4: {
            fontSize: "min(3.6vw, 1.1rem)",
            letterSpacing: "0.24rem",
            lineHeight: "1.8rem",
            fontWeight: 400
        },
        h3: {
            fontSize: "min(4vw, 1.3rem)",
            letterSpacing: "0.24rem",
            lineHeight: "2rem",
            fontWeight: 400
        },
        h2: {
            fontSize: "min(4.5vw, 1.6rem)",
            letterSpacing: "0.24rem",
            lineHeight: "2.2rem",
            fontWeight: 400
        },
        h1: {
            fontSize: "min(5.6vw, 2.8rem)",
            letterSpacing: "0.24rem",
            lineHeight: "2.4rem",
            fontWeight: 400
        },
    },
    palette: {
        primary: {
            main: "#5a7f6a",
        }
    }
});

interface MainProps {
    children: ReactElement[] | JSX.Element | string;
}

export function Main(props: MainProps) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Curtain colors={["#468189", "#77aca2", "#9dbebb", "#c4cdc1", "#f4eace", "#dee1dd"]}>
                    <Body {...props} />
                </Curtain>
            </ThemeProvider>
        </>
    );
}

function Body(props: MainProps) {
    const main = React.useRef<HTMLDivElement | null>(null);
    const { open, } = useCurtain();

    React.useEffect(() => {
        open();

        if (main.current) {
            animate(main.current, "opacity", "0", 0);
            delay(200).then(() => {
                if (main.current)
                    animate(main.current, "opacity", "1", 1600, 800);
            });
        }
    }, []);

    return <>
        <ScrollContainer style={{ height: "calc(100vh)", width: "100vw" }}>
            <main ref={main} style={{ opacity: "0", }}>
                {props.children}
            </main>
            <footer style={{ background: "#101010", height: "48px" }} className="pa-8 text-center mt-12">
                <p style={{ color: "white" }}>©2023 Liange 尾道 All Rights Reserved.</p>
            </footer>
        </ScrollContainer>
    </>;
}
