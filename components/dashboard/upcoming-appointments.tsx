"use client";

import * as React from "react";
import { Search, User, Scissors, CheckCircle2, Ticket } from "lucide-react";
import { Appointment, AppointmentStatus } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { formatTime, formatCurrency } from "@/lib/utils";

function getStatusBadge(status: AppointmentStatus) {
  switch (status) {
    case "confirmed":
      return <Badge variant="gold">Confirmed</Badge>;
    case "in_progress":
      return <Badge variant="info">In Chair</Badge>;
    case "completed":
      return <Badge variant="success">Completed</Badge>;
    case "cancelled":
      return <Badge variant="destructive">Cancelled</Badge>;
    case "no_show":
      return <Badge variant="warning">No Show</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
}

export function UpcomingAppointmentsList({
  initialAppointments,
}: {
  initialAppointments: Appointment[];
}) {
  const [appointments, setAppointments] = React.useState<Appointment[]>(initialAppointments);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState<string>("all");
  const [selectedAppointment, setSelectedAppointment] = React.useState<Appointment | null>(null);

  const filteredAppointments = React.useMemo(() => {
    return appointments.filter((apt) => {
      const matchesSearch =
        apt.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        apt.serviceName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        apt.barberName.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus =
        statusFilter === "all" ||
        (statusFilter === "active" && (apt.status === "confirmed" || apt.status === "in_progress")) ||
        apt.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [appointments, searchQuery, statusFilter]);

  const updateStatus = (id: string, newStatus: AppointmentStatus) => {
    setAppointments((prev) =>
      prev.map((apt) => (apt.id === id ? { ...apt, status: newStatus } : apt))
    );
    if (selectedAppointment && selectedAppointment.id === id) {
      setSelectedAppointment((prev) => (prev ? { ...prev, status: newStatus } : null));
    }
  };

  return (
    <div className="space-y-4">
      {/* Filters row */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-stone-400 stroke-[2.5]" />
          <Input
            placeholder="Search client, service, or barber..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-11 text-xs"
          />
        </div>

        {/* Status pill filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 p-1.5 rounded-2xl bg-[#EBE5DE] shadow-clay-inset">
          {[
            { label: "Active", value: "active" },
            { label: "All Today", value: "all" },
            { label: "Confirmed", value: "confirmed" },
            { label: "In Chair", value: "in_progress" },
            { label: "Completed", value: "completed" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setStatusFilter(tab.value)}
              className={`px-3.5 py-1.5 text-xs rounded-xl font-bold transition-all whitespace-nowrap ${
                statusFilter === tab.value
                  ? "bg-stone-900 text-amber-400 shadow-clay-dark"
                  : "text-stone-600 hover:text-stone-900 hover:bg-white/40"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Appointment Cards / List */}
      <div className="space-y-3.5">
        {filteredAppointments.length === 0 ? (
          <div className="p-10 text-center rounded-3xl clay-card">
            <Ticket className="mx-auto h-10 w-10 text-stone-400 mb-2" />
            <p className="text-sm font-bold uppercase tracking-wider text-stone-800">No Chair Slips Found</p>
            <p className="text-xs text-stone-500 mt-1">
              {searchQuery ? "Try resetting your search query filter." : "No bookings match the selected status filter."}
            </p>
            {searchQuery && (
              <Button
                variant="outline"
                size="sm"
                className="mt-4 text-xs font-bold"
                onClick={() => setSearchQuery("")}
              >
                Clear Filter
              </Button>
            )}
          </div>
        ) : (
          filteredAppointments.map((apt) => (
            <div
              key={apt.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-5 gap-4 rounded-3xl clay-card hover:shadow-clay-hover transition-all duration-200"
            >
              <div className="flex items-start gap-4 min-w-0">
                <div className="flex h-12 w-14 flex-shrink-0 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 text-amber-400 shadow-clay-dark">
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-stone-400">
                    SLOT
                  </span>
                  <span className="text-xs font-black leading-tight">
                    {formatTime(apt.startTime).split(" ")[0]}
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <p className="text-base font-extrabold text-stone-900 truncate">
                      {apt.customerName}
                    </p>
                    {getStatusBadge(apt.status)}
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-stone-600 mt-1 flex-wrap">
                    <span className="flex items-center gap-1 font-bold text-stone-800">
                      <Scissors className="h-3.5 w-3.5 text-amber-600 stroke-[2.5]" />
                      {apt.serviceName} ({apt.durationMinutes}m)
                    </span>
                    <span className="text-stone-300">•</span>
                    <span className="flex items-center gap-1 text-stone-500 font-medium">
                      <User className="h-3.5 w-3.5 text-stone-400" />
                      {apt.barberName}
                    </span>
                    <span className="text-stone-300">•</span>
                    <span className="font-extrabold text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full shadow-clay-inset">
                      {formatCurrency(apt.price)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 self-end sm:self-center">
                {apt.status === "confirmed" && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-9 text-xs px-3 font-bold"
                    onClick={() => updateStatus(apt.id, "in_progress")}
                  >
                    Seat In Chair
                  </Button>
                )}
                {apt.status === "in_progress" && (
                  <Button
                    size="sm"
                    variant="success"
                    className="h-9 text-xs px-3 font-bold"
                    onClick={() => updateStatus(apt.id, "completed")}
                  >
                    <CheckCircle2 className="h-4 w-4 mr-1 stroke-[3]" />
                    Complete
                  </Button>
                )}
                <Button
                  size="sm"
                  variant="secondary"
                  className="h-9 text-xs px-3 font-bold"
                  onClick={() => setSelectedAppointment(apt)}
                >
                  Ticket Slip
                </Button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Appointment Detail Dialog */}
      <Dialog
        open={!!selectedAppointment}
        onOpenChange={(open) => !open && setSelectedAppointment(null)}
      >
        {selectedAppointment && (
          <>
            <DialogClose onClose={() => setSelectedAppointment(null)} />
            <DialogHeader>
              <div className="flex items-center gap-2 mb-1">
                <DialogTitle>Chair Slip Ref #{selectedAppointment.id}</DialogTitle>
                {getStatusBadge(selectedAppointment.status)}
              </div>
              <DialogDescription>
                Scheduled for {formatTime(selectedAppointment.startTime)} at Crown &amp; Blade Club
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 text-xs">
              <div className="rounded-2xl clay-inset-surface p-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-stone-500 uppercase font-bold text-[10px]">Customer:</span>
                  <span className="font-extrabold text-stone-900">{selectedAppointment.customerName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500 uppercase font-bold text-[10px]">Phone:</span>
                  <span className="text-stone-800 font-medium">{selectedAppointment.customerPhone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500 uppercase font-bold text-[10px]">Email:</span>
                  <span className="text-stone-800 font-medium">{selectedAppointment.customerEmail}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl clay-card">
                  <span className="text-stone-400 block mb-1 uppercase font-bold text-[10px]">Service</span>
                  <p className="font-extrabold text-stone-900 text-sm">{selectedAppointment.serviceName}</p>
                  <p className="text-amber-700 mt-0.5 font-bold">{selectedAppointment.durationMinutes} mins • {formatCurrency(selectedAppointment.price)}</p>
                </div>
                <div className="p-4 rounded-2xl clay-card">
                  <span className="text-stone-400 block mb-1 uppercase font-bold text-[10px]">Master Barber</span>
                  <p className="font-extrabold text-stone-900 text-sm">{selectedAppointment.barberName}</p>
                  <p className="text-stone-500 mt-0.5 font-medium">Chair Station 1</p>
                </div>
              </div>

              {selectedAppointment.notes && (
                <div className="p-4 rounded-2xl bg-amber-100/70 shadow-clay-inset">
                  <span className="text-amber-900 block mb-1 uppercase text-[10px] font-bold">Client Notes:</span>
                  <p className="text-stone-800 italic">{selectedAppointment.notes}</p>
                </div>
              )}
            </div>

            <DialogFooter>
              {selectedAppointment.status !== "completed" && selectedAppointment.status !== "cancelled" && (
                <Button
                  size="sm"
                  variant="destructive"
                  className="mr-auto text-xs font-bold"
                  onClick={() => updateStatus(selectedAppointment.id, "cancelled")}
                >
                  Cancel Booking
                </Button>
              )}
              <Button
                size="sm"
                variant="outline"
                className="font-bold text-xs"
                onClick={() => setSelectedAppointment(null)}
              >
                Close Ticket
              </Button>
            </DialogFooter>
          </>
        )}
      </Dialog>
    </div>
  );
}
