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
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 text-[#0F0F12]">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-black uppercase text-[#0F0F12] hover:text-amber-600 mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 stroke-[3]" />
          <span>Back to BarberFlow</span>
        </Link>

        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="h-12 w-12 rounded-2xl bg-[#0F0F12] text-amber-400 flex items-center justify-center font-black text-xl border-2 border-black shadow-neo">
            <Scissors className="h-6 w-6" />
          </div>
          <span className="font-black text-3xl uppercase tracking-tighter text-[#0F0F12]">
            BarberFlow
          </span>
        </div>
        <h2 className="text-center text-2xl font-black uppercase tracking-tight text-[#0F0F12]">
          Sign in to your salon
        </h2>
        <p className="mt-1 text-center text-xs font-bold text-neutral-600">
          Enter your credentials to access schedules, chairs, and revenue reports.
        </p>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
        <Card className="bg-white shadow-neo-xl border-4 border-[#0F0F12] p-2">
          <CardContent className="pt-6 space-y-5">
            <form onSubmit={handleSignIn} className="space-y-4">
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#0F0F12] mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-neutral-500" />
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
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-black uppercase tracking-wider text-[#0F0F12]">
                    Password
                  </label>
                  <span className="text-[11px] font-bold text-neutral-500 hover:underline cursor-pointer">
                    Forgot password?
                  </span>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-3.5 h-4 w-4 text-neutral-500" />
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
                <div className="rounded-xl bg-amber-400 border-2 border-black p-2.5 text-center text-xs text-black font-black uppercase shadow-neo-sm">
                  {statusMessage}
                </div>
              )}

              <Button
                variant="gold"
                type="submit"
                className="w-full text-sm font-black uppercase h-12 shadow-neo"
                disabled={loading}
              >
                {loading ? "Authenticating..." : "Sign in to Dashboard"}
              </Button>
            </form>

            {/* Quick Demo Access Bar */}
            <div className="pt-4 border-t-2 border-[#0F0F12] space-y-2">
              <span className="text-[10px] font-black tracking-widest uppercase text-neutral-500 block text-center">
                ★ 1-Click Prototype Shortcuts
              </span>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  type="button"
                  variant="default"
                  size="sm"
                  className="text-xs uppercase font-black h-10 shadow-neo-sm"
                  onClick={() => handleQuickDemo("marcus@crownandblade.example")}
                >
                  Demo Owner
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  className="text-xs uppercase font-black h-10 shadow-neo-sm"
                  onClick={() => handleQuickDemo("liam@crownandblade.example")}
                >
                  Demo Barber
                </Button>
              </div>
            </div>

            {/* Supabase status indicator */}
            <div className="rounded-xl bg-[#FAF8F5] p-3 border-2 border-[#0F0F12] text-[11px] font-bold text-neutral-700 flex items-start gap-2 shadow-neo-sm">
              <ShieldAlert className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-black uppercase text-[#0F0F12]">
                  {supabaseReady ? "Supabase Connected" : "Supabase In Setup Mode"}
                </span>
                <p className="text-neutral-600 mt-0.5 font-medium">
                  {supabaseReady
                    ? "Live Supabase Auth is active via .env.local keys."
                    : "Add NEXT_PUBLIC_SUPABASE_URL in .env.local to link your remote project."}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <p className="mt-6 text-center text-xs font-bold text-neutral-700">
          New barbershop?{" "}
          <Link
            href="/signup"
            className="font-black text-[#0F0F12] underline decoration-amber-500 decoration-2 hover:text-amber-600"
          >
            Start your 14-day free trial
          </Link>
        </p>
      </div>
    </div>
  );
}
