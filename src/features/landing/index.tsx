import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

export function Landing() {
  return (
    <div className="min-h-screen bg-[#11100F] font-sans selection:bg-[#D97757]/30 selection:text-white pb-32">
      <Navbar />
      <Hero />

      {/* Scrollable Content Placeholder */}
      <section className="max-w-7xl mx-auto px-6 mt-32 text-center text-[#E8E6E3]/60">
        <p className="text-xl font-medium mb-4">More content below</p>
        <div className="flex flex-col items-center justify-center space-y-2 opacity-50">
          <div className="w-1 h-3 rounded-full bg-white/20"></div>
          <div className="w-1 h-3 rounded-full bg-white/20"></div>
          <div className="w-1 h-3 rounded-full bg-white/20"></div>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-48 rounded-2xl border border-white/5 bg-[#181715] flex items-center justify-center"
            >
              <span className="text-sm">Feature {i} Placeholder</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
