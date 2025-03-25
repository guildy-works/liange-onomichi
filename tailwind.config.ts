import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors';
import theme from 'tailwindcss/defaultTheme';

const config: Config = {
    content: [
        "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    safelist: ["overflow-hidden","size-full"],
    theme: {
        fontSize: {
            ...theme.fontSize,
            "navigation": ["min(3.4vw, 0.98rem)", { letterSpacing: "0.1rem", fontWeight: 500 }],
            "size-p-wide": ["min(3.2vw, 0.82rem)", { letterSpacing: "0.08rem", lineHeight: "1.5rem", fontWeight: "700", }],
            "size-p": ["min(3.2vw, 0.9rem)", { letterSpacing: "0.01rem", lineHeight: "1.4rem", fontWeight: "700" }],
            size3: ["min(3vw, 0.72rem)", { letterSpacing: "0.04rem", lineHeight: "1.4rem", fontWeight: "700" }],
            size2: ["min(3.2vw, 0.9rem)", { letterSpacing: "0.04rem", lineHeight: "1.2rem", fontWeight: "700" }],
            size1: ["min(3.8vw, 1.05rem)", { letterSpacing: "0.04rem", lineHeight: "1.2rem", fontWeight: "700" }],
            title4: ['min(4.2vw, 1.1rem)', { letterSpacing: "0rem", lineHeight: "1.8rem", fontWeight: "500" }],
            title3: ['min(4.6vw, 1.8rem)', { letterSpacing: "0rem", lineHeight: "2rem", fontWeight: "500" }],
            title2: ['min(5.8vw, 2.2rem)', { letterSpacing: "0rem", lineHeight: "2.5rem", fontWeight: "500" }],
            title1: ['min(6.5vw, 2.8rem)', { letterSpacing: "0rem", lineHeight: "3.8rem", fontWeight: "500" }],
        },
        screens: {
            sm: '600px',
            md: '1240px',
            lg: '1560px',
            xl: '1920px',
        },
        fontFamily: {
            asterdam: ['Amsterdam', 'sans-serif'],
            jost: ['Jost', 'sans-serif'],
        },
        colors: {
            ...colors,
            color3: '#85a48c',
            color1: '#f3e8e8',
            color2: '#f6f0e8',
            white: '#faf8f6',
            font1: '#1a1921',
            font2: 'rgb(223 150 150)',
            font3: '#c07a7a',
            grey1: '#f7f2ec',
            grey2: '#bba3a3',
        },
    },
    plugins: [],
};
export default config;
