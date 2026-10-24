import Link from "next/link";
import { Scissors, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LandingNavbar() {
  return (
    <header className="sticky top-4 z-40 w-full px-4 sm:px-6">
      <div className="max-w-6xl mx-auto rounded-3xl bg-white/85 backdrop-blur-md p-3.5 px-6 clay-card flex items-center justify-between border border-white/90">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500 text-amber-950 flex items-center justify-center font-black shadow-clay-amber border border-amber-200/80 group-hover:scale-105 transition-transform">
            <Scissors className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-tight text-[#1E202B]">
              BarberFlow
            </span>
            <span className="text-[10px] font-bold tracking-wider text-amber-700 uppercase">
              Clay Cloud OS
            </span>
          </div>
        </Link>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-neutral-600">
          <a
            href="#features"
            className="hover:text-amber-600 transition-colors"
          >
            Features
          </a>
          <a
            href="#booking"
            className="hover:text-amber-600 transition-colors"
          >
            Live Booking
          </a>
          <a
            href="#pricing"
            className="hover:text-amber-600 transition-colors"
          >
            Pricing
          </a>
          <Link
            href="/dashboard"
            className="px-3.5 py-1.5 rounded-full bg-[#EBE7E1] text-[#1E202B] font-extrabold shadow-[inset_2px_2px_4px_rgba(166,155,142,0.25),inset_-2px_-2px_4px_rgba(255,255,255,0.9)] hover:bg-[#E3DFD8] transition-colors"
          >
            Dashboard Demo ↗
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <Link href="/login">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex text-xs font-bold">
              Sign In
            </Button>
          </Link>
          <Link href="/signup">
            <Button variant="gold" size="sm" className="text-xs font-extrabold gap-1.5 shadow-clay-amber">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Get started</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
