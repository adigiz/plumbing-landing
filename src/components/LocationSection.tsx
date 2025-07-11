import React from "react";

const LocationSection: React.FC = () => {
  return (
    <section id="about" className="bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="bg-blue-600 shadow-lg p-8 py-20">
            <h3 className="text-2xl font-bold text-white mb-6">
              Service location
            </h3>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-center">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-3 h-3 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Address</p>
                  <p className="text-gray-200">Jl. Ahmad yani, Pemuda 4 no 2</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-3 h-3 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Phone Number</p>
                  <p className="text-gray-200">+61 85159959096</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-3 h-3 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-gray-200">
                    plumbing@gmail.com
                  </p>
                </div>
              </div>

              {/* Search Field */}
              <div className="pt-4">
                <label
                  htmlFor="location-search"
                  className="text-white font-semibold block mb-2"
                >
                  Search other location
                </label>
                <input
                  type="text"
                  id="location-search"
                  placeholder="Enter location name"
                  className="w-full px-4 py-3 rounded-md text-md text-blue-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-full py-10 bg-white overflow-hidden">
            <div className="w-full h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.6839196931473!2d117.16805699999999!3d-0.4702869999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMjgnMTMuMCJTIDExN8KwMTAnMDUuMCJF!5e0!3m2!1sen!2sid!4v1751851952177!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Toko"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
