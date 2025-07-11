import { Users, Star, Lock, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function WhyUsSection({
  settings,
}: {
  settings: {
    themeColorPrimary: string;
    themeTextColorOnPrimary: string;
    primaryTextColor: string;
  };
}) {
  const { themeColorPrimary, themeTextColorOnPrimary, primaryTextColor } =
    settings;

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute left-0 top-0 bottom-0 w-full hidden md:block z-0">
        <Image
          src="/melbourne.jpg"
          alt="Melbourne Background"
          fill
          className="object-cover opacity-10"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start relative z-10">
        {/* Left Content */}
        <div className="space-y-6">
          <h2
            className="text-3xl font-bold leading-tight"
            style={{ color: primaryTextColor }}
          >
            Why choose <br /> Us as your <br /> Melbourne Plumber?
          </h2>
          <div
            className="w-16 h-1 mb-4"
            style={{ backgroundColor: themeColorPrimary }}
          />
          <button
            className="font-bold px-6 py-3 rounded-sm transition"
            style={{
              backgroundColor: themeColorPrimary,
              color: themeTextColorOnPrimary,
            }}
          >
            REQUEST A QUOTE NOW
          </button>
        </div>

        {/* Right YouTube Embed */}
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

      {/* Feature Grid */}
      <div className="max-w-7xl mx-auto px-4 mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {[
          {
            icon: Users,
            title: "FAMILY OWNED & OPERATED",
            subtitle: "For over 40 years",
            description:
              "Since 1978, we’ve handled plumbing system installation, repair & maintenance.",
          },
          {
            icon: Star,
            title: "100% SATISFACTION GUARANTEE",
            subtitle: "We’re only happy if you are",
            description:
              "We've built a reliable reputation through diligent service and care.",
          },
          {
            icon: Lock,
            title: "HONEST, FIXED UPFRONT PRICING",
            subtitle: "For peace of mind",
            description:
              "We listen to your concerns & provide clear, upfront pricing.",
          },
          {
            icon: CheckCircle,
            title: "WE WORK ON WEEKENDS",
            subtitle: "No waiting for Monday",
            description:
              "On-call plumbers every weekend. No call-out fee for weekend jobs.",
          },
        ].map(({ icon: Icon, title, subtitle, description }, i) => (
          <div
            key={i}
            className="border p-6 rounded-lg shadow-lg text-center bg-white"
          >
            <Icon
              className="mx-auto mb-4"
              style={{ color: themeColorPrimary }}
              size={32}
            />
            <h4
              className="font-bold text-sm"
              style={{ color: primaryTextColor }}
            >
              {title}
            </h4>
            <p
              className="font-semibold mt-2 mb-1 text-sm"
              style={{ color: themeColorPrimary }}
            >
              {subtitle}
            </p>
            <p className="text-sm" style={{ color: primaryTextColor }}>
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
