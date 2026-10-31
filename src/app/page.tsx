import { ConversionSection } from "@/components/sections/conversion";
import { Hero } from "@/components/sections/hero";
import { HomeFinalCta } from "@/components/sections/home-final-cta";
import { ProblemSelector } from "@/components/sections/problem-selector";
import { Reviews } from "@/components/sections/reviews";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSelector />
      <Reviews />
      <ConversionSection />
      <HomeFinalCta />
    </>
  );
}
