import Link from "next/link";
import { Scissors, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LandingNavbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b-2 border-[#0F0F12] bg-[#FAF8F5]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex h-18 items-center justify-between px-4 sm:px-6">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="h-10 w-10 rounded-xl bg-[#0F0F12] text-amber-400 flex items-center justify-center font-black text-base border-2 border-[#0F0F12] shadow-neo-sm group-hover:rotate-6 transition-transform">
              <Scissors className="h-5 w-5" />
            </div>
            <div className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border border-black barber-pole-mini" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-tighter text-[#0F0F12] uppercase leading-none">
              BarberFlow
            </span>
            <span className="text-[10px] font-extrabold tracking-widest text-amber-600 uppercase mt-0.5">
              Barbershop OS
            </span>
          </div>
        </Link>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-black uppercase tracking-wider text-[#0F0F12]">
          <a
            href="#features"
            className="hover:text-amber-600 hover:underline underline-offset-4 transition-colors"
          >
            Features
          </a>
          <a
            href="#booking"
            className="hover:text-amber-600 hover:underline underline-offset-4 transition-colors"
          >
            Live Booking
          </a>
          <a
            href="#pricing"
            className="hover:text-amber-600 hover:underline underline-offset-4 transition-colors"
          >
            Pricing
          </a>
          <a
            href="/dashboard"
            className="px-2.5 py-1 rounded-md bg-amber-100 border border-black text-[#0F0F12] shadow-neo-sm hover:bg-amber-200"
          >
            Dashboard Demo ↗
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button variant="outline" size="sm" className="hidden sm:inline-flex text-xs">
              Sign In
            </Button>
          </Link>
          <Link href="/signup">
            <Button variant="gold" size="sm" className="text-xs sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 mr-1" />
              Get started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
