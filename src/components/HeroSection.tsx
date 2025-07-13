import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="pb-12 pt-40 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col gap-12 items-center">
          <div className="flex flex-col md:flex-row w-full">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight md:w-1/2">
              Professional Plumbing Services at Your{" "}
              <span className="text-blue-600">Home</span>,
              <br />
              <span className="text-blue-600">Hassle-Free</span>
            </h1>
            <div className="md:w-1/2">
              <p className="text-gray-600 mb-6 md:mb-8">
                Elevate your brand by leveraging strategic marketing that is
                tailored to your unique goals. Our expert team designs
                data-driven campaigns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                  Explore Our Services
                </button>
                <button className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                  Request A Quote
                </button>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="flex flex-col md:flex-row gap-4 w-full">
            {/* Left Column */}
            <div className="flex flex-row md:flex-col gap-4 basis-full md:basis-1/4">
              <div className="relative aspect-[4/3] md:h-3/5 rounded-xl overflow-hidden rounded-br-[50%] flex-1">
                <Image
                  src="/plumbing-1.jpg"
                  alt="Plumber 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] md:h-2/5 rounded-xl overflow-hidden flex-1">
                <Image
                  src="/plumbing-3.jpg"
                  alt="Plumber 3"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Center Column */}
            <div className="relative aspect-[3/2] md:aspect-auto h-[300px] md:h-auto basis-full md:basis-2/4 rounded-xl overflow-hidden">
              <Image
                src="/plumbing-2.jpg"
                alt="Plumber 2"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Right Column */}
            <div className="flex flex-row md:flex-col gap-4 basis-full md:basis-1/4">
              <div className="relative aspect-[4/3] md:h-2/5 rounded-xl overflow-hidden flex-1">
                <Image
                  src="/plumbing-4.jpg"
                  alt="Plumber 4"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] md:h-3/5 rounded-xl overflow-hidden rounded-tl-[50%] flex-1">
                <Image
                  src="/plumbing-5.jpg"
                  alt="Plumber 5"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
