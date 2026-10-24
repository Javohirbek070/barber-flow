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
    <Card className="hover:shadow-clay-hover transition-all duration-200">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
              {title}
            </span>
            <MockMetricIndicator />
          </div>
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-stone-950 flex items-center justify-center shadow-clay-amber">
            <Icon className="h-5 w-5 stroke-[2.5]" />
          </div>
        </div>

        <div className="flex items-baseline justify-between gap-2">
          <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900">
            {value}
          </div>
          {trend && (
            <span
              className={`text-[11px] font-bold px-2.5 py-1 rounded-full shadow-clay-inset ${
                trend.isPositive
                  ? "bg-emerald-100/80 text-emerald-800 shadow-[inset_1px_1px_3px_rgba(16,185,129,0.3)]"
                  : "bg-stone-200/70 text-stone-700"
              }`}
            >
              {trend.value}
            </span>
          )}
        </div>

        <p className="mt-2 text-xs font-medium text-stone-500">{subtitle}</p>
      </CardContent>
    </Card>
  );
}
