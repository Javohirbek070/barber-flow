export function TickerMarquee() {
  const items = [
    "★ SMART BARBERSHOP OS",
    "⚡ ZERO NO-SHOW SHIELD",
    "✂ TACTILE CHAIR SCHEDULING",
    "★ 100% REVENUE RETENTION",
    "✦ MULTI-CHAIR ALLOCATION",
    "🔥 LIVE FINANCIAL RADAR",
    "★ INSTANT CLIENT REMINDERS",
    "⚡ MULTI-TENANT ISOLATED DATA",
  ];

  return (
    <div className="w-full overflow-hidden py-3 text-[#1E202B]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-2xl bg-[#EBE7E1] py-2.5 px-4 shadow-[inset_3px_3px_6px_rgba(166,155,142,0.25),inset_-3px_-3px_6px_rgba(255,255,255,0.9)] border border-white/60 overflow-hidden">
          <div className="flex w-max animate-marquee space-x-8 font-black uppercase tracking-wider text-xs">
            {items.concat(items).map((item, index) => (
              <span key={index} className="flex items-center gap-4 text-neutral-800">
                <span className="bg-white/80 px-2.5 py-0.5 rounded-full shadow-clay-sm text-amber-700 font-extrabold">{item}</span>
                <span className="text-neutral-400">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
