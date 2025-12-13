import type { ReactNode } from "react";
import { cn } from "@/utils/utils";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export function PageLayout({ children, className }: PageLayoutProps) {
  return <div className={cn("grid-gap", className)}>{children}</div>;
}