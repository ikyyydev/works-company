import Navbar from "@/components/common/Navbar";
import CareerSection from "@/components/sections/CareerSection";
import CompanyHistorySection from "@/components/sections/CompanyHistorySection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import InfoSection from "@/components/sections/InfoSection";
import ServiceSection from "@/components/sections/ServiceSection";

export default function Home() {
  return (
    <main className=" bg-[#f5f8fa]">
      <Navbar />
      <HeroSection />
      <div>
        <ServiceSection />
        <CompanyHistorySection />
        <InfoSection />
        <CareerSection />
        <FooterSection />
      </div>
    </main>
  );
}
