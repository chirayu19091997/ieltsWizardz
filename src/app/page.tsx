import Faq from "@/components/Faq/Faq";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import LogoCloud from "@/components/LogoCloud";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-backgroundColor">
      <Hero />
      <Stats />
      <Testimonials />
      <LogoCloud />
      <Faq />
    </div>
  );
}
