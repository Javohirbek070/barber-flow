import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-bold tracking-tight clay-button-press select-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#1E202B] text-white rounded-2xl shadow-clay-dark hover:bg-[#272A38] hover:shadow-lg active:scale-95",
        gold:
          "bg-gradient-to-b from-amber-400 to-amber-500 text-amber-950 rounded-2xl shadow-clay-amber hover:from-amber-300 hover:to-amber-400 hover:shadow-xl active:scale-95 border border-amber-300/60",
        secondary:
          "bg-white text-[#1E202B] rounded-2xl shadow-clay hover:bg-neutral-50 hover:shadow-clay-hover active:scale-95 border border-white",
        outline:
          "bg-white/70 backdrop-blur-sm text-[#1E202B] rounded-2xl shadow-clay-sm hover:bg-white active:scale-95 border border-white/80",
        destructive:
          "bg-gradient-to-b from-rose-500 to-rose-600 text-white rounded-2xl shadow-[0_12px_24px_-6px_rgba(244,63,94,0.45),inset_3px_3px_6px_rgba(255,255,255,0.4),inset_-3px_-3px_8px_rgba(159,18,57,0.35)] hover:from-rose-400 hover:to-rose-500 active:scale-95 border border-rose-300/40",
        success:
          "bg-gradient-to-b from-emerald-500 to-emerald-600 text-white rounded-2xl shadow-clay-mint hover:from-emerald-400 hover:to-emerald-500 active:scale-95 border border-emerald-300/40",
        ghost:
          "text-[#1E202B] rounded-2xl hover:bg-white/60 hover:shadow-clay-sm",
        link:
          "text-[#1E202B] underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-xl px-4 text-xs font-bold",
        lg: "h-14 rounded-2xl px-8 text-base font-extrabold",
        icon: "h-10 w-10 p-0 rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
