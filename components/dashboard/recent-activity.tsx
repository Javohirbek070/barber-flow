import * as React from "react";
import { ActivityItem } from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle2, UserCheck, CalendarPlus, XCircle } from "lucide-react";

function getActivityIcon(type: ActivityItem["type"]) {
  switch (type) {
    case "booking_completed":
      return <CheckCircle2 className="h-4 w-4 text-emerald-600 stroke-[2.5]" />;
    case "client_arrived":
      return <UserCheck className="h-4 w-4 text-blue-600 stroke-[2.5]" />;
    case "booking_created":
      return <CalendarPlus className="h-4 w-4 text-amber-600 stroke-[2.5]" />;
    case "booking_cancelled":
      return <XCircle className="h-4 w-4 text-red-600 stroke-[2.5]" />;
    default:
      return <CheckCircle2 className="h-4 w-4 text-stone-500" />;
  }
}

export function RecentActivitySection({
  activities,
}: {
  activities: ActivityItem[];
}) {
  return (
    <Card className="hover:shadow-clay-hover transition-all duration-200">
      <CardHeader className="pb-4 border-b border-stone-200/60">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-bold uppercase tracking-wider text-stone-800">
            Live Shop Activity Feed
          </CardTitle>
          <span className="text-[10px] font-bold uppercase bg-stone-900 text-amber-400 px-2.5 py-1 rounded-full shadow-clay-dark">
            REAL-TIME
          </span>
        </div>
      </CardHeader>
      <CardContent className="pt-5">
        <div className="space-y-4">
          {activities.map((item) => (
            <div key={item.id} className="flex items-start gap-3.5 text-xs">
              <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-2xl bg-white/90 border border-white/80 shadow-clay-sm">
                {getActivityIcon(item.type)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-stone-900 leading-snug font-bold">
                  {item.message}
                </p>
                <div className="flex items-center gap-2 mt-1 text-stone-400 text-[10px] font-medium">
                  <span className="text-amber-700 font-bold">{item.timestamp}</span>
                  <span>•</span>
                  <span>{item.actor}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
