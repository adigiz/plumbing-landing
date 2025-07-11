import ServicesSection from "@/components/ServiceSection";
import LocationSection from "@/components/LocationSection";
import WhyUsSection from "@/components/WhyUsSection";
import BookQuoteSection from "@/components/BookQuoteSection";
// import HeroSection from "@/components/HeroSection";
import ReviewSection from "@/components/ReviewSection";
import Footer from "@/components/Footer";
import HeroSection2 from "@/components/HeroSection2";
import EmergencyPlumberSection from "@/components/EmergencyPlumberSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* <HeroSection /> */}
      <HeroSection2 />
      <ServicesSection />
      <LocationSection />
      <WhyUsSection />
      <BookQuoteSection />
      <ReviewSection />
      <EmergencyPlumberSection/>
      <Footer />
    </div>
  );
}
