import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-linear-to-br from-[#111a3a] via-[#0c1633] to-[#0b1023]">

      {/* Subtle radial purple glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 'w-150' 'h-150' bg-purple-700/20 blur-[180px] rounded-full" />
      </div>

      <Navbar />
      <Hero />

    </main>
  );
}