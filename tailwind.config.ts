import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors';

const config: Config = {
    content: [
        "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
        fontSize: {
            "navigation": ["min(2.8vw, 0.82rem)", { letterSpacing: "0.1rem", fontWeight: 500 }],
            "size-p-wide": ["min(2.8vw, 0.82rem)", {letterSpacing: "0.15rem", lineHeight:"1.5rem", fontWeight: "500"}],
            "size-p": ["min(2.8vw, 0.82rem)", {letterSpacing: "0.08rem", lineHeight:"1.2rem",fontWeight: "500"}],
            size3:  ["min(3vw, 0.72rem)", {letterSpacing: "0.08rem", lineHeight:"1.2rem", fontWeight: "500"}],
            size2: ["min(3.2vw, 1rem)", {letterSpacing: "0.08rem", lineHeight:"1.2rem", fontWeight: "500"}],
            size1:  ["min(3.4vw, 1.25rem)", {letterSpacing: "0.08rem", lineHeight:"1.2rem", fontWeight: "400"}],
            title4: ['min(3.6vw, 1.1rem)', { letterSpacing: "0.18rem", lineHeight:"1.8rem", fontWeight: "400" }],
            title3: ['min(4vw, 1.3rem)', { letterSpacing: "0.18rem", lineHeight:"2rem", fontWeight: "400" }],
            title2: ['min(4.5vw, 1.6rem)', { letterSpacing: "0.18rem" , lineHeight:"2.2rem", fontWeight: "400"}],
            title1: ['min(8vw, 2.2rem)', { letterSpacing: "0.18rem" , lineHeight:"2.4rem", fontWeight: "400"}],
        },
        screens: {
            sm: '600px',
            md: '1240px',
            lg: '1560px',
            xl: '1920px',
        },
        fontFamily: {
            sans: ['Zen Old Mincho', 'sans-serif'],
            serif: ['Zen Old Mincho', 'sans-serif'],
            body: "sans",
            asterdam: ['Amsterdam', 'sans-serif'],
            jost: ['Jost', 'sans-serif'],
        },
        colors: {
            ...colors,

            color3: '#85a48c',
            color1: '#f3e8e8',
            color2: '#f0f0f0',


            white: '#ffffff',

            font1: '#23313f',
            font2: 'rgb(223 150 150)',
            font3: '#c07a7a',

            grey1: '#bba3a3',
            grey2: '#bba3a3',
        },
    },
    plugins: [],
};
export default config;