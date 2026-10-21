import Link from "next/link";
import { Flame, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter Chair",
    price: "$29",
    period: "/month",
    description: "Built for independent solo barbers or boutique 2-chair setups.",
    features: [
      "Up to 2 active barbers",
      "Unlimited client bookings",
      "Public booking page & bio link",
      "Instant email notifications",
      "Mobile responsive web app",
      "Standard support",
    ],
    cta: "Start 14-day trial",
    highlight: false,
  },
  {
    name: "Pro Master",
    price: "$59",
    period: "/month",
    description: "The gold standard for established 3 to 6 chair barbershops.",
    features: [
      "Up to 6 active barbers",
      "Automated SMS & WhatsApp reminders",
      "Multi-chair master calendar timeline",
      "Sanitation & blade prep buffer blocks",
      "Barber commission splitting",
      "No-show defense fee captures",
      "Priority VIP customer support",
    ],
    cta: "Start 14-day trial",
    highlight: true,
    badge: "Most Coveted",
  },
  {
    name: "Empire Guild",
    price: "$119",
    period: "/month",
    description: "For high-volume multi-location barbershops and franchised lounges.",
    features: [
      "Unlimited barbers & locations",
      "Multi-tenant API & webhook access",
      "Custom booking domain (book.yoursalon.com)",
      "Comprehensive revenue & occupancy analytics",
      "Exportable payroll & commission reports",
      "Dedicated account manager",
      "99.9% uptime SLA",
    ],
    cta: "Start 14-day trial",
    highlight: false,
  },
];

export function LandingPricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#FAF8F5] border-b-2 border-[#0F0F12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-xl bg-[#0F0F12] text-amber-400 px-3.5 py-1 text-xs font-black uppercase tracking-wider border-2 border-[#0F0F12] shadow-neo-sm">
            <Flame className="h-4 w-4 fill-amber-400" />
            <span>Pure SaaS Subscriptions • Zero Cut On Your Tips</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-[#0F0F12] uppercase leading-[0.98]">
            Flat monthly rates. Keep 100% of your earnings.
          </h2>
          <p className="text-base sm:text-lg font-medium text-neutral-700">
            Never pay per-appointment commission penalties. Transparent monthly tiers with zero hidden booking surcharges.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-7 sm:p-9 flex flex-col justify-between border-4 border-[#0F0F12] transition-all relative ${
                plan.highlight
                  ? "bg-[#0F0F12] text-white shadow-neo-xl scale-105 z-10"
                  : "bg-white text-[#0F0F12] shadow-neo-lg hover:translate-x-[-2px] hover:translate-y-[-2px]"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-[#0F0F12] border-2 border-[#0F0F12] px-4 py-1 rounded-full text-xs font-black tracking-wider uppercase shadow-neo-sm flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>{plan.badge}</span>
                </div>
              )}

              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-xl font-black uppercase tracking-tight">
                    {plan.name}
                  </h3>
                </div>

                <p
                  className={`text-xs font-medium mb-6 ${
                    plan.highlight ? "text-neutral-300" : "text-neutral-600"
                  }`}
                >
                  {plan.description}
                </p>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl sm:text-6xl font-black tracking-tighter">
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm font-bold ${
                      plan.highlight ? "text-amber-400" : "text-neutral-500"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>

                <div
                  className={`border-t-2 pt-6 space-y-3.5 text-xs font-bold ${
                    plan.highlight ? "border-white/20" : "border-[#0F0F12]"
                  }`}
                >
                  <span
                    className={`block uppercase text-[11px] font-black tracking-wider ${
                      plan.highlight ? "text-amber-400" : "text-neutral-800"
                    }`}
                  >
                    What&apos;s Included:
                  </span>
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div
                        className={`h-4 w-4 rounded-full border border-black flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5 ${
                          plan.highlight ? "bg-amber-400 text-black" : "bg-emerald-400 text-black"
                        }`}
                      >
                        ✓
                      </div>
                      <span
                        className={
                          plan.highlight ? "text-neutral-200" : "text-neutral-800"
                        }
                      >
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <Link href="/signup" className="w-full block">
                  <Button
                    variant={plan.highlight ? "gold" : "default"}
                    size="lg"
                    className="w-full text-sm font-black uppercase h-12 shadow-neo"
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
