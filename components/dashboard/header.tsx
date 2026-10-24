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
      <header className="sticky top-0 z-30 flex h-18 items-center gap-4 bg-white/80 backdrop-blur-md px-4 sm:px-6 m-3 mb-0 rounded-3xl clay-card border border-white">
        {/* Mobile menu button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-2xl bg-white shadow-clay-sm text-neutral-800"
          aria-label="Toggle navigation menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Greeting & Date */}
        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-2">
            <h1 className="text-sm sm:text-base font-black text-[#1E202B] truncate">
              Crown &amp; Blade Command
            </h1>
            <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-emerald-100 text-emerald-950 px-2.5 py-0.5 text-[10px] font-extrabold uppercase shadow-clay-sm">
              Live Shifts
            </span>
          </div>
          <p className="text-[11px] font-semibold text-neutral-500">
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
            className="hidden sm:inline-flex gap-1.5 shadow-clay-amber uppercase text-xs font-black"
          >
            <Plus className="h-4 w-4 stroke-[3]" />
            <span>New Booking</span>
          </Button>

          {/* Profile Menu Trigger */}
          <div className="relative">
            <button
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="flex items-center gap-2.5 rounded-2xl p-1.5 bg-white shadow-clay-sm hover:shadow-clay transition-all border border-white"
              aria-label="User profile menu"
            >
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 text-amber-950 flex items-center justify-center font-black text-xs shadow-clay-amber">
                MV
              </div>
              <div className="hidden md:block text-left text-xs pr-1">
                <p className="font-extrabold text-[#1E202B] leading-tight">Marcus Vance</p>
                <p className="text-[10px] font-bold text-amber-700 uppercase">Master Owner</p>
              </div>
            </button>

            {/* Profile Dropdown */}
            {isProfileMenuOpen && (
              <div
                className="absolute right-0 mt-3 w-60 rounded-3xl bg-white p-2.5 shadow-clay-lg z-50 text-xs font-bold border border-white"
                onClick={() => setIsProfileMenuOpen(false)}
              >
                <div className="px-3.5 py-2.5 border-b border-black/5">
                  <p className="font-extrabold text-[#1E202B]">Marcus Vance</p>
                  <p className="text-neutral-500 text-[11px] truncate">marcus@crownandblade.example</p>
                </div>
                <div className="py-1.5">
                  <a
                    href="/dashboard/settings"
                    className="flex items-center gap-2 px-3 py-2 rounded-2xl text-[#1E202B] hover:bg-neutral-100 transition-colors"
                  >
                    <User className="h-4 w-4" />
                    <span>Salon Profile &amp; Settings</span>
                  </a>
                </div>
                <div className="pt-1.5 border-t border-black/5">
                  <a
                    href="/login"
                    className="flex items-center gap-2 px-3 py-2 rounded-2xl text-rose-600 hover:bg-rose-50 transition-colors"
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
          <div className="flex items-center gap-2.5 mb-1">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-amber-950 flex items-center justify-center font-black shadow-clay-amber">
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
            <div className="mx-auto h-16 w-16 rounded-3xl bg-gradient-to-br from-emerald-400 to-emerald-500 text-emerald-950 flex items-center justify-center font-black text-2xl shadow-clay-mint">
              ✓
            </div>
            <h3 className="text-lg font-black text-[#1E202B]">Chair Reserved!</h3>
            <p className="text-xs font-bold text-neutral-500">
              Confirmed for {customerName || "Walk-in Guest"} at {bookingTime}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleCreateBooking} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1E202B] mb-1.5">
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
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1E202B] mb-1.5">
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
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1E202B] mb-1.5">
                  Service
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full h-12 rounded-2xl bg-[#EBE7E1] px-3.5 text-xs font-bold text-[#1E202B] shadow-[inset_3px_3px_6px_rgba(166,155,142,0.28),inset_-3px_-3px_6px_rgba(255,255,255,0.9)] border border-white/60 focus:outline-none"
                >
                  {mockServices.map((srv) => (
                    <option key={srv.id} value={srv.id}>
                      {srv.name} (${srv.price})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1E202B] mb-1.5">
                  Assigned Barber
                </label>
                <select
                  value={selectedBarber}
                  onChange={(e) => setSelectedBarber(e.target.value)}
                  className="w-full h-12 rounded-2xl bg-[#EBE7E1] px-3.5 text-xs font-bold text-[#1E202B] shadow-[inset_3px_3px_6px_rgba(166,155,142,0.28),inset_-3px_-3px_6px_rgba(255,255,255,0.9)] border border-white/60 focus:outline-none"
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
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1E202B] mb-1.5">
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
              <Button variant="gold" type="submit" size="sm" className="uppercase font-black shadow-clay-amber">
                Confirm &amp; Dispatch SMS
              </Button>
            </DialogFooter>
          </form>
        )}
      </Dialog>
    </>
  );
}
