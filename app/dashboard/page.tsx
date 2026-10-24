import { CalendarDays, CheckCircle2, DollarSign, TrendingUp, Scissors } from "lucide-react";
import { MetricCard } from "@/components/dashboard/metrics-card";
import { UpcomingAppointmentsList } from "@/components/dashboard/upcoming-appointments";
import { RecentActivitySection } from "@/components/dashboard/recent-activity";
import {
  mockMetrics,
  mockAppointments,
  mockActivities,
} from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";

export default function DashboardOverviewPage() {
  return (
    <div className="space-y-6">
      {/* Top Banner / Metrics row */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Today's Chair Queue"
          value={mockMetrics.todayBookingsCount}
          subtitle="8 active slots locked for today"
          icon={CalendarDays}
          trend={{ value: "+12% Chair Velocity", isPositive: true }}
        />
        <MetricCard
          title="Finished Grooming"
          value={mockMetrics.todayCompletedCount}
          subtitle="2 finished, 1 in master chair"
          icon={CheckCircle2}
          trend={{ value: "On Schedule", isPositive: true }}
        />
        <MetricCard
          title="Daily Gross Forecast"
          value={formatCurrency(mockMetrics.todayRevenue)}
          subtitle="Target: $420 daily volume"
          icon={DollarSign}
          trend={{ value: "81% of Target", isPositive: true }}
        />
        <MetricCard
          title="Chair Occupancy Rate"
          value={`${mockMetrics.occupancyRatePercent}%`}
          subtitle="4 master barbers active on floor"
          icon={TrendingUp}
          trend={{ value: "Peak Velocity", isPositive: true }}
        />
      </div>

      {/* Main Grid: Appointments & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Upcoming Appointments */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between pb-1">
            <div>
              <h2 className="text-xl font-extrabold text-stone-900 tracking-tight">
                Live Chair Queue &amp; Appointments
              </h2>
              <p className="text-xs font-medium text-stone-500">
                Active booking schedule for Crown &amp; Blade Club
              </p>
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 shadow-clay-amber">
              8 Appointments
            </span>
          </div>

          <UpcomingAppointmentsList initialAppointments={mockAppointments} />
        </div>

        {/* Right 1 Col: Recent Activity & Quick Stats */}
        <div className="space-y-6">
          <RecentActivitySection activities={mockActivities} />

          {/* Master Barber Roster Card */}
          <div className="rounded-3xl clay-card p-6 space-y-4">
            <div className="flex items-center justify-between pb-3.5 border-b border-stone-200/60">
              <div className="flex items-center gap-2">
                <Scissors className="h-4 w-4 text-amber-600 stroke-[2.5]" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-stone-800">Barbers on Duty</h3>
              </div>
              <span className="text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full shadow-clay-inset">
                4 Active
              </span>
            </div>
            <div className="space-y-2.5 text-xs">
              {[
                { name: "Marcus Vance", cuts: "6 cuts booked", chair: "Chair 1 (Owner)" },
                { name: "Liam Torres", cuts: "7 cuts booked", chair: "Chair 2 (Fades)" },
                { name: "David Chen", cuts: "5 cuts booked", chair: "Chair 3 (Razor)" },
                { name: "Samira Patel", cuts: "4 cuts booked", chair: "Chair 4 (Tuning)" },
              ].map((b, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-2xl clay-inset-surface">
                  <div className="flex items-center gap-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]" />
                    <div>
                      <p className="font-extrabold text-stone-900">{b.name}</p>
                      <p className="text-[10px] text-stone-500 font-medium">{b.chair}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/90 text-stone-800 shadow-clay-sm">
                    {b.cuts}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
