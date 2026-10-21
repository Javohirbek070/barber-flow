"use client";

import * as React from "react";
import { Plus, Clock, Check, Search, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { mockServices } from "@/lib/mock-data";
import { Service } from "@/types";
import { formatCurrency } from "@/lib/utils";

export default function ServicesPage() {
  const [services, setServices] = React.useState<Service[]>(mockServices);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [categoryFilter, setCategoryFilter] = React.useState<string>("all");
  const [isAddModalOpen, setIsAddModalOpen] = React.useState(false);
  const [successToast, setSuccessToast] = React.useState<string | null>(null);

  // New Service Form fields
  const [newName, setNewName] = React.useState("");
  const [newDescription, setNewDescription] = React.useState("");
  const [newDuration, setNewDuration] = React.useState(45);
  const [newPrice, setNewPrice] = React.useState(45);
  const [newCategory, setNewCategory] = React.useState<Service["category"]>("Haircut");

  const categories = ["all", "Haircut", "Beard", "Combo", "Treatment"] as const;

  const filteredServices = services.filter((srv) => {
    const matchesSearch =
      srv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || srv.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const toggleServiceStatus = (id: string) => {
    setServices((prev) =>
      prev.map((s) => (s.id === id ? { ...s, isActive: !s.isActive } : s))
    );
  };

  const handleAddService = (e: React.FormEvent) => {
    e.preventDefault();
    const created: Service = {
      id: `srv_${Date.now()}`,
      salonId: "sln_demo_019283",
      name: newName,
      description: newDescription,
      durationMinutes: Number(newDuration),
      price: Number(newPrice),
      category: newCategory,
      isActive: true,
    };

    setServices((prev) => [created, ...prev]);
    setIsAddModalOpen(false);
    setNewName("");
    setNewDescription("");
    setSuccessToast(`Service "${created.name}" created and added to price menu.`);
    setTimeout(() => setSuccessToast(null), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b-2 border-[#0F0F12]">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-black uppercase tracking-tight text-[#0F0F12]">
              Services &amp; Pricing Menu
            </h1>
            <span className="text-[10px] font-black uppercase bg-amber-400 text-black px-2 py-0.5 rounded border border-black shadow-neo-sm">
              6 Active Cuts
            </span>
          </div>
          <p className="text-xs font-bold text-neutral-600 mt-1">
            Curate your menu of precision haircuts, beard sculpting, hot towel rituals, and pricing.
          </p>
        </div>

        <Button
          variant="gold"
          size="sm"
          onClick={() => setIsAddModalOpen(true)}
          className="gap-2 self-start sm:self-auto uppercase font-black text-xs shadow-neo-sm"
        >
          <Plus className="h-4 w-4 stroke-[3]" />
          <span>Add New Service</span>
        </Button>
      </div>

      {successToast && (
        <div className="flex items-center gap-3 rounded-2xl border-2 border-black bg-emerald-300 p-3.5 text-xs font-black uppercase text-black shadow-neo">
          <Check className="h-5 w-5 text-black stroke-[3]" />
          <span>{successToast}</span>
        </div>
      )}

      {/* Filter toolbar */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-neutral-500 stroke-[2.5]" />
          <Input
            placeholder="Search service name or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-11 text-xs"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-3 py-1.5 text-xs rounded-xl font-black uppercase tracking-wider transition-all border-2 border-[#0F0F12] whitespace-nowrap ${
                categoryFilter === cat
                  ? "bg-[#0F0F12] text-amber-400 shadow-neo-sm scale-105"
                  : "bg-white text-[#0F0F12] hover:bg-neutral-100"
              }`}
            >
              {cat === "all" ? "All Categories" : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className={`rounded-2xl border-2 border-[#0F0F12] p-5 bg-white shadow-neo transition-all flex flex-col justify-between ${
              service.isActive
                ? "hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-neo-lg"
                : "opacity-60 bg-neutral-100"
            }`}
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-3">
                <Badge variant="default" className="text-[10px]">
                  {service.category}
                </Badge>
                <button
                  onClick={() => toggleServiceStatus(service.id)}
                  className={`text-[10px] font-black uppercase px-2 py-0.5 rounded border border-black shadow-neo-sm transition-all ${
                    service.isActive
                      ? "text-black bg-emerald-300 hover:bg-emerald-400"
                      : "text-neutral-500 bg-neutral-200"
                  }`}
                >
                  {service.isActive ? "Live Menu" : "Archived"}
                </button>
              </div>

              <h3 className="text-lg font-black uppercase tracking-tight text-[#0F0F12]">
                {service.name}
              </h3>

              <p className="text-xs font-medium text-neutral-600 mt-2 line-clamp-2 min-h-[36px]">
                {service.description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 mt-4 border-t-2 border-[#0F0F12] text-xs font-bold">
              <span className="flex items-center gap-1.5 text-neutral-700 bg-[#FAF8F5] px-2.5 py-1 rounded-lg border border-neutral-300">
                <Clock className="h-3.5 w-3.5 text-amber-600 stroke-[2.5]" />
                {service.durationMinutes} mins
              </span>
              <span className="text-lg font-black text-[#0F0F12] bg-amber-400 px-3 py-0.5 rounded-lg border border-black shadow-neo-sm">
                {formatCurrency(service.price)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Add Service Dialog */}
      <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
        <DialogClose onClose={() => setIsAddModalOpen(false)} />
        <DialogHeader>
          <div className="flex items-center gap-2 mb-1">
            <div className="h-8 w-8 rounded-lg bg-amber-400 text-black border border-black flex items-center justify-center font-black">
              <Scissors className="h-4 w-4" />
            </div>
            <DialogTitle>Add Menu Service</DialogTitle>
          </div>
          <DialogDescription>
            Publish a new service to Crown &amp; Blade&apos;s public client booking board.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleAddService} className="space-y-4">
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-[#0F0F12] mb-1">
              Service Name
            </label>
            <Input
              placeholder="e.g. Master Foil Fade &amp; Beard Combo"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-[#0F0F12] mb-1">
              Description &amp; Ritual Details
            </label>
            <textarea
              className="w-full rounded-xl border-2 border-[#0F0F12] p-3 text-xs font-bold text-[#0F0F12] shadow-neo-sm focus:outline-none"
              rows={3}
              placeholder="Explain the consultation, cut, wash, lather, and styling..."
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-[#0F0F12] mb-1">
                Category
              </label>
              <select
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value as Service["category"])}
                className="w-full h-11 rounded-xl border-2 border-[#0F0F12] bg-white px-2 text-xs font-bold text-[#0F0F12] shadow-neo-sm focus:outline-none"
              >
                <option value="Haircut">Haircut</option>
                <option value="Beard">Beard</option>
                <option value="Combo">Combo</option>
                <option value="Treatment">Treatment</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-[#0F0F12] mb-1">
                Duration (min)
              </label>
              <Input
                type="number"
                min="10"
                step="5"
                value={newDuration}
                onChange={(e) => setNewDuration(Number(e.target.value))}
                required
              />
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-[#0F0F12] mb-1">
                Price ($)
              </label>
              <Input
                type="number"
                min="0"
                step="5"
                value={newPrice}
                onChange={(e) => setNewPrice(Number(e.target.value))}
                required
              />
            </div>
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
              Publish Service
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </div>
  );
}
