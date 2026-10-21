import * as React from "react";
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { MockMetricIndicator } from "@/components/dashboard/mock-badge";

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: LucideIcon;
  trend?: {
    value: string;
    isPositive: boolean;
  };
}

export function MetricCard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
}: MetricCardProps) {
  return (
    <Card className="hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-neo-lg transition-all">
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-black uppercase tracking-wider text-[#0F0F12]">
              {title}
            </span>
            <MockMetricIndicator />
          </div>
          <div className="h-9 w-9 rounded-xl bg-[#0F0F12] border-2 border-[#0F0F12] flex items-center justify-center text-amber-400 shadow-neo-sm">
            <Icon className="h-4 w-4" />
          </div>
        </div>

        <div className="flex items-baseline justify-between">
          <div className="text-3xl sm:text-4xl font-black tracking-tight text-[#0F0F12]">
            {value}
          </div>
          {trend && (
            <span
              className={`text-[11px] font-black uppercase px-2 py-0.5 rounded border border-black ${
                trend.isPositive ? "bg-emerald-300 text-black" : "bg-neutral-200 text-neutral-800"
              }`}
            >
              {trend.value}
            </span>
          )}
        </div>

        <p className="mt-2 text-xs font-bold text-neutral-600">{subtitle}</p>
      </CardContent>
    </Card>
  );
}
