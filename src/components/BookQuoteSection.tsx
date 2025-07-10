"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const BookQuoteSection = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    suburb: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", form);

  };

  return (
    <section className="bg-white">
      <div className="w-full h-[300px] relative">
        <Image
          src="/plumbers.jpg"
          alt="Plumbers Group"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="bg-blue-600 py-4 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-white">
            Get Guote Now
        </h2>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h3 className="text-2xl font-bold text-center text-blue-900 mb-8">
          RELIABLE. TRUSTED.
        </h3>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Name*"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 rounded-lg bg-white text-black focus:ring-2 focus:ring-blue-600 focus:border-transparent border-gray-300"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone/Mobile*"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 rounded-lg bg-white text-black focus:ring-2 focus:ring-blue-600 focus:border-transparent border-gray-300"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 rounded-lg bg-white text-black focus:ring-2 focus:ring-blue-600 focus:border-transparent border-gray-300"
            required
          />

          <input
            type="text"
            name="suburb"
            placeholder="Suburb*"
            value={form.suburb}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 rounded-lg bg-white text-black focus:ring-2 focus:ring-blue-600 focus:border-transparent border-gray-300"
            required
          />

          <div className="relative col-span-1 md:col-span-2">
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className={`w-full appearance-none px-4 py-3 pr-10 border-2 rounded-lg bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent text-black ${
                form.service
                  ? "text-blue-700 border-blue-700 font-semibold"
                  : "border-gray-300"
              }`}
              required
            >
              <option value="">Choose a domestic plumbing service...</option>
              <option value="Leak Repair">Leak Repair</option>
              <option value="Blocked Drain">Blocked Drain</option>
              <option value="Hot Water System">Hot Water System</option>
              <option value="Toilet Repair">Toilet Repair</option>
            </select>
            <ChevronDown
              className={`absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none transition-colors duration-200 ${
                form.service ? "text-blue-700" : "text-gray-400"
              }`}
              size={20}
            />
          </div>

          {/* Textarea */}
          <textarea
            name="message"
            placeholder="Let us know how we can help?"
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 rounded-lg bg-white text-black focus:ring-2 focus:ring-blue-600 focus:border-transparent col-span-1 md:col-span-2 border-gray-300"
            rows={4}
          />

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded transition"
            >
              SEND ENQUIRY
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookQuoteSection;
