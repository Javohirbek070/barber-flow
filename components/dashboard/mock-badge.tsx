import { Info } from "lucide-react";

export function MockDataBanner() {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/90 p-3.5 text-xs text-[#1E202B] clay-card border border-white">
      <div className="h-7 w-7 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 text-amber-950 flex items-center justify-center font-black flex-shrink-0 shadow-clay-amber">
        <Info className="h-4 w-4" />
      </div>
      <div className="flex-1 min-w-0 font-medium">
        <span className="font-extrabold uppercase tracking-wider text-amber-800 mr-1.5">[Prototype Mode]:</span>
        <span>Showing simulated multi-tenant data for Crown &amp; Blade Club. Connect Supabase in settings to activate live production database.</span>
      </div>
    </div>
  );
}

export function MockMetricIndicator() {
  return (
    <span className="inline-flex items-center rounded-full px-2 py-0.5 text-[9px] font-black tracking-wider uppercase bg-[#EBE7E1] text-neutral-600 shadow-inner">
      SIMULATED
    </span>
  );
}
