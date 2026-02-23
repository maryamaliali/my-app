"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu automatically when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (path: string) =>
    pathname.startsWith(path);

  const navLink =
    "transition duration-200 text-sm";

  return (
    <header className="fixed top-6 left-0 w-full flex justify-center z-50 px-4">
      <div className="w-full max-w-6xl">

        {/* NAV CONTAINER */}
        <div className="relative flex items-center justify-between px-6 md:px-10 py-4
          rounded-full 
          bg-gradient-to-r from-purple-900/40 via-blue-900/40 to-purple-900/40
          backdrop-blur-xl border border-white/10 shadow-lg">

          {/* LEFT SECTION */}
          <div className="flex items-center gap-6">

            {/* Mobile Logo */}
            <Link href="/" className="md:hidden text-xl font-bold">
              <span className="text-blue-400">Match</span>
              <span className="text-pink-500">Half</span>
            </Link>

            {/* Desktop Links */}
            <nav className="hidden md:flex gap-10">
              <Link
                href="/about"
                className={`${navLink} ${
                  isActive("/about")
                    ? "text-white font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                About
              </Link>

              <Link
                href="/pricing"
                className={`${navLink} ${
                  isActive("/pricing")
                    ? "text-white font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Pricing
              </Link>

              <Link
                href="/contact"
                className={`${navLink} ${
                  isActive("/contact")
                    ? "text-white font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* CENTER LOGO (Desktop) */}
          <Link
            href="/"
            className="hidden md:block absolute left-1/2 -translate-x-1/2 text-2xl font-bold"
          >
            <span className="text-blue-400">Match</span>
            <span className="text-pink-500">Half</span>
          </Link>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-3">

            {/* Desktop Sign In */}
            <Link
              href="/signin"
              className={`hidden md:block ${navLink} ${
                isActive("/signin")
                  ? "text-white font-semibold"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Sign in
            </Link>

            {/* Try Free Button */}
            <Link
              href="/tryfree"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 
              px-4 md:px-5 py-2 rounded-full text-sm font-medium text-white
              hover:opacity-90 transition shadow-md"
            >
              <User size={16} />
              <span>Try free</span>
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full bg-white/10 
              border border-white/20 hover:bg-white/20 transition"
            >
              {isOpen ? (
                <X size={20} className="text-white" />
              ) : (
                <Menu size={20} className="text-white" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE DROPDOWN */}
        {isOpen && (
          <div className="mt-4 md:hidden rounded-2xl 
            bg-[#0b1023]/95 backdrop-blur-xl 
            border border-white/10 shadow-xl p-6">

            <div className="flex flex-col gap-6 text-sm">

              <Link
                href="/about"
                className={isActive("/about") ? "text-white font-semibold" : "text-gray-300"}
              >
                About
              </Link>

              <Link
                href="/pricing"
                className={isActive("/pricing") ? "text-white font-semibold" : "text-gray-300"}
              >
                Pricing
              </Link>

              <Link
                href="/contact"
                className={isActive("/contact") ? "text-white font-semibold" : "text-gray-300"}
              >
                Contact
              </Link>

              <Link
                href="/signin"
                className={isActive("/signin") ? "text-white font-semibold" : "text-gray-300"}
              >
                Sign in
              </Link>

              <Link
                href="/tryfree"
                className="text-blue-400 font-medium"
              >
                Try free
              </Link>

            </div>
          </div>
        )}
      </div>
    </header>
  );
}