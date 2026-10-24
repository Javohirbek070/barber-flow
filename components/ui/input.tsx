import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-2xl bg-[#EBE7E1] px-4 py-2 text-sm font-semibold text-[#1E202B] placeholder:text-neutral-400 border border-white/60 shadow-[inset_3px_3px_7px_rgba(166,155,142,0.32),inset_-3px_-3px_7px_rgba(255,255,255,0.9)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:bg-[#F2EEE8] disabled:cursor-not-allowed disabled:opacity-50 transition-all",
            error && "ring-2 ring-rose-500",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="mt-1 text-xs font-bold text-rose-600">{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
