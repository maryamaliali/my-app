import React from "react";
import Image from "next/image";
import Link from "next/link";

const images: string[] = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
  "/img6.jpg",
  "/img7.jpg",
  "/img8.jpg",
  "/img9.jpg",
  "/img10.jpg",
  "/img11.jpg",
  "/img12.jpg",
];

const Hero: React.FC = () => {
  return (
    <section className="hero-bg relative max-w-7xl mx-auto px-6 pt-36 pb-28 overflow-hidden">

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <div className="z-10 text-center lg:text-left">

          <p className="text-pink-400 tracking-[0.35em] text-xs sm:text-sm mb-8">
            MATCH WITH PURPOSE
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-semibold leading-[1.1] text-white">
            Find meaningful <br />
            connections with <br />
            intelligent{" "}

            {/* Animated Word */}
            <span className="relative inline-block px-2">
              <span className="relative z-10">
                matchmaking
              </span>

              <svg
                className="absolute -left-6 -top-6 w-[120%] h-[150%] pointer-events-none"
                viewBox="0 0 300 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M15 70 Q150 10 285 70 Q150 115 15 70"
                  fill="transparent"
                  stroke="#facc15"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animate-draw"
                />
              </svg>
            </span>{" "}
            built for today.
          </h1>

          <p className="mt-8 text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            MatchHalf blends matchmaking expertise with modern tools.
            We pair human intuition with intelligent technology so you can meet
            compatible partners without the noise.
          </p>

          <Link
            href="/tryfree"
            className="inline-flex items-center gap-3 mt-12 
                       px-8 py-4 
                       rounded-full 
                       text-white font-medium
                       text-sm sm:text-base
                       bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500
                       shadow-[0_12px_35px_rgba(99,102,241,0.45)]
                       hover:scale-105
                       hover:shadow-[0_18px_45px_rgba(99,102,241,0.65)]
                       transition-all duration-300"
          >
            FIND A MATCH NOW
            <span className="text-lg">→</span>
          </Link>
        </div>

        {/* ================= RIGHT IMAGE GRID ================= */}
        <div className="relative mt-16 lg:mt-0">

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-5">

            {images.map((src, index) => {

              const floatClass =
                index % 3 === 0
                  ? "float-slow"
                  : index % 3 === 1
                  ? "float-medium"
                  : "float-fast";

              const delayClass = `delay-${(index % 8) + 1}`;

              return (
                <div
                  key={index}
                  className={`
                    relative 
                    aspect-square 
                    rounded-2xl 
                    overflow-hidden 
                    fade-up 
                    ${delayClass}
                    ${floatClass}
                    hover:scale-105 
                    transition-all 
                    duration-500
                  `}
                >
                  <Image
                    src={src}
                    alt={`Match image ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 hover:scale-110"
                    priority={index < 4}
                  />
                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;