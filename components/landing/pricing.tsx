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
      "Sanitation buffer blocks",
      "Barber commission splitting",
      "No-show defense fee captures",
      "Priority VIP customer support",
    ],
    cta: "Start 14-day trial",
    highlight: true,
    badge: "Most Popular",
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
      "Comprehensive revenue analytics",
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
    <section id="pricing" className="py-20 sm:py-28 bg-[#F3EFEA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-black uppercase text-amber-700 shadow-clay-sm border border-white">
            <Flame className="h-4 w-4 fill-amber-500 text-amber-500" />
            <span>Pure SaaS Subscriptions • Keep 100% Tips</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1E202B]">
            Transparent monthly pricing.
          </h2>
          <p className="text-base text-neutral-600 font-medium">
            Keep 100% of your service revenue. Pick the tier that matches your salon&apos;s chairs.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[32px] p-7 sm:p-9 flex flex-col justify-between transition-all relative ${
                plan.highlight
                  ? "bg-[#1E202B] text-white shadow-clay-dark scale-105 z-10 border border-white/20"
                  : "bg-white text-[#1E202B] clay-card hover:scale-[1.02]"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-500 text-amber-950 px-4 py-1 rounded-full text-xs font-black tracking-wider uppercase shadow-clay-amber border border-amber-200 flex items-center gap-1.5">
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
                    plan.highlight ? "text-neutral-300" : "text-neutral-500"
                  }`}
                >
                  {plan.description}
                </p>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-black tracking-tight">
                    {plan.price}
                  </span>
                  <span
                    className={`text-xs font-bold ${
                      plan.highlight ? "text-amber-300" : "text-neutral-500"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>

                <div
                  className={`border-t pt-6 space-y-3.5 text-xs font-bold ${
                    plan.highlight ? "border-white/10" : "border-black/5"
                  }`}
                >
                  <span
                    className={`block uppercase text-[10px] font-black tracking-wider ${
                      plan.highlight ? "text-amber-400" : "text-neutral-700"
                    }`}
                  >
                    Included in plan:
                  </span>
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div
                        className={`h-4 w-4 rounded-full flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5 ${
                          plan.highlight ? "bg-amber-400 text-black shadow-clay-sm" : "bg-emerald-400 text-black shadow-clay-sm"
                        }`}
                      >
                        ✓
                      </div>
                      <span
                        className={
                          plan.highlight ? "text-neutral-200" : "text-neutral-700"
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
                    className="w-full text-xs sm:text-sm font-extrabold uppercase h-12 shadow-clay"
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
