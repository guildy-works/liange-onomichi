'use client'

import { ScrollIndicator } from "@/components/ScrollIndicatior";
import { TopSection } from "@/views/top/TopSection";
import { ProfileSection } from "@/views/top/ProfileSection";
import { ExplainSection } from "@/views/top/ExplainSection";
import AboutSection from "@/views/top/AboutSection";
import { MenuSection } from "@/views/top/MenuSection";
import { AccessSection } from "@/views/top/AccessSection";
import { CurtainContainer } from "@/components/Curtain";

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
