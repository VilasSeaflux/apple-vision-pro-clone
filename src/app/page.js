import HeroSection from "@/components/herosection";
import Paragraph from "@/components/paragraph";
import ParallaxScroll from "@/components/parallaxScroll";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <HeroSection />
      <ParallaxScroll 
        videoUrl='https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/foundation/large.mp4'
        subHeading='Apple Vision Pro seamlessly blends digital content with your physical space.'
        subHeading2='So you can work, watch, relive memories, and connect in ways never before possible.'
        subHeading3='The era of spatial computing is here.'
        showBtn={true}
      />
      <Paragraph />
      <ParallaxScroll 
        videoUrl='https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/experience-entertainment-a/large.mp4'
        heading={'Entertainment'}
        subHeading='he ultimate theater. Wherever you are.'
        showBtn={false}
      />
      <Paragraph />
      <ParallaxScroll 
        videoUrl='https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/experience-productivity/large.mp4'
        heading={'Productivity'}
        subHeading='A workspace with infinite space'
        showBtn={false}
      />
      <Paragraph />
    </main>
  );
}
