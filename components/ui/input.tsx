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
            "flex h-11 w-full rounded-xl border-2 border-[#0F0F12] bg-white px-3.5 py-2 text-sm font-semibold text-[#0F0F12] placeholder:text-neutral-400 shadow-neo-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:border-[#0F0F12] disabled:cursor-not-allowed disabled:opacity-50 transition-all",
            error && "border-red-600 focus-visible:ring-red-500",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="mt-1 text-xs font-bold text-red-600">{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
