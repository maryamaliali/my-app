"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#2c2f33] px-6 py-10">

      {/* Back Button */}
      <div className="absolute top-8 left-8">
        <Link
          href="/"
          className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
        >
          <ArrowLeft size={18} />
        </Link>
      </div>

      {/* Logo + Subtitle */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">
          <span className="text-blue-500">Match</span>
          <span className="text-pink-500">Half</span>
        </h1>
        <p className="text-gray-300 mt-2">
          Find your perfect life partner
        </p>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md bg-[#1f2125] rounded-2xl shadow-2xl p-8 md:p-10">

        {/* Title */}
        <h2 className="text-white text-xl font-semibold mb-2">
          Login
        </h2>
        <p className="text-gray-400 text-sm mb-6">
          Enter your credentials to access your account
        </p>

        {/* Form */}
        <form className="space-y-5">

          {/* Email */}
          <div>
            <label className="text-gray-300 text-sm">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-2 w-full px-4 py-3 rounded-full bg-[#2c2f33] text-white border border-white/10 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-300 text-sm">Password</label>
            <div className="relative mt-2">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-full bg-[#2c2f33] text-white border border-white/10 focus:outline-none focus:border-blue-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm mt-2">
            <label className="flex items-center gap-2 text-gray-300">
              <input type="checkbox" className="accent-blue-500" />
              Remember me
            </label>

            <Link
              href="/forgot-password"
              className="text-blue-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full mt-4 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="text-center text-gray-400 text-xs my-6">
          OR CONTINUE WITH
        </div>

        {/* Social Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex-1 py-3 rounded-full bg-[#2c2f33] text-white hover:bg-[#35383d] transition">
            Google
          </button>

          <button className="flex-1 py-3 rounded-full bg-[#2c2f33] text-white hover:bg-[#35383d] transition">
            Facebook
          </button>
        </div>

        {/* Signup Link */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Don’t have an account?{" "}
          <Link
            href="/signup"
            className="text-blue-500 hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}