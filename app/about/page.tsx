import React from "react";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen bg-[#f3f5f9] pt-40 pb-20 px-6">

        {/* Main Card Section */}
        <section className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-8 md:p-14">

            {/* Small Top Label */}
            <p className="text-blue-500 tracking-[0.4em] text-xs md:text-sm font-medium mb-6">
              ABOUT MATRIMONY
            </p>

            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Crafted for intentional <br className="hidden md:block" />
              relationships
            </h1>

            {/* Paragraph */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl">
              MatriMony was born from a simple belief: finding your life partner
              shouldn't be overwhelming. We blend human intuition with intelligent
              technology to create a platform where meaningful connections happen
              naturally.
            </p>

          </div>
        </section>

        {/* OUR VALUES SECTION */}
        <section className="mt-24 text-center">

          <p className="text-gray-500 tracking-[0.5em] text-xs md:text-sm mb-4">
            OUR VALUES
          </p>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-16">
            What drives us
          </h2>

          {/* Cards */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">

            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition">
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center text-xl">
                ❤️
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                Authenticity
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We believe real connections start with being genuine and honest.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition">
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-purple-100 flex items-center justify-center text-xl">
                🤝
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                Trust
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your privacy and security are at the core of everything we build.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition">
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-pink-100 flex items-center justify-center text-xl">
                🚀
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                Innovation
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We use intelligent technology to make matchmaking smarter and easier.
              </p>
            </div>

          </div>
        </section>

      </main>
    </>
  );
}