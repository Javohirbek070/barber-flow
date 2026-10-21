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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b-2 border-[#0F0F12]">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-black uppercase tracking-tight text-[#0F0F12]">
              Appointments &amp; Timeline
            </h1>
            <span className="text-[10px] font-black uppercase bg-[#0F0F12] text-amber-400 px-2 py-0.5 rounded shadow-neo-sm">
              Live Chairs
            </span>
          </div>
          <p className="text-xs font-bold text-neutral-600 mt-1">
            Chair allocations, calendar timelines, and live walk-in queue management.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* View toggle */}
          <div className="flex items-center rounded-xl bg-white border-2 border-[#0F0F12] p-1 shadow-neo-sm">
            <button
              onClick={() => setViewMode("list")}
              className={`px-3 py-1.5 text-xs rounded-lg font-black uppercase tracking-wider transition-all ${
                viewMode === "list"
                  ? "bg-[#0F0F12] text-amber-400 shadow-neo-sm"
                  : "text-neutral-700 hover:text-black"
              }`}
            >
              Chair Slips
            </button>
            <button
              onClick={() => setViewMode("calendar")}
              className={`px-3 py-1.5 text-xs rounded-lg font-black uppercase tracking-wider transition-all ${
                viewMode === "calendar"
                  ? "bg-[#0F0F12] text-amber-400 shadow-neo-sm"
                  : "text-neutral-700 hover:text-black"
              }`}
            >
              Chair Timeline
            </button>
          </div>
        </div>
      </div>

      {/* Date Navigation Bar */}
      <div className="flex items-center justify-between rounded-2xl border-2 border-[#0F0F12] bg-white p-3.5 shadow-neo">
        <div className="flex items-center gap-2">
          <CalendarIcon className="h-4 w-4 text-amber-600 stroke-[2.5]" />
          <span className="text-xs font-black uppercase tracking-wider text-[#0F0F12]">
            Schedule Date: {selectedDate} (Wednesday, Oct 21)
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <Button
            size="sm"
            variant="outline"
            className="h-8 px-2"
            onClick={() => setSelectedDate("Yesterday")}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant="gold"
            className="h-8 text-xs px-3 uppercase font-black"
            onClick={() => setSelectedDate("Today")}
          >
            Today
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="h-8 px-2"
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
        <Card className="shadow-neo-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between pb-4 border-b-2 border-[#0F0F12] mb-4">
              <div>
                <h3 className="text-sm font-black uppercase text-[#0F0F12]">
                  Multi-Chair Matrix &amp; Timeline Board
                </h3>
                <p className="text-xs font-bold text-neutral-500">
                  Live station timeline across 4 barbers
                </p>
              </div>
              <span className="text-[10px] font-black uppercase bg-amber-400 text-black px-2.5 py-1 rounded-md border border-black shadow-neo-sm">
                Timeline Matrix
              </span>
            </div>

            {/* Time columns across Barbers */}
            <div className="overflow-x-auto">
              <div className="min-w-[700px]">
                {/* Header row: Barbers */}
                <div className="grid grid-cols-5 gap-2 border-b-2 border-[#0F0F12] pb-3 text-xs font-black uppercase text-neutral-800">
                  <div className="text-amber-600">Time Slot</div>
                  {mockBarbers.map((b) => (
                    <div key={b.id} className="truncate bg-neutral-100 p-2 rounded-xl border border-black">
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
                    className="grid grid-cols-5 gap-2 py-3 border-b border-[#0F0F12] text-xs items-center font-bold"
                  >
                    <div className="font-black text-[#0F0F12] text-xs">
                      {row.time}
                    </div>
                    {row.slots.map((slot, sIdx) => {
                      const isBooked = slot !== "Open Slot" && slot !== "-" && slot !== "Lunch Break";
                      const isLunch = slot === "Lunch Break";

                      return (
                        <div
                          key={sIdx}
                          className={`p-2.5 rounded-xl text-xs truncate border-2 ${
                            isBooked
                              ? "bg-[#0F0F12] text-amber-400 font-black border-[#0F0F12] shadow-neo-sm"
                              : isLunch
                              ? "bg-neutral-200 text-neutral-600 border-neutral-400"
                              : "bg-[#FAF8F5] text-neutral-500 border-dashed border-neutral-400 hover:border-black"
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
