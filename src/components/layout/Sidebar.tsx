import type { ReactNode } from "react";
import { cn } from "@/utils/utils";

interface SidebarProps {
  children: ReactNode;
  className?: string;
  height?: string;
}

export function Sidebar({ children, className, height }: SidebarProps) {
  const style = height ? { height } : undefined;
  
  return (
    <section 
      className={cn("space-y-3 bg-white p-4", className)}
      style={style}
    >
      {children}
    </section>
  );
}