import Image from "next/image";

export default function Footer({
  settings,
}: {
  settings: {
    logo: { url: string };
    primaryPhone: string;
    secondaryPhone: string;
    email: string;
    addressLine1: string;
    addressLine2: string;
    footerDescription: string;
    themeColorPrimary: string;
    themeTextColorOnPrimary: string;
  };
}) {
  const {
    logo,
    primaryPhone,
    secondaryPhone,
    email,
    addressLine1,
    addressLine2,
    footerDescription,
    themeColorPrimary,
    themeTextColorOnPrimary,
  } = settings;

  const logoUrl = logo?.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${logo.url}`
    : "/logo-light.svg";

  return (
    <footer
      style={{
        backgroundColor: themeColorPrimary,
        color: themeTextColorOnPrimary,
      }}
      className="py-12"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-36 h-12 flex items-center justify-center">
                <Image
                  src={logoUrl}
                  alt="Logo"
                  width={150}
                  height={150}
                  className="rounded-lg"
                />
              </div>
            </div>
            <p className="mb-4 text-sm opacity-90">{footerDescription}</p>
            <div className="text-sm opacity-90">
              <p>{addressLine1}</p>
              <p>{addressLine2}</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="#" className="hover:opacity-100">
                  Emergency Plumbing
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Residential Plumbing
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Commercial Plumbing
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Gas Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Plumbing Repairs
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Plumbing Maintenance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Service Areas</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Eastern Melbourne</li>
              <li>North Eastern Melbourne</li>
              <li>Bayside Melbourne</li>
              <li>Mount Waverley</li>
              <li>And surrounding suburbs</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Contact & Hours</h4>
            <div className="space-y-2 text-sm opacity-90">
              <p>Phone: {primaryPhone}</p>
              <p>Mobile: {secondaryPhone}</p>
              <p>Email: {email}</p>
              <p className="mt-4">Hours: 7:00 AM - 7:00 PM</p>
              <p>7 Days a Week</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>
            &copy; 2024 Power Plumbing. All rights reserved. | *Terms and
            conditions apply to $0 call out fee.
          </p>
          <p className="mt-2">
            Established 1978 | Family Owned & Operated | 100% Customer
            Satisfaction Guarantee
          </p>
        </div>
      </div>
    </footer>
  );
}
