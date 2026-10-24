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
        "flex flex-col h-full w-64 bg-[#1C1D27] text-white p-3 m-3 rounded-[32px] shadow-clay-dark border border-white/10",
        className
      )}
    >
      {/* Brand & Salon Switcher */}
      <div className="p-3 pb-4 border-b border-white/10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-amber-950 flex items-center justify-center font-black text-base shadow-clay-amber border border-amber-200">
            <Scissors className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-lg tracking-tight text-white leading-none">
              BarberFlow
            </span>
            <span className="text-[10px] font-bold tracking-wider text-amber-400 uppercase mt-0.5">
              Clay Dashboard
            </span>
          </div>
        </div>

        {/* Current Tenant Card */}
        <div className="rounded-2xl bg-white/5 border border-white/10 p-3 shadow-inner">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 text-amber-950 flex items-center justify-center font-black text-xs shadow-clay-amber">
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
      <nav className="flex-1 py-4 space-y-2 overflow-y-auto">
        <p className="px-3 pb-1 text-[10px] font-extrabold tracking-wider uppercase text-neutral-400">
          Management
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
                "group flex items-center gap-3 rounded-2xl px-3.5 py-2.5 text-xs font-extrabold uppercase tracking-wider transition-all clay-button-press select-none",
                isActive
                  ? "bg-gradient-to-r from-amber-400 to-amber-500 text-amber-950 shadow-clay-amber font-black border border-amber-300"
                  : "text-neutral-300 hover:bg-white/10 hover:text-white"
              )}
            >
              <item.icon
                className={cn(
                  "h-4 w-4 flex-shrink-0 transition-colors",
                  isActive ? "text-amber-950" : "text-neutral-400 group-hover:text-amber-400"
                )}
              />
              <span className="truncate">{item.name}</span>
              {isActive && (
                <ChevronRight className="ml-auto h-4 w-4 text-amber-950" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer Navigation */}
      <div className="pt-3 border-t border-white/10 space-y-1.5">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-2xl px-3 py-2 text-xs font-bold text-neutral-300 hover:bg-white/10 hover:text-white transition-colors"
        >
          <ExternalLink className="h-3.5 w-3.5 text-amber-400" />
          <span>Public Booking Site</span>
        </Link>
        <Link
          href="/login"
          className="flex items-center gap-2.5 rounded-2xl px-3 py-2 text-xs font-bold text-rose-400 hover:bg-rose-950/40 transition-colors"
        >
          <LogOut className="h-3.5 w-3.5" />
          <span>Sign Out</span>
        </Link>
      </div>
    </aside>
  );
}
