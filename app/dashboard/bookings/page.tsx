"use client";

import * as React from "react";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UpcomingAppointmentsList } from "@/components/dashboard/upcoming-appointments";
import { mockAppointments, mockBarbers } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";

export default function BookingsPage() {
  const [viewMode, setViewMode] = React.useState<"list" | "calendar">("list");
  const [selectedDate, setSelectedDate] = React.useState("Today");

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-2xl font-extrabold tracking-tight text-stone-900">
              Appointments &amp; Timeline
            </h1>
            <span className="text-[10px] font-bold uppercase bg-stone-900 text-amber-400 px-2.5 py-1 rounded-full shadow-clay-dark">
              Live Chairs
            </span>
          </div>
          <p className="text-xs font-medium text-stone-500 mt-1">
            Chair allocations, calendar timelines, and live walk-in queue management.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* View toggle */}
          <div className="flex items-center p-1.5 rounded-2xl bg-[#EBE5DE] shadow-clay-inset">
            <button
              onClick={() => setViewMode("list")}
              className={`px-3.5 py-1.5 text-xs rounded-xl font-bold transition-all ${
                viewMode === "list"
                  ? "bg-stone-900 text-amber-400 shadow-clay-dark"
                  : "text-stone-600 hover:text-stone-900 hover:bg-white/40"
              }`}
            >
              Chair Slips
            </button>
            <button
              onClick={() => setViewMode("calendar")}
              className={`px-3.5 py-1.5 text-xs rounded-xl font-bold transition-all ${
                viewMode === "calendar"
                  ? "bg-stone-900 text-amber-400 shadow-clay-dark"
                  : "text-stone-600 hover:text-stone-900 hover:bg-white/40"
              }`}
            >
              Chair Timeline
            </button>
          </div>
        </div>
      </div>

      {/* Date Navigation Bar */}
      <div className="flex items-center justify-between rounded-3xl clay-card p-4">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 text-stone-950 flex items-center justify-center shadow-clay-amber">
            <CalendarIcon className="h-4 w-4 stroke-[2.5]" />
          </div>
          <span className="text-xs font-bold text-stone-900">
            Schedule Date: <span className="font-extrabold text-amber-700">{selectedDate}</span> (Wednesday, Oct 21)
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <Button
            size="sm"
            variant="outline"
            className="h-8 w-8 p-0 rounded-xl"
            onClick={() => setSelectedDate("Yesterday")}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant="gold"
            className="h-8 text-xs px-3 font-bold"
            onClick={() => setSelectedDate("Today")}
          >
            Today
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="h-8 w-8 p-0 rounded-xl"
            onClick={() => setSelectedDate("Tomorrow")}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Main View: List or Calendar Placeholder */}
      {viewMode === "list" ? (
        <div className="space-y-4">
          <UpcomingAppointmentsList initialAppointments={mockAppointments} />
        </div>
      ) : (
        /* Calendar Prototype View */
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between pb-4 border-b border-stone-200/60 mb-5">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-stone-800">
                  Multi-Chair Matrix &amp; Timeline Board
                </h3>
                <p className="text-xs font-medium text-stone-500">
                  Live station timeline across 4 barbers
                </p>
              </div>
              <span className="text-[10px] font-bold uppercase bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 px-3 py-1 rounded-full shadow-clay-amber">
                Timeline Matrix
              </span>
            </div>

            {/* Time columns across Barbers */}
            <div className="overflow-x-auto">
              <div className="min-w-[700px] space-y-2">
                {/* Header row: Barbers */}
                <div className="grid grid-cols-5 gap-3 pb-3 text-xs font-bold uppercase text-stone-700 border-b border-stone-200/60">
                  <div className="text-amber-700 flex items-center">Time Slot</div>
                  {mockBarbers.map((b) => (
                    <div key={b.id} className="truncate clay-inset-surface p-2.5 rounded-2xl text-center text-stone-800">
                      ★ {b.name}
                    </div>
                  ))}
                </div>

                {/* Time rows */}
                {[
                  { time: "09:00 AM", slots: ["Ethan Reynolds (Cut)", "Noah C. (Fade)", "-", "-"] },
                  { time: "10:00 AM", slots: ["Julian Barnes (Full Exp)", "Open Slot", "Mateo A.", "Open Slot"] },
                  { time: "11:00 AM", slots: ["Julian Barnes (cont.)", "Open Slot", "Open Slot", "Oliver R."] },
                  { time: "12:00 PM", slots: ["Lunch Break", "Lunch Break", "Lunch Break", "Lunch Break"] },
                  { time: "01:00 PM", slots: ["Open Slot", "Alexander W. (Cut)", "Open Slot", "Open Slot"] },
                  { time: "02:00 PM", slots: ["Open Slot", "Open Slot", "Open Slot", "Oliver Reed (Shave)"] },
                ].map((row, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-5 gap-3 py-2 text-xs items-center"
                  >
                    <div className="font-extrabold text-stone-800 text-xs">
                      {row.time}
                    </div>
                    {row.slots.map((slot, sIdx) => {
                      const isBooked = slot !== "Open Slot" && slot !== "-" && slot !== "Lunch Break";
                      const isLunch = slot === "Lunch Break";

                      return (
                        <div
                          key={sIdx}
                          className={`p-3 rounded-2xl text-xs truncate font-bold transition-all ${
                            isBooked
                              ? "bg-gradient-to-br from-stone-900 to-stone-800 text-amber-400 shadow-clay-dark"
                              : isLunch
                              ? "bg-stone-200/70 text-stone-500 shadow-clay-inset"
                              : "clay-inset-surface text-stone-400 hover:text-stone-700 hover:shadow-clay-sm"
                          }`}
                        >
                          {slot}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
