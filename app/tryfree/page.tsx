"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

export default function TryFreePage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-[#2c2f33] relative">

      {/* Back Button */}
      <Link
        href="/"
        className="absolute top-6 left-6 flex items-center gap-2 border border-white/30
        text-white px-5 py-2 rounded-full hover:bg-white/10 transition"
      >
        <ArrowLeft size={18} />
      </Link>

      {/* Card */}
      <div className="w-full max-w-xl bg-[#1e1f23] rounded-2xl shadow-2xl p-8 md:p-10">

        {/* Logo */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">
            <span className="text-blue-500">Match</span>
            <span className="text-pink-500">Half</span>
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Create your account and find your soulmate
          </p>
        </div>

        <h2 className="text-white text-xl font-semibold mb-1">Sign Up</h2>
        <p className="text-gray-400 text-sm mb-6">
          Create your account to get started
        </p>

        {/* FORM */}
        <form className="space-y-4">

          {/* First + Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-300 text-sm">First Name</label>
              <input
                type="text"
                placeholder="First name"
                className="w-full mt-1 px-4 py-3 rounded-full bg-[#2c2f33] text-white
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-gray-300 text-sm">Last Name</label>
              <input
                type="text"
                placeholder="Last name"
                className="w-full mt-1 px-4 py-3 rounded-full bg-[#2c2f33] text-white
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Username */}
          <div>
            <label className="text-gray-300 text-sm">Username</label>
            <input
              type="text"
              placeholder="Choose a username"
              className="w-full mt-1 px-4 py-3 rounded-full bg-[#2c2f33] text-white
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-300 text-sm">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-3 rounded-full bg-[#2c2f33] text-white
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="text-gray-300 text-sm">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              className="w-full mt-1 px-4 py-3 pr-12 rounded-full bg-[#2c2f33] text-white
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-10 text-gray-400"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label className="text-gray-300 text-sm">Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              className="w-full mt-1 px-4 py-3 pr-12 rounded-full bg-[#2c2f33] text-white
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-10 text-gray-400"
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Date of Birth */}
          <div>
            <label className="text-gray-300 text-sm">Date of Birth</label>
            <input
              type="date"
              className="w-full mt-1 px-4 py-3 rounded-full bg-[#2c2f33] text-white
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="text-gray-300 text-sm">Gender</label>
            <select
              className="w-full mt-1 px-4 py-3 rounded-full bg-[#2c2f33] text-white
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Select gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Account Type */}
          <div>
            <label className="text-gray-300 text-sm">Account Type</label>
            <select
              className="w-full mt-1 px-4 py-3 rounded-full bg-[#2c2f33] text-white
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Select account type</option>
              <option>Free</option>
              <option>Premium</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 py-3 rounded-full bg-blue-600 hover:bg-blue-700
            text-white font-semibold transition"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="text-center text-gray-400 text-sm mt-6">
          OR CONTINUE WITH
        </div>

        {/* Social Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button className="flex-1 bg-[#2c2f33] hover:bg-[#383b40]
          text-white py-3 rounded-full transition">
            Google
          </button>

          <button className="flex-1 bg-[#2c2f33] hover:bg-[#383b40]
          text-white py-3 rounded-full transition">
            Facebook
          </button>
        </div>

        {/* Login Link */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Already have an account?{" "}
          <Link href="/signin" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}