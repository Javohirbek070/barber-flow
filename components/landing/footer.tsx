import Link from "next/link";
import { Scissors } from "lucide-react";

export function LandingFooter() {
  return (
    <footer className="py-14 px-4 sm:px-6 bg-[#EBE7E1] text-[#1E202B]">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="rounded-[32px] bg-white p-8 clay-card flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-amber-950 flex items-center justify-center font-black text-xl shadow-clay-amber border border-amber-200">
              <Scissors className="h-6 w-6" />
            </div>
            <div>
              <span className="font-black text-xl tracking-tight block text-[#1E202B]">
                BarberFlow
              </span>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                Claymorphic Barbershop SaaS
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-bold uppercase tracking-wider text-neutral-600">
            <Link href="/dashboard" className="hover:text-amber-600 transition-colors">
              Dashboard Demo
            </Link>
            <Link href="/login" className="hover:text-amber-600 transition-colors">
              Barber Portal
            </Link>
            <Link href="/signup" className="hover:text-amber-600 transition-colors">
              14-Day Free Trial
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-neutral-500 px-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-clay-mint" />
            <span>Multi-Tenant Platform Operational Worldwide</span>
          </div>
          <div>
            <span>&copy; {new Date().getFullYear()} BarberFlow Inc. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
