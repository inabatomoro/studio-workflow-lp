import { HeroSection } from "@/components/landing/HeroSection"
import { FloatingCTA } from "@/components/landing/FloatingCTA"
import { ReadingProgress } from "@/components/landing/ReadingProgress"
import { LaunchBuzz } from "@/components/landing/LaunchBuzz"
import { PainPoints } from "@/components/landing/PainPoints"
import { FromTo } from "@/components/landing/FromTo"
import { Benefits } from "@/components/landing/Benefits"
import { Curriculum } from "@/components/landing/Curriculum"
import { Bonuses } from "@/components/landing/Bonuses"
import { Differentiator } from "@/components/landing/Differentiator"
import { SocialProof } from "@/components/landing/SocialProof"
import { Pricing } from "@/components/landing/Pricing"
import { OfferFlow } from "@/components/landing/OfferFlow"
import { FAQ } from "@/components/landing/FAQ"
import { FinalCTA } from "@/components/landing/FinalCTA"

export default function Home() {
  return (
    <main>
      <ReadingProgress />
      <FloatingCTA />
      <HeroSection />
      <LaunchBuzz />
      <PainPoints />
      <FromTo />
      <Benefits />
      <Curriculum />
      <Bonuses />
      <Differentiator />
      <SocialProof />
      <Pricing />
      <OfferFlow />
      <FAQ />
      <FinalCTA />
    </main>
  )
}
