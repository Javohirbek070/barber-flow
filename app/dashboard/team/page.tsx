"use client";

import * as React from "react";
import { Plus, Phone, Mail, Check, ShieldCheck, Scissors, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { mockBarbers } from "@/lib/mock-data";
import { Barber } from "@/types";

export default function TeamPage() {
  const [barbers, setBarbers] = React.useState<Barber[]>(mockBarbers);
  const [isAddModalOpen, setIsAddModalOpen] = React.useState(false);
  const [successToast, setSuccessToast] = React.useState<string | null>(null);

  // New Barber Form state
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [specialties, setSpecialties] = React.useState("");
  const [role, setRole] = React.useState<"barber" | "owner">("barber");

  const handleAddBarber = (e: React.FormEvent) => {
    e.preventDefault();
    const created: Barber = {
      id: `barb_${Date.now()}`,
      salonId: "sln_demo_019283",
      name,
      email,
      phone,
      role,
      specialties: specialties
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      isActive: true,
      colorTag: "#262626",
      appointmentsToday: 0,
    };

    setBarbers((prev) => [...prev, created]);
    setIsAddModalOpen(false);
    setName("");
    setEmail("");
    setPhone("");
    setSpecialties("");
    setSuccessToast(`Added master barber ${created.name} to shop roster.`);
    setTimeout(() => setSuccessToast(null), 3000);
  };

  const toggleBarberActive = (id: string) => {
    setBarbers((prev) =>
      prev.map((b) => (b.id === id ? { ...b, isActive: !b.isActive } : b))
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-2xl font-extrabold tracking-tight text-stone-900">
              Team &amp; Barbers Roster
            </h1>
            <span className="text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full shadow-clay-inset">
              4 Chairs Manned
            </span>
          </div>
          <p className="text-xs font-medium text-stone-500 mt-1">
            Chair allocations, master credentials, daily booking load, and barber commission levels.
          </p>
        </div>

        <Button
          variant="gold"
          size="sm"
          onClick={() => setIsAddModalOpen(true)}
          className="gap-2 self-start sm:self-auto font-bold text-xs"
        >
          <Plus className="h-4 w-4 stroke-[3]" />
          <span>Add Master Barber</span>
        </Button>
      </div>

      {successToast && (
        <div className="flex items-center gap-3 rounded-2xl bg-emerald-100/90 text-emerald-900 p-4 text-xs font-bold shadow-clay-inset">
          <Check className="h-5 w-5 text-emerald-700 stroke-[3]" />
          <span>{successToast}</span>
        </div>
      )}

      {/* Barbers Roster Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {barbers.map((barber) => (
          <div
            key={barber.id}
            className={`rounded-3xl p-6 clay-card transition-all flex flex-col justify-between ${
              barber.isActive
                ? "hover:shadow-clay-hover"
                : "opacity-60 bg-stone-100"
            }`}
          >
            <div>
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 text-amber-400 flex items-center justify-center font-extrabold text-lg shadow-clay-dark">
                    {barber.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-extrabold tracking-tight text-stone-900">
                        {barber.name}
                      </h3>
                      {barber.role === "owner" ? (
                        <Badge variant="gold" className="text-[10px] gap-1">
                          <ShieldCheck className="h-3 w-3" />
                          Owner
                        </Badge>
                      ) : (
                        <Badge variant="default" className="text-[10px]">
                          Master Barber
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs font-medium text-amber-700 flex items-center gap-1 mt-0.5">
                      <Scissors className="h-3.5 w-3.5 stroke-[2.5]" />
                      <span>{barber.appointmentsToday} appointments scheduled today</span>
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => toggleBarberActive(barber.id)}
                  className={`text-[10px] font-bold uppercase px-3 py-1 rounded-full shadow-clay-inset transition-all ${
                    barber.isActive
                      ? "text-emerald-800 bg-emerald-100 hover:bg-emerald-200"
                      : "text-stone-500 bg-stone-200"
                  }`}
                >
                  {barber.isActive ? "On Duty" : "Shift Off"}
                </button>
              </div>

              {/* Contact details */}
              <div className="mt-4 pt-4 border-t border-stone-200/60 space-y-2 text-xs font-medium text-stone-600">
                <div className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-stone-400" />
                  <span>{barber.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-stone-400" />
                  <span>{barber.phone}</span>
                </div>
              </div>

              {/* Specialties */}
              <div className="mt-4 pt-3 border-t border-stone-200/60">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-2">
                  Master Specialties &amp; Techniques
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {barber.specialties.map((spec, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-amber-100/80 text-amber-900 px-3 py-1 text-[11px] font-bold shadow-clay-inset"
                    >
                      ★ {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Barber Dialog */}
      <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
        <DialogClose onClose={() => setIsAddModalOpen(false)} />
        <DialogHeader>
          <div className="flex items-center gap-2 mb-1">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-stone-950 flex items-center justify-center font-bold shadow-clay-amber">
              <Star className="h-4 w-4" />
            </div>
            <DialogTitle>Add Master Barber</DialogTitle>
          </div>
          <DialogDescription>
            Onboard a new barber with chair allocation and appointment booking access.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleAddBarber} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
              Full Name
            </label>
            <Input
              placeholder="e.g. Jordan Mitchell"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                Barber Email
              </label>
              <Input
                type="email"
                placeholder="jordan@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                Direct Phone
              </label>
              <Input
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
              Shop Authority Level
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as "barber" | "owner")}
              className="w-full h-11 rounded-2xl bg-[#EFECE6] border border-white/60 px-3 text-xs font-medium text-stone-800 shadow-[inset_2px_2px_5px_rgba(166,155,142,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.85)] focus:outline-none"
            >
              <option value="barber">Barber (Staff Station)</option>
              <option value="owner">Shop Partner / Floor Manager</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
              Specialties (Comma Separated)
            </label>
            <Input
              placeholder="Fades, Scissor Work, Hot Shave"
              value={specialties}
              onChange={(e) => setSpecialties(e.target.value)}
              required
            />
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setIsAddModalOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="gold" type="submit" size="sm" className="font-bold">
              Roster Member
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </div>
  );
}
