import {
  CalendarCheck,
  User,
  ShowerHead,
  Flame,
  Droplet,
  Cpu,
  Hammer,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    { icon: CalendarCheck, label: "EMERGENCY 7 DAYS" },
    { icon: User, label: "GENERAL PLUMBING" },
    { icon: ShowerHead, label: "HOT WATER" },
    { icon: Flame, label: "GAS HEATING" },
    { icon: Droplet, label: "WATER LEAK DETECTION" },
    { icon: Cpu, label: "APPLIANCE INSTALLATION" },
    { icon: Hammer, label: "RENOVATIONS" },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-start gap-12">
        {/* Left text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Here&apos;s how our <br /> plumbers can help
            <div className="w-16 h-1 bg-blue-600 mt-2" />
          </h2>
          <p className="text-blue-800 text-lg leading-relaxed">
            A single call to O’Shea Plumbing will provide you with quick, easy
            access to experienced Melbourne Plumbers that will provide a variety
            of services ranging from basic maintenance and repairs to emergency
            drain cleaning and sewer repair.
          </p>
        </div>

        {/* Right services grid */}
        <div className="md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, label }, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Icon className="h-10 w-10 text-blue-800 mb-2" />
              <span className="text-blue-700 text-sm font-medium leading-tight">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA button */}
      <div className="text-center mt-12">
        <a
          href="#"
          className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
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
