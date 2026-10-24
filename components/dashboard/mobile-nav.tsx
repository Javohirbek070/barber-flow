"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, LayoutDashboard, Calendar, Scissors, Users, Settings, LogOut, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { mockSalon } from "@/lib/mock-data";

export function MobileNavDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const navItems = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "Bookings", href: "/dashboard/bookings", icon: Calendar },
    { name: "Services", href: "/dashboard/services", icon: Scissors },
    { name: "Team", href: "/dashboard/team", icon: Users },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-900/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 left-0 w-72 max-w-[80vw] bg-[#181922] text-stone-100 border-r border-white/10 flex flex-col p-5 shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-stone-950 flex items-center justify-center font-extrabold text-sm shadow-clay-amber">
              <Scissors className="h-4 w-4" />
            </div>
            <div>
              <span className="font-extrabold text-sm text-stone-100 block">
                {mockSalon.name}
              </span>
              <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">
                BarberFlow SaaS
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-stone-400 hover:text-stone-100 hover:bg-white/10 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 py-5 space-y-1.5">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 rounded-2xl px-3.5 py-3 text-xs font-bold transition-all",
                  isActive
                    ? "bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 shadow-clay-amber"
                    : "text-stone-400 hover:bg-white/5 hover:text-stone-100"
                )}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="pt-4 border-t border-white/10 space-y-2">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-stone-300 hover:bg-white/5 rounded-xl transition-colors"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            <span>Customer Booking Site</span>
          </Link>
          <Link
            href="/login"
            onClick={onClose}
            className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-red-400 hover:bg-red-500/10 rounded-xl transition-colors"
          >
            <LogOut className="h-3.5 w-3.5" />
            <span>Sign Out</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
