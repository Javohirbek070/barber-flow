import { LandingNavbar } from "@/components/landing/navbar";
import { TickerMarquee } from "@/components/landing/marquee";
import { LandingHero } from "@/components/landing/hero";
import { LandingFeatures } from "@/components/landing/features";
import { LandingPricing } from "@/components/landing/pricing";
import { LandingFooter } from "@/components/landing/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F3EFEA] text-[#1E202B] flex flex-col font-sans">
      <LandingNavbar />
      <TickerMarquee />
      <main className="flex-1">
        <LandingHero />
        <LandingFeatures />
        <LandingPricing />
      </main>
      <LandingFooter />
    </div>
  );
}
