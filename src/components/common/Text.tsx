import type { ReactNode } from "react";
import { cn } from "@/utils/utils";

interface TextProps {
  children: ReactNode;
  variant?: "body" | "muted" | "error" | "warning";
  size?: "xs" | "sm" | "base" | "lg";
  className?: string;
}

export function Text({ children, variant = "body", size = "base", className }: TextProps) {
  const variantClasses = {
    body: "text-slate-900 dark:text-slate-50",
    muted: "text-slate-500 dark:text-slate-400",
    error: "text-red-600 dark:text-red-400",
    warning: "text-amber-600 dark:text-amber-400",
  };

  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
  };

  return (
    <p className={cn(variantClasses[variant], sizeClasses[size], className)}>
      {children}
    </p>
  );
}