"use client";

import { AboutHero } from "./components/AboutHero";
import { Timeline } from "./components/Timeline";
import { SocialImpact } from "./components/SocialImpact";
import { VideoSection } from "./components/VideoSection";

export function AboutPage() {
  return (
    <>
      <AboutHero />
      <Timeline />
      {/* <SocialImpact />
      <VideoSection /> */}
    </>
  );
}
