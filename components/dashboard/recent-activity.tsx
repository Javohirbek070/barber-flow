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
      return <CheckCircle2 className="h-4 w-4 text-neutral-500" />;
  }
}

export function RecentActivitySection({
  activities,
}: {
  activities: ActivityItem[];
}) {
  return (
    <Card className="hover:shadow-neo-lg transition-all">
      <CardHeader className="pb-3 border-b-2 border-[#0F0F12]">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-black uppercase tracking-wider text-[#0F0F12]">
            Live Shop Activity Feed
          </CardTitle>
          <span className="text-[10px] font-black uppercase bg-[#0F0F12] text-amber-400 px-2 py-0.5 rounded shadow-neo-sm">
            REAL-TIME
          </span>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-3.5">
          {activities.map((item) => (
            <div key={item.id} className="flex items-start gap-3 text-xs">
              <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-white border-2 border-[#0F0F12] shadow-neo-sm">
                {getActivityIcon(item.type)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-neutral-900 leading-snug font-extrabold">
                  {item.message}
                </p>
                <div className="flex items-center gap-2 mt-1 text-neutral-500 text-[10px] font-bold">
                  <span className="text-amber-700">{item.timestamp}</span>
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
