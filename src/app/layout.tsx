import type { Metadata } from "next";
import Script from "next/script";
import "./globals.scss";
import { Header } from "./Header";
import { Footer } from "@/components/Footer";
import { FloatingCta } from "@/components/FloatingCta";
import { IntroLoader } from "@/components/IntroLoader";

const gaId = "G-XNC8SQYTYW";

export const metadata: Metadata = {
    title: "Liange - リアンジュ | 尾道の女性専用 脱毛・エステティックサロン",
    description:
        "広島県尾道市にある女性専用の脱毛・エステティックサロン Liange（リアンジュ）。大手サロン17年の経験を活かし、リーズナブルな価格でフェイシャル・ボディ・光脱毛をご提供。日頃の疲れを癒し、内側から輝く美しさへ。",
    keywords: ["脱毛", "尾道", "エステ", "低価格", "安い", "全身脱毛", "光脱毛", "フェイシャル", "リンパマッサージ", "女性専用"],
    openGraph: {
        title: "Liange - リアンジュ | 尾道の女性専用 脱毛・エステティックサロン",
        description: "がんばる毎日に、ごほうびのひとときを。尾道のアットホームなプライベートサロン。",
        locale: "ja_JP",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <head>
                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                    strategy="afterInteractive"
                    async
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${gaId}');
                    `}
                </Script>
            </head>
            <body>
                <IntroLoader />
                <Header />
                <main id="top">{children}</main>
                <Footer />
                <FloatingCta />
            </body>
        </html>
    );
}
