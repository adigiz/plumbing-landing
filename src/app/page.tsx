import { getSiteSettings } from "@/lib/strapi";
import HeroSection2 from "@/components/HeroSection2";
import ServicesSection from "@/components/ServiceSection";
import LocationSection from "@/components/LocationSection";
import WhyUsSection from "@/components/WhyUsSection";
import BookQuoteSection from "@/components/BookQuoteSection";
import ReviewSection from "@/components/ReviewSection";
import EmergencyPlumberSection from "@/components/EmergencyPlumberSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  const faviconUrl = settings.favicon?.data?.attributes?.url;

  return {
    title: settings.metaTitle || "Turbo Plumbing",
    description: settings.metaDescription || "Reliable Melbourne plumbing services.",
    icons: faviconUrl ? [{ rel: "icon", url: `${baseUrl}${faviconUrl}` }] : undefined,
  };
}

export default async function HomePage() {
  const settings = await getSiteSettings();
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;

  const [reviewsRes, googleRes] = await Promise.all([
    fetch(`${baseUrl}/api/reviews?populate=photo`, { cache: "no-store" }),
    fetch(`${baseUrl}/api/google-review`, { cache: "no-store" }),
  ]);

  const reviewsData = await reviewsRes.json();
  const googleData = await googleRes.json();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const reviews = reviewsData.data.map((r: any) => ({
    name: r.name,
    location: r.location,
    content: r.content,
    image: `${baseUrl}${r.photo?.data?.attributes?.url ?? "/phillip.jpeg"}`,
    rating: r.rating,
  }));

  const googleReview = {
    averageRating: googleData.data.averageRating,
    reviewCount: googleData.data.reviewCount,
  };

  return (
    <div className="min-h-screen bg-white">
      <Header settings={settings} />
      <HeroSection2 settings={settings} />
      <ServicesSection settings={settings} />
      <LocationSection settings={settings} />
      <WhyUsSection settings={settings} />
      <BookQuoteSection settings={settings} />
      <ReviewSection
        settings={settings}
        reviews={reviews}
        googleReview={googleReview}
      />
      <EmergencyPlumberSection settings={settings} />
      <Footer settings={settings} />
    </div>
  );
}
