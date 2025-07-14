import Image from "next/image";

export default function EmergencyPlumberSection({
  settings,
}: {
  settings: {
    primaryPhone: string;
    themeColorPrimary: string;
    themeTextColorOnPrimary: string;
    primaryTextColor: string;
  };
}) {
  const {
    primaryPhone,
    themeColorPrimary,
    themeTextColorOnPrimary,
    primaryTextColor,
  } = settings;

  return (
    <section className="bg-white">
      <div
        className="px-4 text-center text-white"
        style={{ backgroundColor: themeColorPrimary }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Image
              src="/truck.png"
              alt="O'Shea Plumbing Van"
              width={400}
              height={250}
              className="object-contain"
            />
            <div className="text-left">
              <h3
                className="uppercase font-bold tracking-wide mb-2"
                style={{ color: primaryTextColor }}
              >
                Urgent Response
              </h3>
              <h2 className="text-4xl md:text-4xl font-bold">
                Ready when you need us most.
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ color: primaryTextColor }}
          >
            Need an Emergency Plumber in Melbourne?
          </h2>
          <h3
            className="text-lg md:text-xl font-semibold mb-6"
            style={{ color: primaryTextColor }}
          >
            The plumbers Melbourne can rely on for plumbing services 7 days a
            week.
          </h3>
          <p className="text-gray-700 text-base mb-4 leading-relaxed">
            Looking for a fast and reliable emergency plumber in Melbourne? Our
            licensed local plumbers are available every day of the week to
            respond quickly to urgent plumbing issues. Whether you&apos;re
            dealing with a burst pipe, blocked drain, or gas leak, we have the
            tools and experience to fix the problem safely and efficiently.
            Homeowners and businesses across Melbourne trust our team to deliver
            prompt, professional service when it matters most. We handle all
            types of emergency plumbing repairs with expert care and clear
            communication.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-md text-center shadow-md">
          <h4
            className="font-bold text-lg mb-4"
            style={{ color: primaryTextColor }}
          >
            CALL US NOW ON
          </h4>
          <div
            className="font-bold text-lg py-2 rounded mb-4"
            style={{
              backgroundColor: themeColorPrimary,
              color: themeTextColorOnPrimary,
            }}
          >
            {primaryPhone}
          </div>
        </div>
      </div>

      <div className="pb-16 text-center px-4">
        <h4
          className="text-xl md:text-2xl font-bold "
          style={{ color: primaryTextColor }}
        >
          Get in touch now for fast response times and a fixed-price quote on
          your plumbing emergency.
        </h4>
      </div>
    </section>
  );
}
