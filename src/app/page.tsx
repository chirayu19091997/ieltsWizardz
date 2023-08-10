import Faq from "@/components/Faq/Faq";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Chatbot from "@/components/Chatbot";
import LogoCloud from "@/components/LogoCloud";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Stats />
      <Testimonials />
      <LogoCloud />
      <Faq />
      <Chatbot />
    </div>
  );
}
