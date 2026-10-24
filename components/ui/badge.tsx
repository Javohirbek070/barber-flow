import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider transition-all select-none border border-white/60",
  {
    variants: {
      variant: {
        default:
          "bg-white/90 text-[#1E202B] shadow-clay-sm",
        gold:
          "bg-gradient-to-b from-amber-300 to-amber-400 text-amber-950 shadow-[0_4px_12px_rgba(245,158,11,0.25),inset_2px_2px_4px_rgba(255,255,255,0.7),inset_-2px_-2px_4px_rgba(180,83,9,0.2)]",
        success:
          "bg-gradient-to-b from-emerald-300 to-emerald-400 text-emerald-950 shadow-[0_4px_12px_rgba(16,185,129,0.25),inset_2px_2px_4px_rgba(255,255,255,0.7),inset_-2px_-2px_4px_rgba(5,150,105,0.2)]",
        outline:
          "bg-white/50 text-[#1E202B] border border-black/10 shadow-clay-sm",
        warning:
          "bg-gradient-to-b from-yellow-200 to-yellow-300 text-yellow-950 shadow-[0_4px_12px_rgba(234,179,8,0.2),inset_2px_2px_4px_rgba(255,255,255,0.8),inset_-2px_-2px_4px_rgba(161,98,7,0.2)]",
        info:
          "bg-gradient-to-b from-sky-300 to-sky-400 text-sky-950 shadow-[0_4px_12px_rgba(56,189,248,0.25),inset_2px_2px_4px_rgba(255,255,255,0.7),inset_-2px_-2px_4px_rgba(3,105,161,0.2)]",
        destructive:
          "bg-gradient-to-b from-rose-300 to-rose-400 text-rose-950 shadow-[0_4px_12px_rgba(244,63,94,0.25),inset_2px_2px_4px_rgba(255,255,255,0.7),inset_-2px_-2px_4px_rgba(159,18,57,0.2)]",
        dark:
          "bg-[#1E202B] text-white shadow-clay-dark-sm border-white/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
