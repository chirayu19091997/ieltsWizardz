import Faq from "@/components/home/Faq/Faq";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import LogoCloud from "@/components/home/LogoCloud";
import Hero from "@/components/home/Hero";
import Steps from "@/components/home/Steps";

export default function Home() {
  return (
    <div className="bg-backgroundColor">
      <Hero />
      {/* Services */}
      {/* Steps */}
      <Steps />
      {/* university logos if required */}
      <Stats />
      <Testimonials />
      <LogoCloud />
      {/* articles */}
      <Faq />
    </div>
  );
}
