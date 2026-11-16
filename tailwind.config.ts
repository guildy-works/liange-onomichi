import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                ivory: {
                    DEFAULT: "#fbf8f4",
                    50: "#fdfcfa",
                    100: "#f6f1ea",
                    200: "#efe7dd",
                    300: "#e4d9cb",
                },
                sage: {
                    50: "#f2f7f2",
                    100: "#e3ede4",
                    200: "#c9dbcc",
                    300: "#a9c4ae",
                    400: "#85a48c",
                    500: "#6b8d72",
                    600: "#55735b",
                    700: "#445c49",
                    800: "#34473a",
                },
                blush: {
                    50: "#fcf5f3",
                    100: "#f7e9e5",
                    200: "#eed3cc",
                    300: "#e3b8ae",
                    400: "#d59d92",
                    500: "#c58176",
                },
                gold: {
                    DEFAULT: "#c6ab78",
                    light: "#e8dcc2",
                },
                ink: {
                    DEFAULT: "#3a3835",
                    light: "#6f6a64",
                    muted: "#9a948d",
                },
            },
            fontFamily: {
                mincho: ['"Zen Old Mincho"', "serif"],
                gothic: ['"Zen Kaku Gothic New"', "sans-serif"],
                en: ['"Cormorant Garamond"', "serif"],
                jost: ["Jost", "sans-serif"],
            },
            maxWidth: {
                content: "72rem",
            },
            boxShadow: {
                soft: "0 18px 50px -20px rgba(58, 56, 53, 0.18)",
                card: "0 8px 30px -14px rgba(58, 56, 53, 0.16)",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                marquee: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
                scrollLine: {
                    "0%": { transform: "scaleX(0)", transformOrigin: "left" },
                    "45%": { transform: "scaleX(1)", transformOrigin: "left" },
                    "55%": { transform: "scaleX(1)", transformOrigin: "right" },
                    "100%": { transform: "scaleX(0)", transformOrigin: "right" },
                },
                blob: {
                    "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
                    "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
                },
            },
            animation: {
                float: "float 7s ease-in-out infinite",
                marquee: "marquee 45s linear infinite",
                scrollLine: "scrollLine 2.4s ease-in-out infinite",
                blob: "blob 14s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};
export default config;
