"use client";

import * as React from "react";
import { Store, Shield, Check, Globe, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { mockSalon } from "@/lib/mock-data";

export default function SettingsPage() {
  const [salonName, setSalonName] = React.useState(mockSalon.name);
  const [phone, setPhone] = React.useState(mockSalon.phone);
  const [email, setEmail] = React.useState(mockSalon.email);
  const [address, setAddress] = React.useState(mockSalon.address);
  const [city, setCity] = React.useState(mockSalon.city);
  const [timezone, setTimezone] = React.useState(mockSalon.timezone);
  const [currency, setCurrency] = React.useState(mockSalon.currency);
  const [savedFeedback, setSavedFeedback] = React.useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedFeedback(true);
    setTimeout(() => setSavedFeedback(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="pb-2">
        <div className="flex items-center gap-2.5">
          <h1 className="text-2xl font-extrabold tracking-tight text-stone-900">
            Salon Configuration
          </h1>
          <span className="text-[10px] font-bold uppercase bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 px-3 py-1 rounded-full shadow-clay-amber">
            PRO TIER
          </span>
        </div>
        <p className="text-xs font-medium text-stone-500 mt-1">
          Shop credentials, public booking link slug, timezone synchronization, and tenant isolation keys.
        </p>
      </div>

      {savedFeedback && (
        <div className="flex items-center gap-3 rounded-2xl bg-emerald-100/90 text-emerald-900 p-4 text-xs font-bold shadow-clay-inset">
          <Check className="h-5 w-5 text-emerald-700 stroke-[3]" />
          <span>Salon configuration saved successfully.</span>
        </div>
      )}

      {/* Business Details Form */}
      <form onSubmit={handleSave} className="space-y-6">
        <Card>
          <CardHeader className="border-b border-stone-200/60 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-stone-950 flex items-center justify-center shadow-clay-amber">
                <Store className="h-4 w-4 stroke-[2.5]" />
              </div>
              <div>
                <CardTitle className="text-base font-bold text-stone-900">Shop Profile &amp; Branding</CardTitle>
                <CardDescription className="text-xs text-stone-500">
                  Basic information visible to your clients during online booking.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Barbershop Name
                </label>
                <Input
                  value={salonName}
                  onChange={(e) => setSalonName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Public Booking Slug
                </label>
                <div className="flex items-center">
                  <span className="inline-flex h-11 items-center px-3.5 rounded-l-2xl bg-[#EBE5DE] text-xs font-semibold text-stone-600 shadow-clay-inset border-r border-stone-300">
                    barberflow.io/
                  </span>
                  <input
                    readOnly
                    value={mockSalon.slug}
                    className="flex-1 h-11 rounded-r-2xl bg-[#EFECE6] border-0 px-3 text-xs font-bold text-stone-500 shadow-clay-inset focus:outline-none cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Contact Phone
                </label>
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Contact Email
                </label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Street Address
                </label>
                <Input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  City &amp; Region
                </label>
                <Input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="justify-end border-t border-stone-200/60 pt-4">
            <Button variant="gold" type="submit" size="sm" className="font-bold">
              Save Profile Changes
            </Button>
          </CardFooter>
        </Card>

        {/* Localization & Currency */}
        <Card>
          <CardHeader className="border-b border-stone-200/60 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-stone-950 flex items-center justify-center shadow-clay-amber">
                <Globe className="h-4 w-4 stroke-[2.5]" />
              </div>
              <div>
                <CardTitle className="text-base font-bold text-stone-900">Localization &amp; Currency</CardTitle>
                <CardDescription className="text-xs text-stone-500">
                  Timezone scheduling synchronization and display currency formatting.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                Shop Timezone
              </label>
              <select
                value={timezone}
                onChange={(e) => setTimezone(e.target.value)}
                className="w-full h-11 rounded-2xl bg-[#EFECE6] border border-white/60 px-3 text-xs font-medium text-stone-800 shadow-[inset_2px_2px_5px_rgba(166,155,142,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.85)] focus:outline-none"
              >
                <option value="America/New_York">Eastern Time (US - New York)</option>
                <option value="America/Chicago">Central Time (US - Chicago)</option>
                <option value="America/Los_Angeles">Pacific Time (US - Los Angeles)</option>
                <option value="Europe/London">Greenwich Mean Time (UK - London)</option>
                <option value="Europe/Paris">Central European Time (Paris, Berlin)</option>
                <option value="Asia/Dubai">Gulf Standard Time (Dubai)</option>
                <option value="Asia/Tokyo">Japan Standard Time (Tokyo)</option>
                <option value="Australia/Sydney">AEST (Sydney)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                Billing &amp; Menu Currency
              </label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full h-11 rounded-2xl bg-[#EFECE6] border border-white/60 px-3 text-xs font-medium text-stone-800 shadow-[inset_2px_2px_5px_rgba(166,155,142,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.85)] focus:outline-none"
              >
                <option value="USD">USD ($) — US Dollar</option>
                <option value="EUR">EUR (€) — Euro</option>
                <option value="GBP">GBP (£) — British Pound</option>
                <option value="CAD">CAD ($) — Canadian Dollar</option>
                <option value="AUD">AUD ($) — Australian Dollar</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Multi-Tenancy & Data Architecture Card */}
        <div className="rounded-3xl clay-card-dark p-6 space-y-4">
          <div className="flex items-center gap-3 pb-4 border-b border-white/10">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-stone-950 flex items-center justify-center font-bold shadow-clay-amber">
              <Database className="h-5 w-5 stroke-[2.5]" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-stone-100">Multi-Tenancy Isolation Protocol</h3>
              <p className="text-xs text-stone-400">Cryptographic tenant boundary for Crown &amp; Blade Club.</p>
            </div>
          </div>
          <div className="space-y-3 text-xs font-medium pt-2">
            <div className="rounded-2xl bg-black/40 p-4 border border-white/10 space-y-2.5 shadow-clay-inset">
              <div className="flex justify-between items-center">
                <span className="text-stone-400 uppercase text-[10px] font-bold">Tenant Partition (`salon_id`):</span>
                <code className="bg-amber-400 text-stone-950 px-3 py-1 rounded-full font-mono text-[11px] font-extrabold shadow-clay-amber">
                  {mockSalon.id}
                </code>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-400 uppercase text-[10px] font-bold">Active Subscription:</span>
                <span className="font-bold text-emerald-400 uppercase text-[10px] bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-500/40">
                  {mockSalon.tier} Plan (Active)
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-400 uppercase text-[10px] font-bold">Supabase RLS Policy:</span>
                <span className="text-amber-400 font-bold">
                  Strict Row Level Security Active
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-stone-400 pt-2 text-xs">
              <Shield className="h-4 w-4 mt-0.5 text-amber-400 flex-shrink-0" />
              <span>
                All bookings, financial totals, and customer phone numbers are isolated by this <code>salon_id</code>.
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
