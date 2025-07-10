import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-36 h-12 bg-opacity-20 flex items-center justify-center border-opacity-30">
                <Image
                  src="/logo-light.svg"
                  alt="Logo"
                  width={150}
                  height={150}
                  className="rounded-lg"
                />
              </div>
            </div>
            <p className="text-blue-200 mb-4">
              Your trusted Melbourne plumber for over 45 years. Family owned and
              operated business providing professional plumbing services 7 days
              a week.
            </p>
            <div className="text-blue-200">
              <p>12 Windsor Avenue</p>
              <p>Mount Waverley VIC 3149</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-blue-200">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Emergency Plumbing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Residential Plumbing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Commercial Plumbing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Gas Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Plumbing Repairs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Plumbing Maintenance
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-blue-200">
              <li>Eastern Melbourne</li>
              <li>North Eastern Melbourne</li>
              <li>Bayside Melbourne</li>
              <li>Mount Waverley</li>
              <li>And surrounding suburbs</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact & Hours</h4>
            <div className="space-y-2 text-blue-200">
              <p>Phone: 03 9888 2887</p>
              <p>Mobile: 0412 839 127</p>
              <p>Email: info@osheaplumbing.com.au</p>
              <p className="mt-4">Hours: 7:00 AM - 7:00 PM</p>
              <p>7 Days a Week</p>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
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
};

export default Footer;
