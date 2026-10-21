import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-lg border-2 border-[#0F0F12] px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wider transition-colors shadow-neo-sm",
  {
    variants: {
      variant: {
        default:
          "bg-[#FAF8F5] text-[#0F0F12]",
        gold:
          "bg-[#F59E0B] text-[#0F0F12]",
        success:
          "bg-[#4ADE80] text-[#0F0F12]",
        outline:
          "bg-white text-[#0F0F12]",
        warning:
          "bg-[#FDE047] text-[#0F0F12]",
        info:
          "bg-[#60A5FA] text-[#0F0F12]",
        destructive:
          "bg-[#F87171] text-[#0F0F12]",
        dark:
          "bg-[#0F0F12] text-white border-white/40",
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
