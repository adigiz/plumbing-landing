import { Star } from "lucide-react";

const ReviewSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              Greatly appreciated Phillip&apos;s help and will certainly be
              using Power Plumbing services again in the future.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              Very relieved to see Adam who sorted out our plumbing issues.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              Your first choice for plumbing jobs in the Melbourne area. 100%
              customer satisfaction guarantee.
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-lg font-semibold text-blue-900">
            4.9 out of 5 stars from 573+ genuine reviews
          </p>
          <p className="text-gray-600 mt-2">
            See more reviews on Google, Facebook, and ProductReview.com.au
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
