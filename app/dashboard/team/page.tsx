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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b-2 border-[#0F0F12]">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-black uppercase tracking-tight text-[#0F0F12]">
              Team &amp; Barbers Roster
            </h1>
            <span className="text-[10px] font-black uppercase bg-emerald-400 text-black px-2 py-0.5 rounded border border-black shadow-neo-sm">
              4 Chairs Manned
            </span>
          </div>
          <p className="text-xs font-bold text-neutral-600 mt-1">
            Chair allocations, master credentials, daily booking load, and barber commission levels.
          </p>
        </div>

        <Button
          variant="gold"
          size="sm"
          onClick={() => setIsAddModalOpen(true)}
          className="gap-2 self-start sm:self-auto uppercase font-black text-xs shadow-neo-sm"
        >
          <Plus className="h-4 w-4 stroke-[3]" />
          <span>Add Master Barber</span>
        </Button>
      </div>

      {successToast && (
        <div className="flex items-center gap-3 rounded-2xl border-2 border-black bg-emerald-300 p-3.5 text-xs font-black uppercase text-black shadow-neo">
          <Check className="h-5 w-5 text-black stroke-[3]" />
          <span>{successToast}</span>
        </div>
      )}

      {/* Barbers Roster Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {barbers.map((barber) => (
          <div
            key={barber.id}
            className={`rounded-2xl border-2 border-[#0F0F12] p-5 bg-white shadow-neo transition-all flex flex-col justify-between ${
              barber.isActive
                ? "hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-neo-lg"
                : "opacity-60 bg-neutral-100"
            }`}
          >
            <div>
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-14 w-14 rounded-2xl bg-[#0F0F12] text-amber-400 flex items-center justify-center font-black text-lg border-2 border-[#0F0F12] shadow-neo-sm">
                    {barber.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-black uppercase tracking-tight text-[#0F0F12]">
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
                    <p className="text-xs font-bold text-amber-700 flex items-center gap-1 mt-0.5">
                      <Scissors className="h-3.5 w-3.5 stroke-[2.5]" />
                      <span>{barber.appointmentsToday} appointments scheduled today</span>
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => toggleBarberActive(barber.id)}
                  className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-lg border-2 border-black shadow-neo-sm transition-all ${
                    barber.isActive
                      ? "text-black bg-emerald-400 hover:bg-emerald-300"
                      : "text-neutral-600 bg-neutral-200"
                  }`}
                >
                  {barber.isActive ? "On Duty" : "Shift Off"}
                </button>
              </div>

              {/* Contact details */}
              <div className="mt-4 pt-3 border-t-2 border-[#0F0F12] space-y-1.5 text-xs font-bold text-neutral-800">
                <div className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-neutral-500" />
                  <span>{barber.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-neutral-500" />
                  <span>{barber.phone}</span>
                </div>
              </div>

              {/* Specialties */}
              <div className="mt-4 pt-3 border-t-2 border-[#0F0F12]">
                <span className="text-[10px] font-black uppercase tracking-wider text-neutral-500 block mb-2">
                  Master Specialties &amp; Techniques
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {barber.specialties.map((spec, i) => (
                    <span
                      key={i}
                      className="rounded-lg bg-amber-100 border border-black px-2.5 py-1 text-[11px] font-black text-[#0F0F12]"
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
            <div className="h-8 w-8 rounded-lg bg-amber-400 text-black border border-black flex items-center justify-center font-black">
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
            <label className="block text-xs font-black uppercase tracking-wider text-[#0F0F12] mb-1">
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
              <label className="block text-xs font-black uppercase tracking-wider text-[#0F0F12] mb-1">
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
              <label className="block text-xs font-black uppercase tracking-wider text-[#0F0F12] mb-1">
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
            <label className="block text-xs font-black uppercase tracking-wider text-[#0F0F12] mb-1">
              Shop Authority Level
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as "barber" | "owner")}
              className="w-full h-11 rounded-xl border-2 border-[#0F0F12] bg-white px-3 text-xs font-bold text-[#0F0F12] shadow-neo-sm focus:outline-none"
            >
              <option value="barber">Barber (Staff Station)</option>
              <option value="owner">Shop Partner / Floor Manager</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-[#0F0F12] mb-1">
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
            <Button variant="gold" type="submit" size="sm" className="uppercase font-black">
              Roster Member
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </div>
  );
}
