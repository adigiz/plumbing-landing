"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function BookQuoteSection({
  settings,
}: {
  settings: {
    themeColorPrimary: string;
    themeTextColorOnPrimary: string;
    primaryTextColor: string;
  };
}) {
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
    // Add integration here
  };

  const { themeColorPrimary, themeTextColorOnPrimary, primaryTextColor } =
    settings;

  return (
    <section className="bg-white">
      {/* Banner */}
      <div className="w-full h-[300px] relative">
        <Image
          src="/plumbers.jpg"
          alt="Plumbers Group"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Colored Banner Title */}
      <div
        className="py-4 text-center"
        style={{ backgroundColor: themeColorPrimary }}
      >
        <h2
          className="text-xl sm:text-2xl font-bold"
          style={{ color: themeTextColorOnPrimary }}
        >
          Get Quote Now
        </h2>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h3
          className="text-2xl font-bold text-center mb-8"
          style={{ color: primaryTextColor }}
        >
          RELIABLE. TRUSTED.
        </h3>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {["name", "phone", "email", "suburb"].map((field) => (
            <input
              key={field}
              type={field === "email" ? "email" : "text"}
              name={field}
              placeholder={
                field.charAt(0).toUpperCase() +
                field.slice(1).replace("email", "Email") +
                "*"
              }
              value={form[field as keyof typeof form]}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 rounded-lg bg-white text-black focus:ring-2 focus:border-transparent border-gray-300 focus:ring-[color:var(--primary-color)]"
              required
            />
          ))}

          {/* Select Field */}
          <div className="relative col-span-1 md:col-span-2">
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full appearance-none px-4 py-3 pr-10 border-2 rounded-lg bg-white focus:ring-2 focus:border-transparent text-black"
              style={
                form.service
                  ? {
                      borderColor: themeColorPrimary,
                      color: primaryTextColor,
                      fontWeight: "600",
                    }
                  : {}
              }
              required
            >
              <option value="">Choose a domestic plumbing service...</option>
              <option value="Leak Repair">Leak Repair</option>
              <option value="Blocked Drain">Blocked Drain</option>
              <option value="Hot Water System">Hot Water System</option>
              <option value="Toilet Repair">Toilet Repair</option>
            </select>

            <ChevronDown
              className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none transition-colors duration-200"
              size={20}
              style={{
                color: form.service ? primaryTextColor : "#9ca3af", // fallback: gray-400
              }}
            />
          </div>

          {/* Message Field */}
          <textarea
            name="message"
            placeholder="Let us know how we can help?"
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 rounded-lg bg-white text-black focus:ring-2 focus:ring-[color:var(--primary-color)] focus:border-transparent col-span-1 md:col-span-2 border-gray-300"
            rows={4}
          />

          {/* Submit */}
          <div className="col-span-1 md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="font-bold px-6 py-3 rounded transition"
              style={{
                backgroundColor: themeColorPrimary,
                color: themeTextColorOnPrimary,
              }}
            >
              SEND ENQUIRY
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
