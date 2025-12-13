import type { ReactNode } from "react";
import { cn } from "@/utils/utils";

interface MainContentProps {
  children: ReactNode;
  className?: string;
}

export function MainContent({ children, className }: MainContentProps) {
  return <section className={cn("space-y-4", className)}>{children}</section>;
}