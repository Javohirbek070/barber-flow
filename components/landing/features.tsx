import { Calendar, Users, BarChart3, Sparkles } from "lucide-react";

export function LandingFeatures() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-[#EFEBE5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-20">
        {/* Section Heading */}
        <div className="max-w-2xl text-left space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-black uppercase text-amber-700 shadow-clay-sm border border-white">
            <Sparkles className="h-4 w-4" />
            <span>Tactile Claymorphic Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1E202B] leading-[1.05]">
            Engineered for high-volume barbershops.
          </h2>
          <p className="text-base text-neutral-600 font-medium">
            No rigid, sterile spreadsheets. BarberFlow gives salon owners and barbers tactile, responsive controls for chair turnarounds and commission tracking.
          </p>
        </div>

        {/* Feature 1: Online Booking */}
        <div id="booking" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-amber-300 to-amber-500 text-amber-950 flex items-center justify-center shadow-clay-amber border border-amber-200">
              <Calendar className="h-7 w-7" />
            </div>
            <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-extrabold text-xs uppercase shadow-clay-sm">
              Module 01 • Client Experience
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#1E202B]">
              Frictionless Online Booking
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-medium">
              Transform your Instagram bio, Google Maps listing, and walk-in QR codes into automated booking engines. No mandatory app downloads, no passwords to reset.
            </p>
            <div className="space-y-3 pt-2">
              {[
                "Automated instant SMS and WhatsApp confirmation reminders",
                "Custom sanitation buffer times between back-to-back fades",
                "1-click calendar export directly to Apple, Google & Outlook",
              ].map((feat, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white shadow-clay-sm border border-white">
                  <div className="h-5 w-5 rounded-full bg-emerald-400 text-emerald-950 flex items-center justify-center font-black text-xs mt-0.5 shadow-clay-mint">
                    ✓
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#1E202B]">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-[32px] bg-[#1E202B] p-6 shadow-clay-dark border border-white/10 text-white space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-extrabold text-xs uppercase tracking-wider text-amber-400">Automated SMS Dispatch</span>
                </div>
                <span className="text-[10px] bg-white/10 text-neutral-300 font-mono px-3 py-1 rounded-full">DELIVERED</span>
              </div>
              <div className="rounded-2xl bg-[#14151D] p-4 font-mono text-xs leading-relaxed text-neutral-300 border border-white/5 shadow-inner">
                <p className="text-emerald-400 font-bold mb-1">&gt; OUTGOING CLIENT SMS:</p>
                &ldquo;Crown &amp; Blade Club: Hi Julian, your appointment for The Full BarberFlow Experience with Marcus Vance is confirmed for 11:30 AM today. See you in Chair 1.&rdquo;
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs pt-1">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-[10px] text-neutral-400 font-bold uppercase">Delivery Speed</p>
                  <p className="text-lg font-black text-amber-400">0.8 seconds</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-[10px] text-neutral-400 font-bold uppercase">No-Show Defense</p>
                  <p className="text-lg font-black text-emerald-400">99.4% Verified</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Team Scheduling */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-[32px] bg-[#FAF7F2] p-6 shadow-clay-lg border border-white space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-black/5">
                <span className="font-black text-xs uppercase text-[#1E202B]">Chair Allocation Matrix</span>
                <span className="text-[10px] font-black bg-amber-400 text-amber-950 px-3 py-1 rounded-full shadow-clay-sm">
                  4 Active Chairs
                </span>
              </div>
              {[
                { name: "Marcus Vance", chair: "Chair 1 (Owner)", cuts: "6 cuts booked", pct: "92%", color: "bg-emerald-300" },
                { name: "Liam Torres", chair: "Chair 2 (Fades)", cuts: "7 cuts booked", pct: "100%", color: "bg-amber-300" },
                { name: "David Chen", chair: "Chair 3 (Razor)", cuts: "5 cuts booked", pct: "75%", color: "bg-sky-300" },
                { name: "Samira Patel", chair: "Chair 4 (Precision)", cuts: "4 cuts booked", pct: "65%", color: "bg-purple-300" },
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-2xl bg-white shadow-clay-sm border border-white">
                  <div>
                    <p className="font-extrabold text-xs text-[#1E202B]">{row.name}</p>
                    <p className="text-[10px] font-semibold text-neutral-500">{row.chair} • {row.cuts}</p>
                  </div>
                  <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full text-black shadow-clay-sm ${row.color}`}>
                    {row.pct} Full
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-500 text-white flex items-center justify-center shadow-clay-blue border border-sky-300">
              <Users className="h-7 w-7" />
            </div>
            <div className="inline-block px-3 py-1 rounded-full bg-sky-100 text-sky-900 font-extrabold text-xs uppercase shadow-clay-sm">
              Module 02 • Team Operations
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#1E202B]">
              Multi-Barber Team Roster
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-medium">
              Every barber on your roster gets their own customized schedule dashboard, service duration settings, and private booking links for social media.
            </p>
            <div className="space-y-3 pt-2">
              {[
                "Independent barber login access with locked financial permissions",
                "Instant shift swaps, lunch blockouts, and vacation holds",
                "Dedicated barber bio booking links to promote directly to clients",
              ].map((feat, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white shadow-clay-sm border border-white">
                  <div className="h-5 w-5 rounded-full bg-amber-400 text-amber-950 flex items-center justify-center font-black text-xs mt-0.5 shadow-clay-amber">
                    ★
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#1E202B]">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature 3: Business Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-white flex items-center justify-center shadow-clay-mint border border-emerald-300">
              <BarChart3 className="h-7 w-7" />
            </div>
            <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-extrabold text-xs uppercase shadow-clay-sm">
              Module 03 • Shop Economics
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#1E202B]">
              Live Cashflow &amp; Occupancy
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-medium">
              Never wonder which day is quiet. BarberFlow gives salon owners clear operational metrics: revenue velocity, chair occupancy, repeat customer retention, and net barber payouts.
            </p>
            <div className="space-y-3 pt-2">
              {[
                "Accurate commission splitting without messy paper receipts",
                "Peak hour chair occupancy analysis to optimize staffing schedules",
                "One-click CSV financial exports ready for your accountant",
              ].map((feat, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white shadow-clay-sm border border-white">
                  <div className="h-5 w-5 rounded-full bg-[#1E202B] text-amber-300 flex items-center justify-center font-black text-xs mt-0.5 shadow-clay-dark-sm">
                    $
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#1E202B]">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-[32px] bg-[#FAF7F2] p-6 shadow-clay-lg border border-white space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-black/5">
                <span className="font-black text-xs uppercase text-[#1E202B]">Weekly Salon Performance</span>
                <span className="text-[10px] font-black bg-emerald-400 text-emerald-950 px-3 py-1 rounded-full shadow-clay-sm">
                  LIVE TELEMETRY
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-4 bg-white rounded-2xl shadow-clay-sm border border-white">
                  <p className="text-2xl sm:text-3xl font-black text-[#1E202B]">$3,420</p>
                  <p className="text-[10px] font-extrabold text-neutral-500 uppercase mt-1">This Week</p>
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-clay-sm border border-white">
                  <p className="text-2xl sm:text-3xl font-black text-amber-600">84%</p>
                  <p className="text-[10px] font-extrabold text-neutral-500 uppercase mt-1">Occupancy</p>
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-clay-sm border border-white">
                  <p className="text-2xl sm:text-3xl font-black text-emerald-600">76%</p>
                  <p className="text-[10px] font-extrabold text-neutral-500 uppercase mt-1">Regulars</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
