"use client";

import * as React from "react";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { DashboardHeader } from "@/components/dashboard/header";
import { MobileNavDrawer } from "@/components/dashboard/mobile-nav";
import { MockDataBanner } from "@/components/dashboard/mock-badge";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);

  return (
    <div className="flex h-screen bg-[#F3EFEA] overflow-hidden text-stone-900">
      {/* Desktop Sidebar */}
      <DashboardSidebar className="hidden lg:flex flex-shrink-0" />

      {/* Mobile Nav Drawer */}
      <MobileNavDrawer
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <DashboardHeader onMenuClick={() => setIsMobileNavOpen(true)} />

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            <MockDataBanner />
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
