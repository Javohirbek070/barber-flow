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
        className="fixed inset-0 bg-black/40 backdrop-blur-none transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 left-0 w-72 max-w-[80vw] bg-white border-r border-[#E5E5E5] flex flex-col p-4 shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E5]">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-[#171717] text-white flex items-center justify-center font-bold text-xs">
              BF
            </div>
            <span className="font-semibold text-sm text-[#171717]">
              {mockSalon.name}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-[#F5F5F5]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-[#171717] text-white"
                    : "text-neutral-600 hover:bg-[#F5F5F5] hover:text-[#171717]"
                )}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="pt-4 border-t border-[#E5E5E5] space-y-2">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-[#F5F5F5] rounded-xl"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            <span>Customer Booking Site</span>
          </Link>
          <Link
            href="/login"
            onClick={onClose}
            className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-50 rounded-xl"
          >
            <LogOut className="h-3.5 w-3.5" />
            <span>Sign Out</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
