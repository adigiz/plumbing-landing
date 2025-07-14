import {
  CalendarCheck,
  User,
  ShowerHead,
  Flame,
  Droplet,
  Cpu,
} from "lucide-react";

export default function ServicesSection({
  settings,
}: {
  settings: {
    themeColorPrimary: string;
    themeTextColorOnPrimary: string;
    primaryTextColor: string;
    brandName: string;
  };
}) {
  const {
    themeColorPrimary,
    themeTextColorOnPrimary,
    primaryTextColor,
    brandName,
  } = settings;

  const services = [
    { icon: CalendarCheck, label: "EMERGENCY 7 DAYS" },
    { icon: User, label: "GENERAL PLUMBING" },
    { icon: ShowerHead, label: "HOT WATER" },
    { icon: Flame, label: "GAS HEATING" },
    { icon: Droplet, label: "WATER LEAK DETECTION" },
    { icon: Cpu, label: "APPLIANCE INSTALLATION" },
  ];

  return (
    <section className="py-20 bg-white pt-30">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-start gap-12">
        <div className="md:w-1/2">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: primaryTextColor }}
          >
            Here&apos;s How Our <br /> Plumbers Can Help
            <div
              className="w-16 h-1 mt-2"
              style={{ backgroundColor: themeColorPrimary }}
            />
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: primaryTextColor }}
          >
            Call {brandName} for fast and reliable plumbing services in
            Melbourne. Our licensed plumbers handle everything from general
            maintenance and repairs to emergency drain cleaning and sewer pipe
            repairs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, label }, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Icon
                className="h-10 w-10 mb-2"
                style={{ color: primaryTextColor }}
              />
              <span
                className="text-sm font-medium leading-tight"
                style={{ color: primaryTextColor }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <a
          href="#"
          className="inline-flex items-center justify-center px-6 py-3 font-medium rounded-md transition-colors"
          style={{
            backgroundColor: themeColorPrimary,
            color: themeTextColorOnPrimary,
          }}
        >
          SEE A FULL LIST OF OUR SERVICES
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
