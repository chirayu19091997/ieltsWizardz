import Faq from "@/components/home/Faq/Faq";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import LogoCloud from "@/components/home/LogoCloud";
import Hero from "@/components/home/Hero";
import Steps from "@/components/home/Steps";
// import ServicesHome from "@/components/home/ServicesHome";
import Universities from "@/components/home/Universities";
import NewServicesHome from "@/components/home/newServicesHome";

export default function Home() {
  return (
    <div className="bg-backgroundColor">
      <Hero />
      {/* Services */}
      {/* <ServicesHome /> */}
      <NewServicesHome />
      {/* Steps */}
      <Steps />
      <Stats />
      {/* university logos if required */}
      {/* <Universities /> */}
      <Testimonials />
      <LogoCloud />
      {/* articles */}
      <Faq />
    </div>
  );
}
