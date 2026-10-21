import { AlertTriangle } from "lucide-react";

export function MockDataBanner() {
  return (
    <div className="flex items-center gap-3 rounded-2xl border-2 border-[#0F0F12] bg-amber-400 p-3.5 text-xs text-[#0F0F12] shadow-neo">
      <div className="h-7 w-7 rounded-lg bg-[#0F0F12] text-amber-400 flex items-center justify-center font-black flex-shrink-0">
        <AlertTriangle className="h-4 w-4" />
      </div>
      <div className="flex-1 min-w-0 font-bold">
        <span className="uppercase font-black tracking-wider mr-1.5">[PROTOTYPE ENGINE ACTIVE]:</span>
        <span>Showing simulated multi-tenant data for Crown & Blade Club. Connect Supabase in settings to activate live production database.</span>
      </div>
    </div>
  );
}

export function MockMetricIndicator() {
  return (
    <span className="inline-flex items-center rounded-md px-1.5 py-0.5 text-[9px] font-black tracking-wider uppercase bg-[#0F0F12] text-amber-400 border border-[#0F0F12]">
      SIMULATED
    </span>
  );
}
