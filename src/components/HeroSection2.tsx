export default function HeroSection2({
  settings,
}: {
  settings: {
    themeColorPrimary: string;
    themeTextColorOnPrimary: string;
    heroBackgroundOverlay?: string;
    heroVideo?: {
      url: string;
    };
  };
}) {
  const heroVideoUrl = settings.heroVideo?.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${settings.heroVideo.url}`
    : "/background-video.mp4";

  const themeColorPrimary = settings.themeColorPrimary || "#0070f3";
  const themeTextColorOnPrimary = settings.themeTextColorOnPrimary || "#ffffff";
  const heroBackgroundOverlay =
    settings.heroBackgroundOverlay || "rgba(0,0,0,0.3)";

  return (
    <section className="relative overflow-hidden flex items-center py-24 min-h-[900px]">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          className="w-full h-full object-cover"
          src={heroVideoUrl}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: heroBackgroundOverlay }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 max-w-7xl relative z-20">
        <div className="flex flex-col gap-12 items-center">
          <div className="flex flex-col md:flex-row w-full">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight md:w-1/2 text-white">
              Professional Plumbing Services at Your{" "}
              <span style={{ color: themeColorPrimary }}>Home</span>,
              <br />
              <span style={{ color: themeColorPrimary }}>Hassle-Free</span>
            </h1>

            <div className="md:w-1/2">
              <p className="text-white mb-6 md:mb-8">
                Elevate your brand by leveraging strategic marketing that is
                tailored to your unique goals. Our expert team designs
                data-driven campaigns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="font-medium py-3 px-6 rounded-lg transition-colors"
                  style={{
                    backgroundColor: themeColorPrimary,
                    color: themeTextColorOnPrimary,
                  }}
                >
                  Explore Our Services
                </button>
                <button
                  className="bg-white hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors"
                  style={{ color: themeColorPrimary }}
                >
                  Request A Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
