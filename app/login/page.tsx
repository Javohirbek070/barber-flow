"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Lock, Mail, Scissors, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { isSupabaseConfigured } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = React.useState("marcus@crownandblade.example");
  const [password, setPassword] = React.useState("••••••••••••");
  const [loading, setLoading] = React.useState(false);
  const [statusMessage, setStatusMessage] = React.useState<string | null>(null);

  const supabaseReady = React.useMemo(() => isSupabaseConfigured(), []);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (supabaseReady) {
      setStatusMessage("Connecting to configured Supabase auth...");
      setTimeout(() => {
        router.push("/dashboard");
      }, 800);
    } else {
      setStatusMessage("Entering dashboard demonstration mode...");
      setTimeout(() => {
        router.push("/dashboard");
      }, 700);
    }
  };

  const handleQuickDemo = (roleEmail: string) => {
    setEmail(roleEmail);
    setStatusMessage("Authenticating demonstration session...");
    setTimeout(() => {
      router.push("/dashboard");
    }, 500);
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
          Sign in to your salon
        </h2>
        <p className="mt-1 text-center text-xs font-medium text-stone-500">
          Enter your credentials to access schedules, chairs, and revenue reports.
        </p>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
        <Card className="clay-card-ambient p-2 rounded-[36px]">
          <CardContent className="pt-6 space-y-5">
            <form onSubmit={handleSignIn} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-stone-400" />
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-10"
                    placeholder="name@salon.com"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                    Password
                  </label>
                  <span className="text-[11px] font-semibold text-amber-700 hover:underline cursor-pointer">
                    Forgot password?
                  </span>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-3.5 h-4 w-4 text-stone-400" />
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="pl-10"
                  />
                </div>
              </div>

              {statusMessage && (
                <div className="rounded-2xl bg-amber-100/90 p-3 text-center text-xs text-amber-900 font-bold shadow-clay-inset">
                  {statusMessage}
                </div>
              )}

              <Button
                variant="gold"
                type="submit"
                className="w-full text-sm font-bold h-12 shadow-clay-amber"
                disabled={loading}
              >
                {loading ? "Authenticating..." : "Sign in to Dashboard"}
              </Button>
            </form>

            {/* Quick Demo Access Bar */}
            <div className="pt-4 border-t border-stone-200/60 space-y-2.5">
              <span className="text-[10px] font-bold tracking-wider uppercase text-stone-400 block text-center">
                ★ 1-Click Prototype Shortcuts
              </span>
              <div className="grid grid-cols-2 gap-2.5">
                <Button
                  type="button"
                  variant="default"
                  size="sm"
                  className="text-xs font-bold h-10"
                  onClick={() => handleQuickDemo("marcus@crownandblade.example")}
                >
                  Demo Owner
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  className="text-xs font-bold h-10"
                  onClick={() => handleQuickDemo("liam@crownandblade.example")}
                >
                  Demo Barber
                </Button>
              </div>
            </div>

            {/* Supabase status indicator */}
            <div className="rounded-2xl clay-inset-surface p-3.5 text-[11px] font-medium text-stone-600 flex items-start gap-2.5">
              <ShieldAlert className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-bold uppercase text-stone-800 block">
                  {supabaseReady ? "Supabase Connected" : "Supabase In Setup Mode"}
                </span>
                <p className="text-stone-500 mt-0.5">
                  {supabaseReady
                    ? "Live Supabase Auth is active via .env.local keys."
                    : "Add NEXT_PUBLIC_SUPABASE_URL in .env.local to link your remote project."}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <p className="mt-6 text-center text-xs font-medium text-stone-600">
          New barbershop?{" "}
          <Link
            href="/signup"
            className="font-bold text-amber-700 hover:text-amber-800 underline decoration-amber-400 underline-offset-4"
          >
            Start your 14-day free trial
          </Link>
        </p>
      </div>
    </div>
  );
}
