import React from "react";
import Navbar from "../components/Navbar";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f3f5f9] pt-40 pb-24 px-6">

        {/* HERO SECTION */}
        <section className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 md:p-14">

            {/* Label */}
            <p className="text-blue-500 tracking-[0.35em] text-xs md:text-sm font-medium mb-6">
              GET IN TOUCH
            </p>

            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              We're here to help
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-base md:text-lg max-w-3xl leading-relaxed">
              Have questions? Need support? Our team is ready to assist you
              with anything you need. Reach out through any of the methods
              below.
            </p>
          </div>
        </section>

        {/* CONTACT OPTIONS */}
        <section className="mt-20 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* EMAIL CARD */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 mb-6">
                <Mail className="text-blue-600" size={22} />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Email Us
              </h3>

              <p className="text-gray-600 mb-4">
                Send us an email and we'll respond within 24 hours
              </p>

              <a
                href="mailto:support@matchhalf.com"
                className="text-blue-600 font-medium hover:underline"
              >
                support@matchhalf.com
              </a>
            </div>

            {/* CALL CARD */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 mb-6">
                <Phone className="text-blue-600" size={22} />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Call Us
              </h3>

              <p className="text-gray-600 mb-4">
                Speak directly with our support team
              </p>

              <a
                href="tel:+918001234567"
                className="text-blue-600 font-medium hover:underline"
              >
                +91 1800-123-4567
              </a>
            </div>

            {/* LIVE CHAT CARD */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 mb-6">
                <MessageCircle className="text-blue-600" size={22} />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Live Chat
              </h3>

              <p className="text-gray-600 mb-4">
                Chat with us in real-time for instant help
              </p>

              <span className="text-blue-600 font-medium">
                Available 24/7
              </span>
            </div>

          </div>
        </section>

      </main>
    </>
  );
}