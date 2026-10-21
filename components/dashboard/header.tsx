"use client";

import * as React from "react";
import { Menu, Plus, User, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { mockBarbers, mockServices } from "@/lib/mock-data";

export function DashboardHeader({
  onMenuClick,
}: {
  onMenuClick?: () => void;
}) {
  const [isNewBookingOpen, setIsNewBookingOpen] = React.useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = React.useState(false);
  const [bookedFeedback, setBookedFeedback] = React.useState(false);

  // Form state for new appointment
  const [customerName, setCustomerName] = React.useState("");
  const [customerPhone, setCustomerPhone] = React.useState("");
  const [selectedService, setSelectedService] = React.useState(mockServices[0].id);
  const [selectedBarber, setSelectedBarber] = React.useState(mockBarbers[0].id);
  const [bookingTime, setBookingTime] = React.useState("14:00");

  const todayStr = React.useMemo(() => {
    return new Date().toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }, []);

  const handleCreateBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookedFeedback(true);
    setTimeout(() => {
      setBookedFeedback(false);
      setIsNewBookingOpen(false);
      setCustomerName("");
      setCustomerPhone("");
    }, 1200);
  };

  return (
    <>
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b-2 border-[#0F0F12] bg-[#FAF8F5] px-4 sm:px-6">
        {/* Mobile menu button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-xl border-2 border-black bg-white shadow-neo-sm text-neutral-800"
          aria-label="Toggle navigation menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Greeting & Date */}
        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-2">
            <h1 className="text-sm sm:text-base font-black uppercase tracking-tight text-[#0F0F12] truncate">
              Crown &amp; Blade Command
            </h1>
            <span className="hidden sm:inline-flex items-center gap-1 rounded bg-emerald-300 text-black border border-black px-1.5 py-0.2 text-[9px] font-black uppercase">
              Live Shifts
            </span>
          </div>
          <p className="text-[11px] font-bold text-neutral-500">
            {todayStr} • Marcus Vance on duty
          </p>
        </div>

        {/* Right side actions */}
        <div className="ml-auto flex items-center gap-3">
          {/* Quick Action Button */}
          <Button
            variant="gold"
            size="sm"
            onClick={() => setIsNewBookingOpen(true)}
            className="hidden sm:inline-flex gap-1.5 shadow-neo-sm uppercase text-xs"
          >
            <Plus className="h-4 w-4 stroke-[3]" />
            <span>New Booking</span>
          </Button>

          {/* Profile Menu Trigger */}
          <div className="relative">
            <button
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="flex items-center gap-2 rounded-xl p-1.5 bg-white border-2 border-[#0F0F12] shadow-neo-sm hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
              aria-label="User profile menu"
            >
              <div className="h-8 w-8 rounded-lg bg-[#0F0F12] text-amber-400 flex items-center justify-center font-black text-xs border border-black">
                MV
              </div>
              <div className="hidden md:block text-left text-xs pr-1">
                <p className="font-black text-[#0F0F12] leading-tight uppercase">Marcus Vance</p>
                <p className="text-[10px] font-bold text-amber-600 uppercase">Master Owner</p>
              </div>
            </button>

            {/* Profile Dropdown */}
            {isProfileMenuOpen && (
              <div
                className="absolute right-0 mt-2 w-60 rounded-2xl border-2 border-[#0F0F12] bg-[#FAF8F5] p-2 shadow-neo-lg z-50 text-xs font-bold"
                onClick={() => setIsProfileMenuOpen(false)}
              >
                <div className="px-3 py-2 border-b-2 border-[#0F0F12]">
                  <p className="font-black text-[#0F0F12] uppercase">Marcus Vance</p>
                  <p className="text-neutral-500 text-[11px] truncate">marcus@crownandblade.example</p>
                </div>
                <div className="py-1">
                  <a
                    href="/dashboard/settings"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-[#0F0F12] hover:bg-amber-100"
                  >
                    <User className="h-4 w-4" />
                    <span>Salon Profile &amp; Settings</span>
                  </a>
                </div>
                <div className="pt-1 border-t-2 border-[#0F0F12]">
                  <a
                    href="/login"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-red-600 hover:bg-red-100"
                  >
                    <span>Sign Out</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* New Booking Modal Dialog */}
      <Dialog open={isNewBookingOpen} onOpenChange={setIsNewBookingOpen}>
        <DialogClose onClose={() => setIsNewBookingOpen(false)} />
        <DialogHeader>
          <div className="flex items-center gap-2 mb-1">
            <div className="h-8 w-8 rounded-lg bg-[#0F0F12] text-amber-400 flex items-center justify-center font-black">
              <Scissors className="h-4 w-4" />
            </div>
            <DialogTitle>Instant Chair Booking</DialogTitle>
          </div>
          <DialogDescription>
            Insert a walk-in or telephone client appointment directly into today&apos;s active chair queue.
          </DialogDescription>
        </DialogHeader>

        {bookedFeedback ? (
          <div className="py-8 text-center space-y-2">
            <div className="mx-auto h-14 w-14 rounded-2xl bg-emerald-400 border-2 border-[#0F0F12] text-[#0F0F12] flex items-center justify-center font-black text-2xl shadow-neo">
              ✓
            </div>
            <h3 className="text-lg font-black uppercase text-[#0F0F12]">Chair Reserved!</h3>
            <p className="text-xs font-bold text-neutral-600">
              Confirmed for {customerName || "Walk-in Guest"} at {bookingTime}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleCreateBooking} className="space-y-4">
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-[#0F0F12] mb-1">
                Customer Name
              </label>
              <Input
                placeholder="e.g. Jordan Miller"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-[#0F0F12] mb-1">
                Phone Number (For Automated SMS Ping)
              </label>
              <Input
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#0F0F12] mb-1">
                  Service
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full h-11 rounded-xl border-2 border-[#0F0F12] bg-white px-3 text-xs font-bold text-[#0F0F12] shadow-neo-sm focus:outline-none"
                >
                  {mockServices.map((srv) => (
                    <option key={srv.id} value={srv.id}>
                      {srv.name} (${srv.price})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#0F0F12] mb-1">
                  Assigned Barber
                </label>
                <select
                  value={selectedBarber}
                  onChange={(e) => setSelectedBarber(e.target.value)}
                  className="w-full h-11 rounded-xl border-2 border-[#0F0F12] bg-white px-3 text-xs font-bold text-[#0F0F12] shadow-neo-sm focus:outline-none"
                >
                  {mockBarbers.map((barber) => (
                    <option key={barber.id} value={barber.id}>
                      {barber.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-[#0F0F12] mb-1">
                Slot Time
              </label>
              <Input
                type="time"
                value={bookingTime}
                onChange={(e) => setBookingTime(e.target.value)}
                required
              />
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setIsNewBookingOpen(false)}
              >
                Cancel
              </Button>
              <Button variant="gold" type="submit" size="sm" className="uppercase font-black">
                Confirm &amp; Dispatch SMS
              </Button>
            </DialogFooter>
          </form>
        )}
      </Dialog>
    </>
  );
}
