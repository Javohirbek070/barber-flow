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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-2xl font-extrabold tracking-tight text-stone-900">
              Services &amp; Pricing Menu
            </h1>
            <span className="text-[10px] font-bold uppercase bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 px-3 py-1 rounded-full shadow-clay-amber">
              6 Active Cuts
            </span>
          </div>
          <p className="text-xs font-medium text-stone-500 mt-1">
            Curate your menu of precision haircuts, beard sculpting, hot towel rituals, and pricing.
          </p>
        </div>

        <Button
          variant="gold"
          size="sm"
          onClick={() => setIsAddModalOpen(true)}
          className="gap-2 self-start sm:self-auto font-bold text-xs"
        >
          <Plus className="h-4 w-4 stroke-[3]" />
          <span>Add New Service</span>
        </Button>
      </div>

      {successToast && (
        <div className="flex items-center gap-3 rounded-2xl bg-emerald-100/90 text-emerald-900 p-4 text-xs font-bold shadow-clay-inset">
          <Check className="h-5 w-5 text-emerald-700 stroke-[3]" />
          <span>{successToast}</span>
        </div>
      )}

      {/* Filter toolbar */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-stone-400 stroke-[2.5]" />
          <Input
            placeholder="Search service name or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-11 text-xs"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 p-1.5 rounded-2xl bg-[#EBE5DE] shadow-clay-inset">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-3.5 py-1.5 text-xs rounded-xl font-bold transition-all whitespace-nowrap ${
                categoryFilter === cat
                  ? "bg-stone-900 text-amber-400 shadow-clay-dark"
                  : "text-stone-600 hover:text-stone-900 hover:bg-white/40"
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
            className={`rounded-3xl p-6 clay-card transition-all flex flex-col justify-between ${
              service.isActive
                ? "hover:shadow-clay-hover"
                : "opacity-60 bg-stone-100"
            }`}
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-3">
                <Badge variant="default" className="text-[10px]">
                  {service.category}
                </Badge>
                <button
                  onClick={() => toggleServiceStatus(service.id)}
                  className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-full shadow-clay-inset transition-all ${
                    service.isActive
                      ? "text-emerald-800 bg-emerald-100 hover:bg-emerald-200"
                      : "text-stone-500 bg-stone-200"
                  }`}
                >
                  {service.isActive ? "Live Menu" : "Archived"}
                </button>
              </div>

              <h3 className="text-lg font-extrabold tracking-tight text-stone-900">
                {service.name}
              </h3>

              <p className="text-xs font-medium text-stone-500 mt-2 line-clamp-2 min-h-[36px]">
                {service.description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 mt-4 border-t border-stone-200/60 text-xs font-bold">
              <span className="flex items-center gap-1.5 text-stone-700 clay-inset-surface px-3 py-1.5 rounded-xl">
                <Clock className="h-3.5 w-3.5 text-amber-600 stroke-[2.5]" />
                {service.durationMinutes} mins
              </span>
              <span className="text-base font-extrabold text-stone-950 bg-gradient-to-r from-amber-400 to-amber-500 px-3.5 py-1 rounded-full shadow-clay-amber">
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
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-stone-950 flex items-center justify-center font-bold shadow-clay-amber">
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
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
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
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
              Description &amp; Ritual Details
            </label>
            <textarea
              className="w-full rounded-2xl bg-[#EFECE6] border border-white/60 p-3.5 text-xs font-medium text-stone-800 shadow-[inset_3px_3px_7px_rgba(166,155,142,0.32),inset_-3px_-3px_7px_rgba(255,255,255,0.9)] focus:outline-none focus:ring-2 focus:ring-amber-500/50"
              rows={3}
              placeholder="Explain the consultation, cut, wash, lather, and styling..."
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                Category
              </label>
              <select
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value as Service["category"])}
                className="w-full h-11 rounded-2xl bg-[#EFECE6] border border-white/60 px-3 text-xs font-medium text-stone-800 shadow-[inset_2px_2px_5px_rgba(166,155,142,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.85)] focus:outline-none"
              >
                <option value="Haircut">Haircut</option>
                <option value="Beard">Beard</option>
                <option value="Combo">Combo</option>
                <option value="Treatment">Treatment</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
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
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
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
            <Button variant="gold" type="submit" size="sm" className="font-bold">
              Publish Service
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </div>
  );
}
