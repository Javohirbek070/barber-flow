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
      <div className="pb-4 border-b-2 border-[#0F0F12]">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-black uppercase tracking-tight text-[#0F0F12]">
            Salon Configuration
          </h1>
          <span className="text-[10px] font-black uppercase bg-[#0F0F12] text-amber-400 px-2 py-0.5 rounded shadow-neo-sm">
            PRO TIER
          </span>
        </div>
        <p className="text-xs font-bold text-neutral-600 mt-1">
          Shop credentials, public booking link slug, timezone synchronization, and tenant isolation keys.
        </p>
      </div>

      {savedFeedback && (
        <div className="flex items-center gap-3 rounded-2xl border-2 border-black bg-emerald-300 p-3.5 text-xs font-black uppercase text-black shadow-neo">
          <Check className="h-5 w-5 text-black stroke-[3]" />
          <span>Salon configuration saved successfully.</span>
        </div>
      )}

      {/* Business Details Form */}
      <form onSubmit={handleSave} className="space-y-6">
        <Card>
          <CardHeader className="border-b-2 border-[#0F0F12] pb-4">
            <div className="flex items-center gap-2">
              <Store className="h-5 w-5 text-amber-600 stroke-[2.5]" />
              <CardTitle className="text-base uppercase font-black">Shop Profile &amp; Branding</CardTitle>
            </div>
            <CardDescription>
              Basic information visible to your clients during online booking.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#0F0F12] mb-1">
                  Barbershop Name
                </label>
                <Input
                  value={salonName}
                  onChange={(e) => setSalonName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#0F0F12] mb-1">
                  Public Booking Slug
                </label>
                <div className="flex items-center">
                  <span className="inline-flex h-11 items-center px-3.5 rounded-l-xl border-2 border-r-0 border-[#0F0F12] bg-[#FAF8F5] text-xs font-bold text-neutral-700">
                    barberflow.io/
                  </span>
                  <input
                    readOnly
                    value={mockSalon.slug}
                    className="flex-1 h-11 rounded-r-xl border-2 border-[#0F0F12] bg-neutral-100 px-3 text-xs font-bold text-neutral-600 focus:outline-none cursor-not-allowed shadow-neo-sm"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#0F0F12] mb-1">
                  Contact Phone
                </label>
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#0F0F12] mb-1">
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
                <label className="block text-xs font-black uppercase tracking-wider text-[#0F0F12] mb-1">
                  Street Address
                </label>
                <Input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#0F0F12] mb-1">
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
          <CardFooter className="justify-end border-t-2 border-[#0F0F12] pt-4">
            <Button variant="gold" type="submit" size="sm" className="uppercase font-black">
              Save Profile Changes
            </Button>
          </CardFooter>
        </Card>

        {/* Localization & Currency */}
        <Card>
          <CardHeader className="border-b-2 border-[#0F0F12] pb-4">
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-amber-600 stroke-[2.5]" />
              <CardTitle className="text-base uppercase font-black">Localization &amp; Currency</CardTitle>
            </div>
            <CardDescription>
              Timezone scheduling synchronization and display currency formatting.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-[#0F0F12] mb-1">
                Shop Timezone
              </label>
              <select
                value={timezone}
                onChange={(e) => setTimezone(e.target.value)}
                className="w-full h-11 rounded-xl border-2 border-[#0F0F12] bg-white px-3 text-xs font-bold text-[#0F0F12] shadow-neo-sm focus:outline-none"
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
              <label className="block text-xs font-black uppercase tracking-wider text-[#0F0F12] mb-1">
                Billing &amp; Menu Currency
              </label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full h-11 rounded-xl border-2 border-[#0F0F12] bg-white px-3 text-xs font-bold text-[#0F0F12] shadow-neo-sm focus:outline-none"
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
        <Card className="border-4 border-[#0F0F12] bg-[#0F0F12] text-white shadow-neo-xl">
          <CardHeader className="border-b border-white/20 pb-4">
            <div className="flex items-center gap-2">
              <Database className="h-5 w-5 text-amber-400 stroke-[2.5]" />
              <CardTitle className="text-base uppercase font-black text-white">Multi-Tenancy Isolation Protocol</CardTitle>
            </div>
            <CardDescription className="text-neutral-400">
              Cryptographic tenant boundary for Crown &amp; Blade Club.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-xs font-bold pt-6">
            <div className="rounded-xl bg-black/60 p-4 border border-white/20 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-neutral-400 uppercase">Tenant Partition (`salon_id`):</span>
                <code className="bg-amber-400 text-black px-2.5 py-0.5 rounded border border-black font-mono text-[11px] font-black">
                  {mockSalon.id}
                </code>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-400 uppercase">Active Subscription:</span>
                <span className="font-black text-emerald-400 uppercase text-[10px] bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500">
                  {mockSalon.tier} Plan (Active)
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-400 uppercase">Supabase RLS Policy:</span>
                <span className="text-amber-400">
                  Strict Row Level Security Active
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2 text-neutral-400 pt-1">
              <Shield className="h-4 w-4 mt-0.5 text-amber-400 flex-shrink-0" />
              <span>
                All bookings, financial totals, and customer phone numbers are isolated by this <code>salon_id</code>.
              </span>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
