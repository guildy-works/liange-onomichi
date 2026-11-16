import { TopSection } from "@/views/top/TopSection";
import AboutSection from "@/views/top/AboutSection";
import { GallerySection } from "@/views/top/GallerySection";
import { MenuSection } from "@/views/top/MenuSection";
import { ExplainSection } from "@/views/top/ExplainSection";
import { ProfileSection } from "@/views/top/ProfileSection";
import { CtaSection } from "@/views/top/CtaSection";
import { AccessSection } from "@/views/top/AccessSection";

export default function Home() {
    return (
        <>
            <TopSection />
            <AboutSection />
            <GallerySection />
            <MenuSection />
            <ExplainSection />
            <ProfileSection />
            <CtaSection />
            <AccessSection />
        </>
    );
}
