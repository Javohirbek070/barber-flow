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
          trend={{ value: "81% of Daily Target", isPositive: true }}
        />
        <MetricCard
          title="Chair Occupancy Rate"
          value={`${mockMetrics.occupancyRatePercent}%`}
          subtitle="4 master barbers active on floor"
          icon={TrendingUp}
          trend={{ value: "Peak Performance", isPositive: true }}
        />
      </div>

      {/* Main Grid: Appointments & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Upcoming Appointments */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b-2 border-[#0F0F12]">
            <div>
              <h2 className="text-lg font-black uppercase text-[#0F0F12] tracking-tight">
                Live Chair Queue &amp; Appointments
              </h2>
              <p className="text-xs font-bold text-neutral-600">
                Active booking schedule for Crown &amp; Blade Club
              </p>
            </div>
            <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-md bg-amber-400 text-black border border-black shadow-neo-sm">
              8 Appointments
            </span>
          </div>

          <UpcomingAppointmentsList initialAppointments={mockAppointments} />
        </div>

        {/* Right 1 Col: Recent Activity & Quick Stats */}
        <div className="space-y-6">
          <RecentActivitySection activities={mockActivities} />

          {/* Master Barber Roster Card */}
          <div className="rounded-2xl border-2 border-[#0F0F12] bg-white p-5 shadow-neo">
            <div className="flex items-center justify-between pb-3 border-b-2 border-[#0F0F12] mb-3">
              <div className="flex items-center gap-2">
                <Scissors className="h-4 w-4 text-amber-600 stroke-[2.5]" />
                <h3 className="text-sm font-black uppercase text-[#0F0F12]">Barbers on Duty</h3>
              </div>
              <span className="text-[10px] font-black uppercase bg-emerald-300 text-black px-2 py-0.5 rounded border border-black">
                4 Active
              </span>
            </div>
            <div className="space-y-2.5 text-xs font-bold">
              {[
                { name: "Marcus Vance", cuts: "6 cuts booked", chair: "Chair 1 (Owner)" },
                { name: "Liam Torres", cuts: "7 cuts booked", chair: "Chair 2 (Fades)" },
                { name: "David Chen", cuts: "5 cuts booked", chair: "Chair 3 (Razor)" },
                { name: "Samira Patel", cuts: "4 cuts booked", chair: "Chair 4 (Tuning)" },
              ].map((b, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 rounded-xl bg-[#FAF8F5] border border-[#0F0F12]">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 border border-black" />
                    <div>
                      <p className="font-black text-[#0F0F12]">{b.name}</p>
                      <p className="text-[9px] text-neutral-500 font-bold">{b.chair}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-white border border-black shadow-neo-sm">
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
