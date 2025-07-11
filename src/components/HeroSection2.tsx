const HeroSection2 = () => {
  return (
    <section className="pt-32 min-h-[calc(100vh-8rem)] pb-12 overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          className="w-full h-full object-cover"
          src="/background-video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      <div className="absolute inset-0 bg-opacity-30 z-10" />

      <div className="container mx-auto px-4 max-w-7xl relative z-20">
        <div className="flex flex-col gap-12 items-center">
          <div className="flex flex-col md:flex-row w-full">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight md:w-1/2">
              Professional Plumbing Services at Your{" "}
              <span className="text-blue-300">Home</span>,
              <br />
              <span className="text-blue-300">Hassle-Free</span>
            </h1>
            <div className="md:w-1/2">
              <p className="text-white mb-6 md:mb-8">
                Elevate your brand by leveraging strategic marketing that is
                tailored to your unique goals. Our expert team designs
                data-driven campaigns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                  Explore Our Services
                </button>
                <button className="bg-white hover:bg-gray-100 text-blue-900 font-medium py-3 px-6 rounded-lg transition-colors">
                  Request A Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;
