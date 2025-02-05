'use client'

import { ScrollIndicator } from "@/components/ScrollIndicatior";
import { TopSection } from "@/views/top/TopSection";
import AboutSection from "@/views/top/AboutSection";
import { AccessSection } from "@/views/top/AccessSection";
import { CurtainContainer } from "@/components/Curtain";
import { ProfileSection } from "@/views/top/ProfileSection";
import { MenuSection } from "@/views/top/MenuSection";
import { ExplainSection } from "@/views/top/ExplainSection";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <TopSection />

            <AboutSection />

            <ProfileSection />

            <section className="p-6">
                <MenuSection />
            </section>

            <ExplainSection />

            <AccessSection />

            <ScrollIndicator />
        </>
    );
}
