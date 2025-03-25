"use client";

import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Jost } from "next/font/google";
import "./globals.scss";
import Link from "next/link";
import { Header } from "./Header";
import { CurtainContainer } from "@/components/Curtain";
import Head from "next/head";
import Script from 'next/script'; 

const gaId  = "G-XNC8SQYTYW"

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <head>
                <title>Liange - リアンジュ 尾道</title>
                <meta name="description" content="広島県尾道市にある女性専用の脱毛・エステティックサロンサロンです。" />
                <meta name="keywords" content="脱毛,尾道,エステ,低価格,安い,全身脱毛,光脱毛" />

                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                    strategy='afterInteractive'
                    async
                />
                <Script id='google-analytics' strategy='afterInteractive'>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${gaId}');
                    `}
                </Script>
            </head>
            <body>
                <div className="flex min-h-screen flex-col h-svh relative">
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
                </div>
            </body>
        </html>
    );
}
