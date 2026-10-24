"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Check, Lock, Mail, Scissors, Store, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function SignupPage() {
  const router = useRouter();
  const [salonName, setSalonName] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [currency, setCurrency] = React.useState("USD");
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#F3EFEA] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 text-stone-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase text-stone-600 hover:text-amber-700 mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 stroke-[2.5]" />
          <span>Back to BarberFlow</span>
        </Link>

        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-stone-950 flex items-center justify-center font-black text-xl shadow-clay-amber">
            <Scissors className="h-6 w-6" />
          </div>
          <span className="font-extrabold text-3xl tracking-tight text-stone-900">
            BarberFlow
          </span>
        </div>
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-stone-900">
          14-Day Free Salon Trial
        </h2>
        <p className="mt-1 text-center text-xs font-medium text-stone-500">
          No credit card required. Pure SaaS subscription.
        </p>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
        <Card className="clay-card-ambient p-2 rounded-[36px]">
          <CardContent className="pt-6 space-y-4">
            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="mx-auto h-16 w-16 rounded-3xl bg-emerald-500 text-white flex items-center justify-center font-black text-3xl shadow-clay-mint">
                  <Check className="h-8 w-8 stroke-[3]" />
                </div>
                <h3 className="text-xl font-extrabold text-stone-900">
                  Welcome Aboard!
                </h3>
                <p className="text-xs font-medium text-stone-500 max-w-xs mx-auto">
                  Generating your isolated salon tenant environment for {salonName || "your barbershop"}...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Barbershop / Salon Name
                  </label>
                  <div className="relative">
                    <Store className="absolute left-3.5 top-3.5 h-4 w-4 text-stone-400" />
                    <Input
                      placeholder="e.g. Apex Barber Lounge"
                      value={salonName}
                      onChange={(e) => setSalonName(e.target.value)}
                      required
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Master Owner Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3.5 h-4 w-4 text-stone-400" />
                    <Input
                      placeholder="e.g. Marcus Vance"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Work Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-stone-400" />
                    <Input
                      type="email"
                      placeholder="marcus@apexbarbers.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-3.5 h-4 w-4 text-stone-400" />
                    <Input
                      type="password"
                      placeholder="At least 8 characters"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={8}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Default Currency
                  </label>
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="w-full h-11 rounded-2xl bg-[#EFECE6] border border-white/60 px-3 text-xs font-medium text-stone-800 shadow-[inset_2px_2px_5px_rgba(166,155,142,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.85)] focus:outline-none"
                  >
                    <option value="USD">USD ($) — United States</option>
                    <option value="EUR">EUR (€) — Eurozone</option>
                    <option value="GBP">GBP (£) — United Kingdom</option>
                    <option value="CAD">CAD ($) — Canada</option>
                    <option value="AUD">AUD ($) — Australia</option>
                  </select>
                </div>

                <div className="pt-2">
                  <Button
                    variant="gold"
                    type="submit"
                    className="w-full text-sm font-bold h-12 shadow-clay-amber"
                  >
                    Launch Salon Dashboard ⚡
                  </Button>
                </div>
              </form>
            )}

            <div className="pt-4 border-t border-stone-200/60 text-center">
              <span className="text-xs font-medium text-stone-600">
                Already registered?{" "}
                <Link
                  href="/login"
                  className="font-bold text-amber-700 hover:text-amber-800 underline decoration-amber-400 underline-offset-4"
                >
                  Sign in here
                </Link>
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
