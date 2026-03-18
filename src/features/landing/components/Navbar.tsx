import { ChevronDown, Menu, Sparkles } from "lucide-react";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 fixed top-0 left-0 right-0 z-50 bg-[#11100F]">
      <div className="flex items-center space-x-2">
        <Sparkles className="w-6 h-6 text-[#D97757]" />
        <span className="text-xl font-medium tracking-wide text-[#E8E6E3] font-serif">Claude</span>
      </div>

      <div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-[#A6A29C]">
        {[
          "Meet Claude",
          "Platform",
          "Solutions",
          "Pricing",
          "Resources",
        ].map((item) => (
          <button key={item} className="flex items-center space-x-1 hover:text-[#E8E6E3] transition-colors">
            <span>{item}</span>
            <ChevronDown className="w-4 h-4 opacity-70" />
          </button>
        ))}
      </div>

      <div className="flex items-center space-x-4">
        <button className="hidden sm:block px-4 py-2 text-sm font-medium text-[#E8E6E3] border border-white/15 rounded-full hover:bg-white/5 transition-colors">
          Contact sales
        </button>
        <button className="hidden sm:block px-4 py-2 text-sm font-medium text-[#11100F] bg-[#E8E6E3] rounded-full hover:bg-white transition-colors">
          Try Claude
        </button>
        <button className="lg:hidden p-2 text-[#E8E6E3]">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
