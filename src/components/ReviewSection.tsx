import { Star } from "lucide-react";
import Image from "next/image";

export default function ReviewSection({
  settings,
  reviews,
  googleReview,
}: {
  settings: {
    themeColorPrimary: string;
    themeTextColorOnPrimary: string;
    primaryTextColor: string;
  };
  reviews: {
    id: number;
    name: string;
    location: string;
    content: string;
    rating: number;
    image?: {
      url: string;
    };
  }[];
  googleReview: {
    averageRating: number;
    reviewCount: number;
  };
}) {
  const { primaryTextColor } = settings;

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold text-center mb-12"
          style={{ color: primaryTextColor }}
        >
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {Array(review.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                  </div>
                </div>
                <p className="mb-6" style={{ color: "#4B5563" }}>
                  {review.content}
                </p>
              </div>

              <div className="flex items-center mt-auto pt-4 border-t">
                <Image
                  src={
                    review.image?.url
                      ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${review.image.url}`
                      : "/phillip.jpeg"
                  }
                  alt={review.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div className="ml-3">
                  <p
                    className="font-semibold"
                    style={{ color: primaryTextColor }}
                  >
                    {review.name}
                  </p>
                  <p className="text-sm" style={{ color: "#6B7280" }}>
                    {review.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <div className="inline-flex bg-white rounded-lg shadow-md px-6 py-4 border border-gray-200 items-center space-x-4">
            <div className="flex-shrink-0">
              <Image
                src="/search.png"
                alt="Google Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>

            <div>
              <div className="flex items-center justify-start mb-1">
                <p
                  className="font-semibold text-lg"
                  style={{ color: "#1F2937" }}
                >
                  Google Rating
                </p>
              </div>

              <div className="flex items-center mb-1">
                <span className="font-bold text-xl mr-2 text-black">
                  {googleReview.averageRating.toFixed(1)}
                </span>
                <div className="flex text-yellow-400">
                  {Array(Math.round(googleReview.averageRating))
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                </div>
              </div>

              <p className="text-sm" style={{ color: "#4B5563" }}>
                Based on {googleReview.reviewCount} reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
