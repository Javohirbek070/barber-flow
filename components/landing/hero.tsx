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
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Clay Pill Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-black uppercase text-amber-700 shadow-clay-sm border border-white">
                <Zap className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                <span>Next-Gen Barbershop OS</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-100 to-amber-200 text-amber-900 px-4 py-1.5 text-xs font-black uppercase shadow-clay-sm border border-white">
                ★ Zero No-Show Shield
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/70 text-neutral-600 px-3.5 py-1.5 text-xs font-bold uppercase shadow-clay-sm">
                EST. 2026
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#1E202B] leading-[1.02]">
              Your barbershop.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-orange-500">
                Better booked.
              </span>
            </h1>

            <p className="text-base sm:text-lg font-medium text-neutral-600 leading-relaxed max-w-xl">
              BarberFlow gives salon owners, master barbers, and clients a tactile, effortless appointment booking engine. Eliminate double-bookings, automate SMS reminders, and keep every chair filled.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              <Link href="/signup">
                <Button variant="gold" size="lg" className="w-full sm:w-auto text-sm uppercase font-extrabold gap-2 shadow-clay-amber">
                  <span>Get started</span>
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <a href="#features">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto text-sm uppercase font-extrabold shadow-clay"
                >
                  Explore features
                </Button>
              </a>
            </div>

            {/* Proof Badges Grid */}
            <div className="pt-4 grid grid-cols-3 gap-3 text-xs font-extrabold uppercase text-[#1E202B]">
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-white shadow-clay-sm border border-white">
                <Star className="h-4 w-4 text-amber-500 fill-amber-500 flex-shrink-0" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-white shadow-clay-sm border border-white">
                <Scissors className="h-4 w-4 text-neutral-700 flex-shrink-0" />
                <span>No credit card</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-white shadow-clay-sm border border-white">
                <ShieldCheck className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                <span>Isolated data</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Clay Appointment Ticket Widget */}
          <div className="lg:col-span-5">
            <div className="rounded-[36px] bg-[#FAF7F2] p-6 shadow-clay-lg border border-white/95 space-y-4">
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-3 border-b border-black/5">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-amber-950 flex items-center justify-center font-black text-sm shadow-clay-amber border border-amber-200">
                    CB
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="text-sm font-black text-[#1E202B]">Crown &amp; Blade Club</p>
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <p className="text-[11px] font-semibold text-neutral-500">Soho, NYC • Master Chair Schedule</p>
                  </div>
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider bg-white text-neutral-700 px-3 py-1 rounded-full shadow-clay-sm border border-white">
                  PASS #8492
                </span>
              </div>

              {/* 1. Choose Service */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#1E202B]">
                    1. Choose Service
                  </span>
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                    Top Rated
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    { name: "The Full Experience", price: "$85", duration: "75m" },
                    { name: "Signature Haircut", price: "$45", duration: "45m" },
                    { name: "Skin Fade & Edge", price: "$50", duration: "45m" },
                    { name: "Hot Towel Shave", price: "$45", duration: "40m" },
                  ].map((srv) => (
                    <button
                      key={srv.name}
                      onClick={() => setSelectedService(srv.name)}
                      className={`p-3 rounded-2xl text-left transition-all clay-button-press ${
                        selectedService === srv.name
                          ? "bg-[#1E202B] text-white shadow-clay-dark"
                          : "bg-white text-[#1E202B] shadow-clay-sm hover:shadow-clay border border-white"
                      }`}
                    >
                      <div className="font-extrabold text-xs leading-tight">{srv.name}</div>
                      <div className={`text-[10px] font-bold mt-1 ${selectedService === srv.name ? "text-amber-300" : "text-neutral-500"}`}>
                        {srv.duration} • {srv.price}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Select Barber */}
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-[#1E202B] block mb-2">
                  2. Select Master Barber
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { name: "Marcus Vance", chair: "Chair 1 (Owner)" },
                    { name: "Liam Torres", chair: "Chair 2 (Fades)" },
                  ].map((b) => (
                    <button
                      key={b.name}
                      onClick={() => setSelectedBarber(b.name)}
                      className={`p-2.5 rounded-2xl text-left text-xs transition-all clay-button-press ${
                        selectedBarber === b.name
                          ? "bg-gradient-to-r from-amber-300 to-amber-400 text-amber-950 font-black shadow-clay-amber border border-amber-200"
                          : "bg-white text-[#1E202B] font-bold shadow-clay-sm hover:shadow-clay border border-white"
                      }`}
                    >
                      <div className="truncate">{b.name}</div>
                      <div className="text-[10px] text-neutral-600 truncate">{b.chair}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Available Slots */}
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-[#1E202B] block mb-2">
                  3. Available Slots (Today)
                </span>
                <div className="grid grid-cols-3 gap-1.5 text-xs">
                  {["10:00 AM", "11:30 AM", "01:00 PM", "02:15 PM", "03:45 PM", "05:00 PM"].map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className={`py-2 px-1 rounded-xl text-center text-xs font-extrabold transition-all clay-button-press ${
                        selectedTime === t
                          ? "bg-[#1E202B] text-amber-400 shadow-clay-dark"
                          : "bg-[#EBE7E1] text-neutral-700 shadow-[inset_2px_2px_4px_rgba(166,155,142,0.25),inset_-2px_-2px_4px_rgba(255,255,255,0.9)] hover:bg-white"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Reservation Summary */}
              <div className="pt-3 border-t border-black/5 flex items-center justify-between text-xs">
                <div>
                  <span className="text-neutral-500 block text-[10px] font-bold uppercase">Selected:</span>
                  <span className="font-extrabold text-[#1E202B] text-xs">
                    {selectedService} • {selectedTime}
                  </span>
                  <p className="text-[10px] font-bold text-amber-700">with {selectedBarber}</p>
                </div>
                <Link href="/dashboard">
                  <Button variant="default" size="sm" className="h-9 text-xs uppercase font-extrabold shadow-clay-dark">
                    Launch Demo ↗
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
