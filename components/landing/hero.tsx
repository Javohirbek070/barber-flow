"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Scissors, Star, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LandingHero() {
  const [selectedService, setSelectedService] = React.useState("The Full Experience");
  const [selectedBarber, setSelectedBarber] = React.useState("Marcus Vance");
  const [selectedTime, setSelectedTime] = React.useState("11:30 AM");

  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 bg-[#FAF8F5] border-b-2 border-[#0F0F12]">
      {/* Decorative barber pole side stripe */}
      <div className="absolute top-0 left-0 bottom-0 w-3 barber-pole-stripe border-r-2 border-[#0F0F12] hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:pl-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Sticker Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0F0F12] text-amber-400 px-3.5 py-1 text-xs font-black uppercase tracking-wider border-2 border-[#0F0F12] shadow-neo-sm">
                <Zap className="h-3.5 w-3.5 fill-amber-400" />
                <span>Next-Gen Barbershop OS</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-400 text-[#0F0F12] px-3 py-1 text-xs font-black uppercase tracking-wider border-2 border-[#0F0F12] shadow-neo-sm">
                ★ 100% Zero No-Show Shield
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white text-[#0F0F12] px-3 py-1 text-xs font-black uppercase tracking-wider border-2 border-[#0F0F12] shadow-neo-sm">
                EST. 2026
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#0F0F12] uppercase leading-[0.95]">
              Your barbershop.
              <br />
              <span className="text-amber-500 underline decoration-[#0F0F12] decoration-4 underline-offset-8">
                Better booked.
              </span>
            </h1>

            <p className="text-base sm:text-xl font-medium text-neutral-800 leading-relaxed max-w-xl">
              The high-octane SaaS appointment and chair management platform engineered for sovereign barbers, premier tattoo studios, and multi-chair parlors worldwide.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link href="/signup">
                <Button variant="gold" size="lg" className="w-full sm:w-auto text-base font-black uppercase gap-2 shadow-neo-lg">
                  <span>Get started</span>
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <a href="#features">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-base font-black uppercase shadow-neo-lg"
                >
                  Explore features
                </Button>
              </a>
            </div>

            {/* Proof Badges Grid */}
            <div className="pt-6 border-t-2 border-[#0F0F12] grid grid-cols-3 gap-3 text-xs font-extrabold uppercase text-[#0F0F12]">
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white border-2 border-[#0F0F12] shadow-neo-sm">
                <Star className="h-4 w-4 text-amber-500 fill-amber-500 flex-shrink-0" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white border-2 border-[#0F0F12] shadow-neo-sm">
                <Scissors className="h-4 w-4 text-[#0F0F12] flex-shrink-0" />
                <span>No credit card</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white border-2 border-[#0F0F12] shadow-neo-sm">
                <ShieldCheck className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                <span>Isolated data</span>
              </div>
            </div>
          </div>

          {/* Right Column: Maximalist Physical-Style Barber Ticket Widget */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border-4 border-[#0F0F12] bg-amber-400 p-3 shadow-neo-xl">
              {/* Ticket Content */}
              <div className="rounded-2xl border-2 border-[#0F0F12] bg-[#FAF8F5] p-5 space-y-4">
                {/* Header Ticket Stamp */}
                <div className="flex items-center justify-between border-b-2 border-dashed border-[#0F0F12] pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="h-10 w-10 rounded-xl bg-[#0F0F12] text-amber-400 flex items-center justify-center font-black text-sm border-2 border-[#0F0F12]">
                      CB
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <p className="text-xs font-black uppercase text-[#0F0F12]">Crown & Blade Club</p>
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      </div>
                      <p className="text-[10px] font-bold text-neutral-500">Soho, NYC • Master Chair Schedule</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-[#0F0F12] text-amber-400 border border-[#0F0F12] px-2.5 py-1 rounded-md shadow-neo-sm">
                    PASS #8492
                  </span>
                </div>

                {/* 1. Select Service */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#0F0F12]">
                      1. Choose Grooming Service
                    </span>
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded border border-amber-300">
                      Top Rated
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      { name: "The Full Experience", price: "$85", duration: "75m", popular: true },
                      { name: "Signature Haircut", price: "$45", duration: "45m" },
                      { name: "Skin Fade & Edge", price: "$50", duration: "45m" },
                      { name: "Hot Towel Shave", price: "$45", duration: "40m" },
                    ].map((srv) => (
                      <button
                        key={srv.name}
                        onClick={() => setSelectedService(srv.name)}
                        className={`p-2.5 rounded-xl text-left border-2 transition-all ${
                          selectedService === srv.name
                            ? "border-[#0F0F12] bg-[#0F0F12] text-white shadow-neo-sm"
                            : "border-[#0F0F12] bg-white text-[#0F0F12] hover:bg-amber-50"
                        }`}
                      >
                        <div className="font-black text-xs leading-tight">{srv.name}</div>
                        <div className={`text-[10px] font-bold mt-1 ${selectedService === srv.name ? "text-amber-400" : "text-neutral-500"}`}>
                          {srv.duration} • {srv.price}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Select Barber */}
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#0F0F12] block mb-2">
                    2. Select Master Barber
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { name: "Marcus Vance", chair: "Chair 1 (Owner)" },
                      { name: "Liam Torres", chair: "Chair 2 (Fade Specialist)" },
                    ].map((b) => (
                      <button
                        key={b.name}
                        onClick={() => setSelectedBarber(b.name)}
                        className={`p-2 rounded-xl text-left border-2 text-xs transition-all ${
                          selectedBarber === b.name
                            ? "border-[#0F0F12] bg-amber-400 text-[#0F0F12] font-black shadow-neo-sm"
                            : "border-[#0F0F12] bg-white text-[#0F0F12] font-bold hover:bg-neutral-50"
                        }`}
                      >
                        <div className="truncate">{b.name}</div>
                        <div className="text-[9px] text-neutral-600 truncate">{b.chair}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Time Slots */}
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#0F0F12] block mb-2">
                    3. Today&apos;s Immediate Slots
                  </span>
                  <div className="grid grid-cols-3 gap-1.5 text-xs">
                    {["10:00 AM", "11:30 AM", "01:00 PM", "02:15 PM", "03:45 PM", "05:00 PM"].map((t) => (
                      <button
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={`py-2 px-1 rounded-xl text-center text-xs font-black border-2 transition-all ${
                          selectedTime === t
                            ? "bg-[#0F0F12] text-amber-400 border-[#0F0F12] shadow-neo-sm scale-105"
                            : "bg-white border-[#0F0F12] text-[#0F0F12] hover:bg-amber-100"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Reservation Summary */}
                <div className="pt-3 border-t-2 border-dashed border-[#0F0F12] flex items-center justify-between text-xs">
                  <div>
                    <span className="text-neutral-500 block text-[10px] font-extrabold uppercase">Confirmed Slot:</span>
                    <span className="font-black text-[#0F0F12] text-xs">
                      {selectedService} • {selectedTime}
                    </span>
                    <p className="text-[10px] font-bold text-amber-700">with {selectedBarber}</p>
                  </div>
                  <Link href="/dashboard">
                    <Button variant="default" size="sm" className="h-9 text-xs uppercase font-black">
                      Launch Demo ↗
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
