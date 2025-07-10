import ServicesSection from "@/components/ServiceSection";
import LocationSection from "@/components/LocationSection";
import WhyUsSection from "@/components/WhyUsSection";
import BookQuoteSection from "@/components/BookQuoteSection";
import HeroSection from "@/components/HeroSection";
import ReviewSection from "@/components/ReviewSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ServicesSection />
      <LocationSection />
      <WhyUsSection />
      <BookQuoteSection />
      <ReviewSection />
      <Footer />
    </div>
  );
}
