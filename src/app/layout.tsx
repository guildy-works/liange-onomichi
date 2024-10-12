"use client";

import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Jost } from "next/font/google";
import "./globals.scss";
import { ScrollContainer, ScrollTrigger } from "@/libs/ScrollTrigger";
import Link from "next/link";
import { Header } from "./Header";
import { CurtainContainer } from "@/components/Curtain";
import Head from "next/head";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <head>
                <meta name="description" content="広島県尾道市の脱毛・エステティックサロン　Liangeです" />
                <title>Liange - リアンジュ 尾道</title>
            </head>
            <body>
                <ScrollContainer className="flex min-h-screen flex-col h-svh relative">
                    <CurtainContainer open colors={["#468189", "#77aca2", "#9dbebb", "#c4cdc1", "#f4eace", "#dee1dd"]}>
                        <Header />
                        <main className="flex flex-col items-center">
                            {children}
                        </main>

                        <footer className="bg-color2 min-h-96 flex flex-col justify-center">

                            {/* コピーライト */}
                            <div>
                                <p className="text-center text-gray-600">
                                    © {new Date().getFullYear()} Liange Onomichi. All rights reserved.
                                </p>
                            </div>

                        </footer>
                    </CurtainContainer>
                </ScrollContainer>
            </body>
        </html>
    );
}
