export function TickerMarquee() {
  const items = [
    "★ THE ULTIMATE BARBERSHOP OS",
    "⚡ ZERO NO-SHOW SHIELD",
    "✂ PRECISION CHAIR SCHEDULING",
    "★ 100% SERVICE REVENUE RETENTION",
    "✦ MULTI-BARBER ALLOCATION",
    "🔥 REAL-TIME CASHFLOW RADAR",
    "★ AUTOMATED SMS & WHATSAPP",
    "⚡ MULTI-TENANT ISOLATED DATA",
  ];

  return (
    <div className="w-full overflow-hidden bg-[#0F0F12] py-2.5 text-white border-y-2 border-[#0F0F12]">
      <div className="flex w-max animate-marquee space-x-8 font-black uppercase tracking-wider text-xs sm:text-sm">
        {items.concat(items).map((item, index) => (
          <span key={index} className="flex items-center gap-4 text-amber-400">
            <span>{item}</span>
            <span className="text-white/40">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
