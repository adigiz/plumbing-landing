import { Star } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    name: "Phillip Carter",
    location: "Melbourne, VIC",
    image: "/phillip.jpeg",
    text: "Greatly appreciated Phillip's help and will certainly be using Power Plumbing services again in the future.",
  },
  {
    name: "Adam Thompson",
    location: "Cranbourne, VIC",
    image: "/phillip.jpeg",
    text: "Very relieved to see Adam who sorted out our plumbing issues.",
  },
  {
    name: "Samantha Lee",
    location: "Box Hill, VIC",
    image: "/phillip.jpeg",
    text: "Your first choice for plumbing jobs in the Melbourne area. 100% customer satisfaction guarantee.",
  },
];

const ReviewSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6">{review.text}</p>
              </div>

              <div className="flex items-center mt-auto pt-4 border-t">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div className="ml-3">
                  <p className="font-semibold text-blue-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.location}</p>
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
                <p className="font-semibold text-gray-800 text-lg">
                  Google Rating
                </p>
              </div>

              <div className="flex items-center mb-1">
                <span className="text-orange-500 font-bold text-xl mr-2">
                  4.8
                </span>
                <div className="flex text-yellow-400">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                </div>
              </div>

              <p className="text-gray-600 text-sm">Based on 581 reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
