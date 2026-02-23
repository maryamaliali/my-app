import React from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function PricingPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f3f5f9] pt-40 pb-24 px-6">

        {/* HERO SECTION */}
        <section className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 md:p-14">

            {/* Small Label */}
            <p className="text-blue-500 tracking-[0.35em] text-xs md:text-sm font-medium mb-6">
              TRANSPARENT PRICING
            </p>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Choose the plan that fits your love story.
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-base md:text-lg max-w-3xl leading-relaxed mb-10">
              MatriMony keeps everything transparent — no hidden fees, no
              surprise renewals. Pick the tier that matches your ambition and
              let our matchmakers guide the rest.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">

              <Link
                href="/tryfree"
                className="inline-flex items-center justify-center gap-2
                px-6 py-3 rounded-xl
                bg-blue-600 hover:bg-blue-700
                text-white font-semibold
                transition duration-300"
              >
                Start with Premium →
              </Link>

              <Link
                href="/signin"
                className="inline-flex items-center justify-center
                px-6 py-3 rounded-xl
                bg-gray-800 hover:bg-gray-900
                text-white font-medium
                transition duration-300"
              >
                Already a member?
              </Link>

            </div>
          </div>
        </section>

        {/* PLANS SECTION */}
        <section className="mt-24 max-w-6xl mx-auto">

          <p className="text-center text-gray-500 tracking-[0.3em] text-xs md:text-sm mb-6">
            PLANS BUILT FOR FAMILIES
          </p>

          <h2 className="text-center text-2xl md:text-4xl font-bold text-gray-900 mb-16">
            Simple pricing, powerful matchmaking
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* BASIC PLAN */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Basic
              </h3>
              <p className="text-gray-500 mb-6">
                Perfect for exploring meaningful connections.
              </p>
              <div className="text-3xl font-bold text-gray-900 mb-6">
                $29<span className="text-lg font-medium text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>✔ 10 Profile Matches</li>
                <li>✔ Basic Support</li>
                <li>✔ Limited Messaging</li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-black transition">
                Choose Plan
              </button>
            </div>

            {/* PREMIUM PLAN */}
            <div className="bg-blue-600 text-white rounded-2xl p-8 shadow-lg scale-105">
              <h3 className="text-xl font-semibold mb-4">
                Premium
              </h3>
              <p className="text-blue-100 mb-6">
                Best for serious matchmaking and faster results.
              </p>
              <div className="text-3xl font-bold mb-6">
                $59<span className="text-lg font-medium text-blue-200">/month</span>
              </div>
              <ul className="space-y-3 text-blue-100 mb-8">
                <li>✔ Unlimited Matches</li>
                <li>✔ Priority Support</li>
                <li>✔ Unlimited Messaging</li>
              </ul>
              <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
                Most Popular
              </button>
            </div>

            {/* ELITE PLAN */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Elite
              </h3>
              <p className="text-gray-500 mb-6">
                Personalized matchmaking with expert guidance.
              </p>
              <div className="text-3xl font-bold text-gray-900 mb-6">
                $99<span className="text-lg font-medium text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>✔ Dedicated Matchmaker</li>
                <li>✔ VIP Support</li>
                <li>✔ Exclusive Events</li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-black transition">
                Choose Plan
              </button>
            </div>

          </div>
        </section>

      </main>
    </>
  );
}