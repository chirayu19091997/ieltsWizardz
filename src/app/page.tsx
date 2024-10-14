import Stats from "@/components/home/Stats/Stats";
import Testimonials from "@/components/home/Testimonials";
import LogoCloud from "@/components/home/LogoCloud";
import Hero from "@/components/home/Hero";
import ServicesHome from "@/components/home/ServicesHome";
import Universities from "@/components/home/Universities/Universities";
import Countries from "@/components/home/Countries";

export default function Home() {
  return (
    <div className="bg-backgroundColor">
      <Hero />
      <ServicesHome />
      {/* <LogoCloud />
      <Stats />
      <Universities />
      <Countries />
      <Testimonials /> */}
    </div>
  );
}
