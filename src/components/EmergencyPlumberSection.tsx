import Image from "next/image";

export default function EmergencyPlumberSection() {
  return (
    <section className="bg-white">
      <div className="bg-blue-900 px-4 text-center text-white">
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
              <h3 className="text-cyan-400 uppercase font-bold tracking-wide mb-2">
                Rapid Response
              </h3>
              <h2 className="text-3xl md:text-4xl font-bold">
                We’ll come running.
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Text Section */}
        <div className="md:col-span-2">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
            Need an Emergency Plumber in Melbourne?
          </h2>
          <h3 className="text-lg md:text-xl text-blue-900 font-semibold mb-6">
            The plumbers Melbourne can rely on for plumbing services 7 days a
            week.
          </h3>
          <p className="text-gray-700 text-base mb-4 leading-relaxed">
            Do you need a local Melbourne emergency plumber to be at your
            property quickly? Our team can be there promptly to assist with your
            plumbing emergency. Whether it’s a broken pipe or a gas leak our
            team of Melbourne-based plumbers has the expertise and training to
            safely restore your property’s plumbing to working order. We are the
            emergency plumbers that Melbourne’s homes and businesses can depend
            on to quickly identify and solve their plumbing problems.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            O’Shea has a team of plumbers Melbourne locals can rely on, whatever
            your needs. Our team is prepared for all plumbing issues that you
            might come across –
            <span className="font-bold text-blue-900">
              {" "}
              The plumber Melbourne locals can call on 7 days a week.
            </span>
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-md text-center shadow-md">
          <h4 className="text-blue-900 font-bold text-lg mb-4">
            CALL US NOW ON
          </h4>
          <div className="bg-blue-600 text-white font-bold text-lg py-2 rounded mb-4">
            03 9888 2887
          </div>
          <div className="font-bold text-blue-900 mb-4">OR</div>
          <div className="bg-blue-600 text-white font-bold text-lg py-2 rounded">
            0412 839 127
          </div>
        </div>
      </div>

      <div className="pb-16 text-center px-4">
        <h4 className="text-xl md:text-2xl font-bold text-blue-900">
          <span className="text-cyan-500">Contact</span>{" "}
          <span className="font-black">O’Shea Plumbing</span> today to get a
          fixed quote for your plumbing needs.
        </h4>
      </div>
    </section>
  );
}
