import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
  children: ReactNode;
};

export function Button({
  className,
  children,
  variant = "primary",
  size = "md",
  ...rest
}: ButtonProps) {
  const variantClass =
    variant === "primary"
      ? "bg-[#238636] text-white hover:bg-[#2ea043] border border-[#2ea043] shadow-sm"
      : variant === "secondary"
        ? "bg-white text-slate-900 border border-slate-200 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
        : "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300";

  const sizeClass = size === "sm" ? "px-2.5 py-1.5 text-sm" : "px-3.5 py-2 text-sm";

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors",
        sizeClass,
        variantClass,
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
