"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Calendar,
  Scissors,
  Users,
  Settings,
  Store,
  ChevronRight,
  LogOut,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { mockSalon } from "@/lib/mock-data";

const navItems = [
  {
    name: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
    exact: true,
  },
  {
    name: "Bookings & Timeline",
    href: "/dashboard/bookings",
    icon: Calendar,
  },
  {
    name: "Services & Pricing",
    href: "/dashboard/services",
    icon: Scissors,
  },
  {
    name: "Barbers Roster",
    href: "/dashboard/team",
    icon: Users,
  },
  {
    name: "Salon Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export function DashboardSidebar({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "flex flex-col h-full w-64 border-r-2 border-[#0F0F12] bg-[#0D0D11] text-white",
        className
      )}
    >
      {/* Barber Pole Decorative Top Accent */}
      <div className="h-2 w-full barber-pole-stripe border-b border-white/20" />

      {/* Brand & Salon Switcher */}
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="h-9 w-9 rounded-xl bg-amber-400 text-[#0D0D11] flex items-center justify-center font-black text-base border-2 border-white shadow-neo-sm">
            <Scissors className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-lg tracking-tight uppercase leading-none text-white">
              BarberFlow
            </span>
            <span className="text-[10px] font-black tracking-widest text-amber-400 uppercase mt-0.5">
              Dashboard OS
            </span>
          </div>
        </div>

        {/* Current Tenant Card */}
        <div className="rounded-2xl border-2 border-white/20 bg-[#18181F] p-3 shadow-neo-sm">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-amber-400 text-black border border-white flex items-center justify-center font-black text-xs">
              <Store className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-black uppercase truncate text-white">
                {mockSalon.name}
              </p>
              <p className="text-[10px] font-bold text-amber-400 truncate">
                {mockSalon.city} • Active
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-3 py-5 space-y-1.5 overflow-y-auto">
        <p className="px-3 pb-2 text-[10px] font-black tracking-widest uppercase text-neutral-400">
          Management Controls
        </p>
        {navItems.map((item) => {
          const isActive = item.exact
            ? pathname === item.href
            : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-xs font-extrabold uppercase tracking-wider transition-all",
                isActive
                  ? "bg-amber-400 text-[#0D0D11] border-2 border-black shadow-neo-sm font-black"
                  : "text-neutral-300 hover:bg-white/10 hover:text-white"
              )}
            >
              <item.icon
                className={cn(
                  "h-4 w-4 flex-shrink-0 transition-colors",
                  isActive ? "text-[#0D0D11]" : "text-neutral-400 group-hover:text-amber-400"
                )}
              />
              <span className="truncate">{item.name}</span>
              {isActive && (
                <ChevronRight className="ml-auto h-4 w-4 text-[#0D0D11]" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer Navigation & Public Portal Link */}
      <div className="p-3 border-t border-white/10 space-y-2">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-bold text-neutral-300 hover:bg-white/10 hover:text-white transition-colors"
        >
          <ExternalLink className="h-3.5 w-3.5 text-amber-400" />
          <span>Public Booking Page</span>
        </Link>
        <Link
          href="/login"
          className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-bold text-red-400 hover:bg-red-950/40 transition-colors"
        >
          <LogOut className="h-3.5 w-3.5" />
          <span>Sign Out</span>
        </Link>
      </div>
    </aside>
  );
}
