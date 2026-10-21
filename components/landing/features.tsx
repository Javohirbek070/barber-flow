import { Calendar, Users, BarChart3, Sparkles } from "lucide-react";

export function LandingFeatures() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-[#FFFFFF] border-b-2 border-[#0F0F12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-24">
        {/* Section Heading with Maximalist Badges */}
        <div className="max-w-3xl text-left space-y-4">
          <div className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-3.5 py-1 text-xs font-black uppercase text-[#0F0F12] border-2 border-[#0F0F12] shadow-neo-sm">
            <Sparkles className="h-4 w-4" />
            <span>Tactile Barbershop Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0F0F12] uppercase leading-[0.98]">
            Crafted for high-volume shops that don&apos;t tolerate downtime.
          </h2>
          <p className="text-base sm:text-lg font-medium text-neutral-700">
            Generic calendar software fails in real barbershops. BarberFlow is built with relentless focus on chair velocity, master commission calculations, and flawless walk-in queues.
          </p>
        </div>

        {/* Feature 1: Online Booking */}
        <div id="booking" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="h-14 w-14 rounded-2xl bg-[#0F0F12] border-2 border-[#0F0F12] flex items-center justify-center text-amber-400 shadow-neo">
              <Calendar className="h-7 w-7" />
            </div>
            <div className="inline-block px-2.5 py-0.5 rounded bg-emerald-100 border border-black font-black text-xs text-emerald-900 uppercase">
              Module 01 • Client Experience
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#0F0F12] uppercase">
              Zero-Friction Online Booking
            </h3>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-medium">
              Turn your Instagram bio, Google Business card, and walk-in window QR codes into non-stop appointment machines. No mandatory app downloads, no passwords to forget.
            </p>
            <div className="space-y-3 pt-2">
              {[
                "Automated instant SMS & WhatsApp confirmations that eradicate no-shows",
                "Custom sanitation buffer times between back-to-back skin fades",
                "1-click calendar sync directly to Apple Calendar, Google & Outlook",
              ].map((feat, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF8F5] border-2 border-[#0F0F12] shadow-neo-sm">
                  <div className="h-5 w-5 rounded-full bg-emerald-500 border border-black flex items-center justify-center text-black font-black text-xs mt-0.5">
                    ✓
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#0F0F12]">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl border-4 border-[#0F0F12] bg-[#0F0F12] p-4 shadow-neo-xl text-white">
              <div className="rounded-2xl border-2 border-white/20 bg-[#18181F] p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-emerald-400 animate-ping" />
                    <span className="font-black text-xs uppercase tracking-wider text-amber-400">Live Client Dispatch</span>
                  </div>
                  <span className="text-[10px] bg-white/10 text-white font-mono px-2 py-0.5 rounded">STATUS: DISPATCHED</span>
                </div>
                <div className="rounded-xl bg-black/60 p-4 border border-white/10 font-mono text-xs leading-relaxed text-neutral-300">
                  <p className="text-emerald-400 font-bold mb-1">&gt; OUTGOING SMS DISPATCH:</p>
                  &ldquo;Crown & Blade Barbershop: Your appointment for The Full BarberFlow Experience with Marcus Vance is confirmed for 11:30 AM today. See you in Chair 1.&rdquo;
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs pt-1">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-[10px] text-neutral-400 font-bold uppercase">Delivery Speed</p>
                    <p className="text-base font-black text-amber-400">0.8 seconds</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-[10px] text-neutral-400 font-bold uppercase">No-Show Defense</p>
                    <p className="text-base font-black text-emerald-400">99.4% Verified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Team Scheduling */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-3xl border-4 border-[#0F0F12] bg-amber-400 p-4 shadow-neo-xl">
              <div className="rounded-2xl border-2 border-[#0F0F12] bg-white p-5 space-y-3">
                <div className="flex justify-between items-center pb-2 border-b-2 border-[#0F0F12]">
                  <span className="font-black text-xs uppercase text-[#0F0F12]">Chair Allocation Matrix</span>
                  <span className="text-[10px] font-black bg-[#0F0F12] text-amber-400 px-2 py-0.5 rounded">
                    4 Master Chairs
                  </span>
                </div>
                {[
                  { name: "Marcus Vance", chair: "Chair 1 (Master)", cuts: "6 Cuts Booked", pct: "92%", color: "bg-emerald-400" },
                  { name: "Liam Torres", chair: "Chair 2 (Fades)", cuts: "7 Cuts Booked", pct: "100%", color: "bg-amber-400" },
                  { name: "David Chen", chair: "Chair 3 (Razor)", cuts: "5 Cuts Booked", pct: "75%", color: "bg-sky-400" },
                  { name: "Samira Patel", chair: "Chair 4 (Precision)", cuts: "4 Cuts Booked", pct: "65%", color: "bg-purple-400" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-[#FAF8F5] border-2 border-[#0F0F12] shadow-neo-sm">
                    <div>
                      <p className="font-black text-xs text-[#0F0F12]">{row.name}</p>
                      <p className="text-[10px] font-bold text-neutral-500">{row.chair} • {row.cuts}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded border border-black ${row.color}`}>
                        {row.pct} Full
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
            <div className="h-14 w-14 rounded-2xl bg-[#0F0F12] border-2 border-[#0F0F12] flex items-center justify-center text-amber-400 shadow-neo">
              <Users className="h-7 w-7" />
            </div>
            <div className="inline-block px-2.5 py-0.5 rounded bg-amber-100 border border-black font-black text-xs text-amber-900 uppercase">
              Module 02 • Team Operations
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#0F0F12] uppercase">
              Master Multi-Barber Roster
            </h3>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-medium">
              Every barber on your roster gets their own customized schedule dashboard, personalized service commission percentages, and private bio links for client direct-booking.
            </p>
            <div className="space-y-3 pt-2">
              {[
                "Independent barber login access with locked financial permissions",
                "Instant shift swaps, lunch blockouts, and vacation locks",
                "Separate client bio links for each barber to promote on social media",
              ].map((feat, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF8F5] border-2 border-[#0F0F12] shadow-neo-sm">
                  <div className="h-5 w-5 rounded-full bg-amber-400 border border-black flex items-center justify-center text-black font-black text-xs mt-0.5">
                    ★
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#0F0F12]">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature 3: Business Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="h-14 w-14 rounded-2xl bg-[#0F0F12] border-2 border-[#0F0F12] flex items-center justify-center text-amber-400 shadow-neo">
              <BarChart3 className="h-7 w-7" />
            </div>
            <div className="inline-block px-2.5 py-0.5 rounded bg-sky-100 border border-black font-black text-xs text-sky-900 uppercase">
              Module 03 • Shop Economics
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#0F0F12] uppercase">
              Live Cashflow & Chair Radar
            </h3>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-medium">
              Never wonder which day is dead. BarberFlow reveals your true chair occupancy, weekly gross revenue velocity, repeat customer retention rates, and net barber payouts.
            </p>
            <div className="space-y-3 pt-2">
              {[
                "Accurate commission splitting without messy paper receipts",
                "Peak hour chair occupancy analysis to optimize staffing schedules",
                "One-click CSV financial exports ready for your accountant",
              ].map((feat, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF8F5] border-2 border-[#0F0F12] shadow-neo-sm">
                  <div className="h-5 w-5 rounded-full bg-[#0F0F12] border border-black flex items-center justify-center text-amber-400 font-black text-xs mt-0.5">
                    $
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#0F0F12]">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl border-4 border-[#0F0F12] bg-[#FAF8F5] p-5 shadow-neo-xl space-y-4">
              <div className="flex justify-between items-center pb-3 border-b-2 border-[#0F0F12]">
                <span className="font-black text-xs uppercase text-[#0F0F12]">Crown & Blade Financial Terminal</span>
                <span className="text-[10px] font-black bg-emerald-400 text-black px-2 py-0.5 rounded border border-black">
                  AUDITED
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-4 bg-white rounded-2xl border-2 border-[#0F0F12] shadow-neo-sm">
                  <p className="text-2xl sm:text-3xl font-black text-[#0F0F12]">$3,420</p>
                  <p className="text-[10px] font-black text-neutral-500 uppercase mt-1">This Week Gross</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border-2 border-[#0F0F12] shadow-neo-sm">
                  <p className="text-2xl sm:text-3xl font-black text-amber-500">84%</p>
                  <p className="text-[10px] font-black text-neutral-500 uppercase mt-1">Chair Occupancy</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border-2 border-[#0F0F12] shadow-neo-sm">
                  <p className="text-2xl sm:text-3xl font-black text-emerald-600">76%</p>
                  <p className="text-[10px] font-black text-neutral-500 uppercase mt-1">Loyal Regulars</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
