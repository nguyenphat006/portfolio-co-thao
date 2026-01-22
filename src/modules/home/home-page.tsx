import { HeroSection } from "./components/HeroSection";
import { SocialProof } from "./components/SocialProof";
import { AboutSection } from "./components/AboutSection";
import { CourseSection } from "./components/CourseSection/components/course-list";
import { Gallery } from "./components/Gallery";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProof />
      <AboutSection />
      <CourseSection />
      <Gallery />
    </>
  );
}
