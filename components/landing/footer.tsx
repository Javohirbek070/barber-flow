import Link from "next/link";
import { Scissors } from "lucide-react";

export function LandingFooter() {
  return (
    <footer className="bg-[#0F0F12] text-white pt-16 pb-12 px-4 sm:px-6 border-t-4 border-[#0F0F12]">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b-2 border-white/10">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-amber-400 text-[#0F0F12] flex items-center justify-center font-black text-xl border-2 border-white shadow-neo">
              <Scissors className="h-6 w-6" />
            </div>
            <div>
              <span className="font-black text-2xl tracking-tighter uppercase block text-white">
                BarberFlow
              </span>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                International Barbershop SaaS
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-black uppercase tracking-wider text-neutral-300">
            <Link href="/dashboard" className="hover:text-amber-400 transition-colors">
              Salon Dashboard Demo
            </Link>
            <Link href="/login" className="hover:text-amber-400 transition-colors">
              Barber Portal
            </Link>
            <Link href="/signup" className="hover:text-amber-400 transition-colors">
              Claim 14-Day Free Trial
            </Link>
          </div>
        </div>

        {/* Large Decorative Wordmark */}
        <div className="overflow-hidden select-none opacity-20">
          <p className="text-[14vw] font-black uppercase tracking-tighter leading-none text-center text-white">
            BARBERFLOW
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-neutral-400 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
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
