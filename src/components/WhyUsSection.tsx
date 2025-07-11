import { Users, Star, Lock, CheckCircle } from "lucide-react";
import Image from "next/image";

const WhyUsSection = () => {
  return (
    <section className="relative py-20 bg-gray-100 overflow-hidden">
      {/* Absolute background image behind the left column */}
      <div className="absolute left-0 top-0 bottom-0 w-full hidden md:block z-0">
        <Image
          src="/melbourne.jpg"
          alt="Melbourne Background"
          fill
          className="object-cover opacity-10"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start relative z-10">
        {/* Left: Text + Button */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-900 leading-tight">
            Why choose <br /> Us as your <br /> Melbourne Plumber?
          </h2>
          <div className="w-16 h-1 bg-blue-800 mb-4" />
          <button className="bg-blue-600 text-white font-bold px-6 py-3 rounded-sm hover:bg-blue-700 transition">
            REQUEST A QUOTE NOW
          </button>
        </div>

        {/* Right: Embedded YouTube */}
        <div className="aspect-video w-full rounded overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/jZAb3BcPy6o?si=oSxT7i34tbpcB_3W"
            title="O'Shea Plumbing Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        <div className="border p-6 rounded-lg shadow-lg text-center bg-white">
          <Users className="mx-auto text-blue-900 w-8 h-8 mb-4" />
          <h4 className="font-bold text-blue-900 text-sm">
            FAMILY OWNED & OPERATED
          </h4>
          <p className="text-blue-600 font-semibold mt-2 mb-1 text-sm">
            For over 40 years
          </p>
          <p className="text-sm text-gray-700">
            Since 1978, we’ve handled plumbing system installation, repair &
            maintenance.
          </p>
        </div>

        <div className="border p-6 rounded-lg shadow-lg text-center bg-white">
          <Star className="mx-auto text-blue-900 w-8 h-8 mb-4" />
          <h4 className="font-bold text-blue-900 text-sm">
            100% SATISFACTION GUARANTEE
          </h4>
          <p className="text-blue-600 font-semibold mt-2 mb-1 text-sm">
            We’re only happy if you are
          </p>
          <p className="text-sm text-gray-700">
            We&apos;ve built a reliable reputation through diligent service and care.
          </p>
        </div>

        <div className="border p-6 rounded-lg shadow-lg text-center bg-white">
          <Lock className="mx-auto text-blue-900 w-8 h-8 mb-4" />
          <h4 className="font-bold text-blue-900 text-sm">
            HONEST, FIXED UPFRONT PRICING
          </h4>
          <p className="text-blue-600 font-semibold mt-2 mb-1 text-sm">
            For peace of mind
          </p>
          <p className="text-sm text-gray-700">
            We listen to your concerns & provide clear, upfront pricing.
          </p>
        </div>

        <div className="border p-6 rounded-lg shadow-lg text-center bg-white">
          <CheckCircle className="mx-auto text-blue-900 w-8 h-8 mb-4" />
          <h4 className="font-bold text-blue-900 text-sm">
            WE WORK ON WEEKENDS
          </h4>
          <p className="text-blue-600 font-semibold mt-2 mb-1 text-sm">
            No waiting for Monday
          </p>
          <p className="text-sm text-gray-700">
            On-call plumbers every weekend. No call-out fee for weekend jobs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
